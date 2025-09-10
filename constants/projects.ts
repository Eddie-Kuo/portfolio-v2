import intellicourse from "../assets/images/intellicourse.png";
import washingtonGym from "../assets/images/washington-gym.png";
import soundPalette from "../assets/images/sound-palette.png";
import collabo from "../assets/images/collabo.png";
import oneSend from "../assets/images/one-send.png";

export const projects = [
  {
    title: "Intellicourse.ai",
    description:
      "A fullstack web application utilizing AI to generate a custom detailed course roadmap for the user to follow and learn new topics. Courses are broken down into detailed units and chapters with relevant YouTube videos followed by an end of chapter quiz to reinforce the material.",
    deployedLink: "https://intellicourse-ai.vercel.app/",
    image: intellicourse,
    technologies: [
      "TypeScript",
      "Next.js",
      "TursoDB",
      "Drizzle ORM",
      "OpenAI API",
      "YouTube API",
      "TailwindCSS",
    ],
  },
  {
    title: "One-Send",
    description:
      "Share personal documents and information at ease with anyone you'd like with this facial encryption sharing platform.",
    deployedLink: "https://onesend.info",
    image: oneSend,
    technologies: ["TypeScript", "Nest.js", "GCP"],
  },
  {
    title: "Sound Palette",
    description:
      "Create your own palette of sound with this interactive 3D music app. Users can select from a variety of instrument sounds and render colors on key press that turn into gradients when multiple keys are pressed together on the virtual keyboard, creating a mesmerizing experience.",
    deployedLink: "https://sound-palette.netlify.app/",
    image: soundPalette,
    technologies: ["JavaScript", "Three.js", "React", "Netlify"],
  },
  {
    title: "Collabo",
    description:
      "Create music with collaborators around the world with our open source song project platform. Collabo was created to aid musicians from around the world over come collaboration hurdles when it comes to living in different cities. Users can contribute to open source projects with a similar style to Github.",
    deployedLink: "https://monumental-raindrop-9e8457.netlify.app",
    image: collabo,
    technologies: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Supabase",
      "TailwindCSS",
    ],
  },
  // {
  //   title: "Washington Gym",
  //   description: "A frontend project showcasing a local gym in Houston, Texas.",
  //   deployedLink: "https://washington-gym.vercel.app/",
  //   image: washingtonGym,
  //   technologies: ["HTML & CSS", "JavaScript", "Figma", "Vercel"],
  // },
];
