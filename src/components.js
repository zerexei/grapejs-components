import Post from './Components/posts/post';
import AboutUs from './Components/about-us';
import InquireNow from './Components/inquire-now';
import heroSection from './components/hero-section';
import header from './components/headers/header';
import footer from './components/footer/footer';



// import { HeaderTypeABlock } from './components/headers/header-a';
// import { ContainersBlock } from './components/Containers';
// import { ParagraphBlock } from './Components/Paragraph';
// import { HeadingBlock } from './Components/Heading';
// import { LinkBlock } from './Components/Link';
// import { ImageBlock } from './Components/Image';
// import { VideoBlock } from './Components/Video';
// import Button, { ButtonBlock } from './Components/Button';
// import { HrBlock } from './Components/Hr';
// import Carousel, { CarouselBlock } from './Components/Carousel';
// import Posts, { PostsBlock } from './Components/Posts';
// import { NavbarCategoryTypeABlock } from './components/navbar/nav-category-a';
// import { SocialMediaTypeABlock } from './components/social-media/social-media-a';
// import { FooterTypeABlock } from './components/footer/footer-a';
// import { FooterTypeBBlock } from './components/footer/footer-b';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const bm = editor.BlockManager;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  [
    Post,
    AboutUs,
    InquireNow,
    heroSection,
    header,
    footer,
  ].map(component => component(editor, config));
  
  // NavbarCategoryTypeABlock(bm);

  // SocialMediaTypeABlock(bm);

  // ===========================================================

  // PostsBlock(bm);
  // Posts(domc);

  // CarouselBlock(bm);
  // Carousel(domc);

  // // FooBlock(bm);
  // // Foo(domc);

  // // * basic
  // LinkBlock(bm);
  // ImageBlock(bm);
  // VideoBlock(bm);

  // // * containers
  // ContainersBlock(bm);

  // // * typography
  // ParagraphBlock(bm);
  // HeadingBlock(bm);

  // // // templates
  // // HeroBlock(bm);
  // // Alpine(editor);

  // // * blocks
  // ButtonBlock(bm);
  // Button(domc);

  // HrBlock(bm);

  // // TabsBlock(bm);
  // // Tabs(editor);
};
