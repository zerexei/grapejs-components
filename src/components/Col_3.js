const name = 'Col 3';
const target = (el) => el?.classList?.contains('z-col-3');

export const Col_3_Block = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Contianers',
    content: `
      <div class="z-col-2 md:grid md:grid-cols-3" style="padding: 2rem">
        <div style="padding: 2rem"></div>
        <div style="padding: 2rem"></div>
        <div style="padding: 2rem"></div>
      </div>
    `,
  });
};

export default (domc) => {
  const textType = domc.getType('wrapper');

  domc.addType(name, {
    isComponent: target,
    extend: name,
    model: {
      defaults: {
        name: name,
      },
    },
  });
};
