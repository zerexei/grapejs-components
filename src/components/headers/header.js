let opt = {
  label: 'Header',
  name: 'header-component',
  category: 'Sections',
};

const componentType = {
  a: `
  <div class="${opt.name} header-type--a flex items-center gap-12 mb-6">
    <div>
        <img src="https://purplebug.net/img/purplebug-logo.svg" alt="purple bug inc logo" style="height: 43px" />
    </div>
    <div class="flex-1 bg-gray-400 h-16"></div>
</div>
  `,
  b: `
<header class="${opt.name}" type="b">
    <div class="h-20 max-w-screen-lg mx-auto flex justify-between items-center">
        <div>
            <img src="https://purplebug.net/img/purplebug-logo.svg" alt="purple bug inc logo" style="height: 43px" />
        </div>

        <div class="flex gap-5 uppercase font-bold" style="font-size: 14px">
            <a href="#">about us</a>
            <a href="#">products/services</a>
            <a href="#">our works</a>
            <a href="#">contact us</a>
        </div>
    </div>
</header>
`
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
            label: 'Style',
            name: 'type',
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
