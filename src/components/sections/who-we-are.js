let opt = {
  label: 'Who We Are',
  name: 'who-we-are-component',
  category: 'Sections',
};

const componentType = {
  a: `
<div class="${opt.name} section">
    <h2 class="title uppercase">who we are</h2>
    <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Placerat massa in fermentum aenean tincidunt amet neque,
        pharetra, integer. Duis urna, tempor risus at.
    </p>

    <div class="section__content max-w-screen-lg mx-auto flex">
        <div class="flex-1 border mr-6" style="width: 484px; height: 484px"></div>
        <div class="flex-1 flex flex-col justify-center gap-12">
            <div class="flex">
                <span class="border mr-4" style="width: 88px; height: 88px"></span>
                <div class="flex-1">
                    <h4 class="text-xl font-bold mb-4">
                        lorem ipsum it dolor
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Convallis interdum proin at
                        volutpat mattis nulla .
                    </p>
                </div>
        </div>
        <div class="flex">
                <span class="border mr-4" style="width: 88px; height: 88px"></span>
                <div class="flex-1">
                    <h4 class="text-xl font-bold mb-4">
                        lorem ipsum it dolor
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Convallis interdum proin at
                        volutpat mattis nulla .
                    </p>
                </div>
        </div>
        <div class="flex">
                <span class="border mr-4" style="width: 88px; height: 88px"></span>
                <div class="flex-1">
                    <h4 class="text-xl font-bold mb-4">
                        lorem ipsum it dolor
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Convallis interdum proin at
                        volutpat mattis nulla .
                    </p>
                </div>
        </div>
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
