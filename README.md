# Colin's Reading Notes

> Transforming deep podcast conversations into structured, accessible knowledge

A curated knowledge platform that distills the best YouTube podcast content into structured, in-depth articles covering AI, finance, science, and more. Each article is a carefully crafted synthesis of expert conversations.

## Features

- **Curated Content** - Extracting the most valuable insights from top podcasts
- **Structured Presentation** - Long-form conversations reorganized into scannable articles
- **Multi-Scheme Dark Theme** - 6 curated color palettes for visual variety
- **Dark/Light Mode** - Comfortable reading experience with theme toggle
- **Real-time Search** - Quickly find articles by title, excerpt, category, or tags
- **Pagination** - Browse content efficiently (15 articles per page)
- **Responsive Design** - Optimized for desktop and mobile
- **Zero Dependencies** - Pure HTML/CSS/JS, no build step required

## Articles

**200+ articles** across multiple domains:

| Domain | Examples |
|--------|---------|
| **AI Strategy & Leaders** | OpenAI (Sam Altman, Greg Brockman, Brad Lightcap, Sarah Friar), Anthropic (Dario Amodei 3x, Daniela Amodei, Cat Wu, Felix Rieseberg, Krishna Rao, Mike Krieger), Google AI (Sundar Pichai 2x, Demis Hassabis 6x), NVIDIA (Jensen Huang 4x), xAI (Elon Musk), Boris Cherny (Claude Code), Satya Nadella 2x, Marc Andreessen 3x, Benedict Evans, Scott Galloway |
| **AI Agents & Platforms** | Harrison Chase (LangChain), Andrej Karpathy (agentic engineering, code agents), AI Agent Swarms, Claude Code, Claude Cowork, OpenClaw, ChatGPT Images 2.0, AI Sandwich model, SEO to Agent-Led Growth, Harvey AI, Daytona (Ivan Burazin), AI Agents Perplexity, Codex vs Claude |
| **AI Engineering & Research** | Shane Legg (AGI), Joelle Pineau (AI frontiers), Richard Sutton (reinforcement learning), Zico Kolter (frontier AI), Mostafa Dehghani, Rohin Shah (AGI Safety, DeepMind), AI Math, MIT AI courses (Chris Bishop, 3 Laws) |
| **AI Safety & Ethics** | Tristan Harris (AI god), Carissa Véliz (AI prediction), Power-seeking AI, AGI Safety (Rohin Shah), Anthropic Mythos Dilemma |
| **Markets & Compute** | a16z (David George, Aaron Levie, Ben Horowitz, AI Winners), Coatue (Thomas Laffont, Lucas Swisher, Jaimin Rangwalla), SemiAnalysis (Dylan Patel 2x, AWS margins, Unitree robotics), ARK Invest (Big Ideas 2026), Gavin Baker (orbital compute) |
| **Semiconductors** | Cerebras (Andrew Feldman, IPO, wafer-scale engine, TBPB Diet), TSMC, NVIDIA TPU competition, AI silicon shortage, VanEck semiconductor investing, Micron Q2 2026, Stanford CS153 (Value per Gigawatt) |
| **Robotics & Physical AI** | Figure AI (Brett Adcock), Unitree (robotics evolution, supply chain), Sergey Levine, Seeed Studio (open-source robot), Anduril, Palantir, Uber (Dara Khosrowshahi on Robotaxi), Atoms (Travis Kalanick), Caitlin Kalinowski (AI hardware), Robot Hardware Supply Chain |
| **Finance & Investing** | Stanley Druckenmiller, Jeremy Grantham, Tom Lee, Dan Loeb (Third Point), Marc Rowan (Apollo private markets), Ken Griffin, Paul Tudor Jones, Blackstone (private credit, Tony James), Lloyd Blankfein 2x, Howard Marks (Oaktree), Jim Simons, Jake Paul, Alfred Lin (Sequoia), Goldman Sachs |
| **Defense & Military** | Palantir (Alex Karp), Anduril (100 years military history), Pentagon AI plan, military industrial complex |
| **Space & Frontier Tech** | SpaceX IPO, NASA (Jared Isaacman), Rocket Lab (Peter Beck), Starcloud, Quantum Computing (D-Wave, NVIDIA Ising), Brain-Computer Interfaces (World/Merge Labs), Anthropic-SpaceX deal & singularity economy |
| **Tech Companies & Earnings** | Alphabet Q4 2026, Micron Q2 2026, Google Cloud (Thomas Kurian), Tesla, Roblox (David Baszucki), Canva, Replit, SAP, Asana, Shopify (Tobi Lütke 21 years), Stripe Sessions 2026, Samsung Design, IBM (Arvind Krishna) |
| **Philosophy & Society** | Yuval Harari (stories, power, truth), Dan Shipper (AI paradox), Robert Pantano (self-awareness), Swami Sarvapriyananda (consciousness, Vedanta), 60 Minutes AI Reports |
| **Wisdom & Thinking** | Kevin Kelly (79 maxims for excellent living), Eric Jorgenson (Elon Musk methodology), Nick Bloom (navigating uncertainty), Ben Horowitz (managerial philosophy), Joe Hudson (emotional fluidity) |
| **Health & Science** | David Sinclair (aging reversal), Ben Lamm (synthetic biology), AI-designed life forms, MIT (Sally Kornbluth, Chris Bishop) |
| **Crypto & Web3** | Worldcoin (Alex Blania), Circle (Jeremy Allaire), Anthony Pompliano (Bitcoin), stablecoins, agent economy |
| **Organizational Transformation** | Jack Dorsey (Block reorg), Amjad Masad (Replit: only 2 roles remain), SEO to Agent-Led Growth, AI teammates (Arnab Bose), forward-deployed engineering, Organizational Singularity |
| **Energy & Infrastructure** | Chris Wright (data center energy), global infrastructure partnerships, Hormuz blockade, trade policy |
| **Global Trade & Geopolitics** | Ryan Petersen (global trade history), American finance 100 years, tech billionaires' AI plans, SpaceX/OpenAI/Anthropic IPO landscape |
| **Research Reports** | AMAT (Applied Materials), MU (Micron) |

