import { c as createComponent } from './astro-component_DGryOu-5.mjs';
import 'piccolore';
import { h as createRenderInstruction, c as addAttribute, a as renderTemplate, r as renderComponent, b as renderHead, d as renderSlot, m as maybeRenderHead } from './prerender_CFlu7kW6.mjs';
import { $ as $$Footer } from './Footer_DABXJfq6.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Personal Website",
    description = "My personal website",
    ogType,
    ogTitle
  } = Astro2.props;
  const fullTitle = `${title} | Dominic Petrut`;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${fullTitle}</title><meta name="description"${addAttribute(description, "content")}>${ogType && renderTemplate`<meta property="og:type"${addAttribute(ogType, "content")}>`}${ogTitle && renderTemplate`<meta property="og:title"${addAttribute(ogTitle, "content")}>`}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="mx-auto flex min-h-screen flex-col px-8 py-8 md:max-w-[600px] md:py-16"> <main class="relative flex-1 font-sans"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/layouts/Base.astro", void 0);

const $$Name = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <!-- name --> <h1 class="font-serif text-4xl tracking-tight text-accent">Dominic Petrut</h1> <!-- subtitle --> <div class="flex items-center gap-1.5 font-medium tracking-tight"> <h2 class="text-sm text-title">Student</h2> <div class="mt-0.5 h-1 w-1 rounded-full bg-title"></div> <h2 class="text-sm text-title">uOttawa</h2> </div> <!-- bio --> <p class="pt-0 text-sm leading-relaxed text-body">
I'm Dominic Petrut, a bilingual third year Computer Science and Mathematics student at the University of Ottawa, with a 9.91 CGPA.
</p> <!-- links --> <div class="grid w-fit grid-cols-4 gap-2 pt-0 tracking-tight md:flex md:flex-row md:items-start"> <!-- github --> <a href="https://github.com/domzinic" target="_blank" rel="noopener noreferrer" class="group flex items-center text-body underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"> <svg width="14" height="14" class="mr-1.5" viewBox="0 0 496 512" fill="currentColor"> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.8-14.3-112.8-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path> </svg> <span class="text-sm">github</span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-0.5 h-3 w-3 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> <!-- linkedin --> <a href="https://ca.linkedin.com/in/dom-petrut-4761622b5" target="_blank" rel="noopener noreferrer" class="group flex items-center text-body underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"> <svg width="14" height="14" class="mr-1.5" viewBox="0 0 448 512" fill="currentColor"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path> </svg> <span class="text-sm">linkedin</span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-0.5 h-3 w-3 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> <!-- email --> <a href="mailto:dompetrut@gmail.com" class="group flex items-center text-body underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"> <svg width="14" height="14" class="mr-1.5" viewBox="0 0 512 512" fill="currentColor"> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path> </svg> <span class="text-sm">email</span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-0.5 h-3 w-3 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> <!-- resume --> <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="group flex items-center text-body underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"> <svg width="14" height="14" class="mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path> <polyline points="14 2 14 8 20 8"></polyline> <line x1="16" y1="13" x2="8" y2="13"></line> <line x1="16" y1="17" x2="8" y2="17"></line> <line x1="10" y1="9" x2="8" y2="9"></line> </svg> <span class="text-sm">resume</span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-0.5 h-3 w-3 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> </div> </section>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/Name.astro", void 0);

