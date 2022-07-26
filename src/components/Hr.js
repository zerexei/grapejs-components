export const HrBlock = (bm) => {
  bm.add('hr', {
    label: `
            <div>HR</div>
        `,
    content: `
      <div
        data-gjs-name="hr" 
        data-gjs-highlightable="false"
        class="hr" 
        style="display:block;margin: 2rem 0;border-bottom:2px solid #000"
      ></div>`,
  });
};
