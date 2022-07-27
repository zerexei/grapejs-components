let opt = {
  label: 'Carousel',
  name: 'customCarousel',
  category: 'Layouts',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
  script() {
    const initLib = function () {
      const elem = document.querySelector('.main-carousel');
      console.log(elem);
      new Flickity(elem, {
        // options
        draggable: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: true
      });
    };

    if (typeof Swiper == 'undefined') {
      const script = document.createElement('script');
      script.onload = initLib;
      script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
      document.body.appendChild(script);
    } else {
      initLib();
    }
  },
};

export const CarouselBlock = (bm) => {
  bm.add(opt.name, {
    label: `
            <div>${opt.label}</div>
        `,
    category: opt.category,
    content: `
      <div data-gjs-type="${opt.name}" class="main-carousel carousel">
        <div class="carousel-cell relative" style="padding:2rem;">
          <img class="carousel-cell-image"
            src="https://picsum.photos/720/540/?image=517" />

            <div class="absolute bottom-0 bg-white p-2 rounded-md" style="left: 50%; transform: translate(-50%, -50%)">
              <h2>Lorem Ipsum</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi illum similique vero quasi eos odit quos rem tempore quod assumenda doloremque hic odio est, quis consequuntur in! Ab, id.
              </p>
            </div>
        </div>
        <div class="carousel-cell relative" style="padding:2rem;">
          <img class="carousel-cell-image"
            src="https://picsum.photos/720/540/?image=517" />

            <div class="absolute bottom-0 bg-white p-2 rounded-md" style="left: 50%; transform: translate(-50%, -50%)">
              <h2>Lorem Ipsum</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi illum similique vero quasi eos odit quos rem tempore quod assumenda doloremque hic odio est, quis consequuntur in! Ab, id.
              </p>
            </div>
        </div>
        <div class="carousel-cell relative" style="padding:2rem;">
          <img class="carousel-cell-image"
            src="https://picsum.photos/720/540/?image=517" />

            <div class="absolute bottom-0 bg-white p-2 rounded-md" style="left: 50%; transform: translate(-50%, -50%)">
              <h2>Lorem Ipsum</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi illum similique vero quasi eos odit quos rem tempore quod assumenda doloremque hic odio est, quis consequuntur in! Ab, id.
              </p>
            </div>
        </div>
      </div>
    `,
  });
};

export default (domc) => {
  domc.addType(opt.name, {
    model: {
      defaults: {
        traits: [
          {
            type: 'select',
            name: 'type',
            label: 'Type',
            options: [
              { value: '1', name: 'Type 1' },
              { value: '2', name: 'Type 2' },
              { value: '3', name: 'Type 3' },
            ],
          },
        ],
        script: opt.script,
      },
      updated(property, value, previous) {
        if (value.type == '1') {
          this.removeClass(['carousel-2 ', 'carousel-3']);
          this.addClass('carousel-1 ');
        } else if (value.type == '2') {
          this.removeClass(['carousel-1 ', 'carousel-3']);
          this.addClass('carousel-2');
        } else if (value.type == '3') {
          this.removeClass(['carousel-1 ', 'carousel-2']);
          this.addClass('carousel-3');
        }
      },
    },

    isComponent: opt.target,
  });
};

// let opt = {
//   label: 'Swiper',
//   name: 'customSwiper',
//   category: 'Components',
// };

// const styles = `
//     <style>
//        .swiper {
//         padding: 2rem;
//         width: 600px;
//         height: 300px;
//       }

//       .swiper-1 .swiper-slide {
//         text-align: center;
//         font-size: 18px;
//         background: #fff;

//         /* Center slide text vertically */
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-pack: center;
//         -ms-flex-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         -webkit-box-align: center;
//         -ms-flex-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//       }

//       .swiper-1 .swiper-slide img {
//         display: block;
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }

//       .swiper-2 {
//         background-color: red;
//       }

//       .swiper-3 {
//         background-color: blue;
//       }
//       </style>
// `;

