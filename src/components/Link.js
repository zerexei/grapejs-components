export const LinkBlock = (bm) => {
  bm.add('link', {
    label: `
            <div>Link</div>
        `,
    category: 'Basic',
    content: {
      type: 'link',
      name: 'foo',
      content: 'Link',
      style: { color: '#d983a6' },
    },
  });
};
