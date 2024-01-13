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
**STRIPE-CLI**
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
copy and past the webhook-key in env
