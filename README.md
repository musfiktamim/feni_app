````markdown
# 🚀 NestJS + Prisma + PostgreSQL — Minimal Starter

A minimal setup for using **NestJS** with **Prisma ORM** and **PostgreSQL**.

---

## Setup & Usage

### 1. Clone & install dependencies

```bash
git clone https://github.com/your-username/nestjs-prisma-starter.git
cd nestjs-prisma-starter
npm install
````

### 2. Create `.env` file

Create a `.env` file in the project root and add your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### 3. Initialize Prisma and run migration

```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Sample Prisma usage in your NestJS service

```typescript
// Create a user
this.prisma.user.create({
  data: { name: 'Alice', email: 'alice@example.com' },
});

// Fetch all users
this.prisma.user.findMany();
```

### 5. PrismaService implementation

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

### 6. Run the app

```bash
npm run start:dev
```

---

## Helpful Links

* [NestJS Documentation](https://nestjs.com/docs)
* [Prisma Documentation](https://www.prisma.io/docs/)

```

---

This way, everything is visible in one scrollable section for easy copy/paste or reading on GitHub.

If you want, I can create the actual `.md` file for you to download.
```
