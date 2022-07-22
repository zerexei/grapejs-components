import Paragraph, { ParagraphBlock } from './components/Paragraph';
import Col_1, { Col_1_Block } from './components/Col_1';
import Col_2, { Col_2_Block } from './components/Col_2';
import Col_3, { Col_3_Block } from './components/Col_3';
import Heading, { HeadingBlock } from './components/Heading';
// import Tabs, { TabsBlock } from './components/Tabs';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...

  const bm = editor.BlockManager;

  ParagraphBlock(bm);
  Paragraph(domc);

  Col_1_Block(bm);
  Col_1(domc);

  Col_2_Block(bm);
  Col_2(domc);

  Col_3_Block(bm);
  Col_3(domc);

  HeadingBlock(bm);
  Heading(domc);
  // TabsBlock(bm);
  // Tabs(editor);
};
