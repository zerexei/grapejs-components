export const VideoBlock = (bm) => {
  bm.add('video', {
    label: `
            <div>Video</div>
        `,
    category: 'Basic',
    content: {
      type: 'video',
      src: '#',
      style: {
        height: '250px',
        width: '500px',
      },
    },
  });

  bm.add('image', {
    label: `
            <div>Image</div>
        `,
    category: 'Basics',
    content: {
      type: 'image',
      style: { color: 'black', width: '500px', height: '250px' },
      activeOnRender: 1,
    },
  });

  
};
