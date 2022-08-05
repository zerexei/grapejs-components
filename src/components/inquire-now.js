let opt = {
  label: 'Inquire Now',
  name: 'inquire-now-component',
  category: 'Components',
};

const componentType = {
  a: `
    <div class="${opt.name} flex justify-between items-center max-w-screen-lg mx-auto p-2">
        <div data-gjs-locked="true" class="flex">
            <span class="inline bg-gray-200 mr-5" style="width: 88px; height: 88px"></span>
            <div style="width: 36rem">
                <h2>LOREM IPSUM IT DOLOR</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Placerat massa in fermentum
                    aenean tincidunt amet neque, pharetra, integer.
                    Duis urna, tempor risus at.
                </p>
            </div>
        </div>
        <a href="#" class="btn uppercase bg-primary text-white">
            inquire now
        </a>
    </div>
`,
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
            type: 'select', // Type of the trait
            label: 'Style', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { value: 'a', name: 'Style 1' },
              { value: 'b', name: 'Style 2' },
              { value: 'c', name: 'Style 3' },
              { value: 'd', name: 'Style 4' },
              { value: 'e', name: 'Style 5' },
              { value: 'f', name: 'Style 6' },
              { value: 'g', name: 'Style 7' },
              { value: 'h', name: 'Style 8' },
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
