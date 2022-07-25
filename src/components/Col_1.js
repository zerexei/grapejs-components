const name = 'Col 1';
const target = (el) => el?.classList?.contains('z-col-1') ? {type: name} : false;

export const Col_1_Block = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Contianers',
    content: `
      <div data-gjs-type="${name}"  class="z-col-1" style="padding: 2rem">
        <div style="padding: 2rem"></div>
      </div>
    `,
  });
};

export default (domc) => {
  domc.addType(name, {
    isComponent: target,
    extend: 'wrapper',
    model: {
      defaults: {
        resizable: true,
        name: name,
      },
    },
  });
};
