const siteConfig = {
  name: "Samuel Žárský",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "O mně",
      href: "#o-mne",
    },
    {
      label: "Technologie",
      href: "#technologie",
    },
    {
      label: "Projekty",
      href: "#projekty",
    },
    {
      label: "Kontakt",
      href: "#kontakt",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    chc: "https://creativehill.cz",
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  githubProjects: [
    {
      label: "Lumberjack's Adventure",
      description:
        "3D hra vytvořená v Unity, hráč kácí stromy, plní úkoly a postupuje v levelech.",
      technologies: "Unity, C#",
      href: "https://github.com/StringSlayyer/LumberjacksAdventure",
    },
    {
      label: "Rozřazení žáků",
      description:
        "Aplikace pro generování časového rozvrhu zkoušek a přiřazení jmen z poskytnutého seznamu podle zadaného časového rozmezí.",
      technologies: "Java",
      href: "https://github.com/StringSlayyer/rozrazeni-zaku-java",
    },
    {
      label: "Jednoduchý bankovní systém",
      description:
        "Aplikace simulující bankovní systém s možností vkládání a vybírání peněz, kontokorentu a spotřebitelského úvěru.",
      technologies: "Java",
      href: "https://github.com/StringSlayyer/bankovni_ucet-java",
    },
    {
      label: "Tenis",
      description:
        "Simulace tenisového zápasu, kde hráč určuje, který hráč vyhraje.",
      technologies: "Java",
      href: "https://github.com/StringSlayyer/tenis-java",
    },
  ],
};

export { siteConfig }; // Export the siteConfig variable
