This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the pkg:

```bash
npm install
# or
yarn i
```
Make sure install docker desktop, and started up.
Running up database image with docker compose file:

```bash
docker compose up -d
```

Add .env file for those key and database url:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
OPENAI_API_KEY
OPENAI_ORG_KEY
REPLICATE_API_TOKEN
STRIPE_API_KEY
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET
```

Set up prisma:

```bash
npx prisma generate
```

Run the server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Run npx prisma studio to see the db viewer.
Run stripe listen --forward-to localhost:3000/api/webhook to start up stripe test mode.

