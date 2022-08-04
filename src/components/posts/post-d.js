let opt = {
  label: 'Post Type D',
  name: 'post__type--d',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="mb-6 post--c">
    <div class="post--c__header">
        <h2 class="section-title--b">CAT 2</h2>
    </div>


    <div class="post--c__body__items">
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
        </div>

        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
        </div>

        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
        </div>

        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
        </div>
    </div>
</div>
`;

export const PostTypeDBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};