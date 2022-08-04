let opt = {
  label: 'Header Type A',
  name: 'header-type--a',
  category: 'Header Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="header-type--a flex items-center gap-12 mb-6">
    <div>
        <img src="https://purplebug.net/img/purplebug-logo.svg" alt="purple bug inc logo" style="height: 43px" />
    </div>
    <div class="flex-1 bg-gray-400 h-16"></div>
</div>
`;

export const HeaderTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};