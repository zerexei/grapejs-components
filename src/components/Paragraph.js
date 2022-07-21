export const ParagraphBlock = (bm) => {
  bm.add('paragraph', {
    label: `
            <div>Paragraph</div>
        `,
    category: 'Typography',
    content: {
      type: 'paragraph',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut itaque rerum cupiditate recusandae ad.',
    },
  });
};

export default (domc) => {
  const textType = domc.getType('text');
  const textModel = textType.model;
  const textView = textType.view;

  domc.addType('paragraph', {
    model: textModel.extend(
      {
        defaults: Object.assign({}, textModel.prototype.defaults, {
          'custom-name': 'Paragraph',
          tagName: 'p',
          traits: ['bold', 'foo'].concat(textModel.prototype.defaults.traits),
        }),
      },
      {
        isComponent(el) {
          if (el && el.tagName && el.tagName === 'P') {
            return { type: 'paragraph' };
          }
        },
      }
    ),
    view: textView,
  });
};
