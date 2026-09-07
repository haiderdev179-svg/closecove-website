# CloseCove — Agency Marketing & Lead Generation Website

Official marketing site for **CloseCove** (*"Turn missed opportunities into booked customers."* / *"AI Automation for Local Businesses"*).

Built as a clean, single-page, conversion-oriented site with an editorial monochrome aesthetic, restrained electric-blue interactive moments, scroll reveals, working demo integration to FitFlow, and a validated lead capture pipeline.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom studio theme and hairline dividers
- **Icons**: Lucide React
- **Animations**: Scroll-triggered entry and exit reveals via `IntersectionObserver` with `prefers-reduced-motion` safety

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Production Build & Test

```bash
npm run build
npm run start
```

---

## 📬 Lead Capture & Inquiries

Inquiries submitted through the form are sent via `POST` to `/api/inquire`.
- Leads are validated and logged to the server console with timestamp, ID, and chosen plan interest.
- To enable automatic email notifications directly to your inbox, create `.env.local` based on `.env.example`:
  ```bash
  RESEND_API_KEY=re_your_api_key
  NOTIFICATION_EMAIL=your-email@yourdomain.com
  ```

---

## 🌐 Deploying to Vercel

1. **Option A: Push to GitHub & Connect to Vercel**
   - Push this directory to a GitHub repository.
   - Go to [vercel.com/new](https://vercel.com/new) and import your repository.
   - Click **Deploy**. Vercel will automatically detect Next.js and build it.

2. **Option B: Using Vercel CLI**
   ```bash
   npx vercel
   ```
   Follow the prompts to link the project and deploy immediately.

3. **Custom Domain**:
   - In Vercel Project Settings → Domains, add `closecove.com`.
   - Set up your DNS records according to Vercel's instructions.
