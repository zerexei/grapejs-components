export const HeadingBlock = (bm) => {
  bm.add('heading', {
    label: `
            <div>Heading</div>
        `,
    category: 'Typography',
    content: `
      <h2 
        data-gjs-type="text" 
        data-gjs-name="heading" 
        style="padding-bottom:1rem; font-size: 2.5rem; font-weight:750"
      >
        Heading
      </h2>
    `,
  });
};
