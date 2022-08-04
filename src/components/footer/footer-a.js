let opt = {
  label: 'Footer Type A',
  name: 'footer__type--a',
  category: 'Footer Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="footer--b mb-12 p-6 bg-gray-700">
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
</div>
`;

export const FooterTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};