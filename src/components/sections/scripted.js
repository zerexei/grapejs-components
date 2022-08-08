let opt = {
  label: 'Scripted',
  name: 'scripted-component',
  category: 'scripts',
};

const traits = [
  {
    full: 1,
    type: 'button',
    label: false,
    text: 'Add Tab',
    command: (ed) => {
      console.log(ed)
      // const sel = ed.getSelected();
      // sel && sel.addTab();
    },
  },
];

// This is our custom script (avoid using arrow functions)
const script = function () {
  // `this` is bound to the component element
  const btn = this.querySelector('.my-btn');
  btn.addEventListener('click', () => {
    this.querySelector('.my-btn').style.display = 'none';
    setTimeout(() => alert('removed'), 500);
  });
};

export default (editor, config) => {
  const bm = editor.BlockManager;
  const domc = editor.DomComponents;

  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: `
      <div class="${opt.name} p-4">
        <button data-gjs-type="button" class="my-btn py-2 px-4 rounded-md border-2">Scripted</button>
      </div>
    `,
  });

  domc.addType(opt.name, {
    model: {
      defaults: {
        name: opt.name,
        traits,
        script,
      },
    },
    isComponent: (el) => {
      return el?.classList?.contains(`${opt.name}`)
        ? { type: opt.name }
        : false;
    },
  });

  domc.addType('button', {
    model: {
      defaults: {
        name: 'button',
      },
    },
    isComponent: (el) => {
      return el?.tagName == 'button' ? { type: 'button' } : false;
    },
  });
};