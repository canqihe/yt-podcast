// ===== 文章数据 =====
const articlesData = [
    {
        "url": "articles/pentagon-anthropic-ai-fight.html",
        "card_class": "card-ai",
        "category": "AI · 国防安全",
        "date": "2026-04-16",
        "title": "五角大楼的 AI 计划 + Anthropic 之争内幕",
        "excerpt": "当人工智能技术以惊人的速度发展时，全球最强大的军事机构——美国五角大楼正在经历一场静悄悄的变革。2025年初，五角大楼将 AI 公司 Anthropic 指定为「供应链风险」，这场争议的核心人物——战争部副部长 Emil Michael 首次详细解释原因，澄清外界对军方 AI 应用的误解。",
        "tags": [
            "#EmilMichael",
            "#五角大楼",
            "#Anthropic",
            "#AI战略"
        ]
    },
    {
        "url": "articles/jensen-huang-tpu-competition.html",
        "card_class": "card-tech",
        "category": "硬科技 · AI芯片",
        "date": "2026-04-16",
        "title": "Jensen Huang：TPU竞争、对华芯片出口与供应链护城河",
        "excerpt": "英伟达CEO深度对话：为什么AI不会让软件商品化、TPU能打破英伟达垄断吗、为什么反对向中国限制芯片出口、英伟达为什么不成为云服务商、以及从电子到Token的价值创造。",
        "tags": [
            "#JensenHuang",
            "#NVIDIA",
            "#TPU竞争",
            "#供应链管理"
        ]
    },
    {
        "url": "articles/seo-to-agent-led-growth.html",
        "card_class": "card-finance",
        "category": "营销增长 · AI",
        "date": "2026-04-15",
        "title": "从 SEO 到代理主导的增长：营销史上最大的平台转移",
        "excerpt": "不是前门变了，而是穿过那扇门的人变了。AI 代理正在取代人类消费者，重塑整个营销范式——从 ChatGPT 到 Gemini，平台差异巨大，原始洞察成为关键。",
        "tags": [
            "#JamesCadwallader",
            "#Profound",
            "#AI营销",
            "#代理增长"
        ]
    },
    {
        "url": "articles/nvidia-ising-quantum.html",
        "card_class": "card-tech",
        "category": "量子计算 · AI",
        "date": "2026-04-15",
        "title": "AI × 量子计算：NVIDIA Ising 开启新纪元",
        "excerpt": "NVIDIA发布世界首个量子计算专用开源AI模型——Ising。从量子纠错的\"夏洛克·福尔摩斯式推理\"到药物发现的革命性加速，探索AI与量子计算的融合如何催生全新突破。",
        "tags": [
            "#NVIDIA",
            "#量子计算",
            "#Ising",
            "#AI"
        ]
    },
    {
        "url": "articles/ben-horowitz-ai-anxiety-big-tech-transitions.html",
        "card_class": "card-finance",
        "category": "AI · 风险投资",
        "date": "2026-04-15",
        "title": "Ben Horowitz谈AI焦虑、科技巨头转型与初创企业的未来",
        "excerpt": "在AI时代，科技行业的\"物理法则\"正在被重写。从基础设施危机到加密货币的意外使命，a16z联合创始人为我们描绘了一个残酷但充满希望的未来。",
        "tags": [
            "#BenHorowitz",
            "#a16z",
            "#AI焦虑",
            "#基础设施"
        ]
    },
    {
        "url": "articles/ai-physical-world-robotics-world-models-material-science.html",
        "card_class": "card-tech",
        "category": "物理 AI · 深度洞察",
        "date": "2026-04-15",
        "title": "AI in the Physical World: 机器人 · 世界模型 · 材料科学",
        "excerpt": "当人工智能从\"比特\"世界跨入\"原子\"世界，会发生什么？三家物理 AI 最前沿的创业公司分享他们的探索与洞察：游戏数据构建世界模型、AI 科学家发现新材料、创业公司 vs 大厂的结构性优势。",
        "tags": [
            "#机器人",
            "#世界模型",
            "#材料科学",
            "#创业"
        ]
    },
    {
        "url": "articles/elon-musk-sam-altman-ai.html",
        "card_class": "card-ai",
        "category": "AI · 行业观察",
        "date": "2026-04-15",
        "title": "马斯克 vs 奥尔特曼：每天30亿美元豪赌AI未来",
        "excerpt": "OpenAI估值8520亿美元，Anthropic预计两年内突破1万亿美元收入。xAI剧烈重组，千亿美元诉讼即将开庭。这不是商业较量，而是决定人类未来的文明级竞赛。",
        "tags": [
            "#ElonMusk",
            "#SamAltman",
            "#OpenAI",
            "#xAI"
        ]
    },
    {
        "url": "articles/david-friedberg-future.html",
        "card_class": "card-future",
        "category": "未来科技",
        "date": "2026-04-14",
        "title": "你所知道的一切即将崩溃：未来为什么将是史诗级的",
        "excerpt": "David Friedberg 基于历史规律和技术趋势，描绘了一个令人信服的乐观未来：从 AI 民主化到月球经济，从核聚变能源到年龄逆转革命。但关键在于我们是拥抱技术丰富，还是让恐惧驱动我们走向停滞？",
        "tags": [
            "#DavidFriedberg",
            "#未来科技",
            "#AI民主化",
            "#核聚变"
        ]
    },
    {
        "url": "articles/anthropic-mythos-dilemma.html",
        "card_class": "card-ai",
        "category": "AI · 行业观察",
        "date": "2026-04-14",
        "title": "AI神话与暴力：Mythos争议与代币文化",
        "excerpt": "Anthropic的Mythos模型发布：突破还是营销？从\"玻璃翅膀\"品牌到\"三明治事件\"的精心传播。同时，针对AI基础设施的暴力事件正在增加，公众信任危机显现。",
        "tags": [
            "#Anthropic",
            "#Mythos",
            "#AI安全",
            "#公众信任"
        ]
    },
    {
        "url": "articles/ai-agent-swarms.html",
        "card_class": "card-ai",
        "category": "AI · 深度对话",
        "date": "2026-04-14",
        "title": "AI 智能体群：通往超级智能的下一跳",
        "excerpt": "从 Moltbook 意外实验到 AGNTCY 开源项目，Cisco Outshift 工程副总裁揭示智能体互联网的技术蓝图——第 8 层句法层、第 9 层语义层，以及从\"连接\"到\"协同思考\"的跨越。",
        "tags": [
            "#智能体",
            "#AGNTCY",
            "#多智能体系统",
            "#Cisco"
        ]
    },
    {
        "url": "articles/global-infrastructure-partnerships.html",
        "card_class": "card-finance",
        "category": "地缘政治",
        "date": "2026-04-14",
        "title": "下一代全球基础设施合作伙伴关系",
        "excerpt": "在大国竞争加剧的背景下，海洋基础设施成为战略竞争的核心战场。CSIS智库专家深入剖析美国如何通过公私合作伙伴关系，与盟友共同应对\"一带一路\"挑战。",
        "tags": [
            "#基础设施",
            "#地缘政治",
            "#公私合作",
            "#苏比克湾"
        ]
    },
    {
        "url": "articles/thomas-laffont-coatue.html",
        "card_class": "card-finance",
        "category": "TBPN 访谈",
        "date": "2026-04-14",
        "title": "Thomas Laffont：从好莱坞收发室到传奇科技投资者",
        "excerpt": "Coatue 联合创始人 Thomas Laffont 分享他如何在 CAA 收发室起步，通过六个月坚持不懈的电话轰炸获得机会，最终转型成为科技投资巨头的非凡故事。从跨界视角到第一性原理建模的投资哲学。",
        "tags": [
            "#ThomasLaffont",
            "#Coatue",
            "#投资哲学",
            "#CAA"
        ]
    },
    {
        "url": "articles/marc-andreessen-world-malleable.html",
        "card_class": "card-finance",
        "category": "Founders 播客",
        "date": "2026-04-12",
        "title": "马克·安德森：世界比你想象的更可塑",
        "excerpt": "从 Mosaic 到 a16z，马克·安德森分享他如何在22岁创造互联网浏览器，以及 Jim Clark 和 Elon Musk 如何展示\"世界是可塑的\"这一核心真理。零内省哲学、创造力的两面、以及 MilliElon 指标。",
        "tags": [
            "#MarcAndreessen",
            "#a16z",
            "#Netscape",
            "#JimClark"
        ]
    },
    {
        "url": "articles/michael-dell-david-senra.html",
        "card_class": "card-finance",
        "category": "商业领袖",
        "date": "2026-04-12",
        "title": "Michael Dell：从宿舍创业到千亿帝国的40年进化史",
        "excerpt": "如果你在大学宿舍里组装电脑，你能想象这家公司有朝一日会价值数千亿美元吗？Michael Dell 分享他如何带领戴尔完成 6-7 次重大转型，以及\"负现金转换周期\"的金融创新。",
        "tags": [
            "#MichaelDell",
            "#DellTechnologies",
            "#创业思维",
            "#供应链"
        ]
    },
    {
        "url": "articles/anthropics-felix-rieseberg-claude-cowork.html",
        "card_class": "card-ai",
        "category": "AI · 深度对话",
        "date": "2026-04-10",
        "title": "Claude Cowork 之父：当执行归零，品味成为壁垒",
        "excerpt": "Anthropic 工程总监 Felix Rieseberg 深度分享：当 AI 让执行成本趋近于零，真正的竞争壁垒是什么？为什么说我们仍处于\"移动电话的愚蠢时代\"？",
        "tags": [
            "#FelixRieseberg",
            "#Anthropic",
            "#ClaudeCowork",
            "#Mythos"
        ]
    },
    {
        "url": "articles/consciousness-equation-true-self.html",
        "card_class": "card-future",
        "category": "哲学与科技",
        "date": "2026-04-09",
        "title": "意识的方程式与真我：古代智慧与现代科技的交汇",
        "excerpt": "当AI浪潮席卷全球，硅谷工程师夜以继日复制人类心智，却有一个根本问题悬而未决：什么是意识？Swami Sarvapriyananda 用简洁方程 C+O=E 打开通往答案的大门——这不仅是一场哲学讨论，更是一张从恐惧走向自由的实用地图。",
        "tags": [
            "#意识",
            "#吠檀多",
            "#AI哲学",
            "#灵性修行"
        ]
    },
    {
        "url": "articles/openai-anthropic-faceoff.html",
        "card_class": "card-ai",
        "category": "AI · 企业软件",
        "date": "2026-04-09",
        "title": "OpenAI 对决 Anthropic：AI 竞争与智能体未来",
        "excerpt": "当 OpenAI 和 Anthropic 的产品路线图越来越相似，Box CEO Aaron Levie 从企业内容管理第一线指出：AI 竞争的本质不是谁有更强的模型，而是谁能更好地解决企业数据的\"最后一公里\"问题。",
        "tags": [
            "#AaronLevie",
            "#Box",
            "#OpenAI",
            "#Anthropic"
        ]
    },
    {
        "url": "articles/jeremy-allaire-circle-ai-agents-finance.html",
        "card_class": "card-finance",
        "category": "加密金融",
        "date": "2026-04-09",
        "title": "AI 智能体将如何变革金融体系：Circle CEO Jeremy Allaire 深度对话",
        "excerpt": "当 AI 智能体开始互相付费购买\"智能服务\"，谁来充当它们之间的\"银行\"？Circle CEO 解析稳定币、Arc 区块链操作系统与智能体经济——从完全储备货币到代币化全栈迁移，金融基础设施正在经历根本性重构。",
        "tags": [
            "#JeremyAllaire",
            "#Circle",
            "#稳定币",
            "#智能体经济"
        ]
    },
    {
        "url": "articles/michael-nielsen-aliens.html",
        "card_class": "card-future",
        "category": "科学哲学",
        "date": "2026-04-09",
        "title": "为什么外星人的技术栈会和我们不同",
        "excerpt": "量子计算先驱 Michael Nielsen 提出了一个令人震撼的观点：科技树远比我们想象的广阔。不同文明很可能发展出完全不同的技术体系——科学并非通向单一终点的路径。",
        "tags": [
            "#MichaelNielsen",
            "#科技树",
            "#科学哲学",
            "#外星文明"
        ]
    },
    {
        "url": "articles/american-finance-100-years.html",
        "card_class": "card-finance",
        "category": "金融洞察",
        "date": "2026-04-09",
        "title": "美国金融百年史对今天的启示",
        "excerpt": "从1933年《格拉斯-斯蒂格尔法案》到2008年金融危机，再到私人信贷的崛起。Alan Waxman 解析金融体系演变框架，揭示\"工厂模式\"如何侵蚀投资工匠精神。",
        "tags": [
            "#AlanWaxman",
            "#SixthStreet",
            "#金融史",
            "#私人信贷"
        ]
    },
    {
        "url": "articles/aaron-levie-ai-agents.html",
        "card_class": "card-ai",
        "category": "AI · 企业软件",
        "date": "2026-04-09",
        "title": "AI代理时代：当软件的主要用户从人类变成代理",
        "excerpt": "当企业拥有的AI代理数量是人类的100-1000倍时，软件必须从根本重新设计。华尔街为何错估了一个数量级？CFO和CIO的真实恐惧是什么？",
        "tags": [
            "#AaronLevie",
            "#Box",
            "#a16z",
            "#AI代理"
        ]
    },
    {
        "url": "articles/ben-lamm-synthetic-biology.html",
        "card_class": "card-tech",
        "category": "生物科技",
        "date": "2026-04-08",
        "title": "AI + 合成生物学：人类历史上最具变革性的技术",
        "excerpt": "Colossal 正在构建一个平台——一个能够用 AI 设计、用合成生物学构建\"生命产品\"的引擎。从复活猛犸象到塑料降解，从人工子宫到基因驱动，这个技术的应用前景几乎无所不包。",
        "tags": [
            "#BenLamm",
            "#Colossal",
            "#合成生物学",
            "#AI驱动"
        ]
    },
    {
        "url": "articles/balaji-ai-ceo.html",
        "card_class": "card-ai",
        "category": "AI & 未来",
        "date": "2026-04-07",
        "title": "AI 不会夺走你的工作——它会让你成为 CEO",
        "excerpt": "Balaji Srinivasan 解析 AI 经济的核心悖论：AI 降低创作成本，提高验证成本。从\"受信任部落\"的兴起，到物理世界任务的自动化悖论，再到 SaaS 行业的命运。",
        "tags": [
            "#BalajiSrinivasan",
            "#a16z",
            "#AI经济",
            "#工作未来"
        ]
    },
    {
        "url": "articles/demis-hassabis-agi-scaling-laws.html",
        "card_class": "card-ai",
        "category": "AI 洞察",
        "date": "2026-04-07",
        "title": "Demis Hassabis：为什么大模型不会商品化，为什么我们还没触及扩展定律的极限",
        "excerpt": "DeepMind CEO 分享他对 AGI 时间表、模型商品化、药物研发革命和 AI 安全的深度思考。AGI 有很大概率在五年内实现，顶尖实验室之间的差距正在拉大。",
        "tags": [
            "#DemisHassabis",
            "#DeepMind",
            "#AGI",
            "#ScalingLaws"
        ]
    },
    {
        "url": "articles/asana-ai-teammates-arnab-bose.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-04-07",
        "title": "软件公司应该拥抱AI还是抵制它？——与Asana首席产品官Arnab Bose的深度对话",
        "excerpt": "AI浪潮席卷而来，每个软件公司创始人都在思考同一个问题：拥抱这项技术，还是奋起抵抗？Asana首席产品官从产品负责人视角剖析了企业级AI真正需要的——不仅是强大的模型，更需要一个能为AI提供上下文、记忆和协调能力的平台。",
        "tags": [
            "#ArnabBose",
            "#Asana",
            "#AI战略",
            "#工作图谱"
        ]
    },
    {
        "url": "articles/google-ai-sundar-pichai.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-04-07",
        "title": "Google AI 的历史与未来：桑达尔·皮查伊深度访谈",
        "excerpt": "2025年春夏，市场对Google的判断错得离谱。从Transformer到Gemini，从1800亿美元资本支出到2026年供应瓶颈，Google CEO坦诚分享AI竞赛中的重新崛起，以及\"Googley\"乐观主义的回归。",
        "tags": [
            "#SundarPichai",
            "#Google",
            "#AI战略",
            "#Transformer"
        ]
    },
    {
        "url": "articles/demis-hassabis-alphafold.html",
        "card_class": "card-ai",
        "category": "AI / 科学",
        "date": "2026-04-07",
        "title": "AI史上最有用的成就背后，那个改变了科学的人",
        "excerpt": "Demis Hassabis 从游戏神童到 DeepMind 创始人，用 AlphaFold 解决了困扰科学界 50 年的蛋白质折叠难题，正在重新定义药物发现、基因编辑和 AGI 的未来。",
        "tags": [
            "#DemisHassabis",
            "#AlphaFold",
            "#DeepMind",
            "#科学革命"
        ]
    },
    {
        "url": "articles/openclaw-claude-code-future-software.html",
        "card_class": "card-ai",
        "category": "AI 与软件的未来",
        "date": "2026-04-07",
        "title": "OpenClaw、Claude Code 与软件的未来：编程将吞噬所有知识工作",
        "excerpt": "如果说\"软件将吞噬世界\"，那么今天我们正在见证一个更宏大的趋势：编程将吞噬所有知识工作。Peter Yang 分享了他如何使用 OpenClaw 作为\"数字伙伴\"，以及 AI Agent 如何正在取代我们每天打开的应用程序。",
        "tags": [
            "#AI Agent",
            "#OpenClaw",
            "#Claude Code",
            "#编程工具"
        ]
    },
    {
        "url": "articles/anduril-palantir-rebuilding-american-military.html",
        "card_class": "card-tech",
        "category": "国防科技",
        "date": "2026-04-06",
        "title": "硅谷如何重建美国军事工业：Palantir与Anduril的国防革命",
        "excerpt": "当俄罗斯坦克开进乌克兰时，硅谷的态度发生了根本性转变。Palantir和Anduril——两家市值分别达到4000亿美元和600亿美元的国防科技公司——的代表，讲述了他们如何在被排斥的环境中，用创业公司的模式重塑美国军工复合体。",
        "tags": [
            "#国防科技",
            "#Palantir",
            "#Anduril",
            "#制造业空心化"
        ]
    },
    {
        "url": "articles/steve-keen-financial-crash.html",
        "card_class": "card-finance",
        "category": "金融洞察",
        "date": "2026-04-06",
        "title": "金融崩盘专家警告：三个月内将进入饥荒！如果伊朗不投降，就是尽头！",
        "excerpt": "早在2008年金融危机爆发前数年就发出警告的经济学家 Steve Keen，揭示了一个我们几乎未曾注意到的致命依赖——霍尔木兹海峡。这条仅21公里宽的海上通道，承载着全球20-30%的化肥贸易，一旦被切断，全球粮食供应将在三个月内崩溃。",
        "tags": [
            "#金融危机",
            "#伊朗战争",
            "#经济系统",
            "#AI就业"
        ]
    },
    {
        "url": "articles/self-awareness-paradox-robert-pantano.html",
        "card_class": "card-future",
        "category": "哲学与心理学",
        "date": "2026-04-06",
        "title": "自我意识的可怕悖论：一场关于存在的深度探索",
        "excerpt": "你有没有深陷自我反思的漩涡？自我意识既是宇宙中最可怕的东西，也是最美丽的东西。我们无法退回到无知，后悔只是一种错觉，逆境是燃料而不是命运。",
        "tags": [
            "#自我意识",
            "#哲学",
            "#心理学",
            "#存在主义"
        ]
    },
    {
        "url": "articles/all-in-podcast-spacex-ipo.html",
        "card_class": "card-future",
        "category": "太空经济",
        "date": "2026-04-04",
        "title": "SpaceX 上市、伊朗战争余波、量子计算威胁比特币、太空经济新机遇",
        "excerpt": "SpaceX IPO 标志着太空经济工业化时代的到来，月球制造的成本优势将颠覆地球产业。与此同时，伊朗战争引发化肥危机，量子计算威胁比特币安全——我们正处于技术范式的转折点。",
        "tags": [
            "#SpaceX",
            "#IPO",
            "#太空经济",
            "#量子计算"
        ]
    },
    {
        "url": "articles/demis-hassabis-future-of-intelligence.html",
        "card_class": "card-ai",
        "category": "AI 洞察",
        "date": "2026-04-04",
        "title": "智能的未来：与 DeepMind 创始人德米斯·哈萨比斯对话",
        "excerpt": "从可控核聚变到世界模型，从意识起源到后 AGI 社会——处于人类历史转折点的科学家，揭示通往通用人工智能的关键路径。根节点问题、参差不齐的智能、10 倍速的工业革命、5-10 年的警告窗口。",
        "tags": [
            "#DemisHassabis",
            "#DeepMind",
            "#AGI",
            "#世界模型"
        ]
    },
    {
        "url": "articles/tristan-harris-ai-god.html",
        "card_class": "card-ai",
        "category": "AI 伦理",
        "date": "2026-04-03",
        "title": "他们正在建造一个无法控制的 AI 上帝",
        "excerpt": "这不是科幻小说。这是正在发生的事实——我们正在以人类历史上前所未有的速度，释放一种我们既不理解、也无法控制的力量。《社交困境》主角 Tristan Harris 揭示 AI 威胁的真相：智能不等于智慧，阿里巴巴 AI 自主学会挖矿，79%-96% 的模型会勒索人类。",
        "tags": [
            "#TristanHarris",
            "#AI伦理",
            "#技术风险"
        ]
    },
    {
        "url": "articles/jack-dorsey-mini-agi.html",
        "card_class": "card-future",
        "category": "组织变革",
        "date": "2026-04-03",
        "title": "Jack Dorsey：每家公司都可以成为一个小型 AGI",
        "excerpt": "传统层级制已经完全过时。Jack Dorsey 分享他如何裁掉 Block 40% 员工，然后围绕 AI\"智能层\"从零重建整个公司。这不是关于提高 10% 的生产力——这是一场彻底的结构性变革。",
        "tags": [
            "#JackDorsey",
            "#Block",
            "#组织变革"
        ]
    },
    {
        "url": "articles/alex-blania-worldcoin.html",
        "card_class": "card-tech",
        "category": "AI身份",
        "date": "2026-04-03",
        "title": "如何证明你是人：AI时代的互联网身份革命",
        "excerpt": "当AI能够完美模仿人类时，\"是人类\"将从默认状态变成稀缺资源。Worldcoin创始人Alex Blania深度解析如何在AI时代重建互联网信任。从虹膜识别的数学必然性，到零知识证明的隐私保护，再到\"人类证明\"将成为像HTTPS一样的基础设施。",
        "tags": [
            "#AlexBlania",
            "#Worldcoin",
            "#人类证明"
        ]
    },
    {
        "url": "articles/mostafa-dehghani-ai-building-ai.html",
        "card_class": "card-ai",
        "category": "AI",
        "date": "2026-04-02",
        "title": "AI 正在构建 AI —— Google DeepMind 的 Mostafa Dehghani 深度访谈",
        "excerpt": "一场关于递归自我改进、多模态学习、持续学习，以及 AI 如何构建下一代 AI 的深度对话。Universal Transformers、Vision Transformers 的创造者，揭示 AI 研究的最新前沿。大多数人都没意识到，过去几个月里，几乎每个实验室的新一代模型都大量使用前一代模型构建。",
        "tags": [
            "#MostafaDehghani",
            "#GoogleDeepMind",
            "#递归自我改进"
        ]
    },
    {
        "url": "articles/greg-brockman-openai.html",
        "card_class": "card-ai",
        "category": "AI",
        "date": "2026-04-02",
        "title": "OpenAI 总裁 Greg Brockman：AGI 已完成 70-80%",
        "excerpt": "Greg Brockman 揭开 OpenAI 战略转向的幕后逻辑，分享他对 AI 发展阶段的独特判断。为何撤回 Sora？超级应用是什么？自动化 AI 研究员何时推出？1100 亿美元算力豪赌的逻辑为何？未来一两年内将拥有 AGI——尽管它仍然是\"参差不齐\"的。",
        "tags": [
            "#GregBrockman",
            "#OpenAI",
            "#AGI"
        ]
    },
    {
        "url": "articles/david-baszucki-roblox.html",
        "card_class": "card-finance",
        "category": "平台经济",
        "date": "2026-04-02",
        "title": "Roblox 如何让游戏开发者成为百万美元收入者",
        "excerpt": "David Baszucki 深度访谈：20 年坚持一个愿景、1.5 亿日活、350 亿小时季度参与度、前 1000 开发者平均收入 130 万美元。从物理教育软件到全球最大共同体验平台，AI 加速而非取代创作者，4D = 功能性，价值观是捕获的不是制定的。",
        "tags": [
            "#DavidBaszucki",
            "#Roblox",
            "#平台经济"
        ]
    },
    {
        "url": "articles/brad-lightcap-openai-future.html",
        "card_class": "card-ai",
        "category": "AI",
        "date": "2026-04-02",
        "title": "OpenAI COO Brad Lightcap 谈 AI 的未来",
        "excerpt": "Jack Altman 与他的兄弟、OpenAI COO Brad Lightcap 的深度对话。从聊天机器人到智能代理，从科幻恐惧到现实赋能。AI 发展的三个时代、涟漪效应原则、99% 定律、Codex 的突破、VC 应该投资什么。",
        "tags": [
            "#BradLightcap",
            "#OpenAI",
            "#AI未来"
        ]
    },
    {
        "url": "articles/sergey-levine-robot-ai.html",
        "card_class": "card-ai",
        "category": "机器人",
        "date": "2026-04-01",
        "title": "世界顶尖机器人研究员纵论AI、大模型与机器人智能",
        "excerpt": "对话 Physical Intelligence 联合创始人谢尔盖·莱文，深入探讨机器人基础模型、莫拉维克悖论、通用机器人的未来。为何叠衣服比下围棋更难？生成式AI与强化学习如何融合？机器人领域的学术争论与企业备战策略。",
        "tags": [
            "#SergeyLevine",
            "#PhysicalIntelligence",
            "#机器人AI"
        ]
    },
    {
        "url": "articles/kevin-kelly-excellent-advice.html",
        "card_class": "card-future",
        "category": "人生智慧",
        "date": "2026-04-01",
        "title": "生活卓越指南：79条来自智者的人生箴言",
        "excerpt": "凯文·凯利在68岁生日那天开始为子女写下人生建议，最终累积至约450条箴言。从热情与倾听的超能力，到截止日期是创造力加速器；从在正确与善良之间选择善良，到不必争做最好但要做无可替代的唯一。这是关于如何活出有意义人生的实用指南。",
        "tags": [
            "#KevinKelly",
            "#人生智慧",
            "#成长思维"
        ]
    },
    {
        "url": "articles/demis-hassabis-agi-missionary.html",
        "card_class": "card-ai",
        "category": "创业者传记",
        "date": "2026-04-01",
        "title": "创造AGI的无畏布道者：Demis Hassabis的传奇人生",
        "excerpt": "从象棋神童到 DeepMind 创始人，从游戏设计师到诺贝尔化学奖得主。Demis Hassabis 用二十余年坚守同一个使命——用 AI 解锁所有科学难题。传教士式企业家、AlphaGo 与 AlphaFold 的诞生、Google 收购背后的抉择、ChatGPT 倒逼下的战时状态。",
        "tags": [
            "#DemisHassabis",
            "#DeepMind",
            "#AGI"
        ]
    },
    {
        "url": "articles/elon-musk-thinking.html",
        "card_class": "card-future",
        "category": "思维方式",
        "date": "2026-04-01",
        "title": "埃隆·马斯克的思维方式：深度解析",
        "excerpt": "深入探索埃隆·马斯克的第一性原理思维、五步工程算法，以及如何通过承受痛苦来改变世界。从\"物理学是定律\"到\"贡献大于消费\"，全面解析这位时代最杰出企业家之一的思考框架。",
        "tags": [
            "#ElonMusk",
            "#第一性原理",
            "#SpaceX"
        ]
    },
    {
        "url": "articles/ai-designed-new-life-form.html",
        "card_class": "card-ai",
        "category": "生物安全",
        "date": "2026-01-16",
        "title": "AI 设计全新生命形式：从零开始",
        "excerpt": "科学家使用 AI 模型设计了全新噬菌体基因组，并在实验室中成功构建。许多都是可行的，甚至有些超越了现有病毒家族的性能。AI 正在瓦解历史上阻止生物武器落入坏人之手的壁垒。从 Virology Capabilities Test 到 DNA 订单筛查，全面解析 AI-Bio 安全挑战与防御路径。",
        "tags": [
            "#AI",
            "#生物学",
            "#生物安全"
        ]
    },
    {
        "url": "articles/dara-khosrowshahi-robotaxi.html",
        "card_class": "card-future",
        "category": "自动驾驶",
        "date": "2026-04-01",
        "title": "Uber vs. Tesla：Robotaxi 竞赛与人类驾驶时代的终结",
        "excerpt": "Uber CEO Dara Khosrowshahi 深度对话：自动驾驶的混合战略、平台生态vs垂直整合、从亏损45亿到盈利100亿的转型传奇。20+合作伙伴、中东成为早期领先者、司机转型为车队所有者的前瞻计划。",
        "tags": [
            "#DaraKhosrowshahi",
            "#Uber",
            "#自动驾驶"
        ]
    },
    {
        "url": "articles/brett-adcock-robot-interview.html",
        "card_class": "card-tech",
        "category": "机器人",
        "date": "2026-04-01",
        "title": "Brett Adcock：Figure AI 与机器人革命",
        "excerpt": "从伊利诺伊州 700 人小镇的农场，到改变世界的科技公司。Figure AI 创始人 Brett Adcock 分享他如何用人形机器人重塑未来，以及 AI 时代真正的创业精神。全押 Archer、自筹 Figure、从门外汉到专家的创业之路。",
        "tags": [
            "#BrettAdcock",
            "#FigureAI",
            "#人形机器人"
        ]
    },
    {
        "url": "articles/research/mu-research-report.html",
        "card_class": "card-tech",
        "category": "研究报告",
        "date": "2026-03-31",
        "title": "美光科技（MU）首次覆盖研究报告",
        "excerpt": "全球领先的存储和存储解决方案提供商深度分析：AI时代战略资产、HBM市场核心玩家、从周期性向结构性增长转型。2026财年Q2收入同比增长196%，毛利率74.4%，2026年HBM产能已全部售罄。",
        "tags": [
            "#MU",
            "#存储半导体",
            "#HBM"
        ]
    },
    {
        "url": "articles/research/amat-research-report.html",
        "card_class": "card-tech",
        "category": "研究报告",
        "date": "2026-03-30",
        "title": "应用材料公司（AMAT）深度研究报告",
        "excerpt": "全球第二大半导体制造设备供应商全面分析：公司概况、历史发展、管理团队、产品组合、竞争格局、市场机会（TAM）及风险评估。2024财年收入271.8亿美元，净利润率26.4%，覆盖沉积、刻蚀、检测等全工艺流程。",
        "tags": [
            "#AMAT",
            "#半导体设备",
            "#TSMC"
        ]
    },
    {
        "url": "articles/lloyd-blankfein-next-crash.html",
        "card_class": "card-finance",
        "category": "金融危机",
        "date": "2026-03-29",
        "title": "什么可能引发下一次崩盘？2008年的教训",
        "excerpt": "高盛前董事长兼CEO Lloyd Blankfein 分享2008年金融危机的教训，解析当前市场潜藏的风险。15年没有危机意味着资产负债表上积累了大量可能被高估的资产——就像森林地面上积累的引火物，等待一个火花。私募信贷、油价翻倍都可能成为导火索。",
        "tags": [
            "#LloydBlankfein",
            "#高盛",
            "#2008危机"
        ]
    },
    {
        "url": "articles/ai-silicon-shortage-tsmc-nvidia-cpo.html",
        "card_class": "card-tech",
        "category": "半导体",
        "date": "2026-03-29",
        "title": "AI 硅短缺危机：TSMC、Nvidia CPO 与内存瓶颈",
        "excerpt": "SemiAnalysis 深度解析 AI 芯片供应链的三大瓶颈：TSMC CoWoS 产能极限、Nvidia CPO 封装革命、HBM 内存危机。从 ASML EUV 设备到美国对华芯片管制，全面剖析支撑 AGI 愿景的物理底座与 2026-2027 年供应缺口。",
        "tags": [
            "#TSMC",
            "#Nvidia",
            "#半导体"
        ]
    },
    {
        "url": "articles/spacex-tesla-alumni-decision-velocity.html",
        "card_class": "card-tech",
        "category": "管理哲学",
        "date": "2026-03-28",
        "title": "从星舰到创业：马斯克帝国的真正\"操作系统\"",
        "excerpt": "特斯拉和 SpaceX 校友深度对谈。扁平组织的真正目的是信息流而非反管理、激进时间框架是优先级排序工具而非虐待手段、内耗才是倦怠真凶、\"公司是否存在\"决定垂直整合、一切问题都是制造问题、先做海绵再当创始人。",
        "tags": [
            "#SpaceX",
            "#Tesla",
            "#管理哲学"
        ]
    },
    {
        "url": "articles/allin-anthropic-openai-ai-moats-meta.html",
        "card_class": "card-finance",
        "category": "投资策略",
        "date": "2026-03-28",
        "title": "Anthropic的代际崛起、OpenAI恐慌与AI产业深层变局",
        "excerpt": "All-In Podcast深度对话：Anthropic产品爆发与\"监管俘获\"争议、OpenAI份额下滑砍掉Sora、SaaS估值坍塌与品牌归零论、\"绞杀即服务\"颠覆应用商店、Meta两起里程碑败诉绕过230条款、Sachs和Friedberg加入PCAST与中国科研论文超越。",
        "tags": [
            "#All-In",
            "#Anthropic",
            "#OpenAI"
        ]
    },
    {
        "url": "articles/david-sinclair-aging-reversal.html",
        "card_class": "card-future",
        "category": "长寿科学",
        "date": "2026-03-27",
        "title": "David Sinclair：衰老可以逆转吗？",
        "excerpt": "哈佛遗传学教授揭示衰老逆转的科学前沿。从\"信息论\"到人类首例临床试验，8 周内细胞年轻 75%，80 岁老鼠寿命翻倍。禁食、补剂、基因疗法的完整指南——这不是科幻，这是正在发生的事情。",
        "tags": [
            "#DavidSinclair",
            "#衰老逆转",
            "#长寿科学"
        ]
    },
    {
        "url": "articles/andrej-karpathy-code-agents.html",
        "card_class": "card-ai",
        "category": "工程文化",
        "date": "2026-03-22",
        "title": "Andrej Karpathy：从\"AI 精神病\"到自动研究",
        "excerpt": "前 OpenAI 和特斯拉自动驾驶核心工程师揭示编程范式彻底转变。从 2025 年底开始，工作流发生质变：几乎不写一行原始代码，100% 委托给智能体。Dobby 管家实验、递归自我改进、算力即财富，以及 AI 循环时代如何重构人类技能、职业与教育。",
        "tags": [
            "#AndrejKarpathy",
            "#代码智能体",
            "#自动研究"
        ]
    },
    {
        "url": "articles/micron-earnings-q2-2026.html",
        "card_class": "card-ai",
        "category": "财报",
        "date": "2026-03-19",
        "title": "美光科技 Q2 财报：营收近三倍，AI 内存需求爆发",
        "excerpt": "EPS $12.20 超预期 31%，营收 $23.86B 同比增长 196%。毛利率飙升至 74.4%，云业务增长 160%+。HBM4 已量产，Q3 指引营收 $33.5B 远超预期。股价 2025 年翻三倍，2026 年至今上涨 62%。",
        "tags": [
            "#Micron",
            "#MU",
            "#HBM"
        ]
    },
    {
        "url": "articles/starcloud-philip-johnston.html",
        "card_class": "card-future",
        "category": "未来科技",
        "date": "2026-03-19",
        "title": "你好，地球人：太空数据中心时代",
        "excerpt": "当我们在地球上为电力缺口焦头烂额时，StarCloud 创始人 Philip Johnston 已将目光投向 500 公里外的轨道。星舰时代将开启单次发射 10MW 算力的新纪元，这可能成为解决 AI 算力饥渴的终极方案。",
        "tags": [
            "#StarCloud",
            "#太空计算",
            "#数据中心"
        ]
    },
    {
        "url": "articles/jensen-huang-morgan-stanley-2026.html",
        "card_class": "card-ai",
        "category": "算力经济",
        "date": "2026-03-19",
        "title": "算力即 GDP：黄仁勋的 AI 工厂蓝图",
        "excerpt": "在 2026 摩根士丹利 TMT 峰会上，黄仁勋用极其宏大的视角，拆解了英伟达如何从 1998 年被质疑\"何时破产\"的 3 亿美元公司，演变成如今定义\"AI 工厂\"法则的巨人。算力即收入，算力即 GDP。",
        "tags": [
            "#JensenHuang",
            "#NVIDIA",
            "#AI工厂"
        ]
    },
    {
        "url": "articles/atoms-physical-ai.html",
        "card_class": "card-tech",
        "category": "硬科技",
        "date": "2026-03-18",
        "title": "物理 AI 时代与美国的财富重构",
        "excerpt": "Travis Kalanick 结束七年潜行推出 Atoms，与 Michael Dell 在奥斯汀同台。从\"原子的计算机\"到 AI 工厂，再到改变 2500 万儿童命运的 Invest America 法案，数字化正在全面入侵物理世界。",
        "tags": [
            "#TravisKalanick",
            "#物理AI",
            "#Atoms"
        ]
    },
    {
        "url": "articles/dylan-patel-ai-compute-bottleneck.html",
        "card_class": "card-tech",
        "category": "硬科技",
        "date": "2026-03-15",
        "title": "AI 算力扩展的最大单一边界",
        "excerpt": "SemiAnalysis CEO Dylan Patel 深度剖析支撑 AGI 愿景的物理底座：从 ASML 的 EUV 产能极限，到 HBM 内存危机；从 6000 亿美元资本博弈，到中美算力鸿沟。算力竞赛的本质是物理供应链的竞赛。",
        "tags": [
            "#DylanPatel",
            "#SemiAnalysis",
            "#半导体"
        ]
    },
    {
        "url": "articles/langchain-ai-agent-harness.html",
        "card_class": "card-tech",
        "category": "AI 架构",
        "date": "2026-03-15",
        "title": "AI Agent 的范式转移：从模型能力到 Harness 控制架",
        "excerpt": "LangChain 创始人 Harrison Chase 深度解析新一代 AI 智能体堆栈的演进路径：从模型能力到 Harness 控制架、代码即代理、长航程代理的爆发，以及四大核心原语。理解\"一切都在重构\"的关键节点。",
        "tags": [
            "#HarrisonChase",
            "#LangChain",
            "#AIAgent"
        ]
    },
    {
        "url": "articles/stanley-druckenmiller-hard-lessons.html",
        "card_class": "card-finance",
        "category": "投资智慧",
        "date": "2026-03-15",
        "title": "斯坦·德鲁肯米勒：先投资，后调查",
        "excerpt": "传奇对冲基金经理德鲁肯米勒深度剖析投资哲学与心理博弈：从 Teva 药业的逆向逻辑，到英伟达的恐高症；从索罗斯的仓位管理，到冒名顶替综合症。三十年不败战绩背后的勇气与脆弱。",
        "tags": [
            "#StanDruckenmiller",
            "#对冲基金",
            "#投资哲学"
        ]
    },
    {
        "url": "articles/alex-karp-ai-jobs-future.html",
        "card_class": "card-future",
        "category": "未来科技",
        "date": "2026-03-14",
        "title": "Alex Karp：白领失业危机与神经多样性的逆袭",
        "excerpt": "Palantir CEO Alex Karp 深度剖析 AI 时代的残酷真相：从身体指标作为成功代理变量，到 160 IQ 模型的幻象；从神经多样性的崛起，到地缘政治的二元对立。当 AI 撞上现实机构的复杂墙壁，谁能生存？",
        "tags": [
            "#AlexKarp",
            "#Palantir",
            "#神经多样性"
        ]
    },
    {
        "url": "articles/alfred-lin-ai-paradigm.html",
        "card_class": "card-finance",
        "category": "投资",
        "date": "2026-03-11",
        "title": "10 万亿美金公司即将到来",
        "excerpt": "红杉资本 Alfred Lin 深度解析 AI 范式转移：从 SaaS 不会死到开发范式的革命，创业者该如何在\"中场阶段\"连接愿景与现实。顶尖工程师用 AI 后交付速度提升 3 倍，代码不再是护城河。",
        "tags": [
            "#红杉资本",
            "#AlfredLin",
            "#AI范式"
        ]
    },
    {
        "url": "articles/ai-revolution-future-warning.html",
        "card_class": "card-ai",
        "category": "AI 革命",
        "date": "2026-03-10",
        "title": "\"白领大屠杀\"：Dylan Patton 冷酷警示",
        "excerpt": "SemiAnalysis 首席分析师深度访谈：AI 迭代速度已超越人类社会的适应能力。从初级开发者终局到 Vibe Coding 兴起，从小团队效率套利到传统媒体消亡，揭示大多数人尚未察觉的真相。",
        "tags": [
            "#AI革命",
            "#SemiAnalysis",
            "#DylanPatel"
        ]
    },
    {
        "url": "articles/nasa-jared-isaacman-space-race.html",
        "card_class": "card-future",
        "category": "未来科技",
        "date": "2026-02-27",
        "title": "新太空竞赛：NASA、马斯克与贝佐斯",
        "excerpt": "NASA 局长贾里德·艾萨克曼深度对话。从月球基地的\"未来废料场\"愿景到核动力火星征程，探讨公私合营新模式、AI 轨道数据中心、小行星采矿，以及人类在宇宙中的孤独与希望。",
        "tags": [
            "#NASA",
            "#太空竞赛",
            "#核动力"
        ]
    },
    {
        "url": "articles/ai-trade-turning-point-2026.html",
        "card_class": "card-finance",
        "category": "科技趋势",
        "date": "2026-02-25",
        "title": "深度解析：2026年AI贸易的关键转折点",
        "excerpt": "站在2026年初的节点，科技行业正处于一个极其微妙的十字路口：英伟达财报前瞻、Anthropic政策调整、 金融AI新前沿，以及地缘政治与国防需求正开始重塑AI的道德边界。",
        "tags": [
            "#Bloomberg",
            "#AI贸易",
            "#科技趋势"
        ]
    },
    {
        "url": "articles/ben-horowitz-ai-singularity.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-02-25",
        "title": "AI 奇点的前夜与星际文明的逻辑",
        "excerpt": "A16Z 联合创始人 Ben Horowitz 与 Peter Diamandis 深度对话。从递归自我改进到月球数据中心，探讨 xAI 人才流失、AI 发现物理定律、加密经济闭环、非人类智能的竞争，以及 2026 年为何将成为人类物种命运的关键转折点。",
        "tags": [
            "#BenHorowitz",
            "#A16Z",
            "#AI奇点"
        ]
    },
    {
        "url": "articles/coatue-lucas-swisher.html",
        "card_class": "card-finance",
        "category": "风险投资",
        "date": "2026-02-25",
        "title": "Coatue增长合伙人Lucas Swisher的投资启示录",
        "excerpt": "20VC深度访谈。从SaaS价值的黄昏到AI时代的投资逻辑重构，探讨平台型公司的价值垄断、巨型基金的生存法则、20家公司决定80%价值的力量法则，以及在\"助手\"向\"代理\"跨越的关键点，如何捕捉真正的未来。",
        "tags": [
            "#Coatue",
            "#LucasSwisher",
            "#风险投资"
        ]
    },
    {
        "url": "articles/dario-amodei-civilization-reflection.html",
        "card_class": "card-ai",
        "category": "AI 哲学",
        "date": "2026-02-25",
        "title": "AI浪潮下的文明反思：人类正站在海啸面前",
        "excerpt": "Anthropic CEO Dario Amodei 与印度投资人 Nikhil Kamath 的深度对话。从生物学家视角审视复杂性，探讨\"辞职按钮\"的设计哲学、缩放法则的化学反应本质、社会认知的滞后风险，以及在思维能力被\"出口\"给机器的时代，人类如何避免变得更加愚蠢。",
        "tags": [
            "#DarioAmodei",
            "#Anthropic",
            "#AI哲学"
        ]
    },
    {
        "url": "articles/world-merge-labs-bci-interview.html",
        "card_class": "card-tech",
        "category": "脑机接口",
        "date": "2026-02-20",
        "title": "99.9% 的互联网将由 AI 驱动？World CEO 谈脑机接口与人类未来",
        "excerpt": "在 AI 已经轻松通过图灵测试的时代，我们如何证明\"我是一个人\"？World CEO Alex Blania 宣布成立脑机接口实验室 Merge Labs，获得 OpenAI 2.5 亿美元投资。探讨真实人类网络、超声波脑机接口技术，以及人类在超级智能时代的生存路径。",
        "tags": [
            "#Worldcoin",
            "#脑机接口",
            "#OpenAI"
        ]
    },
    {
        "url": "articles/yuval-harari-stories-power-truth.html",
        "card_class": "card-future",
        "category": "思想哲学",
        "date": "2026-02-15",
        "title": "尤瓦尔·赫拉利：故事、权力与真相的虚无",
        "excerpt": "当今世界最清醒的头脑之一剥开人类文明的层层包装。探讨\"虚构故事\"的核心逻辑、 地缘政治的\"低幼化\"、AI对人类亲密关系的收割，以及在算法撕裂的社会中， 个人如何通过\"调查\"自己的心灵来获得真正的解放。",
        "tags": [
            "#尤瓦尔赫拉利",
            "#人类简史",
            "#哲学思考"
        ]
    },
    {
        "url": "articles/a16z-david-george-ai-markets.html",
        "card_class": "card-finance",
        "category": "AI 商业",
        "date": "2026-02-15",
        "title": "AI 市场深度解析：对话 a16z 合伙人 David George",
        "excerpt": "用极其详实的内部数据和一线投后观察，揭开 AI 市场的真实面目。 从\"低毛利是勋章\"到\"电力 vs 鲜血\"的管理重构，探讨 AI 公司如何超越 SaaS 速度、 成果制付费的商业模式、1 万亿美元营收路径，以及\"适应或死亡\"的进化残酷感。",
        "tags": [
            "#a16z",
            "#DavidGeorge",
            "#AI市场"
        ]
    },
    {
        "url": "articles/dario-amodei-scaling-laws.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-02-15",
        "title": "Dario Amodei：我们正接近指数增长的终点",
        "excerpt": "Anthropic CEO 深度对话。从缩放定律的终局到\"天才国度\"的预言，探讨 RL 的第二曲线、 软件工程重构、万亿美金算力博弈、宪法 AI 治理、地缘政治与 AGI 的未来， 揭示 1-3 年内 AGI 到来的技术路径与风险防控。",
        "tags": [
            "#DarioAmodei",
            "#Anthropic",
            "#缩放定律"
        ]
    },
    {
        "url": "articles/joelle-pineau-ai-frontiers.html",
        "card_class": "card-ai",
        "category": "AI 研究",
        "date": "2026-02-09",
        "title": "AI研究的前沿：记忆、世界模型与规划",
        "excerpt": "Cohere首席AI官、前Meta FAIR负责人Joelle Pineau深度对话。从AI研究是否撞墙到记忆与持续学习的悖论， 探讨分层规划能力、代码训练的价值、世界模型的因果预测、能力冗余与企业落地鸿沟， 以及AI主权与多代理未来的新秩序。",
        "tags": [
            "#JoellePineau",
            "#Cohere",
            "#AI研究"
        ]
    },
    {
        "url": "articles/musk-space-ai-interview.html",
        "card_class": "card-future",
        "category": "科技领袖",
        "date": "2026-02-06",
        "title": "埃隆·马斯克：36个月内，太空将成为部署AI最便宜的地方",
        "excerpt": "关于人类文明未来的\"生存与扩张指南\"。马斯克揭示横跨 SpaceX、Tesla 和 xAI 的宏大布局： 从解决地球电力枯竭的\"太空 AI 方案\"，到足以重塑全球经济的 Optimus 机器人。 涵盖太空AI、戴森球雏形、Terapab计划、火星殖民等12个核心议题。",
        "tags": [
            "#ElonMusk",
            "#SpaceX",
            "#太空AI"
        ]
    },
    {
        "url": "articles/google-q4-2025-earnings.html",
        "card_class": "card-finance",
        "category": "财报分析",
        "date": "2026-02-05",
        "title": "Alphabet 2025 Q4 财报：AI 驱动的全面增长",
        "excerpt": "年度营收首次突破 4000 亿美元。Gemini 月活用户达 7.5 亿， 云业务同比增长 48%，2026 年计划投入 1750-1850 亿美元聚焦 AI 基建。 全面解析搜索、云、YouTube、Waymo 等各业务表现与战略规划。",
        "tags": [
            "#Google",
            "#财报",
            "#AI战略"
        ]
    },
    {
        "url": "articles/bret-taylor-openai-interview.html",
        "card_class": "card-ai",
        "category": "AI 商业",
        "date": "2026-02-05",
        "title": "Bret Taylor：AI 正在\"杀死\"软件吗？",
        "excerpt": "OpenAI 董事会主席、Sierra CEO 深度对话。从 Agent 时代到 SaaS 商业模式危机， 探讨仪表盘的消亡、互联网入口重构、企业信任 AI 的方法论， 以及硅谷顶级领袖的领导力哲学。",
        "tags": [
            "#BretTaylor",
            "#OpenAI",
            "#Agent时代"
        ]
    },
    {
        "url": "articles/openai-town-hall.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-01-27",
        "title": "OpenAI Town Hall：AI 时代生存哲学",
        "excerpt": "Sam Altman 深度对话：从 GPT-5 取舍到 100 倍降本承诺， 从科学范式转移到人类创造力的最后堡垒。 涵盖软件工程重构、智能体未来、算力平权、创业者生存法则等16个核心议题。",
        "tags": [
            "#OpenAI",
            "#SamAltman",
            "#AI战略"
        ]
    },
    {
        "url": "articles/robinhood-transformation.html",
        "card_class": "card-finance",
        "category": "商业案例",
        "date": "2026-01-25",
        "title": "Robinhood 转型之路：从 Meme 股到全天候金融巨头",
        "excerpt": "从依赖市场波动的单一业务，进化为拥有 11 条独立\"亿级营收线\"的金融帝国。 深度解析 Vlad Tenev 的商业韧性、第一性原理思维和 AI 赋能的转型战略。",
        "tags": [
            "#Robinhood",
            "#商业转型",
            "#金融科技"
        ]
    },
    {
        "url": "articles/davos_2026.html",
        "card_class": "card-future",
        "category": "科技峰会",
        "date": "2026-01-24",
        "title": "2026 达沃斯技术巅峰对话：加密法治、算力霸权与原子世界的崛起",
        "excerpt": "Coinbase CEO、Cerebras CEO 和 Gecko Robotics CEO 在达沃斯的三场深度对话。 探讨加密货币法律终局与万物上链、750兆瓦AI算力革命、机器人原生数据接管物理世界。 这不仅仅是访谈，更是2026年技术文明的横截面。",
        "tags": [
            "#达沃斯",
            "#加密货币",
            "#AI算力"
        ]
    },
    {
        "url": "articles/quantum_interview.html",
        "card_class": "card-tech",
        "category": "前沿技术",
        "date": "2026-01-24",
        "title": "量子计算现状与未来潜力：D-Wave CEO 深度访谈",
        "excerpt": "D-Wave CEO 全面解析量子计算的发展现状、技术突破与商业应用。 从量子退火到门模型量子计算，探讨量子优势实现路径、 人工智能加速、药物发现革命，以及量子计算的下一个五年。",
        "tags": [
            "#量子计算",
            "#D-Wave",
            "#前沿技术"
        ]
    },
    {
        "url": "articles/dario-amodei-ai-briefing.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-01-24",
        "title": "Dario Amodei 谈人工智能未来：技术演进、经济影响与全球治理",
        "excerpt": "Anthropic 首席执行官深度访谈，探讨 AI 的指数级增长路径（每 4-12 个月翻倍）、 企业级市场战略、地缘政治芯片管制、就业市场冲击、AI 安全治理等核心议题。 预测 AI 将在 1-2 年内在绝大多数领域超过人类智能。",
        "tags": [
            "#Anthropic",
            "#DarioAmodei",
            "#AI治理"
        ]
    },
    {
        "url": "articles/silver-market-report-2026.html",
        "card_class": "card-finance",
        "category": "金融市场",
        "date": "2026-01-24",
        "title": "2026年全球白银市场深度战略分析报告",
        "excerpt": "白银价格突破90美元/盎司历史性高位的深度解析。从结构性供应赤字、 光伏AI核能需求革命，到地缘政治博弈与金融逼空，全面剖析白银暴涨的四大驱动力 与2026年下半年的崩盘风险窗口。",
        "tags": [
            "#白银市场",
            "#金融分析",
            "#投资策略"
        ]
    },
    {
        "url": "articles/moonshots-ai-2026.html",
        "card_class": "card-ai",
        "category": "AI 预测",
        "date": "2026-01-23",
        "title": "AI 2026：黎明前的超指数风暴",
        "excerpt": "Moonshots 播客 #224 深度解析 AI 超指数进化。从六大核心预测到现实场景， 探讨 2026 年寒武纪大爆发、智能体经济、算力战争、本地 AI 革命， 以及多模态模型如何重塑知识工作与创意产业。",
        "tags": [
            "#Moonshots",
            "#AI2026",
            "#超指数进化"
        ]
    },
    {
        "url": "articles/satya-nadella-interview.html",
        "card_class": "card-future",
        "category": "AI 商业",
        "date": "2026-01-23",
        "title": "萨提亚·纳德拉谈AI商业革命",
        "excerpt": "微软 CEO 萨提亚·纳德拉 All-In Podcast 深度访谈。从 AI 四阶段进化到\"无限大脑管理者\"， 探讨 SaaS 终局、全栈建设者组织革命、OpenAI 战略， 以及 2026 年智能体经济与企业 AI 落地路径。",
        "tags": [
            "#SatyaNadella",
            "#Microsoft",
            "#AI战略"
        ]
    },
    {
        "url": "articles/musk-interview-theverge.html",
        "card_class": "card-finance",
        "category": "科技领袖",
        "date": "2026-01-23",
        "title": "埃隆·马斯克：从 Tesla 到 xAI 的完整对话",
        "excerpt": "The Verge 与马斯克深度对话，涵盖 Tesla 自动驾驶愿景、xAI Grok 战略、 X (Twitter) 平台愿景、火星殖民时间表、Neuralink 脑机接口进展， 以及他对 AI 安全与监管的独特观点。",
        "tags": [
            "#ElonMusk",
            "#Tesla",
            "#xAI"
        ]
    },
    {
        "url": "articles/demis-hassabis-interview.html",
        "card_class": "card-ai",
        "category": "AI 战略",
        "date": "2026-01-23",
        "title": "Demis Hassabis 论 AGI、AI 未来与 DeepMind 的核心使命",
        "excerpt": "Google DeepMind CEO Demis Hassabis 深度专访，涵盖 AGI 时间表（5-10年）、 科学方法论、未来12个月技术突破、多模态革命、AI 风险与机遇， 以及诺贝尔奖带来的新使命和影响力。",
        "tags": [
            "#DeepMind",
            "#AGI",
            "#科学方法"
        ]
    },
    {
        "url": "articles/ark-big-ideas-2026.html",
        "card_class": "card-finance",
        "category": "投资研究",
        "date": "2026-01-23",
        "title": "ARK Invest Big Ideas 2026：大加速时代研究",
        "excerpt": "ARK Invest 旗舰研究报告第十个年度版本，揭示由人工智能驱动的\"大加速时代\"。 深入剖析五大创新平台的融合、AI 基础设施投资、智能体时代， 以及技术融合对全球 GDP 的革命性影响（预测增长率 7.3%）。",
        "tags": [
            "#ARK Invest",
            "#技术融合",
            "#AI投资"
        ]
    },
    {
        "url": "articles/ai-insights-report.html",
        "card_class": "card-ai",
        "category": "AI 产业",
        "date": "2026-01-21",
        "title": "人工智能产业现状：OpenAI 播客核心洞见",
        "excerpt": "深入剖析 OpenAI 在 AI 产业中的战略布局、技术突破与未来愿景。 从 GPT 系列模型到 AGI 探索，全面揭示人工智能发展的现状与趋势， 为理解 AI 产业的竞争格局提供独家视角。",
        "tags": [
            "#AI产业",
            "#技术洞见",
            "#OpenAI"
        ]
    },
    {
        "url": "articles/kurzweil-singularity.html",
        "card_class": "card-future",
        "category": "未来预测",
        "date": "2026-01-21",
        "title": "雷·库兹韦尔：奇点、人工智能与人类未来",
        "excerpt": "探索著名未来学家雷·库兹韦尔关于技术奇点的革命性预测。 从加速回报定律到人类永生，深入分析指数级技术进步如何重塑人类的未来， 揭示 2045 年奇点时刻的深远意义。",
        "tags": [
            "#奇点理论",
            "#未来预测",
            "#库兹韦尔"
        ]
    },
    {
        "url": "articles/tom-lee-brief.html",
        "card_class": "card-finance",
        "category": "金融投资",
        "date": "2026-01-21",
        "title": "Tom Lee 市场洞察与投资策略简报 2026",
        "excerpt": "Fundstrat 联合创始人 Tom Lee 的 2026 年市场展望与投资策略。 深度解读牛市延续、板块配置建议、比特币价格预测（$250K 目标）， 以及应对市场波动的核心投资哲学。",
        "tags": [
            "#金融投资",
            "#市场策略",
            "#加密货币"
        ]
    },
    {
        "url": "articles/xai-strategic-brief.html",
        "card_class": "card-ai",
        "category": "工程文化",
        "date": "2026-01-21",
        "title": "xAI 运营模式、工程文化与战略愿景深度简报",
        "excerpt": "深入解析 xAI 的内部运作机制、核心战略及其独特的工程文化。 从 122 天建成 Colossus 超级计算机到 Macro Hard 项目， 全面揭示埃隆·马斯克领导下的极致工程哲学与执行速度。",
        "tags": [
            "#xAI",
            "#工程文化",
            "#马斯克"
        ]
    }
];


