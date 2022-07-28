import { ContainersBlock } from './components/Containers';
import { ParagraphBlock } from './Components/Paragraph';
import { HeadingBlock } from './Components/Heading';
import { LinkBlock } from './Components/Link';
import { ImageBlock } from './Components/Image';
import { VideoBlock } from './Components/Video';
import Button, { ButtonBlock } from './Components/Button';

import { HrBlock } from './Components/Hr';
import { HeroBlock } from './Components/Hero';
import Alpine from './Components/Alpine';

import Carousel, { CarouselBlock } from './Components/Carousel';
import Foo, { FooBlock } from './components/Foo';
import Posts, { PostsBlock } from './Components/Posts';
// import Tabs, { TabsBlock } from './components/Tabs';

// @see https://github.com/artf/grapesjs/issues/263

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...

  const bm = editor.BlockManager;

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

  PostsBlock(bm);
  Posts(domc);

  CarouselBlock(bm);
  Carousel(domc);

  FooBlock(bm);
  Foo(domc);

  // * basic
  LinkBlock(bm);
  ImageBlock(bm);
  VideoBlock(bm);

  // * containers
  ContainersBlock(bm);

  // * typography
  ParagraphBlock(bm);
  HeadingBlock(bm);

  // // templates
  // HeroBlock(bm);
  Alpine(editor);

  // * blocks
  ButtonBlock(bm);
  Button(domc);

  HrBlock(bm);

  // TabsBlock(bm);
  // Tabs(editor);
};
