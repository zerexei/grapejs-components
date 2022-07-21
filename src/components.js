import Paragraph, { ParagraphBlock } from './components/Paragraph';
import Tabs, { TabsBlock } from './components/Tabs';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...

  const bm = editor.BlockManager;

  ParagraphBlock(bm);
  Paragraph(domc);

  TabsBlock(bm);
  Tabs(editor);
};
