let opt = {
  label: 'Our Clients',
  name: 'our-clients-component',
  category: 'Sections',
};

const componentType = {
  a: `
  <!-- CLIENTS -->
<div id="clients-carousel" class="${opt.name} section">
    <h2 class="title uppercase">our clients</h2>

    <div class="section__content max-w-screen-lg mx-auto flex justify-center gap-5 mb-6">
        <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
        <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
        <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
        <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
        <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
        <div class="border mx-auto mb-6" style="width: 140px; height: 140px"></div>
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
