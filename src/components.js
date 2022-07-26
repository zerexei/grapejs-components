import { ContainersBlock } from './components/Containers';
import { ParagraphBlock } from './Components/Paragraph';
import { HeadingBlock } from './Components/Heading';
import Button, { ButtonBlock } from './Components/Button';

import Hr, { HrBlock } from './Components/Hr';
import Link, { LinkBlock } from './Components/Link';
import Image, { ImageBlock } from './Components/Image';
import Video, { VideoBlock } from './Components/Video';
import { HeroBlock } from './Components/Hero';
import Alpine from './Components/Alpine';

import Carousel, { CarouselBlock } from './Components/Carousel';
import Foo, { FooBlock } from './components/Foo';
// import Tabs, { TabsBlock } from './components/Tabs';

// @see https://github.com/artf/grapesjs/issues/263

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...

  const bm = editor.BlockManager;

  CarouselBlock(bm);
  Carousel(domc);

  FooBlock(bm);
  Foo(domc);

  // * basic
  // LinkBlock(bm);
  // // Link(domc);

  // ImageBlock(bm);
  // Image(domc);

  // VideoBlock(bm);
  // Video(domc);

  // * containers
  ContainersBlock(bm);

  // DivBlock(bm);
  // Div(domc);

  // FlexboxBlock(bm);
  // // Flexbox(domc);

  // * typography
  ParagraphBlock(bm);
  HeadingBlock(bm);

  // // templates
  // HeroBlock(bm);
  // Alpine(editor);

  // * blocks
  ButtonBlock(bm);
  Button(domc);

  // HrBlock(bm);
  // Hr(domc);

  // TabsBlock(bm);
  // Tabs(editor);
};
