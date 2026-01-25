# Repository Analysis Report

**Project:** shonareed.com
**Analysis Date:** 2026-01-24
**Repository:** https://github.com/4point7/4point7.github.io

---

## Table of Contents

1. [Repository Overview](#1-repository-overview)
2. [Directory Structure](#2-directory-structure)
3. [Technology Stack](#3-technology-stack)
4. [Configuration Analysis](#4-configuration-analysis)
5. [Layouts & Templates](#5-layouts--templates)
6. [Content Structure](#6-content-structure)
7. [Assets Analysis](#7-assets-analysis)
8. [Dependencies](#8-dependencies)
9. [Build & Deployment](#9-build--deployment)
10. [SEO & Metadata](#10-seo--metadata)
11. [Notable Features](#11-notable-features)
12. [Issues & Improvements](#12-issues--improvements)
13. [Summary & Recommendations](#13-summary--recommendations)

---

## 1. Repository Overview

| Attribute | Value |
|-----------|-------|
| **Project** | shonareed.com (Personal Portfolio Website) |
| **Purpose** | Professional portfolio for Shona Reed, UX Researcher and Service Design professional |
| **Focus** | Showcasing 10+ years of UX research and design experience |
| **Hosting** | GitHub Pages |
| **Live URL** | https://shonareed.com |
| **Main Branch** | jekyll |

---

## 2. Directory Structure

```
4point7.github.io/
├── _posts/                      # 6 published portfolio projects
├── _drafts/                     # 3 draft projects (unpublished)
├── _layouts/                    # 4 Jekyll layouts
├── _includes/                   # 16 reusable component templates
├── _data/                       # JSON data files for projects and clients
├── _old/                        # Legacy/archived assets
├── js/                          # JavaScript libraries and custom scripts
├── css/                         # Font Awesome and CSS files
├── images/                      # 47 image assets
├── mail/                        # Mail handling directory
├── _config.yml                  # Main Jekyll configuration
├── Gemfile & Gemfile.lock       # Ruby dependencies
├── index.html                   # Home page
├── feed.xml                     # RSS feed
├── style.css                    # Main stylesheet (Jekyll-processed)
├── CNAME                        # Custom domain configuration
└── README.md                    # Project documentation
```

### Directory Purposes

| Directory | Purpose |
|-----------|---------|
| `_posts/` | Published portfolio project content |
| `_drafts/` | Unpublished draft content |
| `_layouts/` | Page templates (default, page, post, style.css) |
| `_includes/` | Reusable HTML components (nav, header, footer, etc.) |
| `_data/` | Structured data (projects.json, clientlist.json) |
| `_old/` | Archived legacy assets |
| `js/` | JavaScript libraries and custom scripts |
| `css/` | Stylesheets and Font Awesome |
| `images/` | Portfolio images, logos, icons |

---

## 3. Technology Stack

### Static Site Generator
- **Jekyll** 2.4.0 (via GitHub Pages v39)
- **Markdown:** kramdown
- **Templating:** Liquid

### Frontend Framework
- **Bootstrap 3** (Start Bootstrap Freelancer theme)
- **Bootswatch Flatly** Theme styling
- **Font Awesome** icons

### JavaScript Libraries

| Library | Version | Size | Purpose |
|---------|---------|------|---------|
| jQuery | 1.11.0 | ~96KB | DOM manipulation |
| Bootstrap.js | 3.x | ~32KB | UI components |
| jQuery Easing | - | 5.5KB | Animation easing |
| jqBootstrapValidation | - | 36KB | Form validation |
| cbpAnimatedHeader.js | - | - | Header animations |
| classie.js | - | 1.8KB | Class utilities |
| freelancer.js | - | - | Theme functionality |
| contact_me.js | - | 2.8KB | Contact form handling |

### Fonts
- **Montserrat** (weights: 400, 700)
- **Lato** (weights: 400, 700, 400italic, 700italic)

---

## 4. Configuration Analysis

### _config.yml Settings

#### Site Metadata
```yaml
title: "Shona Reed, User Experience Research and Service Design"
email: ux@shonareed.com
url: https://shonareed.com
description: "UX Research & Service Design, ten years experience..."
skills: "User Experience Research and Design"
meta_author: "Reed Shona"
```

#### Color Scheme
```yaml
color:
  primary: "58A6A2"        # Teal/turquoise accent
  primary-rgb: "24,288,156"
  secondary: "000000"      # Black
  secondary-dark: "233140" # Dark gray
```

#### Contact Form
```yaml
contact: static           # Uses formspree.io (alternative: disqus)
disqus_shortname: myshortname
```

#### Social Networks
```yaml
twitter: http://twitter.com/uxisready
github: http://github.com/4point7
```

#### Build Settings
```yaml
markdown: kramdown
permalink: pretty
```

---

## 5. Layouts & Templates

### Layout Hierarchy

#### 1. default.html (Homepage)
Main template with modular component includes:
- `head.html` - Metadata and CSS
- `nav.html` - Fixed navigation bar
- `header.html` - Logo and intro section
- `about.html` - About section with headshot & bio
- `portfolio_grid.html` - Project thumbnails
- `footer.html` - Footer with social links
- `modals.html` - Portfolio project modals
- `js.html` - JavaScript includes

#### 2. page.html (Generic Pages)
- Basic page wrapper with article tags
- Post-style header with title

#### 3. post.html (Blog Posts)
- Schema.org markup for BlogPosting
- SEO-optimized with structured data:
  - `itemscope itemtype="http://schema.org/BlogPosting"`
  - Date, author, and content metadata

#### 4. style.css (Generated Stylesheet)
Liquid template combining:
- bootstrap.min.css
- main.css (459 lines)
- shonareed.css (custom overrides)

### Include Components (16 files)

| Include | Purpose |
|---------|---------|
| head.html | Meta tags, CSS links |
| nav.html | Navigation bar |
| header.html | Hero section |
| about.html | Bio section |
| portfolio_grid.html | Project grid |
| modals.html | Modal dialogs |
| footer.html | Footer content |
| js.html | Script includes |
| bootstrap.min.css | CSS framework |
| main.css | Base styles |
| shonareed.css | Custom styles |

---

## 6. Content Structure

### Published Portfolio Projects (6)

| Project | Client | Category | Date |
|---------|--------|----------|------|
| Academy of Art | Academy of Art | UI Designer | Dec 2015 |
| Bank of America | Bank of America | UX Designer | Dec 2015 |
| Bluewolf | Bluewolf | UX Researcher | Dec 2015 |
| Snapfish Checkout | Snapfish | Service Designer | Dec 2015 |
| Snapfish Prints | Snapfish | Product Designer | Dec 2015 |
| UX is Ready | UX is Ready | Consultant | Dec 2015 |

### Draft Projects (3 - unpublished)
- Filmoids (2015-12-01)
- Photobooks (2015-12-03)
- SFMOMA (2015-12-09)

### Post Front Matter Structure
```yaml
layout: default
modal-id: 6
date: 2015-12-01
img: academyofart.png
alt: academyofart
project: aau
project-date: April 2010
client: Academy of Art
client_logo: logo_academyofart.png
category: User Interface Designer
description: [Project description]
```

### Data Files

| File | Purpose |
|------|---------|
| `_data/projects.json` | Project metadata, tags, images |
| `_data/clientlist.json` | Client logos array (9 clients) |

---

## 7. Assets Analysis

### Images (47 total)

| Category | Examples |
|----------|----------|
| Portfolio Images | academyofart.png, bluewolf.png, bofa.png, checkout.png |
| Secondary Images | *_a.png, *_b.png, *_c.png variants |
| Background Images | bg_top.png, bg_bottom.png |
| Client Logos | logo_bofa.png, logo_hp.png, logo_publicis.png |
| Social Icons | linkedin_icon.svg, twitter_icon.svg, email_icon.svg |
| UI Elements | close.svg, loading.svg |
| Branding | shona_logo2.svg, hi_res.png (headshot) |

### CSS Structure

| File | Lines | Purpose |
|------|-------|---------|
| bootstrap.min.css | - | Framework styles |
| main.css | 459 | Start Bootstrap base |
| shonareed.css | 100+ | Custom theme |
| font-awesome.min.css | - | Icon fonts |

### JavaScript Files

| File | Size | Purpose |
|------|------|---------|
| jquery-1.11.0.js | ~96KB | Core library |
| bootstrap.min.js | ~32KB | UI components |
| jquery.easing.min.js | 5.5KB | Animations |
| jqBootstrapValidation.js | 36KB | Form validation |
| cbpAnimatedHeader.js | - | Header effects |
| classie.js | 1.8KB | Class utilities |
| freelancer.js | - | Theme logic |
| contact_me.js | 2.8KB | Contact forms |

---

## 8. Dependencies

### Ruby Gems (GitHub Pages v39)

#### Core Jekyll
| Gem | Version |
|-----|---------|
| jekyll | 2.4.0 |
| jekyll-sass-converter | 1.3.0 |
| kramdown | 1.5.0 |
| liquid | 2.6.2 |

#### Jekyll Plugins
| Gem | Version | Purpose |
|-----|---------|---------|
| jekyll-feed | 0.3.1 | RSS generation |
| jekyll-mentions | 0.2.1 | @mention support |
| jekyll-redirect-from | 0.8.0 | Redirects |
| jekyll-sitemap | 0.8.1 | Sitemap generation |
| jemoji | 0.5.0 | Emoji support |

#### Markdown & Parsing
| Gem | Version |
|-----|---------|
| redcarpet | 3.3.2 |
| redcloth | 4.2.9 |
| maruku | 0.7.0 |

#### Utilities
| Gem | Version |
|-----|---------|
| safe_yaml | 1.0.4 |
| activesupport | 4.2.5 |
| nokogiri | 1.6.7 |
| pygments.rb | 0.6.3 |

---

## 9. Build & Deployment

### GitHub Pages Configuration

| Setting | Value |
|---------|-------|
| Repository | 4point7/4point7.github.io |
| Branch | jekyll |
| Custom Domain | shonareed.com |
| CNAME File | Present |
| HTTPS | **Not supported** |

### Build Process
1. Git push to jekyll branch
2. GitHub Pages automatically builds with Jekyll
3. Output published to https://shonareed.com

### Recent Commits
```
616a467 Update README.md
874c946 color and justification change
fb26344 Update default.html
ae7c549 Update default.html
1fbe14d updated title
```

---

## 10. SEO & Metadata

### Meta Tags (head.html)
```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description" content="[site description]">
<meta name="author" content="Reed Shona">
<meta name="google-site-verification" content="[empty]">
<meta name="msvalidate.01" content="[empty]">
```

### Structured Data
- Schema.org BlogPosting markup in post.html
- `itemscope itemtype="http://schema.org/BlogPosting"`
- Properties: datePublished, author, articleBody

### Canonical URLs
```html
<link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.url }}">
```

### RSS Feed (feed.xml)
- Standard RSS 2.0 format
- Includes title, description, pubDate
- Limits to 10 most recent posts

### Missing SEO Elements
- Google verification: **Empty**
- Bing verification: **Empty**
- Open Graph tags: **Missing**
- Twitter Card tags: **Missing**

---

## 11. Notable Features

### Architecture
- **Modular Design:** 16 reusable include components
- **Data-Driven:** JSON files for projects and clients
- **Configurable:** Color scheme and settings in _config.yml

### Portfolio System
- Dynamic grid generation from posts
- Modal pop-ups for project details
- Multi-image support per project
- Client logos from JSON data

### Contact Options
- Static form via formspree.io (default)
- Disqus comments (alternative)
- Client-side validation

### Responsive Design
- Bootstrap grid system
- Mobile-first approach
- Responsive images
- Mobile navigation toggle

### Navigation
- Fixed top navigation bar
- Smooth scrolling to sections
- ScrollSpy active highlighting
- Mobile hamburger menu

### Visual Design
- Flat design (Bootswatch Flatly)
- Teal accent color (#58A6A2)
- Clean typography
- Animated header on scroll

### Accessibility
- Semantic HTML structure
- ARIA labels for modals
- Alt text for images
- Proper heading hierarchy

---

## 12. Issues & Improvements

### Critical Issues

| Issue | Severity | Description |
|-------|----------|-------------|
| Outdated Dependencies | **High** | Jekyll 2.4.0, jQuery 1.11.0, Bootstrap 3 (all 10+ years old) |
| No HTTPS | **High** | Security concern - modern browsers warn users |
| Empty SEO Fields | **Medium** | Google/Bing verification not configured |

### Functional Issues

| Issue | Description |
|-------|-------------|
| Disqus Placeholder | `disqus_shortname: myshortname` not configured |
| Hidden Navigation | Contact and Clients menu items commented out |
| Incomplete Contact | Static form may not function without proper endpoint |

### Code Quality Issues

| Issue | Description |
|-------|-------------|
| Legacy Code | `_old/` directory should be removed |
| Commented Code | Unused code in templates |
| No Minification | Custom JS files not minified |
| No Image Optimization | Large images not optimized |

### Content Issues

| Issue | Description |
|-------|-------------|
| Outdated Projects | All projects dated December 2015 |
| Incomplete Drafts | 3 draft projects never published |
| Minimal README | Only 3 lines of documentation |

---

## 13. Summary & Recommendations

### Strengths

- Clean, modular Jekyll architecture
- Professional portfolio presentation
- Responsive Bootstrap-based design
- Good use of Jekyll features
- Proper semantic HTML with microdata

### Weaknesses

- Severely outdated dependencies
- No HTTPS support
- Incomplete configuration
- Portfolio content is 8+ years old
- Minimal documentation

### Priority Recommendations

| Priority | Recommendation |
|----------|----------------|
| 1 | Enable HTTPS (GitHub Pages now supports this) |
| 2 | Upgrade Jekyll and all dependencies |
| 3 | Configure SEO verification fields |
| 4 | Remove `_old/` directory and commented code |
| 5 | Update portfolio projects |
| 6 | Complete or remove draft projects |
| 7 | Add Open Graph and Twitter Card meta tags |
| 8 | Add comprehensive documentation |
| 9 | Implement CI/CD for testing |
| 10 | Consider migrating to Bootstrap 5 |

### Modernization Path

1. **Immediate:** Enable HTTPS, fix SEO fields
2. **Short-term:** Upgrade dependencies, clean legacy code
3. **Medium-term:** Update content, improve documentation
4. **Long-term:** Migrate to modern frameworks, add CI/CD

---

*Report generated by Claude Code analysis on 2026-01-24*
