let opt = {
  label: 'Soial Media Type A',
  name: 'social-media__type--a',
  category: 'Social Media Component',
  target(el) {
    return el?.classList?.contains(`${this.name}`)
      ? { type: this.name }
      : false;
  },
};

const content = `
  <div class="mb-6 social-media--a">
    <div class="flex mb-4">
        <h2 class="section-title--b">STAY CONNECTED</h2>
    </div>
    <div class="flex flex-col gap-6">
        <div class="flex items-center">
            <span class="bg-blue-400 p-4 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                    <path fill-rule="evenodd"
                        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <span class="text-xs mr-2">22, 03</span>
            <span class="text-xs mr-2">Fans</span>
            <span class="text-xs ml-auto font-bold">LIKE</span>
        </div>

        <div class="flex items-center">
            <span class="bg-cyan-400 p-4 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                    <path fill-rule="evenodd"
                        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <span class="text-xs mr-2">22, 03</span>
            <span class="text-xs mr-2">Followers</span>
            <span class="text-xs ml-auto font-bold">FOLLOW</span>
        </div>

        <div class="flex items-center">
            <span class="bg-red-400 p-4 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                    <path fill-rule="evenodd"
                        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <span class="text-xs mr-2">22, 03</span>
            <span class="text-xs mr-2">Subscribe</span>
            <span class="text-xs ml-auto font-bold">SUBSCRIBE</span>
        </div>
    </div>
</div>
`;

export const SocialMediaTypeABlock = (bm) => {
  bm.add(opt.name, {
    label: `
        <div>${opt.label}</div>
    `,
    category: opt.category,
    content: content
  });
};