let opt = {
  label: 'Swiper',
  name: 'customSwiper',
  category: 'Components',
  target(el) {
    if (el?.classList?.contains('swiper-container')) {
      return {
        type: opt.name,
      };
    }
  },
};

const styles = `
    <style>
       .swiper {
        width: 100%;
        height: 300px;
      }
      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .swiper.type-2 img {
        filter: invert(100%)
      }

      .swiper.type-3 {
        position: relative
      }

      .swiper.type-3:after {
        position: absolute;
        content:"";
        height:100%;
        width:100%;
        top:0;
        left:0;
        background: linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0.65) 100%);
      }

      .swiper.type-2 .swiper-button-prev,
      .swiper.type-2 .swiper-button-next
       {
        display: none;
      }

      .swiper.type-3 .swiper-button-prev,
      .swiper.type-3 .swiper-button-next,
      .swiper.type-3 .swiper-text
       {
        display: none;
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
        <div data-gjs-type="${opt.name}" class="swiper swiper-container my-swiper ">
          <div class="gjs-locked swiper-wrapper">
            <div class="swiper-slide relative gjs-locked">
             <img class="gjs-locked"
               src="https://picsum.photos/720/540/?image=517" />

               <div class="swiper-text absolute bottom-0 bg-white p-2 rounded-md" style="left: 50%; transform: translate(-50%, -50%)">
                 <h2>Lorem Ipsum</h2>
                 <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi illum similique vero quasi eos odit quos rem tempore quod assumenda doloremque hic odio est, quis consequuntur in! Ab, id.
                 </p>
               </div>
           </div>
          </div>
          <div class="gjs-locked swiper-pagination"></div>
          <div class="gjs-locked swiper-button-prev"></div>
          <div class="gjs-locked swiper-button-next"></div>
        </div>
        ${styles}
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
        script: function () {
          const initLib = function () {
            const swiper = new Swiper('.my-swiper', {
              loop: true,
              spaceBetween: 30,
              centeredSlides: true,
              /* dots doesn't show if 1 item only */
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          };

          if (typeof Swiper == 'undefined') {
            const script = document.createElement('script');
            script.onload = initLib;
            script.src = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
            document.body.appendChild(script);
          } else {
            initLib();
          }
        },
      },
      updated(property, value, previous) {
        if (value.type == '1') {
          this.removeClass(['type-2', 'type-3']);
          this.addClass('type-1');
        } else if (value.type == '2') {
          this.removeClass(['type-1', 'type-3']);
          this.addClass('type-2');
        } else if (value.type == '3') {
          this.removeClass(['type-2', 'type-1']);
          this.addClass('type-3');
        }
      },
    },

    isComponent: opt.target,
  });
};
