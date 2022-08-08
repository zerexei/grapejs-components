import footer from './components/footer/footer';
import genericUs from './components/generic-us';
import genericSection from './components/sections/generic-section';
import header from './components/headers/header';
import hero from './components/sections/hero';
import inquireNow from './Components/inquire-now';
import navbar from './components/navbar/navbar';
import ourWorks from './components/sections/our-works';
import ourClients from './components/sections/our-clients';
import Post from './Components/posts/post';
import productsServices from './components/sections/products-services';
import projects from './components/sections/projects';
import socialMedia from './components/social-media/social-media';
import testimonial from './components/sections/testimonial';
import whoWeAre from './components/sections/who-we-are';
import scripted from './components/sections/scripted';

import dynamicPost from './components/posts/dynamic-post';
import button from './components/basics/button';
import buttonLink from './components/basics/button-link';
import basics from './components/basics/basics';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const bm = editor.BlockManager;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  [
    // BASIC
    scripted,
    basics,
    button,
    buttonLink,

    // POST
    Post,
    dynamicPost,

    // COMPONENTS
    genericUs,
    inquireNow,

    // SECTIONS
    hero,
    header,
    footer,
    productsServices,
    ourWorks,
    ourClients,
    whoWeAre,
    genericSection,
    testimonial,
    projects,

    // NAVBARS
    navbar,

    // SOCIAL MEDIA
    socialMedia,
  ].map((component) => component(editor, config));

  // ===========================================================

  // PostsBlock(bm);
  // Posts(domc);

  // CarouselBlock(bm);
  // Carousel(domc);

  // LinkBlock(bm);
  // ImageBlock(bm);
  // VideoBlock(bm);

  // ContainersBlock(bm);

  // ParagraphBlock(bm);
  // HeadingBlock(bm);

  // ButtonBlock(bm);
  // Button(domc);

  // HrBlock(bm);
};
