let opt = {
  label: 'Products & Services',
  name: 'products-services-component',
  category: 'Sections',
};

const componentType = {
  a: `
<div id="products-and-services" class="${opt.name} section bg-gray-100" type="a">
    <h2 class="title uppercase">products and services</h2>
    <p class="info mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Placerat massa in fermentum aenean tincidunt amet neque,
        pharetra, integer. Duis urna, tempor risus at.
    </p>

    <div class="section__content max-w-screen-lg mx-auto flex">
        <div class="card bg-white" style="width: 390px">
            <div class="card__header mb-2">
                <img src="https://picsum.photos/id/1005/200" alt="card image" style="height: 260px; width: 390px" />
            </div>
            <div class="card__body">
                <h3 class="card__body__title uppercase font-bold">
                    lorem ipsum dolor
                </h3>
                <p class="card__body__info">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Convallis interdum proin at
                    volutpat mattis nulla .
                </p>
            </div>
    </div>
    <div class="card bg-white" style="width: 390px">
            <div class="card__header mb-2">
                <img src="https://picsum.photos/id/1005/200" alt="card image" style="height: 260px; width: 390px" />
            </div>
            <div class="card__body">
                <h3 class="card__body__title uppercase font-bold">
                    lorem ipsum dolor
                </h3>
                <p class="card__body__info">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Convallis interdum proin at
                    volutpat mattis nulla .
                </p>
            </div>
    </div>
    <div class="card bg-white" style="width: 390px">
            <div class="card__header mb-2">
                <img src="https://picsum.photos/id/1005/200" alt="card image" style="height: 260px; width: 390px" />
            </div>
            <div class="card__body">
                <h3 class="card__body__title uppercase font-bold">
                    lorem ipsum dolor
                </h3>
                <p class="card__body__info">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Convallis interdum proin at
                    volutpat mattis nulla .
                </p>
            </div>
    </div>
    
</div>

<div class="text-center mt-12">
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
