export const ParagraphBlock = (bm) => {
  bm.add('paragraph', {
    label: `
            <div>Paragraph</div>
        `,
    category: 'Typography',
    content: `
    <p 
      data-gjs-type="text"
      data-gjs-name="paragraph" 
      style="padding-bottom: 0.5rem"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra sapien id sem luctus auctor. Nam ultricies metus quis felis luctus egestas. Aliquam accumsan felis quis libero faucibus sodales quis quis mauris. In pulvinar faucibus velit, ac fringilla risus rhoncus sed. Integer posuere mi ut neque pharetra, et vestibulum velit congue. Etiam dignissim malesuada mi non rutrum. Nam ut dapibus metus. Aenean magna nunc, euismod et egestas vel, ultricies vel arcu. Maecenas accumsan purus eget gravida blandit. Etiam porttitor eros eros, in egestas urna semper vitae. Duis lacinia libero ac diam mollis faucibus. Aliquam dictum velit nibh, ut elementum diam elementum ac.
    </p>`,
  });
};