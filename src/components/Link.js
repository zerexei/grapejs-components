const name = 'Link';
const target = (el) => (el?.tagName === 'A' ? { type: name } : false);

export const LinkBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Blocks',
    content: `
      <a href="#" target="false">Link</a>
    `,
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
