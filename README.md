# Genius

**PRISMA**
```bash
npx prisma db push
```
```bash
npx prisma generate
```
Prisma Studio is a visual editor for the data in your database. Note that Prisma Studio is not open source 👇
```bash
npx prisma studio
```
**STRIPE-CLI**<br/>
Go to this website : <br/>
<a>
https://stripe.com/docs/stripe-cli
</a><br/>
<p>
  after installing exe file open it in cmd or add it to environment variable PATH ,then
</p>

```bash
stripe login
```
open link on your browser and grant the access,then run the next command
```bash
stripe listen --forward-to localhost:3000/api/webhook
```
copy and past the webhook-key in env<br/>

**Setup .env File**
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
**install packages**
```bash
npm i
```
Start the app
```bash
npm run dev
```
