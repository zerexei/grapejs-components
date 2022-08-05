let opt = {
  label: 'Section',
  name: 'generic-section-component',
  category: 'Sections',
};

const componentType = {
  a: `
  <div class="${opt.name} max-w-screen-lg mx-auto p-2" type="a">

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
  b: `
<div class="${opt.name} section bg-gray-100 p-2" type="b">
    <div class="section__content max-w-screen-lg mx-auto flex justify-center gap-5 mb-6">
        <div class="border" style="width: 180px; height: 137px"></div>
        <div class="border" style="width: 180px; height: 137px"></div>
        <div class="border" style="width: 180px; height: 137px"></div>
    </div>
    <h2 class="title uppercase">lorem ipsum it dolor</h2>
    <p class="info mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Placerat massa in fermentum aenean tincidunt amet neque,
        pharetra, integer. Duis urna, tempor risus at.
    </p>
</div>
`,
c: `
<div class="${opt.name} section bg-primary" type="c">
    <div class="section__content max-w-screen-lg mx-auto flex justify-between">
        <div class="flex items-center" style="width:300px">
            <div class="border mr-6" style="width: 88px; height: 88px"></div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-base">Contact</h3>
                <p class="text-white">+123 4567 7896</p>
            </div>
        </div>

        <div class="flex items-center" style="width:300px">
            <div class="border mr-6" style="width: 88px; height: 88px"></div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-base">Address</h3>
                <p class="text-white">Unit 1 Building Name, Village City, Philippines</p>
            </div>
        </div>

        <div class="flex items-center" style="width:300px">
            <div class="border mr-6" style="width: 88px; height: 88px"></div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-base">Email</h3>
                <p class="text-white">youremail@companyname.com</p>
            </div>
        </div>
    </div>
</div>`
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
