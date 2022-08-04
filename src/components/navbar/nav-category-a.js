let opt = {
  label: 'Navbar Category Type A',
  name: 'navbar__category__type--a',
  category: 'Navbar Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="flex justify-between mb-6">
    <div class="flex">
        <p class="font-bold text-sm py-2 px-4 border-b-2 border-primary">CAT 1</p>

        <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 2</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>

            <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 3</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>

            <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 4</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>

            <p class="flex  items-center font-bold text-sm py-2 px-4">
            <span class="mr-2">CAT 5</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            </p>
    </div>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
</div>

`;

export const NavbarCategoryTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};