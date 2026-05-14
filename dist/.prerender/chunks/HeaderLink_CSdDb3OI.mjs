import { m as maybeRenderHead, c as addAttribute, s as spreadAttributes, d as renderSlot, a as renderTemplate } from './prerender_CFlu7kW6.mjs';
import { c as createComponent } from './astro-component_DGryOu-5.mjs';
import 'clsx';

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
