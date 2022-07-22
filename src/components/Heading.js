const name = 'Heading';
const target = (el) => el?.tagName === 'h2'  ? {type: name} : false;;

export const HeadingBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Typography',
    content: `
      <h2 style="padding-bottom:1rem;font-size: 2.5rem;font-weight:750">Heading</h2>
    `,
  });
};

export default (domc) => {
  const textType = domc.getType('text');

  domc.addType(name, {
    isComponent: target,
    extend: textType,
    model: {
      defaults: {
        name: name,
      },
    },
  });
};
