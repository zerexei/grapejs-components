let opt = {
  label: 'Generic Us',
  name: 'generic-us-component',
  category: 'Components',
};

const componentType = {
a: `
<div id="why-us" class="section">
    <h2 class="title uppercase">why us</h2>
    <p class="info mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Placerat massa in fermentum aenean tincidunt amet neque,
        pharetra, integer. Duis urna, tempor risus at.
    </p>
    <div class="section__content max-w-screen-lg mx-auto flex justify-center gap-5 mb-6">
        <div class="text-center">
            <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
            <h3 class="title mb-4">LOREM IPSUM IT DOLOR</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Placerat massa in fermentum aenean tincidunt
                amet neque,
            </p>
    </div>
    <div class="text-center">
            <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
            <h3 class="title mb-4">LOREM IPSUM IT DOLOR</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Placerat massa in fermentum aenean tincidunt
                amet neque,
            </p>
    </div>
    <div class="text-center">
            <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
            <h3 class="title mb-4">LOREM IPSUM IT DOLOR</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Placerat massa in fermentum aenean tincidunt
                amet neque,
            </p>
    </div>
</div>
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
