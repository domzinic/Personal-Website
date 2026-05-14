import { c as createComponent } from './astro-component_DGryOu-5.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as renderTemplate } from './prerender_CFlu7kW6.mjs';
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 ml-8 mr-10 flex items-center justify-between py-6 text-xs text-body border-t border-gray-300"> <div class="flex flex-col"> <span class="font-medium text-title">Dominic Petrut</span> <span>&copy; ${today.getFullYear()} All rights reserved.</span> </div> <a href="mailto:dompetrut@gmail.com" class="text-body transition duration-150 ease-in-out hover:text-accent hover:underline underline-offset-4">
Contact me
</a> </footer>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/Footer.astro", void 0);

export { $$Footer as $ };
