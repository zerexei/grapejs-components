export const ParagraphBlock = (bm) => {
  bm.add('paragraph', {
    label: `
            <div>Paragraph</div>
        `,
    category: 'Typography',
    content: `<p>Lorem Ipsum</p>`,
  });
};

export default (domc) => {
  const textType = domc.getType('text');
  const textModel = textType.model;

  domc.addType('paragraph', {
    isComponent: el => el?.tagName === 'P',
    extend: 'text',
    model: {
      defaults: {
        name: 'paragraph',
      },
    },
  });
};