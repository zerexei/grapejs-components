let opt = {
  label: 'Post Trending Type A',
  name: 'post__trending__type--a',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
  <div class="post__trending__type--a post__trending-1">
    <div class="post__trending-1__section-1">
        <h2 class="post__trending-1__section__title">trending-1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div class="post__trending-1__section-2">
        <div class="post__trending-1__section-2__item">
            <h5 class="sub-cat">
                sub-cat
            </h5>
            <h3 class="post__trending-1__section-2__item__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p class="post__trending-1__section-2__item__post__info">
                <span class="post__trending-1__section-2__item__author">
                    Author Name
                </span>
                <span class="post__trending-1__section-2__item__created-at">
                    July 1, 1999
                </span>
            </p>
        </div>

        <div class="post__trending-1__section-2__item">
            <h5 class="sub-cat">
                sub-cat
            </h5>
            <h3 class="post__trending-1__section-2__item__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p class="post__trending-1__section-2__item__post__info">
                <span class="post__trending-1__section-2__item__author">
                    Author Name
                </span>
                <span class="post__trending-1__section-2__item__created-at">
                    July 1, 1999
                </span>
            </p>
        </div>

        <div class="post__trending-1__section-2__item">
            <h5 class="sub-cat">
                sub-cat
            </h5>
            <h3 class="post__trending-1__section-2__item__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p class="post__trending-1__section-2__item__post__info">
                <span class="post__trending-1__section-2__item__author">
                    Author Name
                </span>
                <span class="post__trending-1__section-2__item__created-at">
                    July 1, 1999
                </span>
            </p>
        </div>
    </div>
</div>
`;

export const PostTrendingTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};