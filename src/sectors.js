export default (editor, option) => {
  const sm = editor.StyleManager;

  sm.addSector('mySector', {
    name: 'My sector',
    open: true,
    properties: [{ name: 'My property' }, { name: 'color' }],
  });

  sm.addProperty(
    'mySector',
    {
      label: 'Minimum height',
      property: 'min-height',
      type: 'select',
      default: '100px',
      options: [
        { id: '100px', label: '100' },
        { id: '200px', label: '200' },
      ],
    },
    { at: 0 }
  );

  sm.addSector('mySector 2', {
    name: 'My sector 2',
    open: true,
    properties: [{ name: 'My property 2' }],
  });


// TODO: dynamic show style based on current style | ex. d-flex: show flex sector
//   editor.on('style:target', (target) => {
//     console.log(target);
//     // editor.on('style:property:update', (prop, change) => {
//     //   console.log(prop, change);
//     // });
//   });
};
