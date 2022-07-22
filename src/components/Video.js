const name = 'Video';
const target = (el) => (el?.tagName === 'VIDEO' ? { type: name } : false);

export const VideoBlock = (bm) => {
  bm.add(name, {
    label: `
            <div>${name}</div>
        `,
    category: 'Blocks',
    content: {
      type: name,
        src: '#',
        style: {
          height: '350px',
          width: '615px'
        }
    },
  });
};

export default (domc) => {
  const defaultType = domc.getType('video');
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