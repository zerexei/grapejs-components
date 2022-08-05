let opt = {
  label: 'Our Clients',
  name: 'our-clients-component',
  category: 'Sections',
};

const componentType = {
  a: `
  <div ${opt.name} id="testimonial-carousel" class="section text-center bg-gray-600" type="a">
    <div class="section__content max-w-screen-lg mx-auto">
        <div class="border mx-auto" style="width: 88px; height: 88px"></div>
        <p class="my-12 mx-auto text-white" style="width: 908px">
            “Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Non eu id diam ut maecenas. Ornare diam sit mauris
            id neque pharetra, odio ornare. Varius aliquet tempus,
            ultrices ipsum in volutpat blandit congue felis. Quisque
            vitae aliquam nunc risus massa velit vestibulum,
            egestas.”
        </p>
        <h3 class="text-white" style="font-size: 14px">
            JOHN SMITH DOE
        </h3>
        <h4 class="text-white" style="font-size: 11px">
            CEO OF COMPANY NAME
        </h4>
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
