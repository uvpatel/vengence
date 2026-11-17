# Vengence UI

<div align="center">
  <p><strong>Modern, open-source React component library combining shadcn component distribution with expressive Aceternity-inspired animations.</strong></p>
  <p>
    <a href="https://vengence-rho.vercel.app">Official Website</a> •
    <a href="https://vengence-rho.vercel.app/components">Components</a> •
    <a href="https://vengence-rho.vercel.app/blocks">Blocks</a> •
    <a href="https://vengence-rho.vercel.app/docs">Documentation</a>
  </p>
</div>

---

## ⚡ Overview

Vengence UI is built for developers who want the modular code-ownership model of **shadcn/ui** and the visual creativity of **Aceternity UI**. 

Every component is self-contained and distributed via a shadcn-compatible registry. You copy the source code directly into your repository with one CLI command: zero npm bloat, zero runtime vendor lock-in.

### Tech Stack
- **Framework**: Next.js 16+ (App Router, Server Components by default)
- **Runtime**: React 19+
- **Styling**: Tailwind CSS v4 & OKLCH color variables
- **Motion**: `motion/react` (Motion 14+)
- **Icons**: `@tabler/icons-react`
- **Package Manager**: Bun
- **Distribution**: shadcn CLI Registry

---

## 🚀 Quick Start

### 1. Register Vengence UI namespace
```bash
bunx shadcn@latest registry add "@vengence=https://vengence-rho.vercel.app/r/{name}.json"
```

### 2. Install any component
```bash
bunx shadcn@latest add @vengence/spotlight-card
```

### Direct URL installation
You can also install components directly without configuring namespaces:
```bash
bunx shadcn@latest add https://vengence-rho.vercel.app/r/spotlight-card.json
```

---

## 📦 Component Collection

### Standard UI
- **Button** (`button`): Button with multiple variants, sizes, and states.
- **Animated Button** (`animated-button`): Interactive button with shimmer scan and spring interactions.
- **Gradient Button** (`gradient-button`): Glowing bordered & solid gradient triggers.
- **Spotlight Card** (`spotlight-card`): Cursor-tracking radial illumination card.
- **Bento Card** (`bento-card`): High-density grid card for SaaS features.

### Animated UI
- **Magnetic Button** (`magnetic-button`): Cursor magnetic attraction with spring return physics.
- **Border Beam** (`border-beam`): Continuous travelling perimeter gradient beam.
- **3D Card** (`card-3d`): Perspective depth and tilt card tracking pointer.
- **Expandable Card** (`expandable-card`): Smooth shared layout modal expansion.
- **Floating Dock** (`floating-dock`): macOS-inspired dock with magnifying icons.

### Backgrounds
- **Aurora Background** (`aurora-background`): Ethereal animated northern lights waves.
- **Grid Background** (`grid-background`): Geometric line grid with radial vignette.
- **Dot Background** (`dot-background`): Polished dot halftone pattern.
- **Spotlight Background** (`spotlight-background`): Overhead conic stage lighting.
- **Gradient Mesh** (`gradient-mesh`): Fluid floating blurred color nodes.

### Text Effects
- **Text Reveal** (`text-reveal`): Word-by-word cascading spring entrance.
- **Typewriter Text** (`typewriter-text`): Terminal character typing with cursor pulse.
- **Gradient Text** (`gradient-text`): Shimmering multi-stop gradient typography.
- **Flip Words** (`flip-words`): 3D letter stagger flipping transitions.
- **Blur Reveal** (`blur-reveal`): Optical defocus blur to sharp focus.

### Website Blocks
- **Hero Section** (`hero-section`)
- **Bento Grid Section** (`bento-grid-section`)
- **Feature Section** (`feature-section`)
- **Pricing Section** (`pricing-section`)
- **Testimonial Section** (`testimonial-section`)

---

## 🛠 Local Development

```bash
# Clone the repository
git clone https://github.com/urvilpatel/vengence-ui.git
cd vengence-ui

# Install dependencies
bun install

# Build the registry manifests into /public/r/
bun run registry:build

# Run development server
bun run dev
```

---

## 📄 License

MIT License © 2026 Vengence UI.
