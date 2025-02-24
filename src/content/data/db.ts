import type { Skills, SocialProps } from "../../interfaces/Interface";

export const links =  [
        { name: "Sobre mi", path: "/" },
        { name: "Proyectos", path: "/projects" },
      ];

/** USED ON INDEX  */

export const socials: SocialProps[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/angel-castillo-76616934b/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/angelcastillo25',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ffcastillo_/',
    icon: 'M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9ZM18 5.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'
  }
];

export const aboutMe = {
  description : "Soy un profesional apasionado por la tecnología y el desarrollo de soluciones innovadoras. Cuento con experiencia en el diseño, desarrollo e implementación de sistemas y aplicaciones, tanto en el ámbito académico como en proyectos personales. Me enfoco en crear soluciones eficientes, escalables y centradas en el usuario, aplicando tecnologías modernas y buenas prácticas.",
  aboutMeLarge: "Me considero una persona proactiva, con habilidades para trabajar en equipo y una gran capacidad para aprender y adaptarme a nuevos desafíos. Mi objetivo es seguir creciendo profesionalmente, aportando valor a través de mi trabajo y contribuyendo al éxito de proyectos que generen un impacto positivo. Mi objetivo es seguir creciendo profesionalmente, expandiendo mis conocimientos y habilidades en nuevas áreas y tecnologías. Busco aportar valor a través de mi trabajo, no solo cumpliendo con las expectativas, sino superándolas, contribuyendo al éxito de proyectos que no solo alcancen sus metas, sino que generen un impacto positivo y duradero tanto para los usuarios como para la organización.",
  memory: "Desde muy pequeño, he sentido bastante fascinación por entender el mundo que me rodea. La astronomía, la física cuántica y la filosofía siempre fueron temas de los que me emocionaba hablar e investigar, despertando la curiosidad y el interés por explorar grandes preguntas. No considero esta fascinación como un pasatiempo, sino como una parte esencial de quien soy. Siempre disfruto leer un buen libro que hable de estos temas acompañado de una taza de café."
}

export const skills: Skills = {
  Frontend: [
      { name: "Javascript", level: 58 },
      { name: "React", level: 40 },
      { name: "Next.js", level: 25 },
      { name: "Astro.js", level: 20 },
      { name: "Bootstrap", level: 40 },
      { name: "Material UI", level: 40 },
      { name: "Styled componentes", level: 50 },
  ],
  Backend: [
      { name: "Spring Boot", level: 47 },
      { name: "C#", level: 20 },
      { name: "PHP", level: 40 },
      { name: "Kotlin", level: 20 },
      { name: "Laravel", level: 20 },
  ],
  "Data Engineering": [
      { name: "SQL", level: 65 },
      { name: "Pandas", level: 20 },
  ],
  Databases: [
    { name: "MySQL", level: 60 },
    { name: "Oracle", level: 60 },
  ],
  Diseño: [
      { name: "Figma", level: 65 },
      { name: "Adobe ilustrator", level: 25 },
      { name: "Adobe phothoshop", level: 35 },
  ],
};


export const languages =  [
  { name: "Español", level: 100, description: "100% Nativo"},
  { name: "Ingles", level: 60, description: "B2 intermedio Avanzado"},
];