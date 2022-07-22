const name = 'flexbox';
const target = (el) => (el?.tagName === 'DIV' ? { type: name } : false);

export const FlexboxBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Contianers',
    content: `<div style="display:flex;padding:2rem"></div>`,
  });
};

// export default (domc) => {
//   const defaultType = domc.getType('wrapper');
//   const defaultModel = defaultType.model;
//   const defaultView = defaultType.view;

//   domc.addType(name, {
//     isComponent: target,
//     model: defaultModel.extend({
//       defaults: { ...defaultModel.prototype.defaults },
//       'custom-name': name,
//       traits: ['foo'].concat(defaultModel.prototype.defaults.traits),
//     }),
//     view: defaultView,
//   });
// };
