let opt = {
  label: 'Footer',
  name: 'footer-component',
  category: 'Sections',
};

const componentType = {
  a: `
<div class="${opt.name} footer--b mb-12 p-6 bg-gray-700 p-2" type="a">
    <div class="footer--b__wrapper max-w-screen-lg mx-auto">
        <div>
            <h2 class="mb-4 text-white">EDITOR PICKS</h2>
            <div class="flex flex-col gap-6">
                <div class="flex">
                    <span class="border border-black mr-4" style="width: 97px; height: 68px"></span>
                    <div class="flex-1">
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                        </p>
                        <p class="text-white">July 1, 1999</p>
                    </div>
                </div>
                <div class="flex">
                    <span class="border border-black mr-4" style="width: 97px; height: 68px"></span>
                    <div class="flex-1">
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                        </p>
                        <p class="text-white">July 1, 1999</p>
                    </div>
                </div>
                <div class="flex">
                    <span class="border border-black mr-4" style="width: 97px; height: 68px"></span>
                    <div class="flex-1">
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                        </p>
                        <p class="text-white">July 1, 1999</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 class="mb-4 text-white">POPULAR POSTS</h2>
            <div class="flex flex-col gap-6">
                <div class="flex">
                    <span class="border border-black mr-4" style="width: 97px; height: 68px"></span>
                    <div class="flex-1">
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                        </p>
                        <p class="text-white">July 1, 1999</p>
                    </div>
                </div>
                <div class="flex">
                    <span class="border border-black mr-4" style="width: 97px; height: 68px"></span>
                    <div class="flex-1">
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                        </p>
                        <p class="text-white">July 1, 1999</p>
                    </div>
                </div>
                <div class="flex">
                    <span class="border border-black mr-4" style="width: 97px; height: 68px"></span>
                    <div class="flex-1">
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                        </p>
                        <p class="text-white">July 1, 1999</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 class="mb-4 text-white">EDITOR PICKS</h2>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                    <span class="text-white">SUB-CAT 1</span>
                    <span class="text-white">00</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-white">SUB-CAT 2</span>
                    <span class="text-white">00</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-white">SUB-CAT 3</span>
                    <span class="text-white">00</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-white">SUB-CAT 4</span>
                    <span class="text-white">00</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-white">SUB-CAT 5</span>
                    <span class="text-white">00</span>
                </div>
            </div>
        </div>
    </div>
</div>`,
  b: `
<div class="${opt.name} footer--c p-2" type="b">
    <div class="max-w-screen-lg mx-auto">
        <div class="footer--c__section-1 mb-12">
            <div>
                <img src="https://purplebug.net/img/purplebug-logo.svg" alt="purple bug inc logo"
                    style="height: 43px" />
            </div>
            <div>
                <h2 class="mb-6">ABOUT US</h2>
                <p class="mb-6 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui nullam et venenatis ac, eu bibendum
                    lorem odio. Nulla risus adipiscing adipiscing augue quis ac metus in
                </p>
                <p class="text-sm">Contact Us: contact@yoursite.com</p>
            </div>
            <div class="h-full">
                <h2>FOLLOW US</h2>
            </div>
        </div>

        <div class="md:flex justify-between">
            <p class="text-primary mb-4 md:mb-0">&copy; Yoursite powered by PurpleBug Inc.</p>
            <p class="flex gap-2">
                <span>Disclaimer</span>
                <span>Privacy</span>
                <span>Advertisement</span>
                <span>Contact Us</span>
            </p>
        </div>
    </div>
</div>
</div>`,
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
