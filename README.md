# 🤝 SkillSwap — Peer-to-Peer Knowledge Exchange Network

SkillSwap is a responsive, multi-page client-side web application engineered with semantic HTML5 markup, modern CSS Grid/Flexbox architecture, and vanilla JavaScript. The application features a dynamic cross-page data pipeline powered entirely by browser `localStorage` and `JSON` data handling layers.

---

## 📋 Rubric & Architectural Mapping

### 1. HTML Structure & Semantic Markup
* **Semantic Landmarks:** Avoids generic wrappers by using `<aside>` for workspace sidebar navigation, `<main>` for core analytical layout nodes, `<header>` for global contextual breadcrumbs, and `<section>` for isolated modular interfaces.
* **Multi-Page Architecture:** Divided into three structurally unified views representing distinct operational states: `profile.html` (Data Registration Engine), `discover.html` (Marketplace Search Hub), and `dashboard.html` (Active Pipeline Analytics Workspace).

### 2. CSS Styling & Layout Engines
* **Advanced Layout Systems:** Implements responsive CSS Grid setups (`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`) to handle dynamic content card adjustments, combined with Flexbox alignments for precise micro-interactions.
* **Aesthetic Standard:** Inspired by modern Dribbble dashboard designs with a neon-accented dark mode color palette, custom gradients, and design cohesion achieved through centralized CSS variables.
* **External Assets:** Typography is managed using Google Fonts (`Manrope` for display typography, `DM Sans` for body copy text). Navigation layouts feature crisp Unicode font symbols to maximize offline local rendering stability.

### 3. JavaScript Functionality & Data Persistence
* **Single-Point Data Injection Pipeline:** The `profile.html` page acts as the designated input control. Saving the profile captures input fields, bundles them into an object literal, and maps them to a secure stringified JSON entry in `localStorage`.
* **Cross-Page Data Recovery:** When a user visits `discover.html` or `dashboard.html`, the individual script components automatically extract, parse, and verify the structural integrity of the profile cache data using `JSON.parse()`. The system then dynamically compiles new markup strings to seamlessly inject user data into the marketplace views.

### 4. Advanced Event Handling & Validation Pipelines
* **Dynamic Content Filtering:** Implements instant, automated query filtering across multiple attributes inside `discover.js`. This matches string inputs from user search controls with inline data tokens (`data-search-payload`), hiding unmatched elements smoothly.
* **Form State Validation:** Intercepts default form submission processes to validate inputs, calculate custom typography initials for procedural fallback profile avatars, and render accessible confirmation alerts.

---

## 🛠️ Project File Directory Tree

```text
├── profile.html             # Profile Registration Control Center
├── discover.html            # Marketplace Filtering Search Interface
├── dashboard.html           # Analytical Workspace Management Board
├── css/
│   └── style.css            # Centralized Design Variables & Global Styling Engine
└── js/
    ├── profile.js           # Live Preview & Data Capture Management
    ├── discover.js          # Marketplace Matching & Data Export Pipeline
    ├── dashboard.js         # Workspace Logs & Array Reduction Calculations
    └── test-suite.js        # Automated System Validation Suite (Console Matrix)
```

---

## 🚀 Local Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com
   cd SkillSwap
   ```

2. **Launch Locally:**
   Double-click `profile.html` or serve the project directory using a local development server like VS Code's "Live Server" extension.

3. **Verify Git Workflow:**
   To confirm active change logging and a clean development timeline, inspect the version logs via your command line interface:
   ```bash
   git log --oneline
   ```

 
