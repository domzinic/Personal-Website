import { c as createComponent } from './astro-component_DGryOu-5.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, a as renderTemplate, d as renderSlot } from './prerender_CFlu7kW6.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Image, c as $$FormattedDate } from './Header_D7k45AgM.mjs';
import { $ as $$Footer } from './Footer_DABXJfq6.mjs';
import 'geist/font/sans';

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "data-astro-cid-bvzihdzo": true })}`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
