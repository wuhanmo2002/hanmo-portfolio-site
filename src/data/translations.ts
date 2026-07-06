import type { DetailSection, ProjectLink } from "./projects";

export type Locale = "en" | "zh";

export type ProjectTranslation = {
  title: string;
  duration: string;
  role: string;
  production: string;
  language?: string;
  format: string;
  logline: string;
  approach: string | string[];
  credits: string[];
  awards: string[];
  links?: ProjectLink[];
  detailSections: DetailSection[];
};

export const uiCopy = {
  en: {
    brand: "Ars longa, vita brevis",
    nav: {
      home: "Home",
      reel: "Reel",
      works: "Works",
      about: "About",
      contact: "Contact",
      language: "Language",
      english: "English",
      chinese: "中文",
      toggle: "Choose language",
    },
    hero: {
      eyebrow: "Director / Cinematographer / Digital Colorist / Festival Strategy",
      title: "Hanmo Wu",
      lede: [
        {
          text:
            "Director, cinematographer, and digital colorist working across narrative cinema, commercial image-making, color workflow, and international short film strategy.",
          strong: true,
        },
        {
          text:
            "He is currently pursuing an MFA in Film Production with a Cinematography emphasis at Chapman University Dodge College of Film and Media Arts.",
        },
        {
          text:
            "His films have been selected by Oscar-qualifying festivals including Flickers’ Rhode Island International Film Festival and Tehran International Short Film Festival. He also supports short films with festival positioning, market preparation, and platform strategy for Clermont-Ferrand Short Film Market, Cannes Short Film Corner / Marché du Film, and International Short Film Festival Oberhausen.",
        },
      ],
    },
    reel: {
      eyebrow: "Reel",
      title: "Film Portfolio Reel",
      body:
        "A selection of Hanmo Wu's work as director, cinematographer, and digital colorist, moving across social realist drama, psychological tension, family stories, and image-led production. The reel emphasizes controlled composition, naturalistic lighting, color rhythm, performance sensitivity, and a belief that cinematic images should carry both emotional truth and production discipline.",
    },
    works: {
      eyebrow: "Works",
      title: "Visual Film Works",
    },
    about: {
      sectionTitle: "About",
      eyebrow: "Bio",
      intro: [
        "Hanmo Wu is a Chinese director, cinematographer, and digital colorist currently pursuing an MFA in Film Production with a Cinematography emphasis at Chapman University Dodge College of Film and Media Arts.",
        "With a background in Radio and Television Directing, he works across narrative filmmaking, commercial image-making, color, and post-production workflow. His practice connects visual storytelling with a rigorous understanding of the production pipeline, from on-set media and live grading workflows to DI finishing and DCP delivery.",
        "His films often explore identity, family, trauma, belonging, and the emotional cost of being shaped by institutions, intimate relationships, and social expectations.",
      ],
      abilityLabel: "Working strengths",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Available for directing, cinematography, color, and festival-facing work.",
      location: "Based in Los Angeles",
      email: "Email",
      imdb: "IMDb",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      emailAria: "Email Hanmo Wu",
    },
    project: {
      back: "Back",
      year: "Year",
      duration: "Duration",
      role: "Role",
      production: "Production",
      language: "Language",
      credits: "Credits",
      approach: "Approach",
      awards: "Awards / Selections",
      fallback: "Festival notes can be expanded after the next curation pass.",
      next: "Next Work",
      externalLinks: "external video links",
      gallery: "gallery",
      visual: "visual",
    },
  },
  zh: {
    brand: "Ars longa, vita brevis",
    nav: {
      home: "首页",
      reel: "作品集锦",
      works: "作品",
      about: "关于",
      contact: "联系",
      language: "语言",
      english: "English",
      chinese: "中文",
      toggle: "选择语言",
    },
    hero: {
      eyebrow: "导演 / 摄影指导 / 数字调色师 / 电影节策略",
      title: "吴晗默",
      lede: [
        {
          text:
            "导演、摄影指导与数字调色师，创作横跨剧情电影、商业影像、色彩流程与国际短片电影节策略。",
          strong: true,
        },
        {
          text:
            "现就读于查普曼大学道奇电影与媒体艺术学院电影制作 MFA 摄影方向。",
        },
        {
          text:
            "他的作品曾入围罗德岛国际电影节、德黑兰国际短片电影节等奥斯卡资格认证电影节。他也为短片项目提供电影节定位、市场材料准备与平台策略支持，帮助作品进入克莱蒙费朗短片市场、戛纳短片角、奥伯豪森国际短片电影节等国际平台。",
        },
      ],
    },
    reel: {
      eyebrow: "作品集锦",
      title: "电影作品集锦",
      body:
        "精选吴晗默作为导演、摄影指导与数字调色师参与的影像作品，涵盖现实题材、心理张力、家庭叙事与视觉主导型创作。作品集锦强调构图控制、自然主义光线、色彩节奏、表演敏感度，以及影像在情感真实与制作纪律之间的平衡。",
    },
    works: {
      eyebrow: "作品",
      title: "视觉影像作品",
    },
    about: {
      sectionTitle: "关于",
      eyebrow: "个人简介",
      intro: [
        "吴晗默是一名中国导演、摄影指导与数字调色师，现就读于查普曼大学道奇电影与媒体艺术学院电影制作 MFA 摄影方向。",
        "本科阶段学习广播电视编导后，他逐渐形成了横跨剧情片创作、商业影像、色彩流程与后期制作的综合实践。他的工作方式将视觉叙事与完整制作流程相结合，从现场媒体管理、现场调色，到 DI 制作与 DCP 交付，持续建立严谨的影像生产意识。",
        "他的作品常关注身份、家庭、创伤、归属感，以及个体被机构、亲密关系和社会期待塑造时所付出的情感代价。",
      ],
      abilityLabel: "工作方向",
    },
    contact: {
      eyebrow: "联系",
      heading: "可承接导演、电影摄影、调色与面向电影节发行的项目合作。",
      location: "常驻洛杉矶",
      email: "邮箱",
      imdb: "IMDb",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      emailAria: "发送邮件给吴晗默",
    },
    project: {
      back: "返回",
      year: "年份",
      duration: "片长",
      role: "职责",
      production: "制作",
      language: "语言",
      credits: "职务",
      approach: "创作方法",
      awards: "获奖 / 入选",
      fallback: "电影节信息可在下一轮整理中继续补充。",
      next: "下一部作品",
      externalLinks: "外部视频链接",
      gallery: "剧照",
      visual: "画面",
    },
  },
} as const;

