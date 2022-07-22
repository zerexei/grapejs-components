const name = 'Col 2';
const target = (el) => el?.classList?.contains('z-col-2') ? {type: name} : false;

export const Col_2_Block = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'contianers',
    content: `
      <div class="z-col-2 md:grid md:grid-cols-2" style="padding: 2rem">
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
        name
      },
    },
  });
};
