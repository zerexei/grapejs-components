let opt = {
  label: 'Footer Type B',
  name: 'footer__type--b',
  category: 'Footer Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
<div class="footer--c">
    <div class="max-w-screen-lg mx-auto">
        <div class="footer--c__section-1 mb-12">
            <div>
                <img src="https://purplebug.net/img/purplebug-logo.svg" alt="purple bug inc logo"
                    style="height: 43px" />
            </div>
            <div>
                <h2 class="mb-6">ABOUT US</h2>
                <p class="mb-6 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui nullam et venenatis ac, eu bibendum
                    lorem odio. Nulla risus adipiscing adipiscing augue quis ac metus in
                </p>
                <p class="text-sm">Contact Us: contact@yoursite.com</p>
            </div>
            <div class="h-full">
                <h2>FOLLOW US</h2>
            </div>
        </div>

        <div class="md:flex justify-between">
            <p class="text-primary mb-4 md:mb-0">&copy; Yoursite powered by PurpleBug Inc.</p>
            <p class="flex gap-2">
                <span>Disclaimer</span>
                <span>Privacy</span>
                <span>Advertisement</span>
                <span>Contact Us</span>
            </p>
        </div>
    </div>
</div>
</div>
`;

export const FooterTypeBBlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};