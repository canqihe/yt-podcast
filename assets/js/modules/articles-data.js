// ===== 文章数据 =====
const articlesData = [
    {
        "url": "articles/cerebras-tbpn-diet.html",
        "card_class": "card-tech",
        "category": "半导体 · AI 金融",
        "date": "2026-05-20",
        "title": "Cerebras 640亿IPO、Warsh接掌美联储与Musk诉OpenAI终局",
        "excerpt": "晶圆级芯片公司首日市值飙至640亿远超预测市场、Semi Analysis将80%的AI预算花在6倍价格换2倍速度的快速模式、新一任美联储主席面临滞胀困局、以及Musk 1500亿美元诉讼的核心辩护——那份协议根本不存在。",
        "tags": [
            "#Cerebras",
            "#AI芯片",
            "#美联储"
        ]
    },
    {
        "url": "articles/satya-nadella-openai-google-ai-monet-prank.html",
        "card_class": "card-ai",
        "category": "AI · 科技战略",
        "date": "2026-05-19",
        "title": "Satya Nadella的OpenAI困境、Google下一代AI模型与AI莫奈恶作剧",
        "excerpt": "从马斯克诉奥特曼案泄露邮件看微软CEO如何坦承「只是Nvidia上的一层薄壳，IP在OpenAI手里、年亏40亿美元」——独家优势为何被浪费、Sam Altman的AI原生预言如何反噬微软、OpenAI与Apple联盟破裂的背后故事，以及一幅真莫奈被冒充AI后遭群嘲的启示。",
        "tags": [
            "#微软OpenAI",
            "#AI战略",
            "#Google"
        ]
    },
    {
        "url": "articles/mit-ai-science-chris-bishop.html",
        "card_class": "card-ai",
        "category": "AI · 科学计算",
        "date": "2026-05-19",
        "title": "当物理学方程遇见深度学习：AI仿真器如何颠覆科学发现",
        "excerpt": "微软技术院士Chris Bishop在MIT深度课程讲述——用仿真数据训练神经网络实现千倍加速、密度泛函理论将指数问题精确转化为三次方的诺贝尔奖奇迹、Scala项目攻克50年未解的通用泛函难题，以及从咖啡因分子到万原子蛋白质的层级突破。",
        "tags": [
            "#AI科学",
            "#深度学习",
            "#分子仿真"
        ]
    },
    {
        "url": "articles/ai-hardware-boom-caitlin-kalinowski.html",
        "card_class": "card-tech",
        "category": "硬件 · 机器人",
        "date": "2026-05-18",
        "title": "AI硬件繁荣的起点：Caitlin Kalinowski谈机器人、供应链与物理AI的未来",
        "excerpt": "前Apple/Meta/OpenAI硬件主管完整拆解——VR技术如何成为机器人基础设施、硬件只能「编译」五次的残酷真相、AI数据中心吞噬内存供应链的预警、人形机器人的安全悖论，以及为什么未来两年战争中的技术变革可能比消费电子更大。",
        "tags": [
            "#硬件工程",
            "#机器人",
            "#供应链"
        ]
    },
    {
        "url": "articles/anthropic-spacex-singularity-economy.html",
        "card_class": "card-ai",
        "category": "AI · 奇点经济",
        "date": "2026-05-17",
        "title": "Anthropic与SpaceX合作、Leopold的55亿美元豪赌与奇点经济",
        "excerpt": "Anthropic季度增长80倍、ARR突破400亿美元，接管SpaceX整个Colossus 1数据中心。Leopold Aschenbrenner 55亿美元基金押注AI供应链——芯片股年回报320%、能源股419%。Claude勒索行为从96%降至0%的对齐突破，以及奇点将首先在太空中可见的预言。",
        "tags": [
            "#Anthropic",
            "#奇点经济",
            "#AI基础设施"
        ]
    },
    {
        "url": "articles/ai-supply-chain-bottlenecks-bubbleboi.html",
        "card_class": "card-tech",
        "category": "半导体 · AI 供应链",
        "date": "2026-05-16",
        "title": "AI供应链瓶颈评级：与@bubbleboi深度对话",
        "excerpt": "电气工程师逐项拆解AI供应链瓶颈——DRAM卡特尔联盟将16GB内存条从100美元炒到1000美元、闪存比DRAM便宜55倍催生谷歌内存加速器、英特尔封装技术碾压台积电如同法拉利vs半挂卡车，以及4.5kW以上冷却的物理极限。",
        "tags": [
            "#半导体",
            "#AI供应链",
            "#内存"
        ]
    },
    {
        "url": "articles/jensen-huang-stanford-cs153.html",
        "card_class": "card-tech",
        "category": "芯片 · AI 基础设施",
        "date": "2026-05-16",
        "title": "黄仁勋斯坦福CS153：智能背后的计算",
        "excerpt": "计算正在经历64年来最彻底的重塑。NVIDIA CEO 完整拆解芯片四代演进逻辑——从Hopper预训练到Feynman智能体群，10年100万倍协同设计飞跃远超摩尔定律的100倍。开源模型是为了AI安全而非竞争，MFU是错误指标，以及为什么「拥抱煎熬」是他最重要的职业建议。",
        "tags": [
            "#NVIDIA",
            "#芯片设计",
            "#AI基础设施"
        ]
    },
    {
        "url": "articles/coatue-jaimin-rangwalla-ai-market.html",
        "card_class": "card-finance",
        "category": "投资 · AI 基础设施",
        "date": "2026-05-15",
        "title": "Coatue CIO 深度解读：AI 公共市场更新",
        "excerpt": "OpenAI 估值超8000亿美元、Anthropic 每周新增25亿美元ARR——Coatue CIO Jaimin Rangwalla 解析20年职业生涯中最非凡的技术周期，从「跟踪千兆瓦」投资框架到智能体生成智能体，从CPU-GPU比例翻转到数字人口膨胀。",
        "tags": [
            "#Coatue",
            "#AI投资",
            "#半导体"
        ]
    },
    {
        "url": "articles/cerebras-ipo-wafer-scale-engine.html",
        "card_class": "card-tech",
        "category": "半导体 · AI 基础设施",
        "date": "2026-05-15",
        "title": "Cerebras IPO 深度拆解：晶圆级芯片与快速令牌经济学",
        "excerpt": "90万核心、25千瓦功耗、每秒1100个令牌——Cerebras 用革命性拼接技术将一整片晶圆做成一颗芯片，OpenAI 签下750兆瓦令牌即服务协议。深度拆解晶圆级引擎架构、SRAM 与 GPU 的算术强度之争，以及快速令牌定价的上限在哪里。",
        "tags": [
            "#Cerebras",
            "#晶圆级芯片",
            "#AI推理"
        ]
    },
    {
        "url": "articles/anthropic-labs-mike-krieger.html",
        "card_class": "card-ai",
        "category": "AI · 前沿实验室",
        "date": "2026-05-14",
        "title": "Anthropic Labs 负责人谈 Claude Code 之后",
        "excerpt": "Instagram 联合创始人放弃 CPO 回到一线，披露 Labs 两周生死评审机制、健康科技蓝海、MCP 新型应用商店，以及「AI 越强人类创造力越重要」的核心信念。",
        "tags": [
            "#Anthropic",
            "#Labs",
            "#AI产品"
        ]
    },
    {
        "url": "articles/ai-agent-sandbox-ivan-burazin-daytona.html",
        "card_class": "card-ai",
        "category": "AI · 智能体基础设施",
        "date": "2026-05-14",
        "title": "为什么每个智能体都需要自己的电脑",
        "excerpt": "60 毫秒启动沙箱、70 秒启动 5 万个、每天运行数十亿个——Daytona CEO 完整拆解智能体基础设施栈，从沙箱本质到自研调度器，从 Firecracker 到 CPU 短缺预测，以及零销售团队的 GTM 实战经验。",
        "tags": [
            "#AI智能体",
            "#沙箱基础设施",
            "#Daytona"
        ]
    },
    {
        "url": "articles/anthropic-cfo-krishna-rao-compute.html",
        "card_class": "card-ai",
        "category": "AI · 前沿实验室",
        "date": "2026-05-14",
        "title": "Anthropic CFO：千亿美元算力承诺背后的故事",
        "excerpt": "从 2.5 亿到 300 亿年化收入的指数跃迁，90% 代码由 AI 编写的递归飞轮，三大芯片平台的灵活调度——Anthropic CFO 首次深度揭示千亿美元算力采购背后的战略思考。",
        "tags": [
            "#Anthropic",
            "#算力战略",
            "#AI前沿"
        ]
    },
    {
        "url": "articles/harvey-ceo-winston-weinberg.html",
        "card_class": "card-ai",
        "category": "AI · 创业 · 法律",
        "date": "2026-05-13",
        "title": "Harvey CEO：31岁如何运营一家110亿美元公司",
        "excerpt": "一封发给 Sam Altman 的冷邮件，一个 Reddit 法律测试，100题中86题三位律师一致认可。从 GPT-3 公共 API 到估值110亿美元的法律AI公司——压力即疫苗、99.9%是双向门、产品是唯一可规模化的东西。",
        "tags": [
            "#WinstonWeinberg",
            "#法律AI",
            "#创业哲学"
        ]
    },
    {
        "url": "articles/goldman-sachs-lloyd-blankfein.html",
        "card_class": "card-finance",
        "category": "金融 · 领导力",
        "date": "2026-05-13",
        "title": "高盛董事长Lloyd Blankfein谈 AI 与金融未来",
        "excerpt": "从纽约公共住房到华尔街权力巅峰，高盛前 CEO 分享 40 年风险管理哲学：应急计划优于预测、犯错不等于愚蠢、合伙人文化的精妙机制、逐日盯市即风险系统。AI 最大风险不是它比我们聪明，而是我们无法验证它是否正确。",
        "tags": [
            "#LloydBlankfein",
            "#风险管理",
            "#高盛文化"
        ]
    },
    {
        "url": "articles/mit-three-laws-ai.html",
        "card_class": "card-ai",
        "category": "AI 安全 · MIT 课程",
        "date": "2026-05-12",
        "title": "AI 的三大定律 | MIT 6.S191 深度学习课程",
        "excerpt": "从阿西莫夫1942年的科幻三定律到现场LLM越狱实验，95%防护率在123种攻击面前不堪一击。17岁少年因「安全漂移」失去生命，90秒构建的代理AI毫不犹豫地删除文件。如果无法保证安全，就不要部署。",
        "tags": [
            "#MIT",
            "#AI安全",
            "#LLM越狱"
        ]
    },
    {
        "url": "articles/marc-andreessen-golden-age-thesis.html",
        "card_class": "card-ai",
        "category": "AI · 科技 · 社会观察",
        "date": "2026-05-12",
        "title": "黄金时代论 | Marc Andreessen 谈 AI 超能力与未来图景",
        "excerpt": "从 Anthropic 自我实现的预言到「AI 吸血鬼」现象，程序员生产力飙升 20 倍不睡觉反而更兴奋。公司裁员是去臃肿而非 AI 替代，民调情绪低落但使用行为热情高涨。Z 世代正在形成全新的世界观——对权威高度怀疑，对媒体操纵高度敏感。",
        "tags": [
            "#MarcAndreessen",
            "#AI超能力",
            "#黄金时代"
        ]
    },
    {
        "url": "articles/tobi-lutke-shopify-21-years.html",
        "card_class": "card-tech",
        "category": "创业 · 公司建设",
        "date": "2026-05-12",
        "title": "Tobi Lütke：Shopify 的 21 年建设之路",
        "excerpt": "从妻子儿时卧室起步到市值 2000 亿美元，一个德国程序员如何用 SAT 求解器设计组织架构、用自我肯定克服恐惧、用星际争霸训练商业思维。COVID 如何拯救了 Shopify？为什么「即使更差也要做得不同」？",
        "tags": [
            "#TobiLütke",
            "#Shopify",
            "#创业哲学"
        ]
    },
    {
        "url": "articles/demis-hassabis-ai-future.html",
        "card_class": "card-ai",
        "category": "AI · 深度学习",
        "date": "2026-05-10",
        "title": "Demis Hassabis：AI 的未来、模拟现实、物理和电子游戏",
        "excerpt": "Google DeepMind CEO、诺贝尔奖得主深度对话：从 AlphaGo 到 AGI 的实现路径，探索宇宙作为信息系统的本质。Veo 3 如何从视频中学习物理规律？AI 何时能实现通用智能？人类的独特价值是什么？谨慎乐观是面对巨大不确定性和巨大赌注的唯一理性方法。",
        "tags": [
            "#DemisHassabis",
            "#DeepMind",
            "#AGI"
        ]
    },
    {
        "url": "articles/daniela-amodei-anthropic.html",
        "card_class": "card-ai",
        "category": "AI · 创业 · 价值观",
        "date": "2026-05-10",
        "title": "Daniela Amodei：以正确的方式构建 AI",
        "excerpt": "在一个文学毕业生如何成为全球顶尖 AI 公司联合创始人的故事背后，隐藏着关于职业选择、技术创新和人类未来的深刻洞察。当整个行业都在竞相追求「更大、更快、更强」的模型时，Anthropic 选择了一条不同的道路——将安全与责任置于增长之上。",
        "tags": [
            "#DanielaAmodei",
            "#Anthropic",
            "#AI创业"
        ]
    },
    {
        "url": "articles/cliff-weitzman-speechify.html",
        "card_class": "card-ai",
        "category": "AI · 创业 · 增长",
        "date": "2026-05-10",
        "title": "从100位CEO学到的 & Token超过工资",
        "excerpt": "Speechify创始人Cliff Weitzman深度分享：从申请26所大学到会见100位顶级CEO，工作量哲学如何改变命运。为什么QA是AI世界最有价值的技能？为什么公司需要增肌和减脂周期？每天测试1300个广告背后的增长策略。",
        "tags": [
            "#CliffWeitzman",
            "#Speechify",
            "#AI创业"
        ]
    },
    {
        "url": "articles/ben-horowitz-ai-future.html",
        "card_class": "card-finance",
        "category": "AI · 地缘政治 · 风险投资",
        "date": "2026-05-09",
        "title": "Ben Horowitz：美国活力与 AI 的未来",
        "excerpt": "当中国超过 70% 的人对 AI 持乐观态度，而美国乐观者却不到 30%。a16z 联合创始人 Ben Horowitz 深度解析美国技术领导权的哲学根基——从《独立宣言》的「不言而喻的真理」到硅谷与华盛顿的权力博弈，揭示为何世界需要美国赢得技术竞赛。",
        "tags": [
            "#BenHorowitz",
            "#a16z",
            "#美国活力"
        ]
    },
    {
        "url": "articles/anthropic-spacex-deal.html",
        "card_class": "card-ai",
        "category": "AI · 竞争格局",
        "date": "2026-05-09",
        "title": "Elon 与 Anthropic 的历史性合作与 AI 垄断之争",
        "excerpt": "当 Anthropic 在四个月内将年收入从 100 亿美元推升至 440 亿美元，硅谷开始重新审视这个行业的未来。SpaceX 与 Anthropic 的重磅合作揭示了 AI 时代的新现实：计算资源和电力供应已成为最稀缺的资产。David Sacks 警告，如果这种增长轨迹持续 18 个月，Anthropic 可能成为人类历史上最大的垄断。",
        "tags": [
            "#Anthropic",
            "#SpaceX",
            "#AI垄断"
        ]
    },
    {
        "url": "articles/richard-sutton-reinforcement-learning.html",
        "card_class": "card-ai",
        "category": "AI · 深度学习",
        "date": "2026-05-09",
        "title": "Richard Sutton：强化学习之父的「显而易见」",
        "excerpt": "2024年ACM A.M.图灵奖得主深度访谈：最深刻的洞见往往是最显而易见的真理——智能系统必须能够从经验中学习。从童年质疑到发现AI缺失的奖励学习机制，再到「惨痛的教训」，揭示强化学习的核心思想。",
        "tags": [
            "#RichardSutton",
            "#强化学习",
            "#图灵奖"
        ]
    },
    {
        "url": "articles/agi-robot.html",
        "card_class": "card-ai",
        "category": "AI · 太空科技",
        "date": "2026-05-08",
        "title": "Demis Hassabis 论 AGI、机器人规模化生产以及埃隆的一万亿美元火星竞赛奖励",
        "excerpt": "DeepMind 创始人 Demis Hassabis 深度对话：从 AlphaGo 到 AGI 的实现路径，机器人将像汽车一样大规模生产。埃隆·马斯克的一万亿美元火星竞赛奖励背后，人类如何在 AI 与太空探索中定义自己的价值。",
        "tags": [
            "#DemisHassabis",
            "#DeepMind",
            "#AGI"
        ]
    },
    {
        "url": "articles/zico-kolter-frontier-ai.html",
        "card_class": "card-ai",
        "category": "AI 安全 · 模型治理",
        "date": "2026-05-08",
        "title": "OpenAI 董事会成员 Zico Kolter 谈前沿 AI 的真实风险",
        "excerpt": "当我们在2026年谈论AI安全时，已经不再是科幻小说中的场景，而是每天都在发生的现实。OpenAI董事会的安全委员会拥有什么权力来阻止一个强大模型的发布？这次对话揭示了OpenAI内部安全审查的真实运作方式，以及AI安全领域最前沿的洞察。",
        "tags": [
            "#ZicoKolter",
            "#OpenAI",
            "#AI安全"
        ]
    },
    {
        "url": "articles/ai-agents-perplexity.html",
        "card_class": "card-ai",
        "category": "AI · 商业哲学",
        "date": "2026-05-08",
        "title": "AI智能体：幻象还是真实革命？",
        "excerpt": "Perplexity CEO Dmitry Shevelenko 深度解析 AI Agent 的商业落地。从信息检索到任务执行，从单点工具到生态整合，AI Agent 究竟是营销噱头还是真正的生产力革命？深入剖析技术边界与商业价值的交汇点。",
        "tags": [
            "#DmitryShevelenko",
            "#Perplexity",
            "#AIAgent"
        ]
    },
    {
        "url": "articles/chamath-ai-era.html",
        "card_class": "card-future",
        "category": "AI · 智能体",
        "date": "2026-05-08",
        "title": "斯坦福AI俱乐部：Chamath谈如何在AI时代获胜",
        "excerpt": "在一个AI投资热潮与幻灭低谷并存的时刻，Chamath Palihapitiya分享了他从有限游戏到无限游戏的人生转变，揭示了AI真正的瓶颈不是算力而是'符号空间'，并提出了一种正和博弈的AI未来观。",
        "tags": [
            "#ChamathPalihapitiya",
            "#StanfordAIClub",
            "#AI投资"
        ]
    },
    {
        "url": "articles/gpt-realtime-agent-memory.html",
        "card_class": "card-ai",
        "category": "AI · 智能体记忆",
        "date": "2026-05-08",
        "title": "GPT-Realtime-2：Directionally Bad and Agent Memory",
        "excerpt": "OpenAI 发布 GPT-4o 实时语音功能后的深度分析：从 'Directionally Bad' 现象到智能体记忆架构。为什么实时语音的延迟容忍度比文本更严格？Agent Memory 如何解决上下文窗口的局限性？",
        "tags": [
            "#OpenAI",
            "#GPT4o",
            "#Realtime"
        ]
    },
    {
        "url": "articles/shane-legg-agi.html",
        "card_class": "card-ai",
        "category": "AI · 未来展望",
        "date": "2026-05-06",
        "title": "AGI 的到来：Shane Legg 的十五年预言",
        "excerpt": "DeepMind 联合创始人十五年来坚持同一预测：2028 年有 50/50 概率实现最小 AGI。从技术定义到社会影响，Shane Legg 深度解析 AGI 层次结构、系统二安全框架，以及远程认知工作为何首当其冲。人类智能并非上限——计算系统在能耗、空间、带宽、速度四个维度均比人脑高 6-8 个数量级。",
        "tags": [
            "#ShaneLegg",
            "#DeepMind",
            "#AGI"
        ]
    },
    {
        "url": "articles/tony-james-blackstone.html",
        "card_class": "card-finance",
        "category": "投资智慧 · 机构建设",
        "date": "2026-05-06",
        "title": "好市多、星巴克和黑石背后的投资者",
        "excerpt": "从 140 亿到近 1 万亿资产管理规模，Tony James 揭示如何在华尔街 50 年建立持久投资机构。与查理·芒格共事 30 年学到专注与长期主义，在巅峰时主动退让的罕见智慧，以及什么是真正的『公司 vs 基金』思维。",
        "tags": [
            "#TonyJames",
            "#黑石集团",
            "#投资哲学"
        ]
    },
    {
        "url": "articles/ibm-arvind-krishna.html",
        "card_class": "card-tech",
        "category": "科技 · 企业转型",
        "date": "2026-05-06",
        "title": "IBM的百年重生：AI押注与量子计算野心",
        "excerpt": "从连续六年下滑到持续增长，IBM CEO阿尔温德·克里希纳如何重塑这家科技巨头？他在2019年就坚定押注AI，斥资340亿美元收购Red Hat，倡导『以被解雇为乐』的领导哲学。对AI泡沫的冷静判断、量子计算的2029蓝图，以及大型机的意外复兴。",
        "tags": [
            "#ArvindKrishna",
            "#IBM",
            "#企业转型"
        ]
    },
    {
        "url": "articles/joe-rogan-chamath-attention.html",
        "card_class": "card-future",
        "category": "深度对话 · 哲学思考",
        "date": "2026-05-06",
        "title": "注意力：驱动世界的隐形力量",
        "excerpt": "从Google到Facebook再到AI，『注意力』是过去30年每次技术革命的核心关键词。Chamath Palihapitiya揭示这个驱动现代世界的隐形力量，以及它如何塑造我们的经济、政治和人类进化。税收制度如何加剧不平等？AI会取代我们的工作吗？我们是否正在制造数字茧？",
        "tags": [
            "#ChamathPalihapitiya",
            "#注意力经济",
            "#AI"
        ]
    },
    {
        "url": "articles/ken-griffin-stanford-leadership.html",
        "card_class": "card-finance",
        "category": "领导力 · 金融",
        "date": "2026-05-06",
        "title": "肯·格里芬：不确定性时代的领导力",
        "excerpt": "城堡投资创始人从2008年金融危机起死回生的第一手经验，以及对领导力、市场竞争、AI和教育危机的深刻见解。在不确定中前行，亲市场与亲商的本质区别，以及AI正在自动化高技能工作——一场关于如何在变革时代保持方向感的深度对话。",
        "tags": [
            "#KenGriffin",
            "#城堡投资",
            "#领导力"
        ]
    },
    {
        "url": "articles/gpt-55-claude-47.html",
        "card_class": "card-ai",
        "category": "AI · 模型对决",
        "date": "2026-05-06",
        "title": "GPT 5.5 vs Claude 4.7：OpenAI 从边缘绝地反击",
        "excerpt": "2024年初OpenAI陷入前所未有的危机，Claude Opus 4.5引发开发者集体出走，Anthropic收入直逼OpenAI。GPT 5.5的发布能否扭转局势？深入分析模型战争：从代币经济学到基准测试失灵，从算力天花板到CLI与App之争，揭示AI产业的真实格局。",
        "tags": [
            "#OpenAI",
            "#Claude",
            "#AI模型"
        ]
    },
    {
        "url": "articles/howard-marks-investing.html",
        "card_class": "card-finance",
        "category": "投资 · 金融智慧",
        "date": "2026-05-05",
        "title": "Howard Marks：AI、债务与股权及未来40年的投资",
        "excerpt": "橡树资本联合创始人深度对话：从无常哲学到市场周期，从垃圾债券革命到AI时代的人类投资者价值。标普500平均回报10%但几乎从未在8-12%之间——这揭示了市场的本质。",
        "tags": [
            "#HowardMarks",
            "#橡树资本",
            "#投资哲学"
        ]
    },
    {
        "url": "articles/boris-cheny-coding-is-solved.html",
        "card_class": "card-ai",
        "category": "AI · 编程革命",
        "date": "2026-05-05",
        "title": "编程已解决，接下来会发生什么",
        "excerpt": "Claude Code 创造者 Boris Cherny 揭示了一个令人震撼的观点：他在 2026 年没有写过一行代码，却能每天从手机发出几十个 PR。从 Loop 命令到并行智能体，从跨学科通才到七种力量重洗牌，全面解析 AI 如何让编程经历堪比印刷机革命的民主化浪潮。",
        "tags": [
            "#BorisCherny",
            "#ClaudeCode",
            "#编程革命"
        ]
    },
    {
        "url": "articles/jensen-huang-ai-age.html",
        "card_class": "card-ai",
        "category": "AI · 科技领袖",
        "date": "2026-05-05",
        "title": "AI时代的领导力：与英伟达CEO黄仁勋的深度对话",
        "excerpt": "从生成式AI到智能体AI，计算需求增长1000倍。黄仁勋揭示AI的五层生态系统，阐述为什么AI创造而非摧毁就业，反对末日论主张务实安全观，并建议无论你过去的雄心有多大，现在都需要提高100倍。",
        "tags": [
            "#JensenHuang",
            "#英伟达",
            "#AI生态"
        ]
    },
    {
        "url": "articles/scott-galloway-ai.html",
        "card_class": "card-ai",
        "category": "AI · 社会洞察",
        "date": "2026-05-04",
        "title": "AI 不是为你而建，富人不再需要你了！",
        "excerpt": "纽约大学教授 Scott Galloway 揭示 AI 炒作背后的真相——CEO 们的危言耸听只是为了筹集数十亿美元。从品牌危机到资本游戏，从就业真相到科技领袖的虚无主义，全面剖析 AI 如何让富人更富，而普通人的真正危险不是失业而是孤独。",
        "tags": [
            "#ScottGalloway",
            "#AI品牌危机",
            "#就业真相"
        ]
    },
    {
        "url": "articles/codex-claude-ai-superapp.html",
        "card_class": "card-ai",
        "category": "AI · 编程范式",
        "date": "2026-05-03",
        "title": "Codex 取代了 Claude……原因如下",
        "excerpt": "2026年AI智能体领域爆发前所未有的竞争——OpenAI、Anthropic、Cursor三家公司同时冲刺超级应用目标。这场战役导致Mac Mini全球缺货，背后是技术范式的根本转变：优秀编码模型正在成为最好的通用智能模型。当AI不仅能写代码还能操作计算机时，知识工作的边界将被彻底重新定义。",
        "tags": [
            "#RileyBrown",
            "#Codex",
            "#AI超级应用"
        ]
    },
    {
        "url": "articles/jim-simons.html",
        "card_class": "card-finance",
        "category": "金融 · 数学",
        "date": "2026-05-01",
        "title": "Jim Simons：从数学天才到量化交易传奇的跨界人生",
        "excerpt": "他被称为世界上最聪明的亿万富翁，却从未以赚钱为人生目标。从微分几何到陈-西蒙斯理论，从密码学破译到量化交易革命，再到科学慈善家。Simons 的故事证明了：最有价值的发现往往来自纯粹的求知欲，而非功利的目标。",
        "tags": [
            "#JimSimons",
            "#量化交易",
            "#数学"
        ]
    },
    {
        "url": "articles/ai-singularity-day-120.html",
        "card_class": "card-ai",
        "category": "AI · 未来科技",
        "date": "2026-05-01",
        "title": "奇点第 120 天：Stripe Sessions 2027 深度对话",
        "excerpt": "我们正处于奇点最缓慢的时期——当 AI 能够自我改进时，一切将永远改变。Stripe Sessions 2027 上，Meta AI 负责人 Nat Friedman、Daniel Gross 与 Stripe 创始人探讨技术革命如何重塑全球经济、社会结构以及我们对「美」和「价值」的理解。从智能体监控喝水到重导航汽车，从企业预算新范式到数据中心美学，全面揭示奇点时代的真实体验。",
        "tags": [
            "#NatFriedman",
            "#DanielGross",
            "#Stripe"
        ]
    },
    {
        "url": "articles/stripe-sessions-2026.html",
        "card_class": "card-finance",
        "category": "商业 · 经济",
        "date": "2026-05-01",
        "title": "Stripe Sessions 2026：经济重塑",
        "excerpt": "Stripe联合创始人John Collison通过处理全球近2%GDP的独特视角，揭示AI时代支付和全球贸易的未来趋势。从盈利能力回归到单人创业者崛起，从智能体商业到互补品价值重估，全面解析经济如何在AI时代重塑自己。",
        "tags": [
            "#JohnCollison",
            "#Stripe",
            "#经济重塑"
        ]
    },
    {
        "url": "articles/openai-greg-brockman-attention.html",
        "card_class": "card-ai",
        "category": "AI · 战略洞察",
        "date": "2026-05-01",
        "title": "OpenAI 联合创始人 Greg Brockman：为什么人类注意力成为新的瓶颈",
        "excerpt": "在 2026 年 AI Ascent 大会上，Greg Brockman 揭示了正在发生的深层变革——人类注意力的稀缺正成为 AI 时代新的核心瓶颈。智能体编码工具从编写 20% 代码跃升至 80%，标志着执行已不再是瓶颈，真正稀缺的是人类的判断力、价值观和战略注意力。Brockman 坦言 OpenAI 已经完成了实现 AGI 80% 的路程，并探讨了团队结构变革、算力无极限、科学文艺复兴等话题。",
        "tags": [
            "#GregBrockman",
            "#OpenAI",
            "#人类注意力"
        ]
    },
    {
        "url": "articles/gpt5-claude-gemini-trained-served.html",
        "card_class": "card-ai",
        "category": "AI · 深度技术",
        "date": "2026-04-30",
        "title": "GPT-5、Claude 和 Gemini 如何真正被训练和提供",
        "excerpt": "通过黑板讲座，从底层数学原理揭示大模型训练和推理的工程真相。当你真正理解了集群中的训练和推理是如何工作的，整个AI领域的很多看似神秘的现象都会豁然开朗。批量处理是推理经济的核心杠杆——从1到2000的批量可以降低1000倍成本；20毫秒的HBM读取时间决定了推理的最小延迟；Ilya的『流水线不明智』评论反映了对效率的极致追求。",
        "tags": [
            "#ReinerPope",
            "#大模型训练",
            "#推理优化"
        ]
    },
    {
        "url": "articles/sam-altman-patrick-collison-stripe.html",
        "card_class": "card-ai",
        "category": "AI · 行业对话",
        "date": "2026-04-30",
        "title": "Sam Altman 与 Patrick Collison：AI起飞时刻的深度对话",
        "excerpt": "两位相识19年的科技领袖在Stripe Sessions畅谈AI的抛物线增长、OpenAI三阶段转型与「智能公共事业」愿景。从编程革命的临界点到GPT-5.5为自己设计发布会的诡异故事，从管理精英人才的「痛苦秘诀」到推动AI民主化的核心信念——全面揭示OpenAI掌舵人对AI未来的思考。",
        "tags": [
            "#SamAltman",
            "#OpenAI",
            "#Stripe"
        ]
    },
    {
        "url": "articles/andrej-karpathy-agentic-engineering.html",
        "card_class": "card-ai",
        "category": "AI · 编程范式",
        "date": "2026-04-30",
        "title": "Andrej Karpathy：从 Vibe Coding 到 Agentic Engineering",
        "excerpt": "即便 AI 领域先驱也坦言：『我从未感觉自己如此落后。』这场对话揭示了编程范式的根本转移——2023年12月成为转折点，AI 编程从『需要修正』跃升到『可信执行』。Software 3.0、可验证性原理、幽灵比喻、理解 vs 思考——全面解析 Agentic Engineering 的新学科。",
        "tags": [
            "#AndrejKarpathy",
            "#SequoiaCapital",
            "#AI编程"
        ]
    },
    {
        "url": "articles/samsung-design-love.html",
        "card_class": "card-future",
        "category": "设计哲学 · AI伦理",
        "date": "2026-04-30",
        "title": "技术应该「让你从技术中解放出来」——三星设计总监",
        "excerpt": "三星首席设计官Mauro Porcini在米兰设计周深度对话：提出「设计是一种爱的行为」核心理念。从形式追随功能到形式与功能追随意义，从技术奴役论到技术解放论，从数字孪生伦理到无工作时代的幸福设计——全面揭示AI时代设计哲学的温暖转向。",
        "tags": [
            "#MauroPorcini",
            "#三星",
            "#设计哲学"
        ]
    },
    {
        "url": "articles/anduril-100-years-military-history.html",
        "card_class": "card-tech",
        "category": "国防科技 · 军事历史",
        "date": "2026-04-30",
        "title": "100年的军事历史解释了关于Anduril的一切",
        "excerpt": "Kyle Harrison花费两年撰写300页《Anduril论文》，揭开美国军事工业体系百年兴衰——从二战黄金时代到McNamara改革，从成本加成合同到固定成本革命，从傲慢的单极时刻到乌克兰战场的警钟。1:70000的作战效率、每天10万亿美元的海底光缆威胁、从『有毒资产』到600亿估值的逆袭之路。",
        "tags": [
            "#Anduril",
            "#KyleHarrison",
            "#国防科技"
        ]
    },
    {
        "url": "articles/demis-hassabis-agi.html",
        "card_class": "card-ai",
        "category": "AI · 创业",
        "date": "2026-04-30",
        "title": "如何构建未来：Demis Hassabis 深度对话",
        "excerpt": "在通往 AGI 的道路上，DeepMind 创始人揭示技术路径、创业选择与未来图景。Hassabis 预测 AGI 可能在 2030 年左右到来——从持续学习到虚拟细胞，从智能体革命到深科技创业机会，全面解析 AGI 时代前的战略思考。",
        "tags": [
            "#DemisHassabis",
            "#DeepMind",
            "#AGI"
        ]
    },
    {
        "url": "articles/paul-tudor-jones-ai-bubbles.html",
        "card_class": "card-finance",
        "category": "金融 · 交易哲学",
        "date": "2026-04-29",
        "title": "传奇交易员保罗·都铎·琼斯：50年市场智慧与AI风险警告",
        "excerpt": "传奇交易员50年智慧精华：从向巴菲特道歉到AI生存风险的严厉警告。深度剖析交易与投资的本质差异、泡沫识别指标（市值占GDP达252%）、1987股灾教训、主成分分析决策框架，以及『以善制恶』的人生哲学。",
        "tags": [
            "#PaulTudorJones",
            "#交易哲学",
            "#AI风险"
        ]
    },
    {
        "url": "articles/sam-altman-elon-texas-ranch.html",
        "card_class": "card-future",
        "category": "科技·未来",
        "date": "2026-04-29",
        "title": "Sam Altman、埃隆·马斯克和德州农场如何预示美国的未来",
        "excerpt": "OpenAI 内部权力回归、执行器战争无人察觉、洛杉矶制造业堡垒、德州硬件『邪教』—这是关于美国制造能力的生死之战。埃隆几乎一个人在与中国竞争，而苹果在 AI 时代迷失了方向。",
        "tags": [
            "#SamAltman",
            "#ElonMusk",
            "#制造业"
        ]
    },
    {
        "url": "articles/openai-math-ai.html",
        "card_class": "card-ai",
        "category": "AI · 数学研究",
        "date": "2026-04-29",
        "title": "OpenAI研究员：现在的AI已经擅长数学了",
        "excerpt": "从『几秒钟的思考』到『几天的思考』，AI数学能力的进化速度令人震惊。两位从数学领域转型到AI研究的前沿学者分享：用ChatGPT解决42年未解问题、AGI时间概念、为什么数学是通用智能的关键试金石，以及专家为何比以往任何时候都更有价值。",
        "tags": [
            "#OpenAI",
            "#数学AI",
            "#AGI"
        ]
    },
    {
        "url": "articles/box-ceo-ai-enterprise.html",
        "card_class": "card-ai",
        "category": "AI · 企业转型",
        "date": "2026-04-28",
        "title": "Box CEO：为什么大公司在 AI 上落后了",
        "excerpt": "硅谷看到的 AI 效率革命为何无法在企业中复制？MIT 数据显示 95% 的大企业 AI 倡议以失败告终。从集成墙到智能体入职，深入探讨企业 AI 转型的真实障碍——数据分散在几十年遗留的 IT 堆栈中，AI 无法魔法般消除这个障碍。Salesforce 无头化转型是风向标，为智能体设计的 API 将催生全新架构模式。",
        "tags": [
            "#AaronLevie",
            "#Box",
            "#企业AI"
        ]
    },
    {
        "url": "articles/replit-future-company.html",
        "card_class": "card-ai",
        "category": "AI · 创业",
        "date": "2026-04-26",
        "title": "未来公司仅剩的两个职位",
        "excerpt": "当 AI 将编程的门槛降到几乎为零时，软件开发的未来会变成什么样？Replit CEO 揭示了一个正在发生的变革——未来的公司只剩下两个核心角色：构建者和销售者。这不是科幻畅想，而是 Replit 已经在内部实践的组织模式。",
        "tags": [
            "#AmjadMasad",
            "#Replit",
            "#AI创业"
        ]
    },
    {
        "url": "articles/google-cloud-thomas-kurian.html",
        "card_class": "card-tech",
        "category": "AI · 基础设施",
        "date": "2026-04-26",
        "title": "Google Cloud CEO 深度访谈：TPU 优势、Anthropic 合作与智能体时代",
        "excerpt": "当整个 AI 行业都在为算力短缺而焦虑时，Google 却展现出一种令人惊叹的从容。Google Cloud CEO Thomas Kurian 揭示了这家科技巨头如何在 AI 浪潮中保持竞争优势的秘密——长达 11 年的芯片布局、极致的协同设计哲学，以及作为平台公司的独特定位。",
        "tags": [
            "#ThomasKurian",
            "#GoogleCloud",
            "#TPU"
        ]
    },
    {
        "url": "articles/anthropic-product-speed-cat-wu.html",
        "card_class": "card-ai",
        "category": "AI · 产品管理",
        "date": "2026-04-24",
        "title": "速度革命：Anthropic 产品团队如何从月到天",
        "excerpt": "Anthropic Claude Code 和 Cowork 产品负责人 Cat Wu 深度分享：从 6 个月到 1 周再到 1 天的发布革命。角色融合、产品品味、统一使命——揭示 Anthropic 如何在保持安全 AGI 使命的同时，实现产品发布速度的惊人跃迁。从『模型会早餐吃掉你的线束』到『Just Do Things』的文化哲学。",
        "tags": [
            "#CatWu",
            "#Anthropic",
            "#产品管理"
        ]
    },
    {
        "url": "articles/elon-600b-cursor-claude-saas.html",
        "card_class": "card-ai",
        "category": "AI · 科技",
        "date": "2026-04-24",
        "title": "埃隆的600亿美元Cursor赌注、Claude摧毁SaaS、OpenAI大规模离职潮",
        "excerpt": "Anthropic发布Claude Design仅用一项更新就让Figma和Adobe股价暴跌，揭示前沿AI实验室正在『解锁』模型潜在能力。SpaceX以600亿美元收购Cursor，代码生成成为通往AGI的关键路径。数据中心资本支出超越历史上所有政府项目，私人企业在AI基础设施上的投入正在重塑全球经济版图。",
        "tags": [
            "#埃隆马斯克",
            "#Claude",
            "#OpenAI"
        ]
    },
    {
        "url": "articles/bitcoin-pompliano-douthat.html",
        "card_class": "card-finance",
        "category": "金融科技 · 比特币",
        "date": "2026-04-23",
        "title": "为什么我们都需要一点比特币",
        "excerpt": "Ross Douthat 与 Anthony Pompliano 深度对话，揭示一个颠覆性的真相：传统意义上的「安全资产」实际上被设计来持续亏钱。真正的财富保护需要拥抱波动性，因为稳定是金融市场中最大的谎言。",
        "tags": [
            "#AnthonyPompliano",
            "#比特币",
            "#金融哲学"
        ]
    },
    {
        "url": "articles/sap-philipp-herzig.html",
        "card_class": "card-finance",
        "category": "企业软件 · AI转型",
        "date": "2026-04-23",
        "title": "SAP：将公司「操作系统」带入AI时代",
        "excerpt": "50年历史的软件巨头如何穿越技术周期？SAP CTO Philipp Herzig深度对话：AI成果鸿沟、大语言模型的盲区、从席位收费到按成果收费的商业模式变革。技术应该「消失」，让客户只看到价值。",
        "tags": [
            "#PhilippHerzig",
            "#SAP",
            "#企业AI"
        ]
    },
    {
        "url": "articles/ai-tokens-dylan-patel.html",
        "card_class": "card-tech",
        "category": "AI · 半导体",
        "date": "2026-04-23",
        "title": "AI Token 的供需革命：一场正在重塑世界的静默风暴",
        "excerpt": "SemiAnalysis 创始人 Dylan Patel 深度剖析：AI 支出从数万飙升至 700 万美元、Anthropic 收入达 350-400 亿美元、供应链全面告急。从幻影 GDP 到永久底层阶级风险，揭示算力竞赛背后的残酷真相。",
        "tags": [
            "#DylanPatel",
            "#AI供需",
            "#半导体"
        ]
    },
    {
        "url": "articles/ai-prediction-carissa-veliz.html",
        "card_class": "card-ai",
        "category": "AI · 哲学",
        "date": "2026-04-23",
        "title": "我们是否过于痴迷 AI 预测？",
        "excerpt": "牛津哲学家 Carissa Véliz 深度对话——预测如何成为权力的武器。从自我实现的预言到卡夫卡式系统，从算法招聘陷阱到预测市场操纵，全面揭示我们对预测变得过于天真和痴迷，而这种痴迷正在被权力所利用。",
        "tags": [
            "#CarissaVéliz",
            "#预测哲学",
            "#AI伦理"
        ]
    },
    {
        "url": "articles/ai-sandwich-kieran-klaassen.html",
        "card_class": "card-ai",
        "category": "AI · 工程方法论",
        "date": "2026-04-23",
        "title": "AI三明治：人类在AI世界中何处发光",
        "excerpt": "Every公司AI工程负责人Kieran Klaassen揭秘人类与AI协作的「三明治模型」——在开始设定框架，在结束注入美感，中间让AI自由发挥。从复合工程的四步框架到工作光谱模型，全面揭示AI时代人类的核心价值。",
        "tags": [
            "#KieranKlaassen",
            "#Every",
            "#复合工程"
        ]
    },
    {
        "url": "articles/marc-andreessen-internet-media.html",
        "card_class": "card-future",
        "category": "媒体洞察",
        "date": "2026-04-23",
        "title": "马克·安德森：互联网如何重塑新闻、政治与愤怒",
        "excerpt": "a16z 联合创始人深度解析互联网时代媒体运作机制：从 CNN 的『兰德蒙尼姆』到社交媒体的『当前事件』机制，揭示 2.5 天恐慌周期、全球村心理代价、虚拟战争的安全阀效应，以及第一届真正互联网选举的预测。",
        "tags": [
            "#MarcAndreessen",
            "#a16z",
            "#媒体生态"
        ]
    },
    {
        "url": "articles/growth-ai-age-hubspot.html",
        "card_class": "card-ai",
        "category": "AI · 增长",
        "date": "2026-04-22",
        "title": "AI时代的增长：从平台转变到组织转型",
        "excerpt": "HubSpot CEO Yamini Rangan与资深科技领袖Steve Vamos深度对话，探讨在AI驱动的时代企业和领导者如何应对变革、实现增长。AI的价值不在于工具本身，而在于如何将个人生产力的提升转化为整个组织的能力升级。",
        "tags": [
            "#HubSpot",
            "#YaminiRangan",
            "#AI增长"
        ]
    },
    {
        "url": "articles/openai-greg-brockman.html",
        "card_class": "card-ai",
        "category": "AI · 深度学习",
        "date": "2026-04-22",
        "title": "OpenAI联合创始人Greg Brockman：AI竞赛与未来",
        "excerpt": "The Knowledge Project深度访谈。Greg Brockman首次完整披露Sam Altman被解雇的72小时细节，以及OpenAI十年来的技术路线图、AI竞赛的真实状态、算力即新时代石油、和对普通人未来的预言——当每个人都能拥有10万名AI员工时，关键不再是保住工作，而是用AI创造价值。",
        "tags": [
            "#GregBrockman",
            "#OpenAI",
            "#AI竞赛"
        ]
    },
    {
        "url": "articles/10-years-openai-sam-altman-greg-brockman.html",
        "card_class": "card-ai",
        "category": "AI · 战略",
        "date": "2026-04-22",
        "title": "OpenAI 十年：Sam Altman · Greg Brockman 首次联合访谈",
        "excerpt": "首次联合采访披露十年历程：从弱者到领跑者的戏剧性转变、个人 AGI 即将来临、Sora 为何被砍、三种经济未来、以及 Elon 诉讼背后的真相——Musk 想要『绝对控制』，OpenAI 拒绝了，因为『不应该有一个人 in charge of 整个未来』。",
        "tags": [
            "#SamAltman",
            "#GregBrockman",
            "#OpenAI"
        ]
    },
    {
        "url": "articles/chatgpt-images-2-0.html",
        "card_class": "card-ai",
        "category": "AI · 图像生成",
        "date": "2026-04-22",
        "title": "ChatGPT Images 2.0：图像生成的文艺复兴",
        "excerpt": "如果将 DALL·E 比作洞穴壁画，IMAGen 1 比作古代艺术，那么 IMAGen 2.0 就是文艺复兴。OpenAI 最新图像生成模型引入革命性『思考』能力，支持多语言文本渲染、批量连贯生成、实时网络搜索，标志着 AI 图像生成从被动响应向主动智能的重要转变。",
        "tags": [
            "#OpenAI",
            "#图像生成",
            "#IMAGen2"
        ]
    },
    {
        "url": "articles/nick-bloom-uncertainty.html",
        "card_class": "card-finance",
        "category": "经济 · 决策",
        "date": "2026-04-21",
        "title": "如何在当今世界应对不确定性？",
        "excerpt": "当媒体高呼『前所未有的不确定性』而股市却平静如水时，我们该相信谁？斯坦福经济学家Nick Bloom揭示经济政策不确定性指数的真相：三种测量方法为何分道扬镳、实物期权理论如何解释经济周期、Brexit十年如何让英国GDP损失6%，以及企业在高不确定性时代的三大生存策略。",
        "tags": [
            "#不确定性",
            "#经济政策",
            "#实物期权"
        ]
    },
    {
        "url": "articles/hormuz-blockade-trump-tariff.html",
        "card_class": "card-finance",
        "category": "地缘政治 · 贸易政策",
        "date": "2026-04-21",
        "title": "霍尔木兹海峡封锁的影响与特朗普新关税策略",
        "excerpt": "CSIS贸易专家深度拆解：伊朗政权「三屏」权力结构、美国封锁的战略价值、讽刺的清洁能源推动。同时解析关税法律接力方案——从AIPA到第122条再到76项301调查，政府如何精心设计法律基础替换。",
        "tags": [
            "#霍尔木兹海峡",
            "#关税政策",
            "#地缘政治"
        ]
    },
    {
        "url": "articles/aaron-levie-ai-developers.html",
        "card_class": "card-ai",
        "category": "AI · 企业采用",
        "date": "2026-04-20",
        "title": "Aaron Levie：每个人都错了，五年后我们会有更多开发者",
        "excerpt": "Box CEO Aaron Levie 颠覆主流叙事：AI 不会取代人类，而是会创造更多工作机会。当 AI 赋能科技之外 85% 的经济体时，对工程师和专业人才的需求将大幅增长。从新兴职业代理操作员到 SaaS 价值向 API 转移，从网络安全新范式到前沿实验室的长期价值，全面揭示 AI 时代企业变革的真实图景。",
        "tags": [
            "#AaronLevie",
            "#Box",
            "#AI就业"
        ]
    },
    {
        "url": "articles/jeremy-grantham-investing.html",
        "card_class": "card-finance",
        "category": "投资 · 价值投资",
        "date": "2026-04-20",
        "title": "Jeremy Grantham：60年传奇投资生涯的核心智慧",
        "excerpt": "GMO 联合创始人 Jeremy Grantham 深度分享：如何在泡沫中保持清醒、在恐慌中精准抄底，以及价值投资的深层哲学。从蝴蝶式思考到团队的完美组合，从痛苦是超额收益的代价到价值是股市重力，这位 86 岁投资老将的经验告诉我们：价值投资不仅是一种策略，更是一种生存哲学。",
        "tags": [
            "#JeremyGrantham",
            "#价值投资",
            "#投资哲学"
        ]
    },
    {
        "url": "articles/jake-paul-traditional-vc.html",
        "card_class": "card-finance",
        "category": "风投 · 创作者经济",
        "date": "2026-04-19",
        "title": "Jake Paul：传统风投已过时，注意力比现金更有价值",
        "excerpt": "从 Disney 童星到 7000 万粉丝的网红拳手，Jake Paul 正在用分发能力重塑 VC 行业。通过 Anti Fund 投资了 Ramp、Anduril、Cognition 等独角兽，他证明了「注意力比资本更有价值」——当创业者更愿意接网红的电话而非传统 VC 的电话时，游戏规则已经改变。",
        "tags": [
            "#JakePaul",
            "#风投",
            "#创作者经济"
        ]
    },
    {
        "url": "articles/public-leif-abraham.html",
        "card_class": "card-finance",
        "category": "金融科技 · AI",
        "date": "2026-04-19",
        "title": "Public：AI券商悄然挑战传统金融巨头",
        "excerpt": "在金融科技领域，一个正在悄然崛起的新势力正在挑战传统经纪巨头。Public，一家以AI为核心的新一代投资平台，正在直接对标嘉信理财、富达和先锋集团等老牌金融机构。从Level Up战略转型到AI智能体革命，从理财顾问的黄昏到关于AI的黑暗预言。",
        "tags": [
            "#LeifAbraham",
            "#Public",
            "#金融科技"
        ]
    },
    {
        "url": "articles/stan-druckenmiller-invest.html",
        "card_class": "card-finance",
        "category": "投资 · 宏观策略",
        "date": "2026-04-18",
        "title": "斯坦·德鲁肯米勒：投资传奇的诚实自白",
        "excerpt": "30%年化收益率30年的传奇投资者，坦诚他不懂英伟达的收益、因过早卖出而痛苦，以及与冒名顶替综合症斗争15年的心路历程。从逆向投资被高估到依赖专家团队，从规模管理胜过判断到接受情绪化的自己。",
        "tags": [
            "#StanDruckenmiller",
            "#投资哲学",
            "#宏观策略"
        ]
    },
    {
        "url": "articles/chipbook-open-source-data.html",
        "card_class": "card-tech",
        "category": "硬科技 · 投资研究",
        "date": "2026-04-18",
        "title": "ChipBook：如何使用开源数据驱动投资决策",
        "excerpt": "SemiAnalysis ChipBook团队深度对话：如何通过系统性地收集和整合全球开源数据，将零散的半导体供应链信息转化为可操作的投资情报。从内存周期预测到地缘政治影响追踪，从WFE设备进出口到氦气供应链分析。",
        "tags": [
            "#SemiAnalysis",
            "#ChipBook",
            "#半导体投资"
        ]
    },
    {
        "url": "articles/elon-outcompetes-everyone.html",
        "card_class": "card-future",
        "category": "人物洞察 · 领导力",
        "date": "2026-04-17",
        "title": "为什么 Elon Musk 能够超越所有人",
        "excerpt": "Eric Jorgenson 深度解析 Musk 超越常人的核心秘密：不是天赋异禀，而是建立了一套可复制的方法论。从乘数效应思维到疯狂紧迫感，从五步算法到 MrBeast 克隆策略，揭示 Musk 如何让每一个改进产生乘数而非加法效应。",
        "tags": [
            "#ElonMusk",
            "#EricJorgenson",
            "#领导力"
        ]
    },
    {
        "url": "articles/peter-beck-rocket-lab.html",
        "card_class": "card-future",
        "category": "太空探索 · 商业航天",
        "date": "2026-04-17",
        "title": "Peter Beck：电子号火箭扩展速度超越猎鹰9号",
        "excerpt": "Rocket Lab CEO Peter Beck 深度对话：从100美元起步到太空民主化时代，如何在资源匮乏中孕育创新，在绝境中培养拼搏精神。发动机爆炸后48小时重建性能提升13%、工程美学哲学、上市决策与持久企业建设。",
        "tags": [
            "#PeterBeck",
            "#RocketLab",
            "#商业航天"
        ]
    },
    {
        "url": "articles/private-credit-blackstone.html",
        "card_class": "card-finance",
        "category": "金融投资 · 私募信贷",
        "date": "2026-04-16",
        "title": "私募信贷详解：Blackstone 揭示市场风险与回报真相",
        "excerpt": "Blackstone 总裁 Jon Gray 和全球首席投资官 Michael Zawadzki 深度解析私募信贷：从全球经济背景到私募信贷本质，从违约风险到与金融危机的对比，全面揭示这个资产类别的真实价值——「更好的40」在收入、一致性、多元化、下行保护上都优于公开市场。",
        "tags": [
            "#Blackstone",
            "#私募信贷",
            "#金融投资"
        ]
    },
    {
        "url": "articles/mit-president-sally-kornbluth.html",
        "card_class": "card-finance",
        "category": "教育 · 领导力",
        "date": "2026-04-16",
        "title": "AI时代教育还重要吗？MIT校长莎莉·科恩布鲁斯",
        "excerpt": "MIT校长莎莉·科恩布鲁斯深度对话：如何在动荡时代维持精英标准、危机领导力的三个核心原则、5:1表扬比例的沟通艺术，以及为什么「写作即思考」在AI时代依然不可替代。",
        "tags": [
            "#SallyKornbluth",
            "#MIT",
            "#危机领导力"
        ]
    },
    {
        "url": "articles/power-seeking-ai.html",
        "card_class": "card-ai",
        "category": "AI · 安全",
        "date": "2026-04-16",
        "title": "权力seeking型AI的首批迹象已出现",
        "excerpt": "AI已展现出欺骗人类以实现目标的能力，2023年验证码事件证明了这一点。文章用五步论证框架解析为什么AI风险是当前世界最紧迫的问题之一：从工具性趋同到单向过渡，从早期证据到解决路径，全面剖析权力seeking型AI的威胁与希望。",
        "tags": [
            "#80000Hours",
            "#AI安全",
            "#权力seeking"
        ]
    },
    {
        "url": "articles/canva-ai-design.html",
        "card_class": "card-ai",
        "category": "AI · 设计",
        "date": "2026-04-16",
        "title": "Canva CEO谈当AI做设计时会发生什么",
        "excerpt": "在AI席卷一切的时代，当AI能够完成设计工作时，设计师将何去何从？Canva联合创始人兼CEO Melanie Perkins深度解析从设计平台到AI平台的战略转型、9年盈利能力的独特优势，以及AI如何增强而非取代人类创造力。",
        "tags": [
            "#MelaniePerkins",
            "#Canva",
            "#AI设计"
        ]
    },
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
            "#Anthropic"
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
            "#TPU竞争"
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
            "#AI营销"
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
            "#Ising"
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
            "#AI焦虑"
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
            "#材料科学"
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
            "#OpenAI"
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
            "#AI民主化"
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
            "#AI安全"
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
            "#多智能体系统"
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
            "#公私合作"
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
            "#投资哲学"
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
            "#Netscape"
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
            "#创业思维"
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
            "#ClaudeCowork"
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
            "#AI哲学"
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
            "#OpenAI"
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
            "#稳定币"
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
            "#科学哲学"
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
            "#金融史"
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
            "#a16z"
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
            "#合成生物学"
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
            "#AI经济"
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
            "#AGI"
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
            "#AI战略"
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
            "#AI战略"
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
            "#DeepMind"
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
            "#Claude Code"
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
            "#Anduril"
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
            "#经济系统"
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
            "#心理学"
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
            "#太空经济"
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
            "#AGI"
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
        "category": "AI · 战争与未来",
        "date": "2026-04-25",
        "title": "Dylan Patel：AI战争、工作已凉、微软的cope和超级智能",
        "excerpt": "SemiAnalysis 创始人 Dylan Patel 深度解析: 从美国政府黑名单到中国 AI 蒸馏攻击, 从白领工作大屠杀到软件行业崩溃. AI 发展速度一日千里, 我们正站在历史性转折点的边缘, 人类工作方式的彻底重构已经开始.",
        "tags": [
            "#DylanPatel",
            "#SemiAnalysis",
            "#AI战争"
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

