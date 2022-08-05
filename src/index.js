import grapesjs from 'grapesjs';

import loadComponents from './components';
import loadSectors from './sectors';
// import loadBlocks from './blocks';

export default grapesjs.plugins.add(
  'zerexei-components',
  (editor, opts = {}) => {
    const options = {
      ...{
        // default options
      },
      ...opts,
    };

    // Add components
    loadComponents(editor, options);
    loadSectors(editor, options);

    // @see https://github.com/artf/grapesjs/issues/263
    const domc = editor.DomComponents;
    domc.addType('locked', {
      extend: 'default',
      model: {
        defaults: {
          locked: true,
          hoverable: false,
          highlightable: false,
          selectable: false,
        },
      },
      isComponent: function (el) {
        if (el?.classList?.contains('gjs-locked')) {
          return {
            type: 'locked',
          };
        }
      },
    });

    // Add blocks
    // loadBlocks(editor, options);
  }
);
