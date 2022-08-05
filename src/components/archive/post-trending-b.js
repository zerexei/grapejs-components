let opt = {
  label: 'Post Trending Type B',
  name: 'post__trending__type--b',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
 <div class="mb-6 post__trending-2">
    <div class="post__trending-2__header">
        <h2 class="post__trending__section__title section-title--b">
            TRENDING
        </h2>
        <div class="post__trending-2__header__sub-category">
            <span>All</span>
            <span>Sub-Cat 1</span>
            <span>Sub-Cat 2</span>
            <span>Sub-Cat 3</span>
            <span>Sub-Cat 4</span>
            <span>Sub-Cat 5</span>
        </div>
    </div>
    <div class="post__trending-2__body">
        <div class="post__trending-2__body__items--top">
            <div class="post__trending-2__body__item--top box-lg">
                <span class="sub-cat">Sub-Cat</span>
            </div>
            <h2 class="post__trending-2__body__item--top__title">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </h2>

            <p class="post__trending-2__body__item--top__post__info">
                <span class="post__trending-2__body__item--top__author">Author Name</span>
                <span class="post__trending-2__body__item--top__created-at">July 1, 1999</span>
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dui nullam et venenatis ac, eu
                bibendum lorem odio. Nulla risus adipiscing
                adipiscing augue quis ac metus in
            </p>
        </div>

        <div class="post__trending-2__body__items">
            <div class="post__trending-2__body__item">
                <span class="box-sm"></span>
                <div class="flex-1">
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. dolor
                    </p>
                    <p>July 1, 1999</p>
                </div>
            </div>
            <div class="post__trending-2__body__item">
                <span class="box-sm"></span>
                <div class="flex-1">
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. dolor
                    </p>
                    <p>July 1, 1999</p>
                </div>
            </div>
            <div class="post__trending-2__body__item">
                <span class="box-sm"></span>
                <div class="flex-1">
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. dolor
                    </p>
                    <p>July 1, 1999</p>
                </div>
            </div>
            <div class="post__trending-2__body__item">
                <span class="box-sm"></span>
                <div class="flex-1">
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. dolor
                    </p>
                    <p>July 1, 1999</p>
                </div>
            </div>
        </div>

    </div>
</div>

`;

export const PostTrendingTypeBBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};