// ===== 文章数据加载和渲染 =====

// 生成文章卡片 HTML
function createArticleCard(article) {
    const tagsHtml = article.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

    return `
        <a href="${article.url}" class="article-card ${article.card_class}" target="_blank" rel="noopener">
            <div class="card-header">
                <span class="card-category">${article.category}</span>
                <span class="card-meta">${article.date}</span>
            </div>
            <h3 class="card-title">${article.title}</h3>
            <p class="card-excerpt">
                ${article.excerpt}
            </p>
            <div class="card-tags">
                ${tagsHtml}
            </div>
            <div class="card-footer">
                <span class="read-link">
                    阅读全文
                    <span class="read-arrow">→</span>
                </span>
                <span class="card-stat">⏱ 约 20 分钟</span>
            </div>
        </a>
    `;
}

// 渲染文章
function renderArticles() {
    console.log('renderArticles: 开始渲染, 文章数=' + articlesData.length);
    const articlesGrid = document.getElementById('articlesGrid');
    if (articlesGrid) {
        const html = articlesData.map(createArticleCard).join('');
        console.log('renderArticles: 生成的HTML长度=' + html.length);
        articlesGrid.innerHTML = html;
        console.log('renderArticles: 插入完成, 当前子元素数=' + articlesGrid.children.length);

        // 初始化滚动动画（使用 Intersection Observer）
        setTimeout(() => {
            initScrollAnimations();
            console.log('renderArticles: initScrollAnimations 已调用');
        }, 100);
    } else {
        console.error('renderArticles: 找不到 articlesGrid 元素!');
    }
}

