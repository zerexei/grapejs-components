let opt = {
  label: 'Posts',
  name: 'posts-component',
  category: 'Posts Component',
};

const componentType = {
  a: `
  <div class="${opt.name} mb-6 post--a p-2" type="A">
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
`,
  b: `<div class="${opt.name} mb-6 post--b p-2" type="B">
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
</div>`,
  c: `<div class="${opt.name} post--c p-2" type="C">
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
</div>`,
  d: `
<div class="${opt.name} mb-6 post--c p-2">
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
</div>`,
  e: `
  <div class="${opt.name} mb-6 post__6x6--b p-2">
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
`,
  f: `
<div class="${opt.name} most-popular--a p-2">
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
`,
g: `
  <div class="${opt.name} post__trending__type--a post__trending-1 p-2">
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
`,
h: `
 <div class="${opt.name} mb-6 post__trending-2 p-2">
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
`,


};

export default (editor, config) => {
  const bm = editor.BlockManager;
  const domc = editor.DomComponents;

  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: componentType.a,
  });

  domc.addType(opt.name, {
    model: {
      defaults: {
        name: opt.name,
        traits: [
          {
            type: 'select', // Type of the trait
            label: 'Style', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { value: 'a', name: 'Style 1' },
              { value: 'b', name: 'Style 2' },
              { value: 'c', name: 'Style 3' },
              { value: 'd', name: 'Style 4' },
              { value: 'e', name: 'Style 5' },
              { value: 'f', name: 'Style 6' },
              { value: 'g', name: 'Style 7' },
              { value: 'h', name: 'Style 8' },
            ],
          },
        ],
      },
      updated(property, value, previous) {
            if (value?.type && value.type in componentType) {
                this.replaceWith(componentType[value.type]);
                editor.select(null);
            }
      },
    },
    isComponent: (el) => {
      return el?.classList?.contains(`${opt.name}`)
        ? { type: opt.name }
        : false;
    },
  });
};
