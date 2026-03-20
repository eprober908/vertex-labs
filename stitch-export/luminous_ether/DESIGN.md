# Design System Specification: The Synthetic Ether

## 1. Overview & Creative North Star
**Creative North Star: "The Luminescent Monolith"**

This design system rejects the flat, sterile nature of modern SaaS interfaces in favor of a "Physical Digital" experience. We are building a world that feels heavy, expensive, and illuminated from within. By merging the soft, extruded volumes of Neomorphism with the refractive, translucent layering of Glassmorphism, we create a UI that feels like a high-end command deck carved from obsidian and light.

To break the "template" look, designers must embrace **Intentional Asymmetry**. Large-scale 3D abstract renders should bleed off the edge of the canvas, while typography should utilize extreme scale shifts—pairing massive `display-lg` headlines with wide-tracked `label-sm` metadata to create an editorial, cinematic feel.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the void (`#070e1b`) and brought to life through "Neon Bioluminescence."

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Layout boundaries must be established exclusively through:
1.  **Tonal Shifts:** Placing a `surface_container_high` card on a `surface` background.
2.  **Glow Radiance:** Using a soft outer glow from a `primary` or `secondary` source to define an edge.
3.  **Texture Transitions:** Moving from a solid dark background to a section with a subtle grain or 3D render.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested obsidian plates.
*   **Base Layer:** `surface` (#070e1b) – The infinite background.
*   **Section Layer:** `surface_container_low` (#0c1322) – Large structural blocks.
*   **Object Layer:** `surface_container_highest` (#1c2639) – Interactive cards and focal points.
*   **The Glass Overlay:** Use `surface_variant` (#1c2639) at 40-60% opacity with a `20px` to `40px` backdrop-blur for floating navigation or modals.

### Signature Textures & Gradients
Never use a flat `primary` fill for large areas. Instead, use a **Core Glow Gradient**:
*   **Primary Action:** Linear gradient (135°) from `primary` (#8ff5ff) to `primary_container` (#00eefc).
*   **Accent Pulse:** Linear gradient (135°) from `secondary` (#d674ff) to `tertiary` (#ac89ff).

---

## 3. Typography
We pair the brutalist, futuristic geometry of **Space Grotesk** with the high-legibility, humanist engineering of **Manrope**.

*   **Display & Headlines (Space Grotesk):** These are your "Graphic Anchors." Use `display-lg` for hero statements. Apply a slight `letter-spacing: -0.02em` to headlines to give them a dense, authoritative "printed" look.
*   **Body & Titles (Manrope):** Use for all functional content. `body-lg` should be the standard for readability.
*   **Labels (Space Grotesk):** Always uppercase with `letter-spacing: 0.1em`. These act as technical "readouts" and should be paired with `primary` or `secondary` colors to highlight metadata.

---

## 4. Elevation & Depth
In this system, depth is a product of light and shadow, not lines.

### The Layering Principle
Achieve lift by stacking tokens. A `surface_container_highest` element sitting on a `surface_dim` background provides enough natural contrast that no border or heavy shadow is required.

### Ambient Shadows & Inner Bevels
*   **Outer Shadows:** Use `on_surface` color at 5% opacity with a `48px` blur and `24px` Y-offset. This creates a "soft levitation" effect.
*   **Neomorphic Inner Bevel:** To create the "pressed" or "extruded" look, use two subtle inner shadows:
    1.  Top-Left: 2px 2px 4px rgba(255, 255, 255, 0.05)
    2.  Bottom-Right: -2px -2px 4px rgba(0, 0, 0, 0.5)

### The "Ghost Border" Fallback
If contrast is required for accessibility, use a **Ghost Border**: `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons: The "Power Cell"
*   **Primary:** A vibrant gradient fill (`primary` to `primary_container`) with a `0.5rem` (DEFAULT) corner radius. On hover, add a `primary_dim` outer glow.
*   **Secondary:** Glassmorphic. `surface_variant` at 20% opacity, backdrop-blur 12px, with a `0.5rem` Ghost Border.
*   **Tertiary:** `label-md` text in `primary` color with a small `4px` glowing dot to the left.

### Inputs: The "Data Portal"
*   **Field:** `surface_container_lowest` background. No border.
*   **State:** On focus, the bottom edge gains a 2px `primary` glow, and the entire container subtly lightens to `surface_container_low`.

### Cards: The "Monolith"
*   **Forbid Dividers.** Separate content using the Spacing Scale (e.g., `8` (2.75rem) between header and body).
*   **Background:** Use `surface_container_high`. If the card is interactive, increase to `surface_container_highest` on hover.

### 3D Abstract Icons
Instead of flat SVG icons for major features, use high-detail 3D renders of abstract shapes (spheres, toruses, or crystalline structures) that utilize the `secondary` and `tertiary` color ramps.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Overlays:** Allow 3D imagery to sit behind text or peek out from behind glassmorphic panels.
*   **Embrace Negative Space:** Use the `20` (7rem) and `24` (8.5rem) spacing tokens to let the "midnight" background breathe.
*   **Vary Depth:** Mix sharp, high-surface cards with blurry, soft-focus background elements.

### Don’t:
*   **Don't use pure white.** Use `on_surface` (#e2e8fb) for text to maintain the "low-light" atmosphere.
*   **Don't use 100% opaque borders.** They break the illusion of depth and light.
*   **Don't use flat colors for CTAs.** Everything interactive should have a subtle gradient or light-source effect.
*   **Don't use standard "Drop Shadows."** Always use tinted ambient shadows that reflect the background color.