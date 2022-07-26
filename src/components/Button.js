let opt = {
  label: 'Button',
  name: 'customButton',
  category: 'Blocks',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

export const ButtonBlock = (bm) => {
  bm.add(opt.name, {
    label: `
            <div>${opt.label}</div>
        `,
    category: 'Blocks',
    content: `
      <button data-gjs-type="${opt.name}" type="button" style="padding: .5rem 1.5rem">Button</button>
    `,
  });
};

export default (domc) => {
  domc.addType(opt.name, {
    isComponent: opt.target,
    model: {
      defaults: {
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