Browse all articles at [index.html](index.html)

## Quick Start

```bash
git clone git@github.com:canqihe/yt-podcast.git
cd yt-podcast
open index.html
```

Or visit the [GitHub Pages](https://canqihe.github.io/yt-podcast/) deployment.

## Design System

The design system lives in `design-system/` and supports **6 color schemes** with **light/dark mode**:

| # | Scheme | Primary | Secondary |
|---|--------|---------|-----------|
| 1 | Orange-Cyan | `#ff6b35` | `#00d4ff` |
| 2 | Purple-Yellow | `#a855f7` | `#FFC107` |
| 3 | Green-Yellow | `#22c55e` | `#eab308` |
| 4 | Blue-Indigo | `#3b82f6` | `#818cf8` |
| 5 | Coral-Gold | `#f97066` | `#fbbf24` |
| 6 | Teal-Violet | `#14b8a6` | `#a78bfa` |

All gradients, glows, shadows, and accent elements auto-inherit from these variables. See `design-system/design-tokens.css` for full documentation.

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** - No build tools, no frameworks
- **CSS Custom Properties** - Design tokens for consistent theming
- **Intersection Observer** - Scroll-triggered animations
- **Google Fonts** - Typography (Fraunces, Source Serif 4, Space Mono, Orbitron, JetBrains Mono)

## Project Structure

```
yt-podcast/
├── index.html                  # Homepage (article grid)
├── articles/                   # 200+ in-depth articles
│   ├── images/                 # Article hero images
│   └── research/               # 2 equity research reports
├── assets/
│   ├── css/                    # Stylesheets
│   │   └── homepage.css        # Homepage styles
│   ├── js/                     # JavaScript
│   │   └── homepage.js         # Homepage logic (search, pagination, theme)
│   ├── images/                 # Shared images
│   └── videos/                 # Video assets
├── design-system/
│   ├── design-tokens.css       # Design tokens & color schemes
│   ├── style.css               # Shared stylesheet
│   ├── article-styles.css      # Article-specific styles
│   ├── design-spec.md          # Design specification
│   ├── template-article.html   # Article template
│   └── template-standalone.html  # Standalone article template
├── rss-feeds.html              # RSS feed reader
├── rss-reader.html             # RSS reader UI
└── README.md
```

## Interactive Features

- **Search**: Real-time article filtering by title, description, category, or tags
- **Theme Switcher**: Toggle between light and dark modes
- **Pagination**: Browse articles 15 per page with page navigation
- **External Links**: [Indigo Reading List](articles/indigo_readlist.html), [RSS Feeds](rss-feeds.html)

## Contributing

Issues and pull requests are welcome.

## License

Content is curated from YouTube podcasts for educational purposes. Original content belongs to respective creators.

## Maintainer

[canqihe](https://github.com/canqihe) | [X/Twitter](https://x.com/nfa_trader)
