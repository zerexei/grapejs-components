export default (editor, config) => {
  const bm = editor.BlockManager;
  const domc = editor.DomComponents;

  // GRID ===============
  const containers = [
    { id: 1, name: 'Column-12-component', label: 'Column 12', size: 1 },
    { id: 2, name: 'Column-6+6-component', label: 'Column 6+6', size: 2 },
    { id: 3, name: 'Column-4+4+4-component', label: 'Column 4+4+4', size: 3 },
  ];

  containers.forEach((container) => {
    bm.add(container.name, {
      label: `
              <div>${container.label}</div>
          `,
      category: 'Contianers',
      content: `
        <div
          data-gjs-name="${container.name}"
          style="display:grid; grid-template-columns: repeat(${
            container.size
          },1fr);padding: 5px"
        >
          ${`<div style="padding: 2rem"></div>`.repeat(container.size)}
        </div>
      `,
    });
  });

  bm.add('column-9+3', {
    label: `
              <div>Column 9+3</div>
          `,
    category: 'Contianers',
    content: `
          <div data-gjs-name="column-9+3-component" style="display:flex;padding: 2rem;">
          <div style="padding: 2rem;flex:1;"></div>
          <div style="width:25%;padding:2rem"></div>
          </div>
      `,
  });

  // FLEXBOX ===============
  bm.add('flexbox', {
    label: `
              <div>Flexbox</div>
          `,
    category: 'Contianers',
    content: `
          <div data-gjs-name="flexbox-component" style="display:flex;padding: 2rem;"></div>
      `,
  });

  // DIV ===============

  bm.add('customDiv', {
    label: `
              <div>DIV</div>
          `,
    category: 'Contianers',
    content: `
          <div data-gjs-name="customDiv-component" style="padding: 2rem;"></div>
      `,
  });
};
