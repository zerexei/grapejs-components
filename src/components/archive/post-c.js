let opt = {
  label: 'Post Type C',
  name: 'post__type--c',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="post--c">
    <div class="post--c__header">
        <h2 class="section-title--b">LATEST ARTICLE</h2>
    </div>


    <div class="post--c__body__items">
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
        <div class="post--c__body__item">
            <div class="post--c__body__item__img box-2sm">
                <div class="sub-cat">Sub-Cat</div>
            </div>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
            </p>
            <p>July 1, 1999</p>
        </div>
    </div>
</div>
`;

export const PostTypeCBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};