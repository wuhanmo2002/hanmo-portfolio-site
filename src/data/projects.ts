export type ProjectLink = {
  label: string;
  href: string;
};

export type DetailSection = {
  title: string;
  body: string | string[];
};

export type Project = {
  id: string;
  title: string;
  year: string;
  duration: string;
  role: string;
  production: string;
  language?: string;
  format: string;
  logline: string;
  approach: string | string[];
  credits: string[];
  awards: string[];
  heroImage: string;
  detailHeroImageMobile?: string;
  cardImage?: string;
  gallery: string[];
  links: ProjectLink[];
  detailSections: DetailSection[];
  accent: string;
  featured?: boolean;
};

export type AbilityCard = {
  title: string;
  text: string;
};

export const imdbUrl = "https://www.imdb.com/name/nm18410734/?ref_=ext_shr_lnk";
export const instagramUrl =
  "https://www.instagram.com/lucas_filmmaking?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr";
export const email = "wuhanmo2002@gmail.com";
export const siteDomain = "hanmowu.com";

export const reel = {
  title: "Film Portfolio Reel",
  heroVideo: "/assets/video/hero-montage.mp4",
  mobileHeroVideo: "/assets/video/hero-montage-mobile.mp4",
  localVideo: "/assets/video/film-portfolio-reel-hanmo-wu-720p.mp4",
  youtube: "https://youtu.be/EWJWSX2H670",
  poster: "/assets/images/one-more-chance-hero.jpg",
};

