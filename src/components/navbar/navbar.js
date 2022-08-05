let opt = {
  label: 'Navbar',
  name: 'navbar-component',
  category: 'Navbar Components',
};

const componentType = {
  a: `
<div class="${opt.name} flex justify-between mb-6">
    <div class="flex">
        <p class="font-bold text-sm py-2 px-4 border-b-2 border-primary">CAT 1</p>

        <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 2</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>

            <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 3</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>

            <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 4</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>

            <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 5</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>
    </div>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
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
