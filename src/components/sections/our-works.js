let opt = {
  label: 'Our Works',
  name: 'our-works-component',
  category: 'Sections',
};

const componentType = {
  a: `
<div id="products-and-services" class="${opt.name} section">
    <h2 class="title uppercase">our works</h2>
    <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Placerat massa in fermentum aenean tincidunt amet neque,
        pharetra, integer. Duis urna, tempor risus at.
    </p>

    <div class="section__content flex">
        <div class="border" style="width: 512px; height: 341px"></div>
        <div class="border" style="width: 512px; height: 341px"></div>
        <div class="border" style="width: 512px; height: 341px"></div>
        <div class="border" style="width: 512px; height: 341px"></div>
    </div>

    <div class="flex justify-center items-center bg-gray-200 py-6">
        <h3 class="text-2xl font-bold uppercase mr-32">
            lorem ipsum it dolor
        </h3>
        <a href="#" class="btn bg-primary text-white">view all services</a>
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
