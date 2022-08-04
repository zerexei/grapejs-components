let opt = {
  label: 'Post Most Popular Type A',
  name: 'post__most-popular__type--a',
  category: 'Posts Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="most-popular--a">
    <div class="most-popular--a__header">
        <h2 class="section-title--b">MOST POPULAR</h2>
    </div>

    <div class="most-popular--a__items">
        <div class="mb-4 most-popular--a__item">
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
        <div class="mb-4 most-popular--a__item">
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
        <div class="mb-4 most-popular--a__item">
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
        <div class="mb-4 most-popular--a__item">
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
`;

export const PostMostPopularTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};