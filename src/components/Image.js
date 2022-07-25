const name = 'Image';
const target = (el) => (el?.tagName === 'IMG' ? { type: name } : false);

export const ImageBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Basic',
    content: {
      type: name,
      style: { color: 'black', width: '100%', height: '100%' },
      activeOnRender: 1,
    },
  });
};

export default (domc) => {
  const defaultType = domc.getType('image');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType(name, {
    isComponent: target,
    model: defaultModel.extend({
      defaults: { ...defaultModel.prototype.defaults },
      'custom-name': name,
      traits: ['foo'].concat(defaultModel.prototype.defaults.traits),
    }),
    view: defaultView,
  });
};
