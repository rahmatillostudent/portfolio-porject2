const projects = [
  {
    title: "AkademNashr",
    githubLink: "https://github.com/Nazarovfarhod/akademnashir",
    vercelLink: "akademnashir-weld.vercel.app",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/Nazarovfarhod/ansormed",
    vercelLink: "ansormed-xi.vercel.app",
  },
  {
    title: "My Cart",
    githubLink: "https://github.com/Nazarovfarhod/nazarovfarhod-user-card",
    vercelLink: "nazarovfarhod-user-card.vercel.app",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
