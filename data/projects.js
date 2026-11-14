 /* Project data. Add a new object to this array to add a project card — no other file needs to change.
 *
 * HONESTY NOTE: only mark a feature as implemented after checking your own source code.
 * Empty repo/demo values mean the buttons are not shown.
 */
window.PROJECTS = [
 {
    id: "codenest",
    featured: true,
    title: "CodeNest",
    subtitle: "Online coding workspace",
    status: "In progress",
    description:
      "A browser-based coding workspace with an editor, accounts and a Node.js backend. In development.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    image: "assets/images/projects/codenest.jpg",
    imageAlt: "CodeNest landing page with a code editor preview showing a C++ hello-world program",
    repo: "",   // add your GitHub repository URL (https://...)
    demo: "",   // add the live demo URL once deployed (https://...)
    caseStudy: "projects/codenest.html"
  },
  {
    id: "folio-resume-builder",
    featured: false,
    title: "Folio",
    subtitle: "Live resume builder",
    status: "Completed",
    description:
      "A resume builder with a live A4 preview. It has four templates, section reordering, autosave in the browser, JSON import and export, and PDF download through print.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/projects/folio.png",
    imageAlt: "Folio resume builder with an editor on the left and a live A4 resume preview on the right",
    repo: "https://github.com/Vaibhav011007/Live-Resume-Builder",
    demo: "resumebuilder-rust-nine.vercel.app",   // replace with your real Vercel link
    caseStudy: ""
  }
];
