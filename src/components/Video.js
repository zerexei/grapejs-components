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
};
