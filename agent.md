You are a professional front-end developer.

Create a static front-end-only website for a fandom page for the game
“Last Z: Shooter Run”.

GENERAL REQUIREMENTS
- Use ONLY HTML, CSS, and vanilla JavaScript.
- The site must be fully static and compatible with GitHub Pages.
- Do NOT use any frameworks, build tools, or backend code.
- Use a dark theme suitable for a gaming fandom site.
- Make the site responsive for desktop and mobile.

PROJECT STRUCTURE
- Use one HTML file per page.
- Use shared files:
  - /css/style.css
  - /js/main.js
- All text content must be stored in external text files and loaded dynamically.
- Suggested structure:
  /
  ├── index.html
  ├── events_full_preparedness.html
  ├── events_alliance_duel.html
  ├── power_heroes.html
  ├── power_research.html
  ├── power_buildings.html
  ├── f2p.html
  ├── links_z_links.html
  ├── links_z_creators.html
  ├── css/style.css
  ├── js/main.js
  └── texts/
  ├── homeEN.txt
  ├── events_full_preparednessEN.txt
  ├── events_alliance_duelEN.txt
  ├── power_heroesEN.txt
  ├── power_researchEN.txt
  ├── power_buildingsEN.txt
  ├── f2pEN.txt
  ├── links_z_linksEN.txt
  └── links_z_creatorsEN.txt

NAVIGATION
- A header navigation bar must appear on all pages.
- Navigation must include dropdown menus.
- Parent menu items must NOT be clickable.
- Only submenu items are clickable links.

Menu structure:
- Home (link to index.html)
- Events
  - Full Preparedness
  - Alliance Duel
- Power
  - Heroes
  - Research
  - Buildings
- F2P
- Links
  - Z Links
  - Z Creators

CONTENT REQUIREMENTS
- All visible text must be loaded from the external text files using fetch().
- Use the word "PLACEHOLDER" wherever actual content is unknown.
- Each page must contain:
  - Placeholder text
  - Placeholder images
  - Placeholder tables where relevant
- Images must be represented with visible placeholder boxes.

LANGUAGE SUPPORT
- Default language is English (EN).
- A language switcher must be visible in the top-right corner on all pages.
- Language switching must:
  - Load text from the correct language file
  - Persist the selected language using localStorage
- Do NOT auto-detect browser language.

STYLING
- Dark background with high contrast text.
- Use sections or cards to organize content.
- Tables must be styled to match the dark theme.
- Dropdown menus must be usable with mouse and touch (click-based, not hover-only).

ACCESSIBILITY
- Navigation must work on mobile and desktop.
- Use semantic HTML elements where appropriate.

OUTPUT INSTRUCTIONS
- Provide complete code for:
  - index.html
  - at least one additional content page
  - css/style.css
  - js/main.js
- Explain briefly how the language loading system works.
- Do NOT include explanations inside the code files.
- Do NOT simplify the structure.
- Do NOT omit files.