export const projects: Project[] = [
  {
    id: "one-more-chance",
    title: "One More Chance",
    year: "2023",
    duration: "14 min",
    role: "Director / Director of Photography / Digital Colorist",
    production: "Beijing Straw Dog Culture Media",
    language: "Chinese with English subtitles",
    format: "Short Film",
    logline:
      "A rebellious girl is sent by her mother to an internet-addiction treatment center, where correction becomes control and the language of care turns into institutional violence.",
    approach: [
      "One More Chance is built around the moment when family anxiety becomes institutional control. As director, Hanmo shaped the treatment center not simply as a location, but as a physical extension of failed communication between mother and daughter. The film begins with the restless energy of the internet cafe, using fast inserts, red-blue contrast, glowing screens, and fragmented details to reflect the protagonist's desire for escape.",
      "Once the story enters the academy, the image becomes colder, more restrained, and more oppressive. The 2:1 frame, anamorphic lensing, high-angle observation, blocked movement, and green fluorescent pressure make the institution feel like a system closing around the body. In the electrotherapy room and reception room, the camera focuses on power: who controls the space, who is being watched, and whose voice is no longer believed.",
      "As digital colorist, Hanmo avoided a clean digital finish. The grade preserves green-yellow institutional tones, aging walls, practical light, controlled contrast, and subtle texture. The goal is not to beautify suffering, but to make the world specific, credible, and morally unsettling.",
    ],
    credits: ["Director", "Director of Photography", "Digital Colorist"],
    awards: [
      "Semi-Finalist, 2024 Flickers’ Rhode Island International Film Festival",
      "International Competition, 2024 Tehran International Short Film Festival",
      "Finalist, 2024 Toronto International Nollywood Film Festival",
      "Best Short Film Main Competition Nomination, 2024 Shanghai International Short Film Week",
      "Best Short Film Selection, 2024 Rome Prisma Film Awards",
    ],
    heroImage: "/assets/images/one-more-chance-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/one-more-chance-mobile-hero.jpg",
    cardImage: "/assets/images/one-more-chance-poster.jpg",
    gallery: [
      "/assets/images/one-more-chance-gallery-01.jpg",
      "/assets/images/one-more-chance-gallery-02.jpg",
      "/assets/images/one-more-chance-gallery-03.jpg",
      "/assets/images/one-more-chance-gallery-04.jpg",
      "/assets/images/one-more-chance-gallery-05.jpg",
      "/assets/images/one-more-chance-gallery-06.jpg",
    ],
    links: [{ label: "Watch on YouTube", href: "https://youtu.be/mcR_YfNMBVs" }],
    detailSections: [
      {
        title: "Directing",
        body:
          "One More Chance is built around the moment when family anxiety becomes institutional control. As director, Hanmo shaped the treatment center not as a neutral location, but as the physical extension of a failed conversation between mother and daughter. The opening internet-cafe sequence uses restless inserts, screen light, red-blue contrast, and fragmented details to locate the protagonist inside escape, resistance, and the need to recover a sense of self.",
      },
      {
        title: "Cinematography",
        body:
          "Once the story enters the academy, the image becomes colder, more restrained, and more oppressive. The 2:1 frame, anamorphic lensing, high-angle observation, blocked movement, and green fluorescent pressure make the institution feel like a system closing around the body. In the electrotherapy and reception-room scenes, the camera is organized around power: who controls the space, who is watched, and whose voice is no longer believed.",
      },
      {
        title: "Digital Color",
        body:
          "Rather than giving the film a clean digital finish, the grade preserves green-yellow institutional tones, aging walls, practical light, controlled contrast, and subtle texture. The goal is not to beautify suffering, but to keep the world specific, credible, and morally unsettling.",
      },
    ],
    accent: "#d0483e",
    featured: true,
  },
  {
    id: "hidden-love",
    title: "Hidden Love",
    year: "2022",
    duration: "15 min",
    role: "Director / Director of Photography / Digital Colorist",
    production: "Nanjing Normal University Zhongbei College",
    language: "Chinese with English subtitles",
    format: "Short Film",
    logline:
      "After the death of her mother, a teenage girl under academic pressure begins to reject her quiet, awkward father, only to recognize that his love has always been hidden inside responsibility.",
    approach: [
      "Hidden Love comes from Hanmo's memory of small-town life and ordinary working families. As director, he avoided melodrama and looked for emotion in cooking, silence, domestic labor, and the inability of a father and daughter to speak directly about grief. The father is not treated as weak, but as someone shaped by years of absence, migrant labor, and the pressure to hold a broken family together.",
      "The cinematography uses handheld movement to preserve a quiet breathing rhythm. Doorways, tables, kitchen counters, and narrow interiors often sit between the father and daughter, turning emotional distance into visible space. Naturalistic light, warm practical sources, and controlled contrast keep the film intimate and restrained.",
      "As digital colorist, Hanmo kept the image warm but unsentimental. The grade supports the film's realist tone through soft contrast, muted color separation, and a tactile domestic texture. The visual principle is old but not dirty: the house is worn, but clean, dignified, and full of traces of care.",
    ],
    credits: ["Director", "Director of Photography", "Digital Colorist"],
    awards: [
      "Winner, Best Student Short Film, 2024 Los Angeles Short Film Award",
      "Best Art Design Selection, 2024 Asia International Youth Film Festival",
      "Best Short Film Selection, 2023 Hollywood Shortsfest",
      "Best Short Film Selection, 2023 Macao International Film Festival",
      "Best Short Film Main Competition Selection, 2023 Shanghai International Short Film Week",
    ],
    heroImage: "/assets/images/hidden-love-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/hidden-love-mobile-hero.jpg",
    cardImage: "/assets/images/hidden-love-poster.jpg",
    gallery: [
      "/assets/images/hidden-love-gallery-01.jpg",
      "/assets/images/hidden-love-gallery-02.jpg",
      "/assets/images/hidden-love-gallery-03.jpg",
      "/assets/images/hidden-love-gallery-04.jpg",
      "/assets/images/hidden-love-gallery-05.jpg",
      "/assets/images/hidden-love-gallery-06.jpg",
    ],
    links: [{ label: "Watch on YouTube", href: "https://youtu.be/FGvFSjnzEMQ" }],
    detailSections: [
      {
        title: "Directing",
        body:
          "Hidden Love comes from Hanmo's memory of small-town life and ordinary working families. As director, he avoids melodrama and looks for emotion in cooking, silence, domestic labor, and the inability of a father and daughter to speak directly about grief. The father is not treated as weak, but as someone shaped by years of absence, migrant labor, and the pressure to hold a broken family together.",
      },
      {
        title: "Cinematography",
        body:
          "The cinematography uses handheld movement to preserve a quiet breathing rhythm. Doorways, tables, kitchen counters, and narrow interiors often sit between the father and daughter, turning emotional distance into visible space. Naturalistic light, warm practical sources, and controlled contrast keep the film intimate and restrained.",
      },
      {
        title: "Digital Color",
        body:
          "The grade keeps the image warm but unsentimental. Soft contrast, muted color separation, and tactile domestic texture support the film's realist tone. The visual principle is old but not dirty: the house is worn, but clean, dignified, and full of traces of care.",
      },
    ],
    accent: "#d7a34a",
    featured: true,
  },
  {
    id: "welcome-home",
    title: "Welcome Home",
    year: "2025",
    duration: "7 min",
    role: "Director of Photography / Digital Colorist",
    production: "Chapman University Dodge College of Film and Media Arts",
    language: "English",
    format: "Short Film",
    logline:
      "A female hiker enters a remote shelter, where an encounter that begins with warmth and trust gradually turns into danger.",
    approach: [
      "Welcome Home is structured around the construction and collapse of trust. Since the story takes place largely inside one shelter, Hanmo treated the space as a character whose meaning changes over time. At the beginning, the room needed to feel readable, warm, and temporarily safe. Balanced framing, motivated light, and clear spatial geography allow the audience to believe that the encounter may become a moment of refuge.",
      "As the story progresses, the same space gradually becomes more restrictive. Tighter framing, foreground obstruction, heavier shadows, and less comfortable camera placement reduce the viewer's sense of control. The visual rhythm becomes less open, and the relationship between the characters becomes more asymmetrical. The shelter is no longer just a place where the protagonist stays; it becomes a psychological trap built through blocking, light, and perspective.",
      "As digital colorist, Hanmo continued this transformation through contrast and temperature. The early scenes hold onto a warmer and more approachable palette, while later moments move toward colder tones, deeper shadows, and a more controlled sense of separation. The grade was not meant to announce the danger too early, but to let warmth slowly lose its stability until the audience realizes that comfort has already turned into threat.",
    ],
    credits: ["Director of Photography", "Digital Colorist"],
    awards: [],
    heroImage: "/assets/images/welcome-home-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/welcome-home-mobile-hero.jpg",
    cardImage: "/assets/images/welcome-home-poster.jpg",
    gallery: [
      "/assets/images/welcome-home-gallery-01.jpg",
      "/assets/images/welcome-home-gallery-02.jpg",
      "/assets/images/welcome-home-gallery-03.jpg",
      "/assets/images/welcome-home-gallery-04.jpg",
      "/assets/images/welcome-home-gallery-05.jpg",
      "/assets/images/welcome-home-gallery-06.jpg",
    ],
    links: [{ label: "Watch on YouTube", href: "https://youtu.be/N7vjhZjAauM" }],
    detailSections: [
      {
        title: "Cinematography",
        body: [
          "Welcome Home is structured around the construction and collapse of trust. Since the story takes place largely inside one shelter, Hanmo treated the space as a character whose meaning changes over time. At the beginning, the room needed to feel readable, warm, and temporarily safe. Balanced framing, motivated light, and clear spatial geography allow the audience to believe that the encounter may become a moment of refuge.",
          "As the story progresses, the same space gradually becomes more restrictive. Tighter framing, foreground obstruction, heavier shadows, and less comfortable camera placement reduce the viewer's sense of control. The visual rhythm becomes less open, and the relationship between the characters becomes more asymmetrical. The shelter is no longer just a place where the protagonist stays; it becomes a psychological trap built through blocking, light, and perspective.",
        ],
      },
      {
        title: "Digital Color",
        body:
          "The grade continues this transformation through contrast and temperature. Early scenes hold onto a warmer and more approachable palette, while later moments move toward colder tones, deeper shadows, and a more controlled sense of separation. The color does not announce danger too early; it lets warmth slowly lose stability until comfort has already turned into threat.",
      },
    ],
    accent: "#c27a48",
    featured: true,
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    year: "2023",
    duration: "18 min",
    role: "Director of Photography",
    production: "Xi'an Jiaotong-Liverpool University",
    language: "Chinese",
    format: "Short Film",
    logline:
      "A performance-driven drama built around misunderstanding, emotional distance, and reconciliation.",
    approach: [
      "The cinematography of Pride and Prejudice is designed to support performance with clarity, rhythm, and efficiency. Since the film depends heavily on actor interaction, Hanmo focused on building a visual structure that could protect the emotional continuity of the scene. The camera language remains restrained, allowing facial reactions, timing, and shifts in body language to carry the drama.",
      "Clean blocking and readable coverage were central to the approach. Wider frames establish distance, social pressure, and the relationship between characters within the space. As the emotional dynamic changes, controlled shifts in shot size allow the audience to move closer to the characters' vulnerability. The progression is simple but deliberate: from distance, to tension, to recognition.",
      "Hanmo avoided overcomplicating the image because the film needed a polished but practical visual system. The goal was to give the director and editor enough flexibility while keeping the performance rhythm intact. In this project, cinematography functions less as spectacle and more as structure: it holds the actors, organizes emotional beats, and gives the story a clear dramatic shape.",
    ],
    credits: ["Director of Photography"],
    awards: [],
    heroImage: "/assets/images/pride-prejudice-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/pride-prejudice-mobile-hero.jpg",
    cardImage: "/assets/images/pride-prejudice-poster.jpg",
    gallery: [
      "/assets/images/pride-prejudice-gallery-01.jpg",
      "/assets/images/pride-prejudice-gallery-02.jpg",
      "/assets/images/pride-prejudice-gallery-03.jpg",
      "/assets/images/pride-prejudice-gallery-04.jpg",
    ],
    links: [{ label: "Watch on YouTube", href: "https://youtu.be/jzUDIvd43Ro" }],
    detailSections: [
      {
        title: "Cinematography",
        body: [
          "The cinematography of Pride and Prejudice is designed to support performance with clarity, rhythm, and efficiency. Since the film depends heavily on actor interaction, Hanmo focused on building a visual structure that could protect the emotional continuity of the scene. The camera language remains restrained, allowing facial reactions, timing, and shifts in body language to carry the drama.",
          "Clean blocking and readable coverage are central to the approach. Wider frames establish distance, social pressure, and the relationship between characters within the space. As the emotional dynamic changes, controlled shifts in shot size allow the audience to move closer to the characters' vulnerability. The progression is simple but deliberate: from distance, to tension, to recognition.",
          "The image is polished but practical. The goal is to give the director and editor enough flexibility while keeping the performance rhythm intact. In this project, cinematography functions less as spectacle and more as structure: it holds the actors, organizes emotional beats, and gives the story a clear dramatic shape.",
        ],
      },
    ],
    accent: "#8da098",
  },
  {
    id: "wait-for-the-lighthouse",
    title: "Wait for the Lighthouse",
    year: "2024",
    duration: "19 min",
    role: "Director of Photography / Digital Colorist",
    production: "China University of Mining and Technology",
    language: "Chinese",
    format: "Short Film",
    logline:
      "A story shaped by memory, loss, and an unresolved emotional attachment to the past.",
    approach: [
      "The cinematography of Wait for the Lighthouse carries a feeling of waiting, hesitation, and emotional suspension. Hanmo approached the camera as something that stays close to the characters' uncertainty rather than pushing the story toward resolution. Handheld movement gives the image a restrained breathing rhythm, allowing the frame to respond to pauses, small discoveries, and moments of emotional rupture without becoming chaotic.",
      "The visual style is grounded in naturalism. The environment needed to feel present and specific, but never overly designed. Natural light, simple compositions, and quiet camera distance allow the landscape and the characters to exist in the same emotional space. The camera often observes rather than declares, creating a sense that the characters are moving through memories that have not fully settled.",
      "As digital colorist, Hanmo kept the grade quiet and atmospheric. Controlled contrast, muted tones, and subtle separation between skin, shadow, and background help maintain the feeling of suspended grief. The color should feel like a memory that is still alive, but slowly fading. The goal was to make the image hold absence: a signal not yet received, a relationship not yet resolved, and a past that continues to shape the present.",
    ],
    credits: ["Director of Photography", "Digital Colorist"],
    awards: [],
    heroImage: "/assets/images/wait-lighthouse-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/wait-lighthouse-mobile-hero.jpg",
    cardImage: "/assets/images/wait-lighthouse-poster.jpg",
    gallery: [
      "/assets/images/wait-lighthouse-gallery-01.jpg",
      "/assets/images/wait-lighthouse-gallery-02.jpg",
      "/assets/images/wait-lighthouse-gallery-03.jpg",
      "/assets/images/wait-lighthouse-gallery-04.jpg",
    ],
    links: [{ label: "Watch on YouTube", href: "https://youtu.be/EidwZeHXAac" }],
    detailSections: [
      {
        title: "Cinematography",
        body: [
          "The cinematography of Wait for the Lighthouse carries a feeling of waiting, hesitation, and emotional suspension. Hanmo approached the camera as something that stays close to the characters' uncertainty rather than pushing the story toward resolution. Handheld movement gives the image a restrained breathing rhythm, allowing the frame to respond to pauses, small discoveries, and moments of emotional rupture without becoming chaotic.",
          "The visual style is grounded in naturalism. The environment needed to feel present and specific, but never overly designed. Natural light, simple compositions, and quiet camera distance allow the landscape and the characters to exist in the same emotional space. The camera often observes rather than declares, creating a sense that the characters are moving through memories that have not fully settled.",
        ],
      },
      {
        title: "Digital Color",
        body:
          "The grade remains quiet and atmospheric. Controlled contrast, muted tones, and subtle separation between skin, shadow, and background help maintain the feeling of suspended grief. The color should feel like a memory that is still alive, but slowly fading: a signal not yet received, a relationship not yet resolved, and a past that continues to shape the present.",
      },
    ],
    accent: "#6aaebb",
  },
  {
    id: "rose",
    title: "Rose",
    year: "2022",
    duration: "9 min",
    role: "Director of Photography / Digital Colorist",
    production: "Independent",
    language: "Chinese",
    format: "Short Film",
    logline:
      "A writer decides to stop writing for approval and return to a more honest form of expression.",
    approach: [
      "Rose is an intimate film about creative resistance and self-recognition. The story is not driven by external action, but by an internal decision: the moment when a writer stops performing for approval and begins to listen to her own voice again. As cinematographer, Hanmo kept the visual language simple, controlled, and close to the protagonist's interior state.",
      "The camera placement is quiet rather than expressive. Restrained compositions and controlled lighting create a space where hesitation, doubt, and self-awareness can unfold naturally. Instead of forcing drama through movement, the image gives the character stillness. This stillness allows small gestures, pauses, and changes in attention to carry emotional weight.",
      "As digital colorist, Hanmo avoided strong stylization and kept the image soft, focused, and emotionally clean. Natural skin tone, gentle contrast, and subtle separation between the protagonist and her environment support the feeling of a private creative awakening. The grade was designed to make the film feel intimate without becoming overly polished, preserving the fragile honesty at the center of the story.",
    ],
    credits: ["Director of Photography", "Digital Colorist"],
    awards: [],
    heroImage: "/assets/images/rose-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/rose-mobile-hero.jpg",
    cardImage: "/assets/images/rose-poster.jpg",
    gallery: [
      "/assets/images/rose-gallery-01.jpg",
      "/assets/images/rose-gallery-02.jpg",
      "/assets/images/rose-gallery-03.jpg",
      "/assets/images/rose-gallery-04.jpg",
    ],
    links: [{ label: "Watch on YouTube", href: "https://youtu.be/IGyWzgPdT64" }],
    detailSections: [
      {
        title: "Cinematography",
        body: [
          "Rose is an intimate film about creative resistance and self-recognition. The story is not driven by external action, but by an internal decision: the moment when a writer stops performing for approval and begins to listen to her own voice again. As cinematographer, Hanmo kept the visual language simple, controlled, and close to the protagonist's interior state.",
          "The camera placement is quiet rather than expressive. Restrained compositions and controlled lighting create a space where hesitation, doubt, and self-awareness can unfold naturally. Instead of forcing drama through movement, the image gives the character stillness, allowing small gestures, pauses, and changes in attention to carry emotional weight.",
        ],
      },
      {
        title: "Digital Color",
        body:
          "The grade avoids strong stylization and keeps the image soft, focused, and emotionally clean. Natural skin tone, gentle contrast, and subtle separation between the protagonist and her environment support the feeling of a private creative awakening. The film should feel intimate without becoming overly polished, preserving the fragile honesty at the center of the story.",
      },
    ],
    accent: "#b83242",
  },
  {
    id: "descending-into-the-inferno",
    title: "Descending Into the Inferno",
    year: "2023",
    duration: "25 min",
    role: "Production Designer",
    production: "Independent",
    language: "Chinese",
    format: "Short Film",
    logline:
      "A surreal drama moving between performance, death, memory, and spiritual reflection.",
    approach: [
      "As production designer for Descending Into the Inferno, Hanmo worked with the director to build a heightened visual world where grief, humor, performance, and the afterlife could coexist. The story does not belong to strict realism, so the design needed to create an environment that felt theatrical, symbolic, and emotionally playable rather than merely decorative.",
      "The design approach focuses on symbolic space, controlled color, and stylized texture. Instead of reproducing everyday reality, the art direction creates a world that feels slightly displaced from life, as if the characters are moving through a mental or spiritual stage. Color and texture help define the tone of each space, giving the actors a clear atmosphere to respond to.",
      "The main challenge was balance. The world needed to feel strange, but not empty; abstract, but not emotionally distant. Hanmo wanted the design to support the film's metaphysical quality while keeping grief grounded in human experience. Every visual choice had to serve the actors, the tone, and the story's movement between humor and loss.",
    ],
    credits: ["Production Designer"],
    awards: ["Winner, Best Short Film of the Year, 2024 Shanghai International Short Film Week"],
    heroImage: "/assets/images/inferno-hero.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/inferno-mobile-hero.jpg",
    cardImage: "/assets/images/inferno-poster.jpg",
    gallery: [
      "/assets/images/inferno-gallery-01.jpg",
      "/assets/images/inferno-gallery-02.jpg",
      "/assets/images/inferno-gallery-03.jpg",
      "/assets/images/inferno-gallery-04.jpg",
    ],
    links: [],
    detailSections: [
      {
        title: "Production Design",
        body: [
          "As production designer for Descending Into the Inferno, Hanmo worked with the director to build a heightened visual world where grief, humor, performance, and the afterlife could coexist. The story does not belong to strict realism, so the design needed to create an environment that felt theatrical, symbolic, and emotionally playable rather than merely decorative.",
          "The design approach focuses on symbolic space, controlled color, and stylized texture. Instead of reproducing everyday reality, the art direction creates a world that feels slightly displaced from life, as if the characters are moving through a mental or spiritual stage. Color and texture help define the tone of each space, giving the actors a clear atmosphere to respond to.",
          "The main challenge was balance. The world needed to feel strange, but not empty; abstract, but not emotionally distant. The design supports the film's metaphysical quality while keeping grief grounded in human experience, actor performance, and the story's movement between humor and loss.",
        ],
      },
    ],
    accent: "#91856b",
  },
  {
    id: "no-wind-island",
    title: "No Wind Island",
    year: "2023",
    duration: "45 min",
    role: "Digital Colorist",
    production: "Independent",
    language: "Chinese",
    format: "Feature Film",
    logline:
      "A quiet, image-led film shaped by isolation, landscape, and emotional suspension.",
    approach: [
      "As digital colorist for No Wind Island, Hanmo focused on preserving the stillness of the landscape while giving the film a coherent emotional temperature. The image is led by space, distance, and atmosphere, so the grade needed to remain quiet and precise. Rather than creating a heavy stylized look, the color work supports the natural tension between emptiness and human presence.",
      "The grade balances natural color, controlled contrast, highlight protection, and subtle separation between sky, earth, skin, and architecture. Because the film relies heavily on wide landscapes and restrained human movement, small differences in luminance and color separation become important. The environment needs to feel vast, but the characters cannot disappear inside it.",
      "The goal was to let color hold the film's emotional suspension. The image should feel open, dry, quiet, and slightly distant, while still carrying a human trace. The color does not call attention to itself; it works underneath the surface, shaping isolation, silence, and the fragile connection between people and landscape.",
    ],
    credits: ["Digital Colorist"],
    awards: [],
    heroImage: "/assets/images/no-wind-island-poster-new.jpg",
    detailHeroImageMobile: "/assets/images/mobile-heroes/no-wind-island-mobile-hero.jpg",
    cardImage: "/assets/images/no-wind-island-poster-new.jpg",
    gallery: [
      "/assets/images/no-wind-island-poster-new.jpg",
      "/assets/images/no-wind-island-gallery-new-01.jpg",
      "/assets/images/no-wind-island-gallery-new-02.jpg",
      "/assets/images/no-wind-island-gallery-new-03.jpg",
    ],
    links: [],
    detailSections: [
      {
        title: "Digital Color",
        body: [
          "As digital colorist for No Wind Island, Hanmo focused on preserving the stillness of the landscape while giving the film a coherent emotional temperature. The image is led by space, distance, and atmosphere, so the grade needed to remain quiet and precise. Rather than creating a heavy stylized look, the color work supports the natural tension between emptiness and human presence.",
          "The grade balances natural color, controlled contrast, highlight protection, and subtle separation between sky, earth, skin, and architecture. Because the film relies heavily on wide landscapes and restrained human movement, small differences in luminance and color separation become important. The environment needs to feel vast, but the characters cannot disappear inside it.",
          "The goal is to let color hold the film's emotional suspension. The image should feel open, dry, quiet, and slightly distant while still carrying a human trace. The color does not call attention to itself; it works beneath the surface, shaping isolation, silence, and the fragile connection between people and landscape.",
        ],
      },
    ],
    accent: "#d0aa62",
  },
];

