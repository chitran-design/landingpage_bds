trigger: glob
globs: "*.html, *.css, *.js"
description: "Frontend implementation rules for the Vinhomes Grand Park static landing page."
Frontend Rules
Design Language

Create a premium Vietnamese real-estate landing page.

The design should feel:

Modern

Elegant

Spacious

Trustworthy

Premium

Conversion-focused

Primary colors:

Background: #f2f2f2
Primary text/accent: #2d2d86


Use white surfaces to create contrast against the main background.

Layout

Prefer Bootstrap's:

.container

.container-fluid

.row

.col-*

.d-flex

.align-items-*

.justify-content-*

Responsive spacing utilities

Use a generous amount of whitespace.

Avoid excessive content density.

Hero

The hero should have a two-column desktop layout:

Left:

Headline

Description

CTA

Right:

Large real-estate image

On mobile:

Text first.

Image second.

The hero headline should be visually dominant.

Feature Cards

Create exactly three feature cards.

Each card should contain:

Image

Title

Short description

Use consistent card dimensions and spacing.

Images should not all use the same visual.

Typography

Use a clean sans-serif font.

Headings should be bold.

Body text should remain highly readable.

Do not use extremely thin font weights for important information.

Buttons

Primary CTA:

Background: #2d2d86

Text: white

Rounded corners

Clear hover state

Adequate padding

The primary CTA must visually stand out from secondary elements.

Images

Use:

<img src="..." alt="...">


Images should be responsive.

Prefer:

object-fit: cover;


for fixed-height visual containers.

Responsive Design

Desktop:

Hero in two columns

Features in three columns

Tablet:

Flexible two-column or stacked layout where appropriate

Mobile:

Single-column layout

Full-width CTA where useful

Comfortable horizontal padding

Navbar collapses correctly

Always test common viewport sizes.

Animation

Keep animations subtle.

Allowed:

Fade-in

Small translate effects

Button hover effects

Card hover effects

Avoid:

Aggressive motion

Continuous animations

Large parallax effects

Anything that distracts from the CTA

HTML Semantics

Prefer:

<header>
<nav>
<main>
<section>
<article>
<footer>


Maintain a logical heading hierarchy.

Do not skip heading levels unnecessarily.