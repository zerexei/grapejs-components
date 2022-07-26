let opt = {
  label: 'Foo',
  name: 'customFoo',
  category: 'Components',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

export const FooBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: {
      type: opt.name,
    },
  });
};

export default (domc) => {
  domc.addType(opt.name, {
    model: {
      defaults: {traits: ['foo']},
      init() {
        const children = this.components();
        children.add(`<p><span>Hello</span><span>World</span></p>`);
        children.add(`<p><span>Hello</span><span>World</span></p>`);
        children.add(`<p><span>Hello</span><span>World</span></p>`);
      },
      updated(property, value, previous) {
        if (value.foo) {
            const child = this.getChildAt(1);
            child.addClass('class1');
        }
      }
    },
    isComponent: opt.target,
  });
};
