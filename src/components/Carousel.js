let opt = {
  label: 'Swiper',
  name: 'customSwiper',
  category: 'Components',
};

const styles = `
    <style>
       .swiper {
        padding: 2rem;
        width: 600px;
        height: 300px;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      </style>
`;

// panel button
export const CarouselBlock = (bm) => {
  bm.add(opt.name, {
    label: `
            <div>${opt.label}</div>
        `,
    category: opt.category,
    content: `
        <div class="swiper swiper-container my-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <div class="swiper-scrollbar"></div>
        </div>
        ${styles}
    `,
  });
};

// This is our custom script (avoid using arrow functions)
const script = function () {
  // `this` is bound to the component element
  console.log('the element', this);
};

export default (domc) => {
  const dc = domc;
  const defaultType = dc.getType('default');
  const defaultView = defaultType.view;

  dc.addType(opt.name, {
    model: {
      defaults: {
        traits: [
          {
            type: 'checkbox',
            // ...
            label: 'dots',
            name: 'data-flickity-dots',
            valueTrue: 'YES', // Value to assign when is checked, default: `true`
            valueFalse: 'NO', // Value to assign when is unchecked, default: `false`
          },
          {
            type: 'select',
            name: 'data-progressType',
            label: 'Progress Type',
            changeProp: 1,
            options: [
              { value: 'bullets', name: 'Bullets' },
              { value: 'fraction', name: 'Fraction' },
              { value: 'progressbar', name: 'Progressbar' },
            ],
          },
        ],
        script: function () {
          const progressType = '{[ data-progressType ]}';

          const initLib = function () {
            const swiper = new Swiper('.my-swiper', {
              loop: true,
              spaceBetween: 30,
              centeredSlides: true,
              //   autoplay: {
              //     delay: 2500,
              //     disableOnInteraction: false,
              //   },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: progressType || 'bullets',
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
            console.log('swiper :>> ', swiper);
          };

          if (typeof Swiper == 'undefined') {
            const script = document.createElement('script');
            script.onload = initLib;
            script.src = 'https://unpkg.com/swiper@7/swiper-bundle.min.js';
            document.body.appendChild(script);
          } else {
            initLib();
          }
        },
      },
    },

    isComponent: (el) => {
      if (el?.classList?.contains('swiper-container')) {
        return {
          type: opt.name,
        };
      }
    },

    view: defaultView.extend({
      init({ model }) {
        this.listenTo(model, 'change:data-progressType', this.updateScript);
      },
    }),
  });
};
