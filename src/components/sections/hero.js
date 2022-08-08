let opt = {
  label: 'Hero',
  name: 'hero-component',
  category: 'Sections',
};

const componentType = {
  a: `
    <div class="${opt.name} section p-2" style="padding-top: 0">
    <!-- HERO SECTION -->
    <div style="height: 600px">
        <div class="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
            <div class="bg-gray-200 pb-2" style="width: 459px">
                <div class="hero__card__header py-2 px-5 border-b border-primary">
                    <h2 class="text-3xl uppercase">
                        Lorem ipsum dolor sit ametconsectetur
                    </h2>
                </div>
                <div class="hero__card__header py-4 px-5">
                    <p class="mb-4 text-base">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat massa in fermentum
                        aenean tincidunt amet neque, pharetra,
                        integer. Duis urna, tempor risus at.
                    </p>
                    <a href="#" class="border border-black btn" style="font-size: 12px">
                        See More
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`,
b: `
<div class="${opt.name} banner-3">
        <div class="banner-3__inner max-w-screen-lg mx-auto">
            <h2 class="mb-2 text-2xl font-bold">CATEGORY</h2>
            <div class="flex gap-2 mb-4">
                <span class="sub-cat">Sub-cat</span>
                <span class="sub-cat">Sub-cat</span>
                <span class="sub-cat">Sub-cat</span>
                <span class="sub-cat">Sub-cat</span>
            </div>
            <p style="width: 487px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dui nullam et venenatis ac, eu bibendum lorem odio.
                Nulla risus adipiscing adipiscing augue quis ac metus in
            </p>
        </div>
    </div>

    <style>
        .banner-3 {
            width: 100%;
            height: 617px;
            background-color: #D9D9D9;
        }

        .banner-3 .banner-3__inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
    </style>
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
