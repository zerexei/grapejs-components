const name = 'Col 1';
const target = (el) => el?.classList?.contains('z-col-1');

export const Col_1_Block = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'contianers',
    content: `
      <div class="z-col-1" style="padding: 2rem">
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