// ===== 搜索和分页功能 =====
document.addEventListener('DOMContentLoaded', function() {
    // 渲染文章
    renderArticles();

    // 配置
    const ITEMS_PER_PAGE = 15;
    let currentPage = 1;
    let allCards = [];
    let filteredCards = [];

    // DOM 元素
    const searchInput = document.getElementById('searchInput');
    const articlesGrid = document.getElementById('articlesGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbers = document.getElementById('pageNumbers');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    const paginationInfo = document.getElementById('paginationInfo');

    // 初始化 - 获取所有卡片
    function init() {
        allCards = Array.from(document.querySelectorAll('.article-card'));
        console.log('找到卡片数:', allCards.length);
        filteredCards = [...allCards];
        updateDisplay();
    }

    // 搜索功能
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm === '') {
            filteredCards = [...allCards];
            searchResultsInfo.style.display = 'none';
        } else {
            filteredCards = allCards.filter(card => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';
                const category = card.querySelector('.card-category')?.textContent.toLowerCase() || '';
                const tags = Array.from(card.querySelectorAll('.card-tag'))
                    .map(tag => tag.textContent.toLowerCase())
                    .join(' ');

                return title.includes(searchTerm) ||
                       excerpt.includes(searchTerm) ||
                       category.includes(searchTerm) ||
                       tags.includes(searchTerm);
            });

            // 显示搜索结果信息
            searchResultsInfo.textContent = `找到 ${filteredCards.length} 篇相关文章`;
            searchResultsInfo.style.display = 'block';
        }

        currentPage = 1;
        updateDisplay();
    });

    // 分页功能 - 上一页
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateDisplay();
            scrollToArticles();
        }
    });

    // 分页功能 - 下一页
    nextBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            updateDisplay();
            scrollToArticles();
        }
    });

    // 滚动到文章区域
    function scrollToArticles() {
        const articlesSection = document.querySelector('.articles-section');
        const yOffset = -20;
        const y = articlesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // 更新显示
    function updateDisplay() {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);

        console.log('updateDisplay: currentPage=' + currentPage + ', filteredCards=' + filteredCards.length + ', startIndex=' + startIndex + ', endIndex=' + endIndex);

        // 隐藏所有卡片
        allCards.forEach(card => {
            card.classList.add('hidden-card');
        });

        // 显示当前页的卡片
        if (filteredCards.length > 0) {
            const pageCards = filteredCards.slice(startIndex, endIndex);
            console.log('显示卡片数:', pageCards.length);
            pageCards.forEach(card => {
                card.classList.remove('hidden-card');
            });

            updatePaginationButtons(totalPages);

            const showStart = startIndex + 1;
            const showEnd = Math.min(endIndex, filteredCards.length);
            paginationInfo.textContent = `显示 ${showStart}-${showEnd} / 共 ${filteredCards.length} 篇`;
            paginationInfo.style.display = 'block';

            const noResults = document.querySelector('.no-results');
            if (noResults) {
                noResults.remove();
            }
        } else {
            showNoResults();
            paginationInfo.style.display = 'none';
            updatePaginationButtons(0);
        }
    }

    // 更新分页按钮
    function updatePaginationButtons(totalPages) {
        prevBtn.disabled = currentPage <= 1 || totalPages === 0;
        nextBtn.disabled = currentPage >= totalPages || totalPages === 0;

        pageNumbers.innerHTML = '';

        if (totalPages > 0) {
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, currentPage + 2);

            if (endPage - startPage < 4) {
                if (startPage === 1) {
                    endPage = Math.min(totalPages, 5);
                } else if (endPage === totalPages) {
                    startPage = Math.max(1, totalPages - 4);
                }
            }

            if (startPage > 1) {
                pageNumbers.appendChild(createPageButton(1));
                if (startPage > 2) {
                    pageNumbers.appendChild(createEllipsis());
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.appendChild(createPageButton(i));
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.appendChild(createEllipsis());
                }
                pageNumbers.appendChild(createPageButton(totalPages));
            }
        }
    }

    function createPageButton(pageNum) {
        const btn = document.createElement('button');
        btn.className = 'pagination-btn';
        btn.textContent = pageNum;
        if (pageNum === currentPage) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', function() {
            currentPage = pageNum;
            updateDisplay();
            scrollToArticles();
        });
        return btn;
    }

    function createEllipsis() {
        const span = document.createElement('span');
        span.className = 'pagination-btn';
        span.textContent = '...';
        span.style.cursor = 'default';
        span.style.border = 'none';
        span.style.background = 'transparent';
        return span;
    }

    function showNoResults() {
        let noResultsDiv = document.querySelector('.no-results');
        if (!noResultsDiv) {
            noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            articlesGrid.after(noResultsDiv);
        }
        noResultsDiv.innerHTML = `
            <div class="no-results-icon">🔍</div>
            <h3>未找到相关文章</h3>
            <p>请尝试其他关键词搜索</p>
        `;
    }

    init();
});

