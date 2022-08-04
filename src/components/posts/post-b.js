let opt = {
  label: 'Post Type B',
  name: 'post-type--b',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
  <div class="mb-6 post--b">
    <div class="post--b__header">
        <h2 class="post--b__header__title section-title--b">
            Sub-Cat
        </h2>
    </div>
    <div class="post--b__body__items">
            <div class="post--b__body__item">
                <div class="post--b__body__item__img box-2sm">
                </div>
                <div class="post--b__body__item__body">
                    <h2 class="post--b__body__item__title">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </h2>
                    <p class="post--b__body__item__post__info">
                        <span class="post--b__body__item__author">Author Name</span>
                        <span class="post--b__body__item__created-at">July 1, 1999</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Dui nullam et venenatis ac, eu
                        bibendum lorem odio. Nulla risus adipiscing
                        adipiscing augue quis ac metus in
                    </p>
                </div>
            </div>

             <div class="post--b__body__item">
                <div class="post--b__body__item__img box-2sm">
                </div>
                <div class="post--b__body__item__body">
                    <h2 class="post--b__body__item__title">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </h2>
                    <p class="post--b__body__item__post__info">
                        <span class="post--b__body__item__author">Author Name</span>
                        <span class="post--b__body__item__created-at">July 1, 1999</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Dui nullam et venenatis ac, eu
                        bibendum lorem odio. Nulla risus adipiscing
                        adipiscing augue quis ac metus in
                    </p>
                </div>
            </div>

             <div class="post--b__body__item">
                <div class="post--b__body__item__img box-2sm">
                </div>
                <div class="post--b__body__item__body">
                    <h2 class="post--b__body__item__title">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </h2>
                    <p class="post--b__body__item__post__info">
                        <span class="post--b__body__item__author">Author Name</span>
                        <span class="post--b__body__item__created-at">July 1, 1999</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Dui nullam et venenatis ac, eu
                        bibendum lorem odio. Nulla risus adipiscing
                        adipiscing augue quis ac metus in
                    </p>
                </div>
            </div>

             <div class="post--b__body__item">
                <div class="post--b__body__item__img box-2sm">
                </div>
                <div class="post--b__body__item__body">
                    <h2 class="post--b__body__item__title">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </h2>
                    <p class="post--b__body__item__post__info">
                        <span class="post--b__body__item__author">Author Name</span>
                        <span class="post--b__body__item__created-at">July 1, 1999</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Dui nullam et venenatis ac, eu
                        bibendum lorem odio. Nulla risus adipiscing
                        adipiscing augue quis ac metus in
                    </p>
                </div>
            </div>
        </div>
</div>
`;

export const PostTypeBBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};