// // panel button
// export const CarouselBlock = (bm) => {
//   bm.add(opt.name, {
//     label: `
//             <div>${opt.label}</div>
//         `,
//     category: opt.category,
//     content: `
//         <div id="app" class="swiper-1 swiper swiper-container my-swiper">
//           <div data-gjs-locked="true" data-gjs-highlightable="false" class="swiper-wrapper">
//             <div v-for="x, i in [1,2,3,4,5]" data-gjs-locked="true" data-gjs-highlightable="false" class="swiper-slide">Slide {{i}}</div>
//           </div>
//           <div data-gjs-locked="true" data-gjs-highlightable="false" class="swiper-pagination"></div>

//           <div data-gjs-locked="true" data-gjs-highlightable="false" class="swiper-button-prev"></div>
//           <div data-gjs-locked="true" data-gjs-highlightable="false" class="swiper-button-next"></div>

//           <div data-gjs-locked="true" data-gjs-highlightable="false" class="swiper-scrollbar"></div>
//           <p v-text="message"></p>
//         </div>
//         ${styles}
//     `,
//   });
// };

// // This is our custom script (avoid using arrow functions)
// const script = function () {
//   // `this` is bound to the component element
//   console.log('the element', this);
// };

// export default (domc) => {
//   const dc = domc;
//   const defaultType = dc.getType('default');
//   const defaultView = defaultType.view;

//   dc.addType(opt.name, {
//     model: {
//       defaults: {
//         traits: [
//           {
//             type: 'select',
//             name: 'type',
//             label: 'Type',
//             options: [
//               { value: '1', name: 'Type 1' },
//               { value: '2', name: 'Type 2' },
//               { value: '3', name: 'Type 3' },
//             ],
//           },
//           {
//             type: 'checkbox',
//             // ...
//             label: 'dots',
//             name: 'data-flickity-dots',
//             valueTrue: 'YES', // Value to assign when is checked, default: `true`
//             valueFalse: 'NO', // Value to assign when is unchecked, default: `false`
//           },
//           {
//             type: 'select',
//             name: 'data-progressType',
//             label: 'Progress Type',
//             changeProp: 1,
//             options: [
//               { value: 'bullets', name: 'Bullets' },
//               { value: 'fraction', name: 'Fraction' },
//               { value: 'progressbar', name: 'Progressbar' },
//             ],
//           },
//         ],
//         script: function () {
//           const progressType = '{[ data-progressType ]}';

//           const initLib = function () {
//             const swiper = new Swiper('.my-swiper', {
//               loop: true,
//               spaceBetween: 30,
//               centeredSlides: true,
//               autoplay: {
//                 delay: 2500,
//                 disableOnInteraction: false,
//               },
//               pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//                 type: progressType || 'bullets',
//               },
//               navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//               },
//             });
//             console.log('swiper :>> ', swiper);
//           };

//           if (typeof Swiper == 'undefined') {
//             const script = document.createElement('script');
//             script.onload = initLib;
//             script.src = 'https://unpkg.com/swiper@7/swiper-bundle.min.js';
//             document.body.appendChild(script);
//           } else {
//             initLib();
//           }
//         },
//       },
//       updated(property, value, previous) {
//         if (value.type == '1') {
//           this.removeClass(['swiper-2 ', 'swiper-3']);
//           this.addClass('swiper-1 ');
//           window.gjsEditor.store();
//           setTimeout(() => window.location.reload(), 100);
//         } else if (value.type == '2') {
//           this.removeClass(['swiper-1 ', 'swiper-3']);
//           this.addClass('swiper-2');
//           window.gjsEditor.store();
//           setTimeout(() => window.location.reload(), 100);
//         } else if (value.type == '3') {
//           this.removeClass(['swiper-1 ', 'swiper-2']);
//           this.addClass('swiper-3');
//           window.gjsEditor.store();
//           setTimeout(() => window.location.reload(), 100);
//         }
//       },
//     },

//     isComponent: (el) => {
//       if (el?.classList?.contains('swiper-container')) {
//         return {
//           type: opt.name,
//         };
//       }
//     },

//     view: defaultView.extend({
//       init({ model }) {
//         this.listenTo(model, 'change:data-progressType', this.updateScript);
//         this.listenTo(model, 'change:type', this.updateView);
//       },
//     }),
//   });
// };
