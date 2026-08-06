# TechFi Labs Website Design System

## Brand Direction
TechFi Labs is an AI-first automation studio with deep Salesforce delivery expertise.

The website should feel:
- premium
- futuristic
- modern SaaS
- AI-first
- clean and conversion-focused
- less like a traditional IT services brochure

## Positioning
Lead with:
- AI Agents
- Workflow Automation
- WhatsApp AI Integrations
- Email AI Automation
- Workflow Automation, including n8n where relevant
- Python Automation
- Salesforce AI & CRM Delivery

Salesforce should remain a strong differentiator, but the homepage should not feel Salesforce-only.

## Visual Style
Use inspiration from modern AI/SaaS websites such as WeRoute, 21st.dev, Aceternity UI, Magic UI, and shadcn-style interfaces.

Do not copy any website directly.

Preferred UI patterns:
- bold hero sections
- animated AI workflow visuals
- node diagrams
- beam/connector animations
- glassmorphism
- bento layouts
- premium accordion sections
- dark navy contrast sections
- clean typography
- fewer but stronger content blocks

Avoid:
- too many equal card grids
- repeating the same Salesforce/support message in multiple sections
- stock-photo hero visuals when a workflow/system visual can communicate the product better
- random section colors
- generic stock images
- excessive text
- old-style IT services layout
- disconnected blue sections
- fake metrics or fake testimonials
- crypto/gaming visual style

## UI/UX Pro Max Skill Usage

The UI/UX Pro Max skill is installed in this repository under `.agents/skills/`.

When improving visual design, layout, spacing, interaction, or section hierarchy, use UI/UX Pro Max as design guidance.

Use the skill for:
- modern SaaS section design
- AI/automation landing page patterns
- spacing and hierarchy refinement
- premium card, bento, accordion, and split-layout patterns
- CTA treatment
- visual balance
- responsive layout polish

Do not use the skill to override TechFi Labs brand rules.

Brand rules in this AGENTS.md take priority over generic skill suggestions.

Preferred instruction before design tasks:
“Use UI/UX Pro Max as design guidance only. Follow AGENTS.md as the source of truth.”

Do not blindly copy any generated layout, palette, asset, or copy.
Adapt suggestions to:
- TechFi Labs green / emerald / mint brand system
- Manrope + Inter typography
- AI automation + Salesforce + custom engineering positioning
- simple enterprise language
- local assets only

## Color System
Use TechFi Labs brand colors consistently.

Primary:
- Emerald / TechFi green for CTA and brand action
- Dark green / emerald is the main brand system

Secondary:
- Deep navy for premium trust sections
- White / light mint for clean backgrounds
- Cyan/blue only as small AI/technology glow accent

Do not introduce random blues, purples, oranges, or unrelated gradients.
Do not use large blue section backgrounds, blue borders, or blue-heavy washes.
Avoid pure white cards on white backgrounds.
Prefer mint-tinted card surfaces such as `#F7FEFA`, emerald-50/40, or white/80 with green-tinted borders.

## Typography
Use:
- Manrope for headings/display text
- Inter for body, navigation, buttons, chips, forms

Suggested weights:
- Hero headline: Manrope 800
- Section headings: Manrope 700
- Card/accordion titles: Manrope 600/700
- Body: Inter 400/500
- Buttons/nav/chips: Inter 500/600

## Homepage Content Rules
Homepage should be concise and premium.

Recommended homepage sections:
1. Hero
2. What We Build
3. AI Automation Workflows
4. Salesforce + AI Expertise
5. Why TechFi Labs
6. Proof / Experience
7. Selected Work / Accelerators
8. Contact CTA

Do not keep adding new sections unless they replace or simplify existing content.

Homepage should stay within this lean 8-section flow unless explicitly changed:
1. Hero
2. What We Build
3. AI Automation Workflows
4. Salesforce + AI Expertise
5. Why TechFi Labs
6. Proof / Experience
7. Selected Work / Accelerators
8. Contact CTA

Merge or remove repeated content instead of stacking more sections.

## Animation Rules
Use tasteful motion:
- hero text reveal
- animated workflow beams
- subtle card hover
- accordion transitions
- bento reveal
- soft glow movement

Avoid:
- heavy CPU animations
- distracting motion
- too many animated elements at once
- skill-generated designs that introduce random colors, fake metrics, fake logos, or irrelevant SaaS sections
- blindly accepting generic AI startup copy
- overcomplicated animations when a local image/video asset is enough

Respect reduced-motion preferences.

## Build Rule
After every change, run:
npm run build

Fix all issues before considering the task complete.


## Section Design Rules

Avoid overusing equal-card grids. The homepage should not look like a brochure made of repeated cards.

Preferred section patterns:
- interactive service rows
- numbered accordions
- bento layouts with varied sizes
- animated workflow diagrams
- split storytelling sections
- proof strips
- compact selected-work blocks
- dark CTA panels

For major service sections, prefer a WeRoute-style interactive service list:
- section eyebrow
- large headline
- short intro
- numbered service rows
- one expanded item
- hover/click animation
- plus/minus controls
- visual panel that changes with the active service

Use fewer service categories on the homepage. Details belong on dedicated service pages.

## Task Modes

### Copy refinement tasks
For copy-only tasks:
- Do not redesign.
- Do not change layout.
- Do not introduce new components.
- Keep text short, scannable, and enterprise-friendly.
- Maximum one sentence under headings where possible.

### Visual design tasks
For design tasks:
- Use UI/UX Pro Max as design guidance only.
- Improve hierarchy, spacing, interaction, and visual quality.
- Preserve TechFi Labs brand colors and typography.
- Prefer local assets, image/video slots, and clean visual panels over complex generated animations.

### Section upgrade tasks
For section upgrades:
- Change only the requested section.
- Do not modify unrelated homepage sections.
- Keep the lean homepage flow.
- Run `npm run build` after changes.

### Asset tasks
For image/video tasks:
- Use local files from `public/assets/`.
- Do not hotlink external assets.
- Document downloaded assets and license/source in `ASSET_LICENSES.md`.
- Avoid recognizable third-party logos, trademarks, or real client data.