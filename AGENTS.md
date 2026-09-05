# TechFi Labs Website Design System

## Brand Direction
TechFi Labs is an AI automation, Salesforce, and custom engineering company with deep Salesforce delivery expertise.

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

## SEO Audit Skill Usage

The `seo-audit` skill is installed in this repository under `.agents/skills/seo-audit`.

Use the skill for:
- Technical SEO auditing, indexability, canonicalization, and XML sitemaps
- On-page meta tags (titles, meta descriptions, OpenGraph, Twitter Cards)
- Heading structure validation (single H1 per page, H2/H3 logical hierarchy)
- Generative Engine Optimization (GEO) & Local Business JSON-LD schema markup (`LocalBusiness`, `ProfessionalService`, `Organization`, `WebSite`, `Service`, `FAQPage`)
- Geographic location signals (`geo.region`, `geo.placename`, `geo.position`, `ICBM`)
- Content E-E-A-T alignment for AI search engines and traditional search engines

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

Homepage should be concise, premium, and conversion-focused.

Current homepage flow:
1. Hero
2. Trust and Proof Strip
3. AI Automation Workflows
4. Client Logos / Trust Signals
5. Salesforce + AI Expertise
6. FAQ
7. Contact CTA

Preserve this current homepage structure unless explicitly changed.

Do not reintroduce old removed sections such as:
- What We Build
- Why TechFi Labs
- Proof / Experience
- Selected Work / Accelerators

unless the user explicitly asks to add them back.

Merge or remove repeated content instead of stacking more sections.

Keep homepage copy short:
- one clear heading
- one short supporting sentence
- minimal cards/chips
- visuals should carry more of the story

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
After meaningful changes, run:
- npm run build
- npm run lint, if lint script exists

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
## Architecture Rules

This project uses Next.js App Router with TypeScript.

Preserve:
- `src/app/` for routes and page-level metadata
- `src/components/` for reusable UI
- `src/constants/` for content data
- `src/config/` for organization/site configuration
- `public/` for local assets

Do not revert to Vite, React Router, or old JavaScript-only structure.

Use TypeScript types for new data structures and props.

Use `"use client"` only where interactivity is required:
- Framer Motion
- forms
- accordions/selectors
- browser APIs
- navigation state

Prefer server components for static page composition where practical.

## SEO / AEO / GEO Rules

Use Next.js Metadata API for page metadata.

Use Next.js metadata route files where appropriate:
- `src/app/sitemap.ts`
- `src/app/robots.ts`

Also maintain:
- `public/llms.txt` or an equivalent route if implemented

Keep sitemap and robots aligned with the canonical domain:
`https://www.techfilabs.com`

Every important page should have:
- one clear H1
- unique title
- unique meta description
- canonical URL
- OpenGraph metadata
- clear service/entity summary
- internal links to related services
- FAQ content where useful
- JSON-LD where relevant

Structured data must match visible page content.

Recommended schema:
- Organization
- LocalBusiness or ProfessionalService
- WebSite
- Service
- FAQPage
- BreadcrumbList
- Product where appropriate for FieldLens

Do not add schema for claims not visible on the page.
Do not add fake reviews, fake ratings, fake clients, or fake aggregate ratings.
Do not keyword-stuff pages.
Do not create thin duplicate location/service pages.

## Collaboration Rules

Do not push directly to `main`.

All changes should be made on a feature branch and merged through Pull Request review.

Before considering work complete:
- run `npm ci` if dependencies changed
- run `npm run build`
- summarize changed files
- summarize visual/content impact
- mention any route or SEO changes

Do not approve PRs if build fails.

## Public Copy Safety Rules

Never show developer placeholder wording in public UI.

Avoid public text such as:
- coming soon
- media placeholder
- visual-ready
- demo slot
- add product visuals
- ready for future
- asset preview

Use polished fallback labels instead:
- CRM architecture visual
- Workflow visual
- Product overview
- Screens or demo media
## Page and Route Rules

This site uses Next.js App Router routes.

Important routes:
- Homepage: `/`
- Products: `/products/[slug]`
- Services: `/services/[slug]`
- Case studies: `/case-studies/[slug]`

When adding SEO/AEO/GEO content, prefer dedicated service pages over making the homepage longer.

Service pages can contain more detailed copy, FAQs, schema, examples, and keyword-specific content.

Homepage should remain minimal and brand-led.