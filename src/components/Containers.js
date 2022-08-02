export const ContainersBlock = (bm) => {


  // GRID ===============
  const containers = [
    { id: 1, name: 'col-1', label: 'Col 1', size: 1 },
    { id: 2, name: 'col-2', label: 'Col 2', size: 2 },
    { id: 3, name: 'col-3', label: 'Col 3', size: 3 },
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
          style="display:grid; grid-template-columns: repeat(${container.size},1fr);padding: 5px"
        >
          ${`<div style="padding: 2rem"></div>`.repeat(container.size)}
        </div>
      `,
    });
  });


  // FLEXBOX ===============
  bm.add('flexbox', {
    label: `
              <div>Flexbox</div>
          `,
    category: 'Contianers',
    content: `
          <div data-gjs-name="flexbox" style="display:flex;padding: 2rem;"></div>
      `,
  });


  // DIV ===============

  bm.add('customDiv', {
    label: `
              <div>DIV</div>
          `,
    category: 'Contianers',
    content: `
          <div data-gjs-name="customDiv" style="padding: 2rem;"></div>
      `,
  });
};
