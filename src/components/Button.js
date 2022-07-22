const name = 'Button';
const target = (el) => el?.tagName === 'BUTTON' ? {type: name} : false;;

export const ButtonBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Blocks',
    content: `
      <button type="button" style="padding: .5rem 1.5rem">Button</button>
    `,
  });
};

export default (domc) => {
  const textType = domc.getType('default');

  domc.addType(name, {
    isComponent: target,
    extend: textType,
    model: {
      defaults: {
        'custom-name': 'Button',
        droppable: false,
        traits: [
          {
            label: 'Type',
            type: 'select',
            name: 'type',
            options: [
              { value: 'submit', name: 'Submit' },
              { value: 'reset', name: 'Reset' },
              { value: 'button', name: 'Button' },
            ],
          },
        ],
      },
    },
  });
};
