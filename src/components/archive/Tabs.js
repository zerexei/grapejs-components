export const TabsBlock = (bm) => {
  // @see https://grapesjs.com/docs/modules/Components-js.html#basic-scripts
  // @see https://www.youtube.com/watch?v=qZ-POurckTs // carousel
  // @see https://www.youtube.com/c/CodeDexterous/videos
  // panel block
  bm.add('Tabs', {
    label: `
            <div>Tabs</div>
        `,
    category: 'Layouts',
    content: {
      type: 'tabs',
    },
  });
};

// This is our custom script (avoid using arrow functions)
const script = function() {
  alert('Hi');
  // `this` is bound to the component element
  console.log('the element', this);
};


// component render on canvas
export default (editor) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType('tabs', {
    isComponent: el => el?.classList?.contains('tabs') ? {type: 'tabs'} : false,
    model: {
      defaults: {
        script,
        // Add some style, just to make the component visible
        style: {
          width: '100px',
          height: '100px',
          background: 'red',
        },
         components: [
          { type: 'text', content: `Child Component` },
          { type: 'text', content: `Child Component 2` },
        ],
      },
    },
  });
};
