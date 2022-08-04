let opt = {
  label: 'Post Type A',
  name: 'post-type--a',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
  <div class="mb-6 post--a">
    <div class="post--a__header">
        <h2 class="post--a__section__title section-title--b">
            CAT 1
        </h2>
        <div class="post--a__header__sub-category">
            <span>All</span>
            <span>Sub-Cat 1</span>
            <span>Sub-Cat 2</span>
            <span>Sub-Cat 3</span>
            <span>Sub-Cat 4</span>
            <span>Sub-Cat 5</span>
        </div>
    </div>
    <div class="post--a__body">
        <div class="post--a__body__items">
            <div class="post--a__body__item">
                <div class="post--a__body__item__img box-2sm">
                    <div class="sub-cat">Sub-Cat</div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                </p>
            </div>

            <div class="post--a__body__item">
                <div class="post--a__body__item__img box-2sm">
                    <div class="sub-cat">Sub-Cat</div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                </p>
            </div>

            <div class="post--a__body__item">
                <div class="post--a__body__item__img box-2sm">
                    <div class="sub-cat">Sub-Cat</div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                </p>
            </div>
        </div>
    </div>
</div>
`;

export const PostTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};