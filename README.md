Here’s a simpler, clean, and interactive **GitHub README** with just 3 collapsible sections and easy copy-paste code blocks — minimal clutter and user-friendly:

````markdown
# 🚀 NestJS + Prisma + PostgreSQL — Minimal Starter

A minimal setup for using **NestJS** with **Prisma ORM** and **PostgreSQL**.

---

<details>
<summary><strong>⚙️ Setup & Installation</strong></summary>

```bash
# Clone & install
git clone https://github.com/your-username/nestjs-prisma-starter.git
cd nestjs-prisma-starter
npm install
````

Create `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

Initialize Prisma and run migration:

```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

</details>

---

<details>
<summary><strong>🛠 Sample Prisma Usage</strong></summary>

Create a user:

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
<summary><strong>✅ PrismaService Code</strong></summary>

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
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

## 🧪 Run the app

```bash
npm run start:dev
```

---

## 📚 Helpful Links

* [NestJS Docs](https://nestjs.com/docs)
* [Prisma Docs](https://www.prisma.io/docs/)

```

---

Would you like me to package this as a `.md` file you can directly upload?
```
