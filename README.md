# بلدةٌ طيبة (Baladat Tayba)

### Project Overview
This repository contains the source code for the "بلدةٌ طيبة" (Baladat Tayba) documentary website. It serves as a digital companion and promotional platform for a university cinematic graduation project. The documentary explores the relationship between humans and their land, focusing on the village of Tayba in southern Lebanon, highlighting themes of memory, identity, sacrifice, and return.

### Features
- Fully responsive cinematic UI designed to emulate documentary film presentation.
- Smooth scrolling and staggered entrance animations.
- Dedicated sections for the film's concept, objective, visual symbolism, and characters.
- Archival-style framing for photographic portraits.
- Interactive modal windows for full document reading.

### Technology Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Fonts:** Noto Kufi Arabic, Cairo (via Next.js Google Fonts)

### Development
To run this project locally:

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure
- `/app` - Next.js App Router files (layout, globals, main page).
- `/components` - Reusable React components (Navigation, Layout, Modal, Media Frames).
  - `/components/sections` - Distinct page sections (Hero, Concept, Characters, Footer, etc.).
- `/public` - Static assets, including the documentary images, portraits, and SVGs.

### Credits
- **Website Creator:** Mohamad Karanbash
- **Documentary Filmmaker / Student:** (As credited within the documentary content)

### Copyright & Licensing
**IMPORTANT:** This repository is publicly accessible for portfolio and educational viewing purposes only.
- **No Open Source License:** This project does not include an open-source license.
- **Content Protection:** The documentary's creative content, text, branding, photography, video assets, and concepts remain the exclusive intellectual property of the creators. 
- **No Unauthorized Use:** You may not reproduce, redistribute, modify, or commercially use the documentary's creative assets or codebase without explicit written permission from the copyright holders.
