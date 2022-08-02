export default (editor, option) => {
  const sm = editor.StyleManager;

  sm.addSector('mySector', {
    name: 'My sector',
    open: true,
  });

  sm.addProperty('mySector', {
    type: 'radio',
    property: 'width',
    label: 'Width',
    default: 'full',
    // Additional props
    options: [
      { id: '25%', label: '1/4' },
      { id: '50%', label: '1/2' },
      { id: '75%', label: '3/4' },
      { id: '100%', label: 'full' },
    ],
  });
  
  sm.addProperty('mySector', {
    type: 'slider',
    property: 'width',
    label: 'Width',
    default: '0%',
    // Additional props
    units: ['%'],
    min: 0,
    max: 100,
  });

  sm.addProperty('mySector', {
    type: 'radio',
    property: 'padding',
    label: 'Padding',
    default: 'sm',
    // Additional props
    options: [
      { id: '0', label: 'None' },
      { id: '1rem', label: 'sm' },
      { id: '2rem', label: 'md' },
      { id: '3rem', label: 'lg' },
    ],
  });

  sm.addProperty('mySector', {
    type: 'radio',
    property: 'margin',
    label: 'margin placement',
    default: 'left',
    // Additional props
    options: [
      { id: '0 auto 0 0', label: 'left' },
      { id: '0 auto 0', label: 'center' },
      { id: '0 0 0 auto', label: 'right' },
    ],
  });

  // * TYPOGRAPHY------------------
  sm.addSector('typographySector', {
    name: 'Typography',
  });

  sm.addProperty('typographySector', {
    type: 'slider',
    property: 'font-size',
    label: 'Font Size',
    default: '0%',
    // Additional props
    units: ['px', '%'],
    min: 0,
    max: 100,
  });

  sm.addProperty('typographySector', {
    type: 'radio',
    property: 'font-size',
    label: 'Font Size',
    default: 'normal',
    // Additional props
    options: [
      { id: '14px', label: 'sm' },
      { id: '16px', label: 'normal' },
      { id: '18px', label: 'md' },
      { id: '24px', label: 'lg' },
    ],
  });

  // dynamic show style based on current style | ex. d-flex: show flex sector
  editor.on('style:property:update', ({ property, to }) => {
    const prop = property.attributes;

    if (prop.name == 'Display' && to.hasOwnProperty('value')) {
      let hasFoo = sm.getProperty('typographySector', 'foo');

      if (prop.value === 'inline') {
        if (to.value == 'inline') {
          if (!hasFoo) {
            sm.addProperty('typographySector', { name: 'foo' });
          }
        }
      } else if (hasFoo) {
        sm.removeProperty('typographySector', 'foo');
      }
    }
  });
};
