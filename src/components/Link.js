const name = 'Link';
const target = (el) => el?.tagName === 'A';

export const LinkBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Basic',
    content: {
      type: 'link',
      content: `
      <a href="#" target="false">Link</a>
      `,
    }
  });
};

export default (domc) => {
  const textType = domc.getType('link');

  domc.addType(name, {
    isComponent: target,
    extend: textType,
    model: {
      defaults: {
        'custom-name': 'Link',
        name,
        traits: [
            'href',
            {
            label: 'Target',
            type: 'select',
            name: 'target',
            options: [
              { value: 'false', name: 'This Window' },
              { value: '_blank', name: 'New Window' },
            ],
          },
        ]
      },
    },
  });
};