export const projectZh: Record<string, ProjectTranslation> = {
  "one-more-chance": {
    title: "再会峡江间",
    duration: "14 分钟",
    role: "导演 / 摄影指导 / 数字调色师",
    production: "北京稻草狗文化传媒",
    language: "中文对白 / 英文字幕",
    format: "短片",
    logline:
      "叛逆少女被母亲送入一所以“矫正”为名的网瘾治疗机构，却发现关怀的语言背后，是控制、规训与机构暴力。",
    approach: [
      "《再会峡江间》围绕“家庭焦虑如何转化为机构控制”展开。作为导演，吴晗默没有把治疗中心仅仅当作场景，而是将其处理成母女沟通失败之后，被外部权力实体化的空间。影片开场的网吧段落使用快速特写、红蓝撞色、屏幕光和碎片化细节，呈现主人公躁动、逃离和寻找自我价值的状态。",
      "进入书院后，影像逐渐变得冷峻、受限并具有压迫感。2:1 画幅、变形宽银幕镜头、高角度观察、受阻的调度和绿色荧光压力，让机构像一个逐渐合拢的系统。电疗室和接待室的镜头重点不只是痛苦，而是权力关系：谁掌控空间，谁被观看，谁的声音不再被相信。",
      "作为数字调色师，吴晗默避免干净锐利的数字感，而是保留青黄色机构空间、旧墙面、实用光源、受控反差和细微颗粒。目标不是美化苦难，而是让这个世界具体、可信，并持续令人不安。",
    ],
    credits: ["导演", "摄影指导", "数字调色师"],
    awards: [
      "2024 罗德岛国际电影节 半决赛入围",
      "2024 德黑兰国际短片电影节 国际竞赛单元入选",
      "2024 多伦多国际诺莱坞电影节 决赛入围",
      "2024 上海国际短片周 最佳短片主竞赛提名",
      "2024 Rome Prisma Film Awards 最佳短片入选",
    ],
    links: [{ label: "在 YouTube 观看", href: "https://youtu.be/mcR_YfNMBVs" }],
    detailSections: [
      {
        title: "导演",
        body:
          "《再会峡江间》围绕家庭焦虑如何被外部机构接管展开。作为导演，吴晗默没有把治疗中心处理成单纯场景，而是把它视为母女沟通失败后被实体化的权力空间。网吧段落以快速插入、屏幕光、红蓝对比和碎片化细节呈现少女的逃离欲望、抵抗状态与自我确认需求。",
      },
      {
        title: "摄影指导",
        body:
          "进入书院后，影像逐渐冷却、收紧并产生压迫。2:1 画幅、变形宽银幕镜头、高角度观察、受阻调度和绿色荧光压力，使机构像一个逐步合拢的系统。电疗室与接待室的摄影重点不只是痛苦，而是权力关系：谁掌控空间，谁被观看，谁的声音被剥夺。",
      },
      {
        title: "数字调色",
        body:
          "调色避免干净锐利的数字质感，保留青黄色机构空间、旧墙面、实用光源、受控反差和细微颗粒。目标不是美化苦难，而是让这个世界保持具体、可信，并在视觉上持续令人不安。",
      },
    ],
  },
  "hidden-love": {
    title: "桑榆",
    duration: "15 分钟",
    role: "导演 / 摄影指导 / 数字调色师",
    production: "南京师范大学中北学院",
    language: "中文对白 / 英文字幕",
    format: "短片",
    logline:
      "母亲离世后，高三压力中的女孩逐渐厌弃沉默笨拙的父亲，却在危急时刻重新看见那个把爱藏在责任里的人。",
    approach: [
      "《桑榆》来自吴晗默对小镇生活和普通劳动家庭的记忆。作为导演，他避免强戏剧化煽情，而是在做饭、沉默、家务劳动和父女无法直说的悲伤中寻找情感。父亲并不是一个真正“无能”的人，而是一个被长期外出务工、家庭缺席和生活压力塑造的人，他笨拙地试图维持一个已经破碎的家。",
      "摄影上，影片使用带有呼吸感的肩扛摄影，让人物和空间保持现实生活的即时性。门框、桌子、厨房台面和狭窄室内空间经常处在父女之间，将亲密关系里的情感距离视觉化。自然主义光线、暖色实用光源和受控光比，使影像保持亲密、克制和真实。",
      "作为数字调色师，吴晗默让画面保持温暖，但避免过度煽情。调色通过柔和反差、低饱和色彩分离和具有触感的家庭质地，服务影片的现实主义气质。影片的视觉原则是“旧而不脏”：家可以陈旧，但必须干净、体面，并保留生活与照料的痕迹。",
    ],
    credits: ["导演", "摄影指导", "数字调色师"],
    awards: [
      "2024 Los Angeles Short Film Award 最佳学生短片",
      "2024 亚洲国际青年电影节 最佳艺术设计入选",
      "2023 Hollywood Shortsfest 最佳短片入选",
      "2023 澳门国际电影节 最佳短片入选",
      "2023 上海国际短片周 最佳短片主竞赛入选",
    ],
    links: [{ label: "在 YouTube 观看", href: "https://youtu.be/FGvFSjnzEMQ" }],
    detailSections: [
      {
        title: "导演",
        body:
          "《桑榆》来自吴晗默对小镇生活和普通劳动家庭的记忆。作为导演，他避免强戏剧化煽情，而是在做饭、沉默、家务劳动和父女无法直说的悲伤中寻找情感。父亲并不是一个真正“无能”的人，而是被长期外出务工、家庭缺席和生活压力塑造的人，他笨拙地试图维持一个已经破碎的家。",
      },
      {
        title: "摄影指导",
        body:
          "摄影使用带有呼吸感的肩扛运动，让人物和空间保持现实生活的即时性。门框、桌子、厨房台面和狭窄室内空间经常处在父女之间，将亲密关系中的情感距离转化为可见空间。自然主义光线、暖色实用光源和受控光比，使影像保持亲密、克制和真实。",
      },
      {
        title: "数字调色",
        body:
          "调色让画面保持温暖，但避免过度煽情。柔和反差、低饱和色彩分离和具有触感的家庭质地，服务影片的现实主义气质。视觉原则是“旧而不脏”：家可以陈旧，但必须干净、体面，并保留生活与照料的痕迹。",
      },
    ],
  },
  "welcome-home": {
    title: "欢迎回家",
    duration: "7 分钟",
    role: "摄影指导 / 数字调色师",
    production: "查普曼大学道奇电影与媒体艺术学院",
    language: "英语",
    format: "短片",
    logline:
      "一名女性徒步者进入偏远庇护所，一段看似温暖可信的相遇逐渐转变为危险。",
    approach: [
      "《欢迎回家》的摄影围绕“信任的建立与瓦解”展开。由于故事主要发生在一个庇护所内部，吴晗默把这个空间处理成一个会不断改变意义的角色。影片开始时，房间需要是清晰、温暖、暂时安全的。平衡构图、动机光和明确的空间关系，让观众相信这场相遇可能是一种短暂的避难。",
      "随着剧情推进，同一个空间逐渐变得受限。更紧的景别、前景遮挡、更重的阴影和不那么舒适的机位，削弱了观众对空间的掌控感。画面节奏不再开放，人物关系也变得越来越不对等。庇护所不再只是主人公停留的地方，而是通过调度、光线和视角逐渐形成的心理陷阱。",
      "作为数字调色师，吴晗默通过反差和色温延续这种变化。前半段保留偏暖、可接近的色彩；后半段逐渐转向更冷的色调、更深的阴影和更强的空间分离感。调色并不是提前告诉观众危险，而是让温暖慢慢失去稳定性，直到观众意识到舒适已经变成威胁。",
    ],
    credits: ["摄影指导", "数字调色师"],
    awards: [],
    links: [{ label: "在 YouTube 观看", href: "https://youtu.be/N7vjhZjAauM" }],
    detailSections: [
      {
        title: "摄影指导",
        body: [
          "《欢迎回家》的摄影围绕“信任的建立与瓦解”展开。由于故事主要发生在一个庇护所内部，吴晗默把这个空间处理成一个会不断改变意义的角色。影片开始时，房间需要清晰、温暖、暂时安全；平衡构图、动机光和明确的空间关系，让观众相信这场相遇可能是一种短暂的避难。",
          "随着剧情推进，同一个空间逐渐变得受限。更紧的景别、前景遮挡、更重的阴影和不那么舒适的机位，削弱观众对空间的掌控感。画面节奏不再开放，人物关系也越来越不对等。庇护所不再只是主人公停留的地方，而是通过调度、光线和视角逐渐形成的心理陷阱。",
        ],
      },
      {
        title: "数字调色",
        body:
          "调色通过反差和色温延续这种变化。前半段保留偏暖、可接近的色彩；后半段逐渐转向更冷的色调、更深的阴影和更强的空间分离感。调色并不是提前宣告危险，而是让温暖慢慢失去稳定性，直到观众意识到舒适已经转化为威胁。",
      },
    ],
  },
  "pride-and-prejudice": {
    title: "傲慢与偏见",
    duration: "18 分钟",
    role: "摄影指导",
    production: "西交利物浦大学",
    language: "中文",
    format: "短片",
    logline:
      "一部围绕误解、情感距离与和解展开的表演导向短片。",
    approach: [
      "《傲慢与偏见》的摄影以清晰、节奏和效率服务表演。由于影片高度依赖演员之间的互动，吴晗默重点建立一个能够保护情绪连续性的视觉结构。摄影语言保持克制，让面部反应、台词节奏和身体语言的变化来承担戏剧张力。",
      "明确调度和清晰覆盖是这部片子的核心。较宽的构图用来建立人物距离、社交压力和空间关系；随着情感关系发生变化，受控的景别推进让观众逐渐靠近人物的脆弱。整体视觉递进很简单，但有明确目的：从距离，到紧张，再到理解。",
      "吴晗默没有让影像设计变得过于复杂，因为这部片子需要的是一个干净、实用并且便于剪辑的视觉系统。摄影的目标是给导演和剪辑保留足够空间，同时维持表演节奏。在这个项目中，摄影不是炫技，而是一种结构：承托演员，组织情绪节拍，并让故事拥有清晰的戏剧形状。",
    ],
    credits: ["摄影指导"],
    awards: [],
    links: [{ label: "在 YouTube 观看", href: "https://youtu.be/jzUDIvd43Ro" }],
    detailSections: [
      {
        title: "摄影指导",
        body: [
          "《傲慢与偏见》的摄影以清晰、节奏和效率服务表演。由于影片高度依赖演员之间的互动，吴晗默重点建立一个能够保护情绪连续性的视觉结构。摄影语言保持克制，让面部反应、台词节奏和身体语言变化来承担戏剧张力。",
          "明确调度和清晰覆盖是这部片子的核心。较宽的构图用来建立人物距离、社交压力和空间关系；随着情感关系变化，受控的景别推进让观众逐渐靠近人物的脆弱。整体视觉递进简单但有明确目的：从距离，到紧张，再到理解。",
          "这部作品需要的是干净、实用并且便于剪辑的视觉系统。摄影的目标是给导演和剪辑保留足够空间，同时维持表演节奏。在这个项目中，摄影不是炫技，而是一种结构：承托演员，组织情绪节拍，并让故事拥有清晰的戏剧形状。",
        ],
      },
    ],
  },
  "wait-for-the-lighthouse": {
    title: "等待灯塔",
    duration: "19 分钟",
    role: "摄影指导 / 数字调色师",
    production: "中国矿业大学",
    language: "中文",
    format: "短片",
    logline:
      "一部关于记忆、失去和未完成情感连接的短片。",
    approach: [
      "《等待灯塔》的摄影承载着等待、迟疑和情绪悬置的感觉。吴晗默将摄影机处理成一种贴近人物不确定性的存在，而不是推动故事快速走向答案。手持摄影建立克制的呼吸节奏，让画面对停顿、细微发现和情绪破裂作出反应，但不让影像变得混乱。",
      "整体视觉风格建立在自然主义基础上。环境需要是具体的、有现场感的，但不能被过度设计。自然光、简单构图和安静的摄影距离，让人物和地景处在同一种情绪空间里。摄影机更多是在观察，而不是判断，使人物像是行走在尚未沉淀的记忆之中。",
      "作为数字调色师，吴晗默让调色保持安静、克制和氛围化。受控反差、低饱和色调，以及肤色、阴影和背景之间的细微分离，帮助影片维持一种悬置的悲伤感。色彩需要像一段仍然存在、但正在慢慢褪去的记忆。影像最终要承载的是缺席：尚未抵达的信号、尚未解决的关系，以及持续影响当下的过去。",
    ],
    credits: ["摄影指导", "数字调色师"],
    awards: [],
    links: [{ label: "在 YouTube 观看", href: "https://youtu.be/EidwZeHXAac" }],
    detailSections: [
      {
        title: "摄影指导",
        body: [
          "《等待灯塔》的摄影承载着等待、迟疑和情绪悬置的感觉。吴晗默将摄影机处理成贴近人物不确定性的存在，而不是推动故事快速走向答案。手持摄影建立克制的呼吸节奏，让画面对停顿、细微发现和情绪破裂作出反应，但不让影像变得混乱。",
          "整体视觉风格建立在自然主义基础上。环境需要具体、有现场感，但不能被过度设计。自然光、简单构图和安静的摄影距离，让人物和地景处在同一种情绪空间里。摄影机更多是在观察，而不是判断，使人物像是行走在尚未沉淀的记忆之中。",
        ],
      },
      {
        title: "数字调色",
        body:
          "调色保持安静、克制和氛围化。受控反差、低饱和色调，以及肤色、阴影和背景之间的细微分离，帮助影片维持悬置的悲伤感。色彩需要像一段仍然存在、但正在慢慢褪去的记忆：尚未抵达的信号、尚未解决的关系，以及持续影响当下的过去。",
      },
    ],
  },
  rose: {
    title: "玫瑰",
    duration: "9 分钟",
    role: "摄影指导 / 数字调色师",
    production: "独立制作",
    language: "中文",
    format: "短片",
    logline:
      "一名写作者决定不再迎合外部期待，重新回到更诚实的自我表达。",
    approach: [
      "《玫瑰》是一部关于创作抵抗和自我确认的亲密短片。影片的推动力不是外部动作，而是人物内部的一个决定：当一个写作者停止为了认可而表演，重新开始倾听自己的声音。作为摄影指导，吴晗默让视觉语言保持简洁、克制，并尽量贴近主人公的内心状态。",
      "摄影机的存在是安静的，而不是强烈表达性的。克制构图和受控灯光为人物的犹豫、怀疑和自我意识保留空间。影片没有通过明显的镜头运动制造戏剧性，而是让人物拥有足够的静止。正是这种静止，使细微动作、停顿和注意力变化能够承担情绪重量。",
      "作为数字调色师，吴晗默避免强烈风格化，让画面保持柔和、集中和情绪上的干净。自然肤色、温和反差，以及人物与环境之间的细微分离，共同支持一种私人创作觉醒的感觉。调色的目标是让影片亲密但不过度精致，保留故事中心那种脆弱而诚实的状态。",
    ],
    credits: ["摄影指导", "数字调色师"],
    awards: [],
    links: [{ label: "在 YouTube 观看", href: "https://youtu.be/IGyWzgPdT64" }],
    detailSections: [
      {
        title: "摄影指导",
        body: [
          "《玫瑰》是一部关于创作抵抗和自我确认的亲密短片。影片的推动力不是外部动作，而是人物内部的一个决定：当一个写作者停止为了认可而表演，重新开始倾听自己的声音。作为摄影指导，吴晗默让视觉语言保持简洁、克制，并尽量贴近主人公的内心状态。",
          "摄影机的存在是安静的，而不是强烈表达性的。克制构图和受控灯光为人物的犹豫、怀疑和自我意识保留空间。影片没有通过明显的镜头运动制造戏剧性，而是让人物拥有足够的静止，使细微动作、停顿和注意力变化能够承担情绪重量。",
        ],
      },
      {
        title: "数字调色",
        body:
          "调色避免强烈风格化，让画面保持柔和、集中和情绪上的干净。自然肤色、温和反差，以及人物与环境之间的细微分离，共同支持一种私人创作觉醒的感觉。调色的目标是让影片亲密但不过度精致，保留故事中心那种脆弱而诚实的状态。",
      },
    ],
  },
  "descending-into-the-inferno": {
    title: "死神",
    duration: "25 分钟",
    role: "美术指导",
    production: "独立制作",
    language: "中文",
    format: "短片",
    logline:
      "一部游走于表演、死亡、记忆和精神追问之间的超现实短片。",
    approach: [
      "作为《死神》的美术指导，吴晗默与导演共同建立一个被提升过的视觉世界，让悲伤、幽默、表演和死亡之后的想象能够同时存在。影片并不属于严格现实主义，因此美术需要创造一个戏剧化、象征化、同时能够让演员表演落地的环境，而不是停留在装饰层面。",
      "美术策略集中在象征性空间、受控色彩和风格化质感上。相比复制日常现实，影片更需要一个稍微脱离现实的世界，像是人物正在穿过某种心理或精神舞台。色彩和材质帮助定义每个空间的情绪，让演员能够在明确的氛围中行动和反应。",
      "这部片子的难点在于平衡。空间需要陌生，但不能空洞；需要抽象，但不能失去情感连接。吴晗默希望美术能够支撑影片的形而上气质，同时让悲伤仍然落在人真实的经验里。每一个视觉选择都需要服务演员、情绪和故事在幽默与失去之间的移动。",
    ],
    credits: ["美术指导"],
    awards: ["2024 上海国际短片周 年度最佳短片"],
    links: [],
    detailSections: [
      {
        title: "美术指导",
        body: [
          "作为《死神》的美术指导，吴晗默与导演共同建立一个被提升过的视觉世界，让悲伤、幽默、表演和死亡之后的想象能够同时存在。影片并不属于严格现实主义，因此美术需要创造一个戏剧化、象征化、同时能够让演员表演落地的环境，而不是停留在装饰层面。",
          "美术策略集中在象征性空间、受控色彩和风格化质感上。相比复制日常现实，影片更需要一个稍微脱离现实的世界，像是人物正在穿过某种心理或精神舞台。色彩和材质帮助定义每个空间的情绪，让演员能够在明确的氛围中行动和反应。",
          "这部片子的难点在于平衡。空间需要陌生，但不能空洞；需要抽象，但不能失去情感连接。美术既要支撑影片的形而上气质，也要让悲伤仍然落在人真实的经验里。每一个视觉选择都需要服务演员、情绪和故事在幽默与失去之间的移动。",
        ],
      },
    ],
  },
  "no-wind-island": {
    title: "无风岛",
    duration: "45 分钟",
    role: "数字调色师",
    production: "独立制作",
    language: "中文",
    format: "长片",
    logline:
      "一部由孤独、地景和悬置情绪构成的影像主导型作品。",
    approach: [
      "作为《无风岛》的数字调色师，吴晗默重点保留地景的静默感，同时为影片建立统一的情绪温度。影片由空间、距离和氛围主导，因此调色需要安静、精确，而不是制造强烈风格化外观。色彩工作的核心，是支持空旷环境和人物存在之间的自然张力。",
      "调色在自然色彩、受控反差、高光保护，以及天空、土地、肤色和建筑之间的细微分离中寻找平衡。由于影片大量依赖宽阔地景和克制的人物运动，亮度层次与色彩分离中的微小差异就变得非常重要。环境需要保持辽阔，但人物不能被空间吞没。",
      "最终目标是让色彩承载影片的悬置情绪。画面应该是开放的、干燥的、安静的，并带有一点距离感，但同时仍然保留人的痕迹。色彩不应该喧宾夺主，而是在影像表层之下工作，塑造孤独、沉默，以及人与地景之间脆弱的连接。",
    ],
    credits: ["数字调色师"],
    awards: [],
    links: [],
    detailSections: [
      {
        title: "数字调色",
        body: [
          "作为《无风岛》的数字调色师，吴晗默重点保留地景的静默感，同时为影片建立统一的情绪温度。影片由空间、距离和氛围主导，因此调色需要安静、精确，而不是制造强烈风格化外观。色彩工作的核心，是支持空旷环境和人物存在之间的自然张力。",
          "调色在自然色彩、受控反差、高光保护，以及天空、土地、肤色和建筑之间的细微分离中寻找平衡。由于影片大量依赖宽阔地景和克制的人物运动，亮度层次与色彩分离中的微小差异就变得非常重要。环境需要保持辽阔，但人物不能被空间吞没。",
          "最终目标是让色彩承载影片的悬置情绪。画面应该是开放的、干燥的、安静的，并带有一点距离感，但同时仍然保留人的痕迹。色彩不应该喧宾夺主，而是在影像表层之下工作，塑造孤独、沉默，以及人与地景之间脆弱的连接。",
        ],
      },
    ],
  },
};

