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
    <div data-gjs-locked="true" class="posts__wrapper gap-2 p-4" data-posts-limit="5"
        data-posts="vue-posts">
        <div v-for="post in posts" v-bind:key="post.id" class="post__card p-4"
            :id="\`post-card-\${post.id}\`">
            <div class="post__card__wrapper">
                <div class="post__card__header">
                    <div>
                        <h2 v-text="post.title">Lorem Ipsum</h2>
                    </div>
                </div>
                <div class="post__card__body">
                    <div>
                        <p v-text="post.body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur natus iure dolorum
                            harum quae iusto ex eius esse, asperiores exercitationem deleniti sunt a fugit perspiciatis
                            consequuntur veniam laudantium inventore nemo.
                        </p>
                    </div>
                </div>
                <div class="post__card__footer">
                    <div class="flex justify-end">
                        <div>
                            <a v-bind:href="post.id">View more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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
        ],
      },
      updated(property, value, previous) {
        if (value.postsLimit) {
          const child = this.getChildAt(0);
          child.addAttributes({"data-posts-limit": value.postsLimit});
        }
        

        if (value.type == '1') {
          this.removeClass(['bg-red-500 ', 'bg-blue-500']);
        } else if (value.type == '2') {
          this.removeClass(['bg-red-500 ', 'bg-blue-500']);
          this.addClass('bg-red-500');
        } else if (value.type == '3') {
          this.removeClass(['bg-red-500 ', 'bg-blue-500']);
          this.addClass('bg-blue-500');
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
