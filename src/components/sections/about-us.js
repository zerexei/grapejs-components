let opt = {
  label: 'About Us',
  name: 'about-us-component',
  category: 'Components',
};

const componentType = {
  a: `
  <div class="${opt.name} max-w-screen-lg mx-auto p-2">

    <h2 class="text-center">lorem ipsum it dolor</h2>

    <span class="block bg-primary my-6 mx-auto mb-12" style="height: 1px; width: 5rem">
    </span>

    <div class="flex justify-between mt-6">
        <div>
            <span class="block border border-primary mb-12" style="width: 140px; height: 140px"></span>
            <p class="text-5xl text-center">000</p>
            <span class="block bg-primary my-6 mx-auto" style="height: 1px; width: 2.5rem"></span>
            <p class="text-xs">Lorem ipsum dolor sit amet</p>
        </div>

        <div>
            <span class="block border border-primary mb-12" style="width: 140px; height: 140px"></span>
            <p class="text-5xl text-center">000</p>
            <span class="block bg-primary my-6 mx-auto" style="height: 1px; width: 2.5rem"></span>
            <p class="text-xs">Lorem ipsum dolor sit amet</p>
        </div>

        <div>
            <span class="block border border-primary mb-12" style="width: 140px; height: 140px"></span>
            <p class="text-5xl text-center">000</p>
            <span class="block bg-primary my-6 mx-auto" style="height: 1px; width: 2.5rem"></span>
            <p class="text-xs">Lorem ipsum dolor sit amet</p>
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
