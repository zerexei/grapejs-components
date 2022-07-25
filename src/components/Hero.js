export const HeroBlock = (bm) => {
  bm.add('Hero', {
    label: `
            <div>Hero</div>
        `,
    category: 'Templates',
    content: `
        <div id="app" class="custom-background bg-gray-100 text-gray-800 border-b-2">
  <div class="container mx-auto">
    <header class="md:mb-8 py-4 px-4 flex justify-between items-center select-none">
      <div class="text-2xl font-semibold flex justify-between items-center">
        <a href="/">
          LOGO
        </a>
      </div>

      <div class="text-gray-800 sm:block md:hidden">
        <div>
          <svg class="fill-current w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>

        <div>
          <svg class="fill-current w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </div>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:block text-sm">
        <a data-gjs-type="link" href="#" class="py-2 px-3 ml-2 hover:bg-indigo-100 rounded">
          Blog
        </a>

        <a data-gjs-type="link" href="#" class="py-2 px-3 ml-2 hover:bg-indigo-100 rounded">
          Github
        </a>

        <a data-gjs-type="link" href="#" class="py-2 px-3 ml-2 hover:bg-indigo-100 rounded">
          Forum
        </a>

        <a data-gjs-type="link" href="#" class="py-2 px-3 ml-2 hover:bg-indigo-400 bg-indigo-500 rounded shadow-lg border text-white">
          Documentation
        </a>
      </div>
    </header>

    <!-- Mobile Links -->
    <div class="bg-white px-4 py-4 select-none border-b md:hidden">
      <a href="#" class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer">
        Blog
      </a>

      <a href="#" class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer">
        Github
      </a>

      <a href="#" class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer">
        Forum
      </a>

      <a href="#" class="block font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer">
        Documentation
      </a>
    </div>

    <div class="px-4 md:block">
      <div class="pb-8 mt-auto">
        <div class="text-center">
          <h1 class="text-2xl md:text-3xl mb-8 mt-16 font-serif max-w-3xl mx-auto">The Progressive Python <span class="text-indigo-600">Framework</span> For Trading Cryptocurrencies</h1>

          <div class="md:max-w-2xl mx-auto">
            <p class="text-gray-800">
              Jesse is not merely another bot. It is a framework focusing on helping you develop your very own trading strategies.
            </p>
          </div>

          <div class="mb-6 mt-12">
            <a href="#" data-gjs-type="link" class="py-2 px-4 md:py-4 md:px-6 mr-2 border select-none hover:bg-indigo-400 bg-indigo-500 rounded shadow-lg text-white">Why Jesse?</a>

            <a href="#" data-gjs-type="link" class="py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-indigo-800">Get Started &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
  });
};
