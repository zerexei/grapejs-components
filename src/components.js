import Post from './Components/posts/post';
import AboutUs from './Components/about-us';



import { HeaderTypeABlock } from './components/headers/header-a';
import { ContainersBlock } from './components/Containers';
import { ParagraphBlock } from './Components/Paragraph';
import { HeadingBlock } from './Components/Heading';
import { LinkBlock } from './Components/Link';
import { ImageBlock } from './Components/Image';
import { VideoBlock } from './Components/Video';
import Button, { ButtonBlock } from './Components/Button';
import { HrBlock } from './Components/Hr';
// import { HeroBlock } from './Components/Hero';
import Alpine from './Components/Alpine';
// import Foo, { FooBlock } from './components/Foo';
import Carousel, { CarouselBlock } from './Components/Carousel';
import Posts, { PostsBlock } from './Components/Posts';
import { NavbarCategoryTypeABlock } from './components/navbar/nav-category-a';
import { SocialMediaTypeABlock } from './components/social-media/social-media-a';
import { FooterTypeABlock } from './components/footer/footer-a';
import { FooterTypeBBlock } from './components/footer/footer-b';
// import Tabs, { TabsBlock } from './components/Tabs';

// @see https://github.com/artf/grapesjs/issues/263

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const bm = editor.BlockManager;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

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

  [
    Post,
    AboutUs,
  ].map(component => component(editor, config));


  
  // // PostTypeABlock(bm);
  // Post(domc, editor);
  // PostTypeBBlock(bm);
  // PostTypeCBlock(bm);
  // PostTypeDBlock(bm);
  // Post6x6TypeABlock(bm);
  // PostTrendingTypeABlock(bm);
  // PostTrendingTypeBBlock(bm);
  // PostMostPopularTypeABlock(bm);
  
  HeaderTypeABlock(bm);
  FooterTypeABlock(bm);
  FooterTypeBBlock(bm);

  NavbarCategoryTypeABlock(bm);

  SocialMediaTypeABlock(bm);

  // ===========================================================

  PostsBlock(bm);
  Posts(domc);

  CarouselBlock(bm);
  Carousel(domc);

  // FooBlock(bm);
  // Foo(domc);

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