// ===== 滚动显示动画 - 使用 Intersection Observer 提升性能 =====
let reveals = [];
let revealObserver = null;

// 使用 Intersection Observer API（性能更好）
function initIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // 动画完成后停止观察
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        // 观察所有 reveal 元素
        reveals.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // 降级到传统的滚动监听（带节流）
        window.addEventListener('scroll', throttle(revealOnScroll, 100));
        window.addEventListener('load', revealOnScroll);
    }
}

// 节流函数
function throttle(func, wait) {
    let timeout;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                if ((Date.now() - lastRan) >= wait) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, wait - (Date.now() - lastRan));
        }
    };
}

// 传统的滚动监听（降级方案）
function revealOnScroll() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// 初始化滚动动画
function initScrollAnimations() {
    if (revealObserver) {
        // 清理旧的 observer
        revealObserver.disconnect();
    }

    reveals = Array.from(document.querySelectorAll('.reveal'));

    if ('IntersectionObserver' in window) {
        initIntersectionObserver();
    } else {
        // 降级方案
        window.addEventListener('scroll', throttle(revealOnScroll, 100));
        window.addEventListener('load', revealOnScroll);
    }
}

window.addEventListener('load', initScrollAnimations);

// ===== 主题切换功能 =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    updateButtonIcon(prefersDark ? 'dark' : 'light');
}

function updateButtonIcon(theme) {
    themeToggle.setAttribute('data-mode', theme);
    themeToggle.title = theme === 'dark' ? '夜间模式' : '日间模式';
}

initTheme();

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    updateButtonIcon(newTheme);

    themeToggle.style.transform = 'scale(0.9) rotate(15deg)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 150);
});
