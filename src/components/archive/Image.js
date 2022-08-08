export const ImageBlock = (bm) => {
  bm.add('image', {
    label: `
            <div>Image</div>
        `,
    category: 'Basic',
    content: {
      type: 'image',
      style: { color: 'black', width: '500px', height: '250px' },
      activeOnRender: 1,
    },
  });
};
