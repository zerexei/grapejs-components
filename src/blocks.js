export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  // ...
  bm.add('alert', {
    label: `
            <div>From Plugin Block</div>
        `,
    category: 'new-categoy',
    content: {
      type: 'text',
      content: 'Insert your text here',
    },
  });
};
