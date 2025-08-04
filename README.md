Got it! Here’s a clean, interactive **one-page GitHub README** with **copyable code blocks** using collapsible sections and inline code formatting, so users can easily expand and copy everything in one place:

````markdown
# 🚀 NestJS + Prisma + PostgreSQL — Minimal Starter

A minimal, clean setup of **NestJS** using **Prisma ORM** with **PostgreSQL**.

---

## 📦 Tech Stack
- NestJS
- Prisma ORM
- PostgreSQL
- TypeScript

---

<details>
<summary><strong>⚙️ Installation & Setup</strong></summary>

```bash
# Clone repo & install dependencies
git clone https://github.com/your-username/nestjs-prisma-starter.git
cd nestjs-prisma-starter
npm install
````

Create `.env` in root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

Initialize Prisma:

```bash
npx prisma init
```

Define schema in `prisma/schema.prisma`:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

Run migration & generate client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

</details>

---

<details>
<summary><strong>🧩 Folder Structure</strong></summary>

```
src/
  ├── prisma/
  │   ├── prisma.module.ts
  │   └── prisma.service.ts
  └── user/
      ├── user.module.ts
      └── user.service.ts
```

</details>

---

<details>
<summary><strong>🛠 Sample Usage</strong></summary>

Create user:

```typescript
this.prisma.user.create({
  data: { name: 'Alice', email: 'alice@example.com' },
});
```

Fetch all users:

```typescript
this.prisma.user.findMany();
```

</details>

---

<details>
<summary><strong>✅ Prisma Service Implementation</strong></summary>

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

</details>

---

## 🧪 Run the Application

```bash
npm run start:dev
```

---

## 📚 Resources

* [NestJS Documentation](https://nestjs.com/docs)
* [Prisma Documentation](https://www.prisma.io/docs/)

```

---

This format:

- Keeps the README tidy with collapsible sections
- Puts all code in single blocks so users can easily copy entire sections
- Is fully Markdown compliant and renders nicely on GitHub

If you want, I can also generate a ready-to-use `.md` file for you.
```
