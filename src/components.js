import Paragraph, { ParagraphBlock } from './Components/Paragraph';
import Heading, { HeadingBlock } from './Components/Heading';
import Col_1, { Col_1_Block } from './Components/Col_1';
import Col_2, { Col_2_Block } from './Components/Col_2';
import Col_3, { Col_3_Block } from './Components/Col_3';
import Button, { ButtonBlock } from './Components/Button';
import Div, { DivBlock } from './Components/Div';
import Hr, { HrBlock } from './Components/Hr';
import Link, { LinkBlock } from './Components/Link';
import Image, { ImageBlock } from './Components/Image';
import Video, { VideoBlock } from './Components/Video';
import Flexbox, {FlexboxBlock} from './Components/Flexbox';
import { HeroBlock } from './Components/Hero';
import Alpine from './Components/Alpine';
// import Tabs, { TabsBlock } from './components/Tabs';

// @see https://github.com/artf/grapesjs/issues/263

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...

  const bm = editor.BlockManager;

  // basic
  LinkBlock(bm);
  // Link(domc);

  ImageBlock(bm);
  Image(domc);

  VideoBlock(bm);
  Video(domc);

  // containers
  Col_1_Block(bm);
  Col_1(domc);
  
  Col_2_Block(bm);
  Col_2(domc);
  
  Col_3_Block(bm);
  Col_3(domc);
  
  DivBlock(bm);
  Div(domc);

  FlexboxBlock(bm);
  // Flexbox(domc);

  // typography
  ParagraphBlock(bm);
  Paragraph(domc);

  HeadingBlock(bm);
  Heading(domc);
  
  // templates
  HeroBlock(bm);
  Alpine(editor);

  // blocks
  ButtonBlock(bm);
  Button(domc);

  HrBlock(bm);
  Hr(domc);

  // TabsBlock(bm);
  // Tabs(editor);
};
