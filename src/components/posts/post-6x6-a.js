let opt = {
  label: 'Post 6x6 Type A',
  name: 'post__6x6__type--a',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
  <div class="mb-6 post__6x6--b">
    <div class="post__6x6--b__header">
        <h2 class="post__6x6--b__section__title section-title--b">
            CAT 1
        </h2>
        <div class="post__6x6--b__header__sub-category">
            <span>All</span>
            <span>Sub-Cat 1</span>
            <span>Sub-Cat 2</span>
            <span>Sub-Cat 3</span>
            <span>Sub-Cat 4</span>
            <span>Sub-Cat 5</span>
        </div>
    </div>

    <div class="post__6x6--b__body">
        <div class="flex-1">
            <div class="post__6x6--b__body__left__img box-md">
                <span class="sub-cat">sub-cat</span>
            </div>
            <h2 class="post__6x6--b__body__title">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </h2>
            <p class="post__6x6--b__body__post__info">
                <span class="post__6x6--b__body__post__info__author">Author Name</span>
                <span class="post__6x6--b__body__post__info__created-at">July 1, 1999</span>
            </p>
            <p class="mb-6">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dui nullam et venenatis ac,
                eu bibendum lorem odio. Nulla risus
                adipiscing adipiscing augue quis ac metus in
            </p>
            <div class="post__6x6--b__body__sub-posts">
                <div class="post__6x6--b__body__sub-posts__item">
                    <span class="box-sm"></span>
                    <div class="flex-1">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            dolor
                        </p>
                        <p>July 1, 1999</p>
                    </div>
                </div>

                <div class="post__6x6--b__body__sub-posts__item">
                    <span class="box-sm"></span>
                    <div class="flex-1">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            dolor
                        </p>
                        <p>July 1, 1999</p>
                    </div>
                </div>

                <div class="post__6x6--b__body__sub-posts__item">
                    <span class="box-sm"></span>
                    <div class="flex-1">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            dolor
                        </p>
                        <p>July 1, 1999</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1">
            <div class="post__6x6--b__body__right__img box-md">
            </div>
            <h2 class="post__6x6--b__body__title">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </h2>
            <p class="post__6x6--b__body__post__info">
                <span class="post__6x6--b__body__post__info__author">Author Name</span>
                <span class="post__6x6--b__body__post__info__created-at">July 1, 1999</span>
            </p>
            <p class="mb-6">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dui nullam et venenatis ac,
                eu bibendum lorem odio. Nulla risus
                adipiscing adipiscing augue quis ac metus in
            </p>
            <div class="post__6x6--b__body__sub-posts">
                <div class="post__6x6--b__body__sub-posts__item">
                    <span class="box-sm"></span>
                    <div class="flex-1">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            dolor
                        </p>
                        <p>July 1, 1999</p>
                    </div>
                </div>

                <div class="post__6x6--b__body__sub-posts__item">
                    <span class="box-sm"></span>
                    <div class="flex-1">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            dolor
                        </p>
                        <p>July 1, 1999</p>
                    </div>
                </div>

                <div class="post__6x6--b__body__sub-posts__item">
                    <span class="box-sm"></span>
                    <div class="flex-1">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            dolor
                        </p>
                        <p>July 1, 1999</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;

export const Post6x6TypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};