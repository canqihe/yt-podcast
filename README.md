# YouTube Podcast Knowledge Base

> Turning deep podcast conversations into structured, accessible knowledge

A curated knowledge platform that distills the best YouTube podcast content into structured, in-depth articles covering AI, finance, science, and more. Each article is a carefully crafted synthesis of expert conversations.

## Features

- **Curated Content** - Extracting the most valuable insights from top podcasts
- **Structured Presentation** - Long-form conversations reorganized into scannable articles
- **Multi-Scheme Dark Theme** - 6 curated color palettes for visual variety
- **Responsive Design** - Optimized for desktop and mobile
- **Zero Dependencies** - Pure HTML/CSS/JS, no build step required

## Articles

**70 articles** across multiple domains:

| Domain | Examples |
|--------|---------|
| **AI Strategy & Agents** | Dario Amodei (3x), Andrej Karpathy, Harrison Chase, Bret Taylor, Joelle Pineau, Greg Brockman (OpenAI) |
| **AI & Robotics** | Sergey Levine, Demis Hassabis, Brett Adcock, Figure AI |
| **AI Markets & Compute** | a16z, SemiAnalysis, Coatue, Alfred Lin (Sequoia) |
| **AI Society & Future** | Ben Horowitz, Marc Andreessen, Alex Karp, Yuval Harari |
| **AI Growth & Enterprise** | Yamini Rangan (HubSpot), Aaron Levie (Box) |
| **Investing & Finance** | Stanley Druckenmiller, Tom Lee, ARK Invest, Steve Keen (financial crash warning), Jeremy Allaire (Circle), Alan Waxman (Sixth Street), Jeremy Grantham (GMO) |
| **Defense & Military Tech** | Palantir, Anduril, military industrial complex |
| **Hard Tech & Manufacturing** | Xiaomi (Alain Lam), SemiAnalysis (ChipBook), Applied Materials |
| **Company Earnings** | Google Q4 2025, Micron Q2 2026 |
| **Science & Health** | David Sinclair (aging), Dr. Arif Khan (child development), AI-designed life forms, Ben Lamm (synthetic biology) |
| **Space & Frontier Tech** | Musk, NASA, Starcloud, Quantum Computing, Brain-Computer Interfaces, Michael Nielsen (alien tech trees), Peter Beck (Rocket Lab) |
| **Tech Leaders** | Satya Nadella, Demis Hassabis, Jensen Huang, Kurzweil, Elon Musk |
| **Wisdom & Thinking** | Kevin Kelly (79 maxims), First principles thinking, Eric Jorgenson (Musk methodology) |
| **Philosophy & Spirituality** | Swami Sarvapriyananda (consciousness & Vedanta), Robert Pantano (self-awareness) |

Browse all articles at [index.html](index.html)

## Quick Start

```bash
git clone git@github.com:canqihe/yt-podcast.git
cd yt-podcast
open index.html
```

Or visit the [GitHub Pages](https://canqihe.github.io/yt-podcast/) deployment.

## Design System

The design system lives in `design-system/` and supports **6 color schemes** that can be swapped by changing 5 CSS variables:

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
- **Google Fonts** - Typography (Fraunces, Source Serif 4, Space Mono)

## Project Structure

```
yt-podcast/
├── index.html                  # Homepage (article grid)
├── articles/                   # 70+ in-depth articles
│   └── images/                 # Article hero images
├── design-system/
│   ├── design-tokens.css       # Design tokens & color schemes
│   ├── style.css               # Shared stylesheet
│   ├── design-spec.md          # Design specification
│   └── template-standalone.html  # Article template
├── images/                     # Shared assets
├── videos/                     # Video files
├── rss-feeds.html              # RSS feed reader
├── rss-reader.html             # RSS reader UI
└── README.md
```

## Contributing

Issues and pull requests are welcome.

## License

Content is curated from YouTube podcasts for educational purposes. Original content belongs to respective creators.

## Maintainer

[canqihe](https://github.com/canqihe)
