# MailerSend - Email & SMS Marketing Platform

A modern, feature-rich email and SMS marketing platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📧 Email Marketing & Automation
- 📱 Transactional SMS API
- 💳 Complete 4-Step Checkout System
- 🎨 Modern, Responsive Design
- 🔒 Secure Payment Integration
- 📊 Pricing Calculator
- 🎯 Add-ons Management System
- 🌍 Multi-currency Support (USD, EUR, GBP)

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React Components
- **Icons**: Lucide React
- **State Management**: React Hooks

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

### Check Your Versions

```bash
node --version  # Should be v18.x or higher
npm --version   # Should be v9.x or higher
```

## Installation & Setup

### Windows

1. **Extract the ZIP file**
   - Right-click on the ZIP file
   - Select "Extract All..."
   - Choose a destination folder

2. **Open Command Prompt or PowerShell**
   - Press `Win + R`
   - Type `cmd` or `powershell` and press Enter
   - Navigate to the extracted folder:
     ```cmd
     cd path\to\extracted\folder\www
     ```

3. **Install Dependencies**
   ```cmd
   npm install
   ```
   This will install all required packages. It may take a few minutes.

4. **Run Development Server**
   ```cmd
   npm run dev
   ```

5. **Open in Browser**
   - Open your browser and go to: `http://localhost:3000`
   - The application should now be running!

### Linux / macOS

1. **Extract the ZIP file**
   ```bash
   unzip www.zip
   cd www
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Open your browser and go to: `http://localhost:3000`
   - The application should now be running!

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode on `http://localhost:3000`
- The page will reload when you make changes
- You may also see lint errors in the console

### `npm run build`
Builds the app for production to the `.next` folder
- Optimizes the build for best performance
- The build is minified and filenames include hashes

### `npm start`
Runs the built app in production mode
- **Note**: You must run `npm run build` first

### `npm run lint`
Runs ESLint to check code quality
- Helps identify and fix code issues

## Project Structure

```
www/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (main)/            # Main layout group
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── pricing/       # Pricing page
│   │   │   ├── checkout/      # Checkout pages
│   │   │   │   └── sms-pricing/  # SMS Checkout (4 steps)
│   │   │   ├── contact/       # Contact page
│   │   │   ├── email-marketing-automation/
│   │   │   ├── email-analytics-reporting/
│   │   │   ├── email-security-deliverability/
│   │   │   ├── email-marketing-integrations/
│   │   │   ├── smtp-relay/
│   │   │   ├── transactional-sms-api/
│   │   │   └── dedicated-ip/
│   │   ├── login/             # Login page
│   │   ├── signup/            # Signup page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── ui/                # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── seo/               # SEO components
│   ├── lib/                   # Utility functions
│   └── styles/                # Global styles
├── public/                    # Static assets (images, fonts)
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
└── README.md                 # This file
```

## Key Features Explained

### 1. Checkout System (4 Steps)
Located at: `/checkout/sms-pricing`

**Step 1**: Contact Information
- Name, email, phone
- Optional company info and VAT number

**Step 2**: Billing Address
- Full address form
- Country selection

**Step 3**: Add-ons Selection
- 6 premium add-ons available
- All pre-selected by default
- Users can uncheck unwanted items:
  - Dedicated-IP ($50)
  - Reputation Shield ($19.90)
  - Custom Template Design ($5)
  - Reviews Available ($10)
  - Historical Data Migration ($4)
  - Partner Growth Manager ($23)

**Step 4**: Payment
- Credit card payment form
- Terms & conditions
- Order summary with pricing breakdown

### 2. Pricing Page
- 4 pricing tiers (Free, Standard, Premium, Growth)
- SMS Pricing Calculator with slider
- Flexible Email Credits section
- Multi-currency support
- All "Choose plan" and "Get a Quote" buttons link to checkout

### 3. Transactional SMS API Page
- SMS pricing calculator
- Feature descriptions
- Direct link to checkout with selected credits

## Environment Variables (Optional)

If you need to configure environment variables, create a `.env.local` file in the root directory:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key_here
```

**Note**: The current version doesn't require any environment variables to run.

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:

**Windows**:
```cmd
# Find process using port 3000
netstat -ano | findstr :3000
# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

**Linux/macOS**:
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

Or run on a different port:
```bash
npm run dev -- -p 3001
```

### Node Modules Issues
If you encounter issues with node_modules:

**Windows**:
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

**Linux/macOS**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
If you get build errors:

1. Clear Next.js cache:
   ```bash
   # Windows
   rmdir /s /q .next

   # Linux/macOS
   rm -rf .next
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   ```

3. Try building again:
   ```bash
   npm run build
   ```

### TypeScript Errors
If you see TypeScript errors:
```bash
npm run build
```
This will show all type errors that need to be fixed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The application includes:
- ✅ Server-side rendering (SSR)
- ✅ Static page generation where possible
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading of components

## Production Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Other Platforms
- **Netlify**: Supports Next.js out of the box
- **AWS**: Use AWS Amplify or EC2
- **DigitalOcean**: Use App Platform
- **Docker**: Create Dockerfile for containerization

## Key Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/pricing` | Pricing plans & calculators |
| `/checkout/sms-pricing` | 4-step SMS checkout |
| `/transactional-sms-api` | SMS API features |
| `/email-marketing-automation` | Email automation |
| `/contact` | Contact form |
| `/login` | User login |
| `/signup` | User registration |

## Testing Checkout Flow

1. Visit `/pricing`
2. Click any "Choose plan" button OR use SMS calculator
3. You'll be redirected to `/checkout/sms-pricing` with selected credits
4. Complete 4 steps:
   - Enter contact info
   - Enter billing address
   - Review/modify add-ons (all pre-selected)
   - Enter payment info and complete

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: '#198DA7',  // Main brand color
  cyan: '#7DD3C0',     // Secondary color
  // ... more colors
}
```

### Pricing
Edit pricing in:
- `/src/app/(main)/pricing/page.tsx`
- `/src/app/(main)/checkout/sms-pricing/page.tsx`

### Add-ons
Modify add-ons in `/src/app/(main)/checkout/sms-pricing/page.tsx`:
```typescript
const addonsData = [
  // Add or modify add-ons here
];
```

## Support & Documentation

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **React**: https://react.dev

## License

This project is proprietary software. All rights reserved.

## Contact

For questions or support, please contact the development team.

---

**Happy Coding! 🚀**