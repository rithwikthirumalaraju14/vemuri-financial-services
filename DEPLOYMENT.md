# Deployment Guide

This document outlines the steps required to build and deploy the Vemuri Financial Services website to a production environment.

## 1. Preparation & Build

Before deploying, you must compile the React application into optimized static assets.

1. Open your terminal and navigate to the project directory:
   ```bash
   cd vemuri-website/my-react-app
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Run the production build command:
   ```bash
   npm run build
   ```

4. **Result**: Vite will bundle your application and generate a `dist/` directory. This folder contains all the static HTML, CSS, and optimized JavaScript required to run your website.

---

## 2. Deployment Options

Because this is a static Single Page Application (SPA), it can be hosted on almost any standard web hosting provider. Below are instructions for the most common deployment strategies.

### Option A: Standard cPanel / Shared Hosting (Hostinger, GoDaddy, etc.)

1. Open your hosting provider's File Manager or connect via FTP (FileZilla).
2. Navigate to your `public_html` directory (or the root directory of your domain).
3. Upload the **contents** of the `dist/` folder directly into `public_html`. Do not upload the `dist` folder itself; upload the files *inside* it.
4. **SPA Routing Rule**: If your users refresh the page on a custom URL (e.g., `/contact`), the server might return a 404 error. To fix this, create a `.htaccess` file in `public_html` with the following fallback rule:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option B: Vercel (Recommended for React/Vite)

Vercel provides seamless, automated deployments for modern web apps.

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project root (`my-react-app`).
3. Follow the CLI prompts. Vercel will automatically detect that you are using Vite and configure the build settings.
4. (Alternatively) Connect your GitHub repository to Vercel via the Vercel Web Dashboard for continuous deployment on every `git push`.

### Option C: AWS S3 & CloudFront

1. Create an S3 Bucket in AWS and disable "Block all public access".
2. Enable "Static website hosting" on the bucket. Set the Index document to `index.html` and Error document to `index.html`.
3. Upload the contents of the `dist/` folder to the bucket.
4. Set up a CloudFront distribution pointing to your S3 bucket to provide SSL (HTTPS) and edge caching.

---

## 3. Post-Deployment Checklist

- **Verify WhatsApp Link**: Click the floating WhatsApp button to ensure it opens the chat to `+91 9886291668`.
- **Check External Portals**: Verify that the "VFS Office" and "Client Login" buttons correctly route to their respective subdomains.
- **Mobile Responsiveness**: Check the site on a mobile device to ensure the mobile menu toggles correctly and the header scales down.
- **Performance**: Run Google Lighthouse to verify performance and SEO metrics.