export const abilities: AbilityCard[] = [
  {
    title: "Directing",
    text:
      "Hanmo's directing begins with the pressure inside a social situation rather than with plot mechanics alone. In One More Chance, family anxiety becomes institutional violence; in Hidden Love, grief appears through food, silence, and the daily labor of a father who cannot fully explain himself. His scenes are built through performance rhythm, controlled blocking, and the emotional logic of space, so the camera and actor movement grow from the characters' need, shame, fear, or restraint.",
  },
  {
    title: "Cinematography",
    text:
      "As a cinematographer, Hanmo treats camera placement, light, color temperature, movement, lens choice, and coverage as a single production-aware system. Welcome Home uses one shelter to shift from safety to threat; Wait for the Lighthouse uses handheld breathing and natural distance to hold unresolved grief; Pride and Prejudice uses clear blocking and readable coverage to protect performance continuity. His image work favors emotional realism, motivated light, and controlled visual progression over decorative style.",
  },
  {
    title: "Digital Color",
    text:
      "As a digital colorist, Hanmo approaches the grade as both storytelling and finishing discipline. In One More Chance, green-yellow institutional tones keep the world morally unsettling; in Hidden Love, warm but unsentimental domestic color preserves dignity; in Welcome Home, contrast and temperature let comfort become threat; in No Wind Island, restrained separation protects the stillness of landscape. His work focuses on skin tone, contrast, highlight protection, texture, scene continuity, and delivery standards.",
  },
  {
    title: "Festival Strategy",
    text:
      "Hanmo also works with festival positioning, market preparation, and international-facing short film materials. His own films have reached Oscar-qualifying festivals including Flickers’ Rhode Island International Film Festival and Tehran International Short Film Festival, and he has supported projects for platforms such as Clermont-Ferrand Short Film Market, Cannes Short Film Corner / Marché du Film, and International Short Film Festival Oberhausen. This gives him a practical understanding of how films move from creative production into public presentation and circulation.",
  },
];
