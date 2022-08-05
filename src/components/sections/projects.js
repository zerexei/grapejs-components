let opt = {
  label: 'Projects',
  name: 'projects-component',
  category: 'Sections',
};

const componentType = {
  a: `
  <div class="${opt.name} max-w-screen-lg mx-auto" type="a">
    <!-- BREADCRUMB -->
    <div class="flex justify-between items-center mb-12">
        <h2>Propjects</h2>
        <p>you are here: Home/<b>PROJECTS</b></p>
    </div>

    <!-- PROJECTS -->
    <div class="flex justify-center gap-2 text-center mb-12">
        <span style="width: 161px; height: 37px">ALL</span>
        <span class="text-gray-400" style="width: 161px; height: 37px">PROJECT 1</span>
        <span class="text-gray-400" style="width: 161px; height: 37px">PROJECT 2</span>
        <span class="text-gray-400" style="width: 161px; height: 37px">PROJECT 3</span>
        <span class="text-gray-400" style="width: 161px; height: 37px">PROJECT 4</span>
    </div>
    <div class="grid gap-4 justify-center" style="grid-template-columns: repeat(4, 244px)">
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
       <span class="w-full border border-red-500" style="height: 184px"></span>
    </div>
</div>
`,
  b: `
  <div class="${opt.name} max-w-screen-lg mx-auto flex gap-6" type="b">
    <div class="flex-1">
        <div style="width: 570px; height: 380px" class="mb-6 border border-red-500"></div>
        <div class="flex justify-between mb-6 ">
            <div style="width: 270px; height: 180px" class="border border-red-500"></div>
            <div style="width: 270px; height: 180px" class="border border-red-500"></div>
        </div>
        <div style="width: 570px; height: 380px" class="border border-red-500"></div>
    </div>
    <div class="flex-1">
        <!-- component -->
        <div class="mb-6">
            <h2 class="font-bold" style="font-size: 20px">lorem ipsum</h2>
            <span class="block bg-primary my-2" style="height: 2px; width: 2.5rem"></span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat massa in fermentum aenean
                tincidunt
                amet neque, pharetra, integer. Duis urna, tempor risus at. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Placerat massa in fermentum aenean tincidunt amet neque, pharetra, integer.
            </p>
        </div>

        <!-- component -->
        <div>
            <h2 class="font-bold" style="font-size: 20px">lorem ipsum it dolor</h2>
            <span class="block bg-primary my-2" style="height: 2px; width: 2.5rem"></span>
            <div class="flex">
                <div class="flex-1 p-4 text-right border-r-2 border-black flex flex-col gap-4">
                    <p>lorem ipsum 1</p>
                    <p>lorem ipsum 2</p>
                    <p>lorem ipsum 3</p>
                    <p>lorem ipsum 4</p>
                    <p>lorem ipsum 5</p>
                </div>
                <div class="flex-1 p-4 text-left flex flex-col gap-4">
                    <p>lorem ipsum 6</p>
                    <p>lorem ipsum 7</p>
                    <p>lorem ipsum 8</p>
                    <p>lorem ipsum 9</p>
                    <p>lorem ipsum 10</p>
                </div>
            </div>
        </div>

        <!-- component -->
        <div>
            <h2 class="font-bold" style="font-size: 20px">lorem ipsum it dolor</h2>
            <span class="block bg-primary my-2" style="height: 2px; width: 2.5rem"></span>

            <div class="flex gap-4 mt-12 mb-6">
                <a href="#" class="bg-primary py-4 px-10 text-white">Lorem et</a>
                <a href="#" class="py-4 px-10 border border-primary">Lorem ipsum</a>
            </div>

            <p class="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat massa in fermentum aenean tincidunt
                amet neque, pharetra, integer.
            </p>

            <div>
                <p><span class="text-xl text-primary mr-2">&check;</span><span>lorem ipsum dolor 1</span></p>
                <p><span class="text-xl text-primary mr-2">&check;</span><span>lorem ipsum dolor 2</span></p>
                <p><span class="text-xl text-primary mr-2">&check;</span><span>lorem ipsum dolor 3</span></p>
                <p><span class="text-xl text-primary mr-2">&check;</span><span>lorem ipsum dolor 4</span></p>
            </div>
        </div>
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
