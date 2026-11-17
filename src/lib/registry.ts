export interface ComponentPropDoc {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface RegistryItemMeta {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: "ui" | "animated" | "backgrounds" | "text" | "blocks";
  categoryLabel: string;
  dependencies?: string[];
  filePath: string;
  props?: ComponentPropDoc[];
  usageExample?: string;
}

export const REGISTRY_COMPONENTS: RegistryItemMeta[] = [
  // Standard UI
  {
    slug: "button",
    name: "button",
    title: "Button",
    description: "Displays a button with multiple variants, sizes, and micro-interactions.",
    category: "ui",
    categoryLabel: "Standard UI",
    dependencies: ["class-variance-authority"],
    filePath: "registry/default/ui/button.tsx",
    props: [
      { name: "variant", type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'", default: "'default'", description: "The visual style variant." },
      { name: "size", type: "'default' | 'sm' | 'lg' | 'icon'", default: "'default'", description: "The button sizing dimensions." },
      { name: "className", type: "string", default: "undefined", description: "Optional CSS classes to append." },
    ],
    usageExample: `import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`,
  },
  {
    slug: "animated-button",
    name: "animated-button",
    title: "Animated Button",
    description: "An interactive button with subtle shimmer ripple and spring physics hover response.",
    category: "ui",
    categoryLabel: "Standard UI",
    dependencies: ["motion"],
    filePath: "registry/default/ui/animated-button.tsx",
    props: [
      { name: "shimmerColor", type: "string", default: "'rgba(255, 255, 255, 0.2)'", description: "Color of the scanning light shimmer." },
      { name: "glow", type: "boolean", default: "true", description: "Whether to emit an outer ambient glow on hover." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables interaction." },
    ],
    usageExample: `import { AnimatedButton } from "@/components/ui/animated-button";

export default function Demo() {
  return (
    <AnimatedButton glow={true}>
      Get Started Free
    </AnimatedButton>
  );
}`,
  },
  {
    slug: "gradient-button",
    name: "gradient-button",
    title: "Gradient Button",
    description: "An eye-catching button featuring dynamic glowing gradient borders and backdrops.",
    category: "ui",
    categoryLabel: "Standard UI",
    dependencies: ["motion"],
    filePath: "registry/default/ui/gradient-button.tsx",
    props: [
      { name: "gradient", type: "string", default: "'from-indigo-500 via-purple-500 to-pink-500'", description: "Tailwind gradient color stops." },
      { name: "variant", type: "'solid' | 'bordered'", default: "'bordered'", description: "Bordered gradient or solid fill gradient." },
    ],
    usageExample: `import { GradientButton } from "@/components/ui/gradient-button";

export default function Demo() {
  return (
    <GradientButton variant="bordered">
      Explore Library
    </GradientButton>
  );
}`,
  },
  {
    slug: "spotlight-card",
    name: "spotlight-card",
    title: "Spotlight Card",
    description: "A card with an interactive mouse spotlight effect that tracks cursor position.",
    category: "ui",
    categoryLabel: "Standard UI",
    dependencies: ["motion"],
    filePath: "registry/default/ui/spotlight-card.tsx",
    props: [
      { name: "spotlightColor", type: "string", default: "'rgba(120, 119, 198, 0.15)'", description: "Color and opacity of the radial spotlight." },
      { name: "spotlightSize", type: "number", default: "350", description: "Radius of the circular spotlight in pixels." },
    ],
    usageExample: `import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function Demo() {
  return (
    <SpotlightCard className="max-w-md">
      <h3 className="text-xl font-bold">Interactive Spotlight</h3>
      <p className="text-neutral-400 mt-2">Hover over this card to see radial light illumination.</p>
    </SpotlightCard>
  );
}`,
  },
  {
    slug: "bento-card",
    name: "bento-card",
    title: "Bento Card",
    description: "A versatile bento card component designed for high-density modern grids.",
    category: "ui",
    categoryLabel: "Standard UI",
    dependencies: [],
    filePath: "registry/default/ui/bento-card.tsx",
    props: [
      { name: "name", type: "string", default: "undefined", description: "Header title of the card." },
      { name: "description", type: "string", default: "undefined", description: "Body description text." },
      { name: "cta", type: "string", default: "'Learn more'", description: "Action CTA button label." },
    ],
    usageExample: `import { BentoCard } from "@/components/ui/bento-card";

export default function Demo() {
  return (
    <BentoCard
      name="Analytics Overview"
      description="Real-time performance metrics and pipeline monitoring."
      cta="View metrics"
    />
  );
}`,
  },

  // Animated UI
  {
    slug: "magnetic-button",
    name: "magnetic-button",
    title: "Magnetic Button",
    description: "A magnetic cursor attraction button powered by smooth spring physics.",
    category: "animated",
    categoryLabel: "Animated UI",
    dependencies: ["motion"],
    filePath: "registry/default/animated/magnetic-button.tsx",
    props: [
      { name: "strength", type: "number", default: "30", description: "Maximum displacement distance in pixels." },
    ],
    usageExample: `import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Demo() {
  return (
    <MagneticButton strength={35}>
      Hover Near Me
    </MagneticButton>
  );
}`,
  },
  {
    slug: "border-beam",
    name: "border-beam",
    title: "Border Beam",
    description: "An animated gradient beam that seamlessly travels around the border of any container.",
    category: "animated",
    categoryLabel: "Animated UI",
    dependencies: ["motion"],
    filePath: "registry/default/animated/border-beam.tsx",
    props: [
      { name: "size", type: "number", default: "200", description: "Length of the moving beam in pixels." },
      { name: "duration", type: "number", default: "12", description: "Duration of one complete cycle in seconds." },
      { name: "colorFrom", type: "string", default: "'#ffaa40'", description: "Starting gradient color." },
      { name: "colorTo", type: "string", default: "'#9c40ff'", description: "Ending gradient color." },
    ],
    usageExample: `import { BorderBeam } from "@/components/ui/border-beam";

export default function Demo() {
  return (
    <div className="relative rounded-2xl border p-8 bg-neutral-900">
      <p>Card Content with Border Beam</p>
      <BorderBeam size={150} duration={8} />
    </div>
  );
}`,
  },
  {
    slug: "card-3d",
    name: "card-3d",
    title: "3D Card",
    description: "A 3D perspective tilt card that responds smoothly to mouse hover movements.",
    category: "animated",
    categoryLabel: "Animated UI",
    dependencies: ["motion"],
    filePath: "registry/default/animated/card-3d.tsx",
    props: [
      { name: "containerClassName", type: "string", default: "undefined", description: "Classes for the 3D perspective wrapper." },
      { name: "translateZ", type: "number", default: "0", description: "CardItem depth offset along Z axis." },
    ],
    usageExample: `import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";

export default function Demo() {
  return (
    <CardContainer>
      <CardBody className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
        <CardItem translateZ={40} className="text-xl font-bold">
          3D Floating Title
        </CardItem>
        <CardItem translateZ={20} className="text-neutral-400 mt-2">
          Subtle 3D parallax depth on cursor move.
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}`,
  },
  {
    slug: "expandable-card",
    name: "expandable-card",
    title: "Expandable Card",
    description: "An interactive card that smoothly expands into an informative modal using shared layout animations.",
    category: "animated",
    categoryLabel: "Animated UI",
    dependencies: ["motion"],
    filePath: "registry/default/animated/expandable-card.tsx",
    props: [
      { name: "items", type: "ExpandableCardItem[]", default: "[]", description: "Array of cards containing title, description, and expanded content." },
    ],
    usageExample: `import { ExpandableCard } from "@/components/ui/expandable-card";

const items = [
  { title: "Next.js 16", description: "Modern React architecture", content: "Detailed breakdown of Turbopack and React 19." },
  { title: "Tailwind v4", description: "Modern styling engine", content: "CSS variable based design tokens." }
];

export default function Demo() {
  return <ExpandableCard items={items} />;
}`,
  },
  {
    slug: "floating-dock",
    name: "floating-dock",
    title: "Floating Dock",
    description: "A floating macOS-inspired navigation dock with fluid icon magnification on hover.",
    category: "animated",
    categoryLabel: "Animated UI",
    dependencies: ["motion"],
    filePath: "registry/default/animated/floating-dock.tsx",
    props: [
      { name: "items", type: "FloatingDockItem[]", default: "[]", description: "Array of items with title, icon, and href." },
      { name: "desktopClassName", type: "string", default: "undefined", description: "Classes for the desktop dock container." },
    ],
    usageExample: `import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconTerminal, IconSettings } from "@tabler/icons-react";

const items = [
  { title: "Home", icon: <IconHome />, href: "/" },
  { title: "Terminal", icon: <IconTerminal />, href: "/docs" },
  { title: "Settings", icon: <IconSettings />, href: "/themes" }
];

export default function Demo() {
  return <FloatingDock items={items} />;
}`,
  },

  // Backgrounds
  {
    slug: "aurora-background",
    name: "aurora-background",
    title: "Aurora Background",
    description: "An ethereal flowing aurora borealis animated background effect.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    dependencies: ["motion"],
    filePath: "registry/default/backgrounds/aurora-background.tsx",
    props: [
      { name: "showRadialGradient", type: "boolean", default: "true", description: "Fades edges with radial vignette." },
      { name: "children", type: "ReactNode", default: "undefined", description: "Content displayed on top of aurora." },
    ],
    usageExample: `import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Demo() {
  return (
    <AuroraBackground className="h-64 rounded-2xl">
      <h2 className="text-2xl font-bold text-center">Northern Lights</h2>
    </AuroraBackground>
  );
}`,
  },
  {
    slug: "grid-background",
    name: "grid-background",
    title: "Grid Background",
    description: "A clean geometric grid background with optional radial mask falloff.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    dependencies: [],
    filePath: "registry/default/backgrounds/grid-background.tsx",
    props: [
      { name: "gridSize", type: "number", default: "32", description: "Dimension of each square cell in pixels." },
      { name: "mask", type: "'radial' | 'none'", default: "'radial'", description: "Applies subtle radial opacity mask." },
    ],
    usageExample: `import { GridBackground } from "@/components/ui/grid-background";

export default function Demo() {
  return (
    <GridBackground className="h-64 rounded-2xl">
      <p className="text-xl font-medium">Grid Backdrop</p>
    </GridBackground>
  );
}`,
  },
  {
    slug: "dot-background",
    name: "dot-background",
    title: "Dot Background",
    description: "A refined dot matrix background pattern with subtle radial vignette.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    dependencies: [],
    filePath: "registry/default/backgrounds/dot-background.tsx",
    props: [
      { name: "spacing", type: "number", default: "24", description: "Distance between neighboring dots in pixels." },
      { name: "dotSize", type: "number", default: "1.5", description: "Diameter of individual dots." },
    ],
    usageExample: `import { DotBackground } from "@/components/ui/dot-background";

export default function Demo() {
  return (
    <DotBackground className="h-64 rounded-2xl">
      <p className="text-xl font-medium">Dot Matrix</p>
    </DotBackground>
  );
}`,
  },
  {
    slug: "spotlight-background",
    name: "spotlight-background",
    title: "Spotlight Background",
    description: "A theatrical overhead spotlight gradient background for hero stages.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    dependencies: [],
    filePath: "registry/default/backgrounds/spotlight-background.tsx",
    props: [
      { name: "spotlightColor", type: "string", default: "'rgba(120, 119, 198, 0.25)'", description: "Color of overhead lighting." },
      { name: "intensity", type: "number", default: "1", description: "Multiplier for spotlight opacity." },
    ],
    usageExample: `import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function Demo() {
  return (
    <SpotlightBackground className="h-64 rounded-2xl">
      <h2 className="text-2xl font-bold">Center Stage</h2>
    </SpotlightBackground>
  );
}`,
  },
  {
    slug: "gradient-mesh",
    name: "gradient-mesh",
    title: "Gradient Mesh",
    description: "A fluid multi-point ambient gradient mesh with floating blurred color nodes.",
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    dependencies: ["motion"],
    filePath: "registry/default/backgrounds/gradient-mesh.tsx",
    props: [
      { name: "children", type: "ReactNode", default: "undefined", description: "Foreground content." },
    ],
    usageExample: `import { GradientMesh } from "@/components/ui/gradient-mesh";

export default function Demo() {
  return (
    <GradientMesh className="h-64 rounded-2xl">
      <p className="text-xl font-bold">Dynamic Mesh</p>
    </GradientMesh>
  );
}`,
  },

  // Text Effects
  {
    slug: "text-reveal",
    name: "text-reveal",
    title: "Text Reveal",
    description: "Smooth cascading word-by-word text animation with spring easing.",
    category: "text",
    categoryLabel: "Text Effects",
    dependencies: ["motion"],
    filePath: "registry/default/text/text-reveal.tsx",
    props: [
      { name: "text", type: "string", default: "required", description: "The string of text to reveal." },
      { name: "duration", type: "number", default: "0.5", description: "Duration of each word transition." },
      { name: "delay", type: "number", default: "0", description: "Base start delay." },
    ],
    usageExample: `import { TextReveal } from "@/components/ui/text-reveal";

export default function Demo() {
  return (
    <h2 className="text-3xl font-bold">
      <TextReveal text="Designing unforgettable software experiences." />
    </h2>
  );
}`,
  },
  {
    slug: "typewriter-text",
    name: "typewriter-text",
    title: "Typewriter Text",
    description: "Retro-modern terminal typewriter effect with pulsing cursor and multi-phrase cycling.",
    category: "text",
    categoryLabel: "Text Effects",
    dependencies: [],
    filePath: "registry/default/text/typewriter-text.tsx",
    props: [
      { name: "words", type: "string[]", default: "required", description: "Array of words/phrases to type sequentially." },
      { name: "typingSpeed", type: "number", default: "100", description: "Milliseconds per character typed." },
      { name: "pauseDuration", type: "number", default: "1500", description: "Pause before backspacing." },
    ],
    usageExample: `import { TypewriterText } from "@/components/ui/typewriter-text";

export default function Demo() {
  return (
    <div className="text-2xl font-bold">
      Build <TypewriterText words={["Faster", "Smarter", "Beautifully"]} />
    </div>
  );
}`,
  },
  {
    slug: "gradient-text",
    name: "gradient-text",
    title: "Gradient Text",
    description: "Animated shimmering multi-color gradient text typography.",
    category: "text",
    categoryLabel: "Text Effects",
    dependencies: [],
    filePath: "registry/default/text/gradient-text.tsx",
    props: [
      { name: "gradient", type: "string", default: "'from-indigo-500 via-purple-500 to-pink-500'", description: "Color stops for gradient." },
      { name: "animate", type: "boolean", default: "true", description: "Whether to continuously translate gradient position." },
    ],
    usageExample: `import { GradientText } from "@/components/ui/gradient-text";

export default function Demo() {
  return (
    <h1 className="text-4xl font-extrabold">
      <GradientText>Unleash Creativity</GradientText>
    </h1>
  );
}`,
  },
  {
    slug: "flip-words",
    name: "flip-words",
    title: "Flip Words",
    description: "Dynamic words flipping sequence with 3D stagger and optical blur.",
    category: "text",
    categoryLabel: "Text Effects",
    dependencies: ["motion"],
    filePath: "registry/default/text/flip-words.tsx",
    props: [
      { name: "words", type: "string[]", default: "required", description: "Array of words to flip between." },
      { name: "duration", type: "number", default: "2500", description: "Display duration per word in ms." },
    ],
    usageExample: `import { FlipWords } from "@/components/ui/flip-words";

export default function Demo() {
  return (
    <div className="text-3xl font-bold">
      Design interfaces that are <FlipWords words={["responsive", "interactive", "accessible", "memorable"]} />
    </div>
  );
}`,
  },
  {
    slug: "blur-reveal",
    name: "blur-reveal",
    title: "Blur Reveal",
    description: "Cinematic text entrance that resolves from defocus blur to sharp focus.",
    category: "text",
    categoryLabel: "Text Effects",
    dependencies: ["motion"],
    filePath: "registry/default/text/blur-reveal.tsx",
    props: [
      { name: "blur", type: "string", default: "'12px'", description: "Initial optical blur amount." },
      { name: "duration", type: "number", default: "0.6", description: "Animation duration in seconds." },
      { name: "delay", type: "number", default: "0", description: "Initial animation delay." },
    ],
    usageExample: `import { BlurReveal } from "@/components/ui/blur-reveal";

export default function Demo() {
  return (
    <BlurReveal duration={0.8}>
      <h2 className="text-4xl font-bold">Focus into reality.</h2>
    </BlurReveal>
  );
}`,
  },

  // Blocks
  {
    slug: "hero-section",
    name: "hero-section",
    title: "Hero Section",
    description: "High-converting marketing hero section with animated badging, strong typography, and action CTAs.",
    category: "blocks",
    categoryLabel: "Website Blocks",
    dependencies: [],
    filePath: "registry/default/blocks/hero-section.tsx",
    usageExample: `import { HeroSection } from "@/components/blocks/hero-section";

export default function Page() {
  return <HeroSection />;
}`,
  },
  {
    slug: "bento-grid-section",
    name: "bento-grid-section",
    title: "Bento Grid Section",
    description: "Adaptive bento grid feature layout showcasing product capabilities in clean modular cards.",
    category: "blocks",
    categoryLabel: "Website Blocks",
    dependencies: [],
    filePath: "registry/default/blocks/bento-grid-section.tsx",
    usageExample: `import { BentoGridSection } from "@/components/blocks/bento-grid-section";

export default function Page() {
  return <BentoGridSection />;
}`,
  },
  {
    slug: "feature-section",
    name: "feature-section",
    title: "Feature Section",
    description: "Three-column feature breakdown grid highlighting key architectural advantages.",
    category: "blocks",
    categoryLabel: "Website Blocks",
    dependencies: [],
    filePath: "registry/default/blocks/feature-section.tsx",
    usageExample: `import { FeatureSection } from "@/components/blocks/feature-section";

export default function Page() {
  return <FeatureSection />;
}`,
  },
  {
    slug: "pricing-section",
    name: "pricing-section",
    title: "Pricing Section",
    description: "Clean comparison pricing table emphasizing open source and community backing.",
    category: "blocks",
    categoryLabel: "Website Blocks",
    dependencies: [],
    filePath: "registry/default/blocks/pricing-section.tsx",
    usageExample: `import { PricingSection } from "@/components/blocks/pricing-section";

export default function Page() {
  return <PricingSection />;
}`,
  },
  {
    slug: "testimonial-section",
    name: "testimonial-section",
    title: "Testimonial Section",
    description: "Customer and community testimonials arranged in responsive quote cards.",
    category: "blocks",
    categoryLabel: "Website Blocks",
    dependencies: [],
    filePath: "registry/default/blocks/testimonial-section.tsx",
    usageExample: `import { TestimonialSection } from "@/components/blocks/testimonial-section";

export default function Page() {
  return <TestimonialSection />;
}`,
  },
];

export function getAllComponents(): RegistryItemMeta[] {
  return REGISTRY_COMPONENTS.filter((item) => item.category !== "blocks");
}

export function getAllBlocks(): RegistryItemMeta[] {
  return REGISTRY_COMPONENTS.filter((item) => item.category === "blocks");
}

export function getItemBySlug(slug: string): RegistryItemMeta | undefined {
  return REGISTRY_COMPONENTS.find((item) => item.slug === slug);
}
