const name = 'HR';
const target = (el) => (el?.classList?.contains('hr') ? { type: name } : false);

export const HrBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Blocks',
    content: {
      type: name,
      content: `<div class="hr" style="display:block;margin: 2rem 0;border-bottom:2px solid #000"></div>`
    },
  });
};

export default (domc) => {
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType(name, {
    isComponent: target,
    model: defaultModel.extend({
      defaults: { ...defaultModel.prototype.defaults },
      'custom-name': name,
      traits: ['foo'].concat(defaultModel.prototype.defaults.traits),
      droppable: false,
    }),
    view: defaultView,
  });
};
