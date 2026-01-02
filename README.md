# Coconut - Luxury Streetwear E-Commerce

A high-performance, minimalist luxury streetwear e-commerce site built with Next.js 14, featuring the "Live Yours" brand philosophy.

## Design Philosophy

**Minimalist Luxury** - Inspired by Fear of God and Off-White
- Clean, bold typography
- Asymmetric grid layouts
- High-quality product photography
- Sophisticated color palette (#F5F5F5 off-white, #000000 deep black)

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **Fonts**: Inter (body), Playfair Display (serif motto)
- **Images**: Optimized product photography and brand assets

## Current Inventory

### Products
1. **Oversize Heavy T-Shirt**
   - Price: €55.00
   - Stock: 104 units
   - Color: Black
   - Premium heavyweight cotton with oversized silhouette

2. **Oversize Basic Hoodie**
   - Price: €110.00
   - Stock: 74 units
   - Color: Black
   - Essential heavyweight fleece with contemporary fit

## Getting Started

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
coconut-store/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage with hero & collection
│   └── globals.css         # Global styles & Tailwind config
├── data/
│   └── products.ts         # Product inventory data
├── public/
│   └── images/
│       ├── logos/          # Brand logos
│       └── products/       # Product photography
└── tailwind.config.ts      # Tailwind configuration
```

## Features

### Current
- ✅ Full-screen hero section with "Live Yours" branding
- ✅ Asymmetric product grid layout
- ✅ Product cards with size selection
- ✅ Stock availability display
- ✅ Responsive design (mobile-first)
- ✅ Newsletter signup
- ✅ Brand story section

### Roadmap
- ⏳ Stripe payment integration
- ⏳ Supabase database connection
- ⏳ Shopping cart functionality
- ⏳ Product detail pages
- ⏳ Sticky "Add to Cart" on mobile
- ⏳ Advanced animations & micro-interactions
- ⏳ Size inventory management
- ⏳ Order tracking

## Design System

### Colors
- **Coconut White**: #F5F5F5 (Off-white background)
- **Coconut Black**: #000000 (Deep black for text & accents)

### Typography
- **Body**: Inter (sans-serif) - Clean, modern
- **Motto**: Playfair Display (serif) - Elegant, sophisticated

### Components
- `.btn-primary` - Black button with white text
- `.btn-secondary` - Outlined button
- `.section-padding` - Responsive padding utility
- `.container-max` - Max-width container (1600px)

## Luxury Pricing Strategy

Based on production costs with premium positioning:
- T-Shirt: Cost ~€11.00 → Retail €55.00 (5x markup)
- Hoodie: Cost ~€19.50 → Retail €110.00 (5.6x markup)

## License

All rights reserved © 2026 Coconut