const $$Courses = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Courses;
  const courses = [
    {
      code: "MAT 2143",
      name: "Introduction to Group Theory",
      grade: "A+, 100%",
      description: "Defenition and Propreties of Groups. Arithmetic Modulo n, permutations, cyclic groups. Cosets and Lagrange's theormem. Normal subgroups, homomorphisms, quotien groups, isomorphism theorems."
    },
    {
      code: "MAT 2125",
      name: "Elementary Real Analysis",
      grade: "A+, 94%",
      description: "Propreties of the real numbers. Supremum and infimum, lim sup and lim inf. Sequences and convergence. The topology of Rn. Compactness, Heine-Borel. Continuity and Uniform Continuity. Derivatives, the Riemann integral, the fundamental theorem of calculus, improper integrals. Sequences and series of functions, uniform convergence. Fourier series."
    },
    {
      code: "MAT 2141",
      name: "Honours Linear Algebra",
      grade: "A+, 100%",
      description: "Vector spaces, direct sums and complement of subspaces, linear maps, representation of linear maps by matrices, dual spaces, transpose mappings, multilinear mappings, determinants, inner products, orthogonal projections, the Gram-Schmidt algorithm. Eigenvalues and eigenvectors, diagonalization of symmetric matrices. Symmetric forms and Hermitian forms. Spectral Theorem. Isometries. The emphasis of this course is on proving all results."
    },
    {
      code: "MAT 2122",
      name: "Multivariable Calculus",
      grade: "A+, 100%",
      description: "Derivatives as linear maps, the chain rule. The Clairaut-Schwarz theorem. Taylor's theorem. Implicit function theorem and the invertible function theorem. Extrema, critical points. Lagrange multipliers. Double and triple integrals, Fubini's theorem, polar, spherical and cylindrical coordinates. Change of variables. Line integrals, Green's theorem. Parametric surfaces and surface integrals. Curl and Stokes's theorem, existence of potentials. Divergence and Gauss's theorem. Applications."
    },
    {
      code: "CSI 2101",
      name: "Discrete Structures",
      grade: "A+, 93%",
      description: "Propositional logic, proofs. Induction, invariants and state machines. Number theory. Modular arithmetic. Sums and asymptotics. Reccurences. Counting. Directed graphs, undirected graphs and connectivity. Ramsey numbers."
    },
    {
      code: "MAT2371",
      name: "Introduction to Probability",
      grade: "A+, 100%",
      description: "Probability axioms and their consequences. Conditional probability and independence. Random variables, distributions and densities, moments, sampling distributions. Weak law of large numbers, sums of independent random variables, moment generating functions, convergence concepts, the central limit theorem."
    },
    {
      code: "STA2100",
      name: "Introduction to Statistics",
      grade: "A, 89%",
      description: "Introduction to the theory of statistical inference. Parametric point and interval estimation. Maximum likelihood estimation. Properties of estimators. Principles of hypothesis testing. Confidence intervals and tests for means and proportions (one and two sample). Introduction to linear models. Use of statistical software. ANOVA and Chi-square tests. (Formerly MAT2375)"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pt-2"> <div class="group relative -mx-3 w-full rounded-xl px-3 py-2 transition-all duration-300 ease-in-out md:hover:bg-hover-light"> <button type="button" class="section-toggle flex w-full items-center justify-between text-left py-1" aria-label="Toggle courses"> <h2 class="font-medium tracking-tight text-title pt-2">Relevant Courses (Mathematics)</h2> <svg class="section-chevron h-3 w-3 shrink-0 text-body transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"></path> </svg> </button> <div class="section-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out"> <div class="overflow-hidden"> <div class="pt-1.5"> ${courses.map((course) => renderTemplate`<div class="flex flex-col items-start pt-2"> <div class="group relative -mx-3 w-full rounded-lg px-3 pt-3 pb-2 transition-all duration-300 ease-in-out md:hover:bg-hover-dark ml-0"> <button type="button" class="course-toggle flex w-full cursor-pointer items-center justify-between text-left" aria-label="Toggle details"> <div class="flex items-center gap-2 text-sm font-medium tracking-tight text-title"> <span>${course.code}</span> <span class="font-normal text-body">${course.name}</span> </div> <div class="flex items-center gap-2"> <span class="text-xs font-medium text-accent">${course.grade}</span> <svg class="course-chevron h-3 w-3 shrink-0 text-body transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"></path> </svg> </div> </button> <div class="course-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out"> <div class="overflow-hidden"> <p class="pt-2 text-sm leading-relaxed text-body"> ${course.description} </p> </div> </div> </div> </div>`)} </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/Courses.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/Courses.astro", void 0);

const $$CoursesCS = createComponent(($$result, $$props, $$slots) => {
  const courses = [
    {
      code: "CSI 2520",
      name: "Programming Paradigms",
      grade: "A+, 98%",
      description: "Presentation of the major programming paradigms: Object-oriented, imperative, procedural, functional and logical programming. Solving the stable-matching problem with the Gale-Shapley algorithm in Java, Go, Prolog and Scheme. Note: course was taken in french."
    },
    {
      code: "CSI 2110",
      name: "Data Structures & Algorithms",
      grade: "A+, 97%",
      description: "The concept of abstract data types. Simple methods of complexity analysis. Trees. The search problem: balanced trees, binary-trees, hashing. Sorting. Graphs and simple graph algorithms: traversal, minimum spanning tree. Strings and pattern matching."
    },
    {
      code: "SEG 2105",
      name: "Introduction to Software Engineering",
      grade: "A+, 96%",
      description: "Principles of software engineering: requirments, design and testing. Review of object orientation. UML Class diagram and state machines. Design Patters, MVC. Testing with Junit. Advanced Java features. Multi-threaded programming, non-determinism."
    },
    {
      code: "CSI 2132",
      name: "Databases I",
      grade: "A+, 92%",
      description: "Fundamental database concepts. Entity-Relationship modeling. Relational algebra and relational calculus. Relational databases. Database definition and manipulation using SQL. Embedded SQL. Functional dependencies and normalization. Introduction to physical database design. Indexing and Hashing. Design and implementation of a database application in a team project (I built the term project by myself)."
    },
    {
      code: "CEG 2136",
      name: "Computer Architecture I",
      grade: "A+, NA",
      description: "Design a digital computer to execute a given instruction set. Design of digital computers. Register transfer and microoperations. Designing the instruction set, CPU and CPU control. Basic machine language programming. Using pipelines for CPU design. Designing the memory unit. Designing Input-Output subsystem."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pt-2"> <div class="group relative -mx-3 w-full rounded-xl px-3 py-2 transition-all duration-300 ease-in-out md:hover:bg-hover-light"> <button type="button" class="section-toggle flex w-full items-center justify-between text-left py-1" aria-label="Toggle courses"> <h2 class="font-medium tracking-tight text-title pt-2">Relevant Courses (Computer Science)</h2> <svg class="section-chevron h-3 w-3 shrink-0 text-body transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"></path> </svg> </button> <div class="section-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out"> <div class="overflow-hidden"> <div class="pt-1.5"> ${courses.map((course) => renderTemplate`<div class="flex flex-col items-start pt-2"> <div class="group relative -mx-3 w-full rounded-lg px-3 pt-3 pb-2 transition-all duration-300 ease-in-out md:hover:bg-hover-dark ml-0"> <button type="button" class="course-toggle flex w-full cursor-pointer items-center justify-between text-left" aria-label="Toggle details"> <div class="flex items-center gap-2 text-sm font-medium tracking-tight text-title"> <span>${course.code}</span> <span class="font-normal text-body">${course.name}</span> </div> <div class="flex items-center gap-2"> <span class="text-xs font-medium text-accent">${course.grade}</span> <svg class="course-chevron h-3 w-3 shrink-0 text-body transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"></path> </svg> </div> </button> <div class="course-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out"> <div class="overflow-hidden"> <p class="pt-2 text-sm leading-relaxed text-body"> ${course.description} </p> </div> </div> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/CoursesCS.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      name: "E-Hotel",
      description: "A full-stack hotel booking application where users can browse, search, and book hotel rooms. Features include room filtering, availability checking, and booking management. Built using Java and Apache Tomcat for the backend, with a MySQL database. The frontend is simple, developped using basic HTML, CSS and Javascript.",
      tags: ["Java", "SQL", "HTML/CSS"],
      github: "https://github.com/domzinic/e-hotel-application",
      youtube: "https://youtube.com/"
    },
    {
      name: "Personal Portfolio Website",
      description: "A personal portfolio website built using Astro. The website has a clean, minimalist design, that is inteded to run smoothly on both desktop and mobile devices.",
      tags: ["Astro", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/domzinic/personal-portfolio",
      youtube: "https://youtube.com/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pt-8"> <h2 class="font-semibold tracking-tight text-title">Projects</h2> <div class="pt-1.5"> <!-- Map each project --> ${projects.map((project) => renderTemplate`<div class="flex flex-col items-start pt-2"> <div class="group relative -mx-3 w-full rounded-lg px-3 pt-3 pb-3 transition-all duration-300 ease-in-out md:hover:bg-hover"> <div class="flex flex-col gap-1"> <h3 class="text-sm font-medium tracking-tight text-title md:group-hover:text-accent transition-colors duration-150"> ${project.name} </h3> <p class="text-sm leading-relaxed text-body"> ${project.description} </p> <div class="flex flex-wrap gap-1.5 pt-1"> ${project.tags.map((tag) => renderTemplate`<span class="rounded-md border border-border bg-hover px-1.5 py-0.5 text-xs text-body"> ${tag} </span>`)} </div> </div> <!-- Github and youtube links --> <div class="absolute top-3 right-3 flex items-center gap-2"> ${project.github && renderTemplate`<a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" class="group/gh flex items-center gap-1.5 text-body opacity-0 transition-opacity duration-150 md:group-hover:opacity-100 hover:text-accent"> <span class="opacity-0 text-xs transition-opacity duration-300 ease-in-out group-hover/gh:opacity-100 whitespace-nowrap">
view github repository
</span> <svg width="16" height="16" viewBox="0 0 496 512" fill="currentColor"> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.8-14.3-112.8-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path> </svg> </a>`} ${project.youtube && renderTemplate`<a${addAttribute(project.youtube, "href")} target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube" class="group/yt flex items-center gap-1.5 text-body opacity-0 transition-opacity duration-150 md:group-hover:opacity-100 hover:text-red-500"> <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor"> <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path> </svg> </a>`} </div> </div> </div>`)} </div> </section>`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/components/Projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Name", $$Name, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Courses", $$Courses, {})} ${renderComponent($$result2, "CoursesCS", $$CoursesCS, {})} ` })}`;
}, "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/dompe/Desktop/personalportfolio/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
