const opt = {
  name: 'posts',
  label: 'Posts',
  category: 'Layouts',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

export const PostsBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: `
          <div data-gjs-type="${opt.name}" class="${opt.name}">
            <div data-gjs-locked="true" class="posts__wrapper gap-2 p-4" data-posts-limit="5" data-posts="vue-posts">
                <div v-for="post in posts" v-bind:key="post.id" class="post__card p-4" :id="\`post-card-\${post.id}\`">
                    <div class="post__card__wrapper">
                        <div class="post__card__img">
                            <figure>
                                <img src="https://picsum.photos/id/2/200" alt="card image" />
                            </figure>
                        </div>
                        <div class="post__card__content">
                            <div class="post__card__header">
                                <div>
                                    <h2 v-text="post.title">Lorem Ipsum</h2>
                                </div>
                            </div>
                            <div class="post__card__body">
                                <div>
                                    <p v-text="post.body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur natus iure
                                        dolorum
                                        harum quae iusto ex eius esse, asperiores exercitationem deleniti sunt a fugit
                                        perspiciatis
                                        consequuntur veniam laudantium inventore nemo.
                                    </p>
                                </div>
                            </div>
                            <div class="post__card__footer">
                                <div class="flex justify-end">
                                    <div>
                                        <a v-bind:href="post.id" class="view-more">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>

.post-card-1 .post__card__img {
    display: none;
}

.post-card-2 .post__card__wrapper {
    display: flex;
    height: 200px;
    width: 40rem;
}

.post-card-2 .post__card__wrapper .post__card__img figure {
    width: 200px;
    height: 200px;
    margin-right: 2rem;
}

.post-card-2 .post__card__content .view-more {
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
}

.post-card-3 .post__card__wrapper {
    width: 25rem;
}

.post-card-3 .post__card__wrapper .post__card__img figure {
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
}

.post-card-3 .post__card__content .view-more {
    text-decoration: underline;
}
        </style>
`,
  });
};

// this.$el.getAttribute('data-attribute-name');
export default (domc) => {
  const defaultType = domc.getType('default');
  const defaultView = defaultType.view;

  domc.addType(opt.name, {
    model: {
      defaults: {
        name: opt.name,
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
          {
            type: 'number',
            // ...
            name: 'postsLimit',
            label: 'Limit',
            placeholder: '0-100',
            min: 0, // Minimum number value
            max: 100, // Maximum number value
            step: 5, // Number of steps
          },
          {
            type: 'select',
            name: 'posts-orderBy',
            label: 'Order By',
            options: [
              { value: 'title', name: 'Title' },
              { value: 'author', name: 'Author' },
              { value: 'created_at', name: 'Created At' },
            ],
          },
          {
            type: 'button',
            text: 'Save',
            full: true, // Full width button
            command: (editor) => {
              editor.store();
              window.onbeforeunload = null;
              setTimeout(() => window.location.reload(), 500);
            },
          },
          {
            type: 'button',
            text: 'Edit',
            full: true, // Full width button
            command: function (editor) {
              console.log(editor, this);
              // editor.store();
              // window.onbeforeunload = null;
              // setTimeout(() => window.location.reload(), 500);
            },
          },
        ],
      },
      updated(property, value, previous) {
        if (value.postsLimit) {
          const child = this.getChildAt(0);
          child.addAttributes({ 'data-posts-limit': value.postsLimit });
        }

        if (value.type == '1') {
          this.removeClass(['post-card-2 ', 'post-card-3']);
          this.addClass('post-card-1');
        } else if (value.type == '2') {
          this.removeClass(['post-card-1 ', 'post-card-3']);
          this.addClass('post-card-2');
        } else if (value.type == '3') {
          this.removeClass(['post-card-1 ', 'post-card-2']);
          this.addClass('post-card-3');
        }
      },
    },
    isComponent: opt.target,
    // view: defaultView.extend({
    //   onRender() {
    //     window.gjsEditor.store();
    //     setTimeout(() => window.location.reload(), 100);
    //   },
    // }),
  });
};
