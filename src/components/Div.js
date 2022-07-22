const name = 'Div';
const target = (el) => el?.tagName === 'DIV';

export const DivBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Contianers',
    content: `
      <div>
        <div style="padding:1rem"></div>
      </div>
    `,
  });
};

export default (domc) => {
  const textType = domc.getType('default');

  domc.addType(name, {
    isComponent: target,
    extend: textType,
    model: {
      defaults: {
        resizable: true,
        'custom-name': name,
      },
    },
  });
};
