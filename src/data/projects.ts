import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "My portfolio",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Netlify"],
    image: {
      LIGHT: "/images/projects/portfolioLight.png",
      DARK: "/images/projects/portfolioDark.png",
    },
  },
  {
    index: 1,
    title: "Mystaria",
    href: "/projects",
    tags: [
      "MERN STACK ",
      "REactjs",
      "Tailwindcss",
      "Expressjs",
      "MONGODBDB",
      "Render",
      "Socket io",
    ],
    image: {
      LIGHT: "/images/projects/mystariaLight.png",
      DARK: "/images/projects/mystariaDark.png",
    },
  },
  {
    index: 2,
    title: "Animated Pages",
    href: "/projects",
    tags: ["Reactjs", "Nextjs", "Tailwindcss", "Framer motion", "Vercel"],
    image: {
      LIGHT: "/images/projects/animeDark.png",
      DARK: "/images/projects/animeDark.png",
    },
  },
];




export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.png",
      "/images/projects/portfolioLight.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/aamna-ansari/Portfolio_aaMna",
    liveWebsiteHref: "https://aamnansari.vercel.app/",
  },
  {
    name: "Mystaria",
    favicon: "/images/projects/logos/calculator.ico",
    imageUrl: [
      "/images/projects/mystariaLight.png",
      "/images/projects/mystariaDark.png",
      "/images/projects/dashboard.png",
      "/images/projects/community.png",
    ],
    description:
      "A Social media web application using the mernstack. Featuring real time notifications, private chatting with text and image support , positing with crud functionality , ai generated images , jarvis, a voice controlled assistant for managing complete website and many more",
    sourceCodeHref: "",
    iframeSrc:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7253808188519501825"
  },
  {
    name: "Animated Gaming Page",
    favicon: "/images/projects/logos/Toggle.ico",
    imageUrl: [
    "/images/projects/gaming1.png",
     "/images/projects/gaming2.png",
     "/images/projects/gaming3.png",
    ],
    description:
      "A modern animated landing page built with React JS and GSAP, featuring smooth transitions and dynamic visuals to create a clean, interactive user experience",
    sourceCodeHref: "https://github.com/waleedahmad36/gamee",
    liveWebsiteHref: "https://gamee-taupe.vercel.app/",
  },
  {
    name: "Cooking Page",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/cooking2.png",
      "/images/projects/cooking.png"
    ],
    description:
      "A sleek Next.js landing page designed for cooking enthusiasts, crafted with Core CSS and Framer Motion for fluid animations and a delightful, recipe-focused user experience",
    sourceCodeHref: "https://github.com/waleedahmad36/Cooking",
    liveWebsiteHref: "https://cooking-wine.vercel.app/",
  },
  {
    name: "A Next js, Prisma and postgress sql Site",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/nextjsPrisma.png",
      "/images/projects/nextjsPrisma2.png"
    ],
    description:
      "This website is built in nextjs , along with prisma and postgress sql , this website covers e commerce functionality , admin dahsboards , posts handling and some other stuff too.",
    sourceCodeHref: "",
    iframeSrc:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7213212048090923009"
  },
  {
    name: "MERN stack, E commerce Website",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/ecommerce.png",
      "/images/projects/ecommerce1.png"
    ],
    description:
      "This is an ecommerce website built in mern stack , covering everything , buying , saling , products , adding them to cart , paypal payment integration , admin dashboard , sales details , recipt and many more.",
    sourceCodeHref: "",
    iframeSrc:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7196810841747263490"
  },
  {
    name: "Awarded Websites Clone",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/awarded.png",
    ],
    description:
      "I build this website in next js with some beautiful and attractive animations, we used react awsome reveal , framer motion and some other stunning libraries to make it look attractive",
    sourceCodeHref: "",
    iframeSrc:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7264307114116796416"
  },
  {
    name: "Other Portfolio in nextjs",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/otherPortfolio.png",
    ],
    description:
      "This portfolio is built in nextjs along with asternity ui, a modern and attractive components are used in this website",
    sourceCodeHref: "https://github.com/waleedahmad36/portfolio",
    liveWebsiteHref: "https://portfolio-qyo5.vercel.app/",
  },
  {
    name: "Netflix, A video searching and watching plateform",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/netflix.png",
      "/images/projects/netflix2.png",
      "/images/projects/netflix3.png",
    ],
    description:
      "This is a complete fully functional full stack netflix clone , handling proper auth , users history , watching and searching any movie or tv show they want to see",
    sourceCodeHref: "https://github.com/waleedahmad36/mern-netflix",
    iframeSrc:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7222296771081719808"
  },
  {
    name: "Linked In, a web application built in mernstack",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/linkedin.png",
      "/images/projects/linkedin2.png",
    ],
    description:
      "This is linked clone , a full stack project where users can create post, comment on others, can send connection requests and also they can accept others requests",
    sourceCodeHref: "https://github.com/waleedahmad36/11-Dom-Projects/tree/main",
    iframeSrc:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242574206012473347"
  },
  {
    name: "Javascript problem solving and Css animations channlenges",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/css.png",
    ],
    description:
      "I build this website in next js with some beautiful and attractive animations, we used react awsome reveal , framer motion and some other stunning libraries to make it look attractive",
    sourceCodeHref: "https://github.com/waleedahmad36/11-Dom-Projects",
  },
  {
    name: "AI, integrated Scam Analyzer",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/client.png",
      "/images/projects/client2.png",
    ],
    description:
      "I build this scam analyzer for my client , this analyzer is fully capable to verify any bussiness domains, based on bussiness details , domain verification and some other results , it gives the score out of 100 also to make sure how much this bussiness is credible",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "A Quiz Application in reactjs",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/quiz.png",
      "/images/projects/quiz1.png",
    ],
    description:
      "This project is built in react js , a quiz application for various programming languages , after passing the quiz , user can also get his certificate from website",
    sourceCodeHref: "https://github.com/waleedahmad36/quiz-application",
    liveWebsiteHref: "https://quiz-application-psi-topaz.vercel.app/",
  },
  {
    name: "A recipee Finder Reactjs Web application",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/recipeefinder.png",
    ],
    description:
      "I build this website in next js with some beautiful and attractive animations, we used react awsome reveal , framer motion and some other stunning libraries to make it look attractive",
    sourceCodeHref: "https://github.com/waleedahmad36/cook_anything/tree/main",
    liveWebsiteHref: "https://cook-anything-wheat.vercel.app/",
  },
];
