import { HeaderTypeABlock } from './components/headers/header-a';

import { PostTypeABlock } from './Components/posts/post-a';



import { ContainersBlock } from './components/Containers';
import { ParagraphBlock } from './Components/Paragraph';
import { HeadingBlock } from './Components/Heading';
import { LinkBlock } from './Components/Link';
import { ImageBlock } from './Components/Image';
import { VideoBlock } from './Components/Video';
import Button, { ButtonBlock } from './Components/Button';

import { HrBlock } from './Components/Hr';
// import { HeroBlock } from './Components/Hero';
// import Alpine from './Components/Alpine';
// import Foo, { FooBlock } from './components/Foo';

import Carousel, { CarouselBlock } from './Components/Carousel';
import Posts, { PostsBlock } from './Components/Posts';
import { NavbarCategoryTypeABlock } from './components/navbar/nav-category-a';
import { PostTrendingTypeABlock } from './components/posts/post-trending-a';
import { PostTrendingTypeBBlock } from './components/posts/post-trending-b';
import { Post6x6TypeABlock } from './components/posts/post-6x6-a';
import { PostTypeBBlock } from './components/posts/post-b';
import { SocialMediaTypeABlock } from './components/social-media/social-media-a';
import { PostTypeDBlock } from './components/posts/post-d';
import { PostTypeCBlock } from './components/posts/post-c';
import { PostMostPopularTypeABlock } from './components/posts/post-most-popular-a';
import { FooterTypeABlock } from './components/footer/footer-a';
import { FooterTypeBBlock } from './components/footer/footer-b';
// import Tabs, { TabsBlock } from './components/Tabs';

// @see https://github.com/artf/grapesjs/issues/263

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...

  const bm = editor.BlockManager;

  // bm.add('svg test', {
  //   label: `
  //           <div>svg test</div>
  //       `,
  //   category: 'Typography',
  //   content: `
  //   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  //   <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  //   </svg>
  //   `,
  // });


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


  // let postBlocks = ['postTypeABlock'];

  // postBlocks.forEach(block => {
  //   console.log(block);
  //   // block(bm);
  // });

  // ===========================================================

  
  PostTypeABlock(bm);
  PostTypeBBlock(bm);
  PostTypeCBlock(bm);
  PostTypeDBlock(bm);
  Post6x6TypeABlock(bm);
  PostTrendingTypeABlock(bm);
  PostTrendingTypeBBlock(bm);
  PostMostPopularTypeABlock(bm);
  
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
  // Alpine(editor);

  // * blocks
  ButtonBlock(bm);
  Button(domc);

  HrBlock(bm);

  // TabsBlock(bm);
  // Tabs(editor);
};
