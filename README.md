```markdown
# 🚀 NestJS + Prisma + PostgreSQL — Minimal Starter

This project provides a minimal, clean setup of NestJS using Prisma ORM with a PostgreSQL database.

## 📦 Tech Stack
- NestJS
- Prisma ORM
- PostgreSQL
- TypeScript

## ⚙️ Installation & Setup

Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/nestjs-prisma-starter.git
cd nestjs-prisma-starter

npm install
```

Create a `.env` file in the root directory with your database connection:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

Initialize Prisma:
```bash
npx prisma init
```

Define your schema in `prisma/schema.prisma`, e.g.:
```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

Run migrations and generate Prisma client:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## 🧩 Folder Structure

```
src/
  ├── prisma/
  │   ├── prisma.module.ts
  │   └── prisma.service.ts
  └── user/
      ├── user.module.ts
      └── user.service.ts
```

## 🛠 Sample Usage

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

## ✅ Prisma Service

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

## 🧪 Run the Application
```bash
npm run start:dev
```

## 📚 Resources
- [NestJS Documentation](https://nestjs.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
```
