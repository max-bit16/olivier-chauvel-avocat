# CLAUDE.md — Cabinet Olivier Chauvel Avocat

## Project
Vanilla React JSX + plain CSS site for Maître Olivier Chauvel, Avocat à Rennes.
Deployed to Vercel as a static SPA. No build step, no Tailwind.

## Design Context

### Users
Two visitor types: **individuals in crisis** (divorce, criminal, injury, immigration — anxious, need reassurance fast) and **professional referrers** (notaries, insurers, doctors vetting credibility).

Primary emotional goal: **"I'm in good hands."**

### Brand Personality
**Rigorous · human · grounded** — 20+ years at the Rennes Bar, locally anchored, transparent fees. Tone: trusted professional in a small city, not BigLaw.

### Aesthetic Direction
**Editorial luxury, warm authority.** Refine — do not reinvent.

- Palette: deep navy `#1B2D47`, gold `#9A7332` (≤10% visual weight), cream `#F9F7F2` canvas, ink `#0F1E32`
- Theme: light mode, warm cream surfaces — never cold white, never dark mode
- Fonts: Spectral (serif display) + Figtree (warm sans body)
- Feel: quality paper, Breton notary office, regional newspaper's legal section

### Anti-references
Generic law firm template · Aggressive personal injury ads · Trendy startup/SaaS aesthetic

### Design Principles
1. Calm authority — reduce anxiety, don't impress
2. Warmth through materiality — cream, warm ink, restrained gold
3. Clarity over cleverness — direct labels, no jargon, obvious CTAs
4. Local and grounded — Rennes photography, real address/phone front and centre
5. Restraint with accents — gold at ≤10%; more decoration dilutes trust

## Rules
- All styles in `styles.css` via CSS custom properties — no inline style sprawl
- No `border-left/right` > 1px as a coloured accent stripe (impeccable ban)
- No gradient text (impeccable ban)
- Run `/audit` before delivery, `/polish` before git push
- Commits follow conventional format: `feat:`, `fix:`, `chore:`, etc.
