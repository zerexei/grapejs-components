let opt = {
  label: 'Button',
  name: 'button-component',
  category: 'Basic',
};

const componentType = {
  a: `<button class="${opt.name}" type="button" style="padding: .5rem 1.5rem">Button</button>`,
};

export default (editor, config) => {
  const bm = editor.BlockManager;
  const domc = editor.DomComponents;

  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: componentType.a,
  });

  domc.addType(opt.name, {
    model: {
      defaults: {
        name: opt.name,
        traits: [
          {
            type: 'select',
            label: 'Type',
            options: [
              { value: 'submit', name: 'submit' },
              { value: 'button', name: 'button' },
            ],
          },
          {
            type: 'select', // Type of the trait
            label: 'Style', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { value: 'a', name: 'Style 1' },
              { value: 'b', name: 'Style 2' },
              { value: 'C', name: 'Style 3' },
              { value: 'D', name: 'Style 4' },
              { value: 'E', name: 'Style 5' },
              { value: 'F', name: 'Style 6' },
              { value: 'G', name: 'Style 7' },
              { value: 'H', name: 'Style 8' },
            ],
          },
        ],
      },
      updated(property, value, previous) {
        if (value?.type && value.type in componentType) {
          this.replaceWith(componentType[value.type]);
          editor.select(null);
        }
      },
    },
    isComponent: (el) => {
      return el?.classList?.contains(`${opt.name}`)
        ? { type: opt.name }
        : false;
    },
  });
};
