import grapesjs from 'grapesjs';

import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('zerexei-components', (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);
});
