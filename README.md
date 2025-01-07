# Personal Journal Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

- Node.js 20 or later
- Yarn package manager
- A Firebase project (for analytics)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personaljournal-website
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Configure Firebase**
   
   Create a `.env.local` file in the root directory with the following variables:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```
   
   To get these values:
   1. Go to [Firebase Console](https://console.firebase.google.com/)
   2. Create a new project or select an existing one
   3. Add a web app to your project
   4. Copy the configuration values from the Firebase SDK snippet

4. **Start the development server**
   ```bash
   yarn dev
   ```

5. **Open the application**
   
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `yarn dev` - Starts the development server
- `yarn build` - Creates a production build
- `yarn start` - Runs the production server
- `yarn lint` - Runs the linter
- `yarn contentlayer` - Builds the content layer

## Project Structure

- `/src` - Application source code
  - `/app` - Next.js app router pages and layouts
  - `/components` - React components
  - `/lib` - Utility functions and configurations
- `/content` - MDX content files
- `/public` - Static assets

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The project is configured to deploy to GitHub Pages automatically when changes are pushed to the main branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

To set up deployment:
1. Configure your repository secrets in GitHub (Settings → Secrets and variables → Actions)
2. Add all the `NEXT_PUBLIC_FIREBASE_*` variables as repository secrets
3. Push to the main branch to trigger deployment