export const abilityZh: Record<string, { title: string; text: string }> = {
  Directing: {
    title: "导演",
    text:
      "吴晗默的导演工作从社会处境内部的压力出发，而不只依赖情节机制。《再会峡江间》中，家庭焦虑转化为机构暴力；《桑榆》中，悲伤隐藏在做饭、沉默和父亲无法解释自己的日常劳动里。他通过表演节奏、受控调度和空间的情绪逻辑组织场面，让摄影机与演员运动都从人物的需求、羞耻、恐惧或克制中生长出来。",
  },
  Cinematography: {
    title: "摄影",
    text:
      "作为摄影指导，吴晗默把机位、光线、色温、运动、镜头选择和覆盖方式视为一个面向制作的整体系统。《欢迎回家》用一个庇护所完成从安全到威胁的转变；《等待灯塔》用手持呼吸和自然距离承载未解决的悲伤；《傲慢与偏见》用清晰调度和可读覆盖保护表演连续性。他的影像更重视情感真实、动机光和受控视觉递进，而不是装饰性风格。",
  },
  "Digital Color": {
    title: "数字调色",
    text:
      "作为数字调色师，吴晗默把调色同时视为叙事工具和成片纪律。《再会峡江间》中，青黄色机构空间让世界持续不安；《桑榆》中，温暖但不煽情的家庭色彩保留人物尊严；《欢迎回家》中，反差和色温让舒适逐渐变成威胁；《无风岛》中，克制分离保护地景的静默感。他关注肤色、反差、高光保护、质感、场景连续性和专业交付标准。",
  },
  "Festival Strategy": {
    title: "电影节策略",
    text:
      "吴晗默也参与电影节定位、市场材料准备和面向国际传播的短片文本工作。他的作品曾进入罗德岛国际电影节、德黑兰国际短片电影节等奥斯卡资格认证电影节；同时，他也协助项目进入克莱蒙费朗短片市场、戛纳短片角、奥伯豪森国际短片电影节等平台。这让他理解一部影片如何从创作生产进入公开呈现、观众沟通和国际流通。",
  },
};
