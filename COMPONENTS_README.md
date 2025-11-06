# UI Components & Theme Containers

โครงสร้างของ components และ containers ในโปรเจกต์

## โครงสร้างไฟล์

```
src/
├── components/
│   └── ui/                    # UI Components พื้นฐาน
│       ├── Button.tsx         # ปุ่มต่างๆ
│       ├── Input.tsx          # Input field พร้อม validation
│       ├── Card.tsx           # Card component
│       └── index.ts           # Export ทั้งหมด
│
└── container/
    └── theme/                 # Theme Containers (ใช้ UI components)
        ├── LoginTheme.tsx     # หน้า Login
        ├── DashboardTheme.tsx # หน้า Dashboard
        ├── FormTheme.tsx      # Form แบบ dynamic
        └── index.ts           # Export ทั้งหมด
```

## UI Components

### 1. Button Component

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md" fullWidth>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean

### 2. Input Component

```tsx
import { Input } from '@/components/ui';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Email is required"
  fullWidth
/>
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `fullWidth`: boolean

### 3. Card Component

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

<Card variant="elevated" padding="lg">
  <CardHeader title="Title" subtitle="Subtitle" />
  <CardBody>
    Content here
  </CardBody>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Card Props:**
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'none' | 'sm' | 'md' | 'lg'

## Theme Containers

### 1. LoginTheme

```tsx
import { LoginTheme } from '@/container/theme';

<LoginTheme
  onSubmit={(data) => console.log(data)}
  isLoading={false}
/>
```

### 2. DashboardTheme

```tsx
import { DashboardTheme } from '@/container/theme';

const stats = [
  { title: 'Users', value: '1,234', description: '+12%' }
];

<DashboardTheme userName="John" stats={stats} />
```

### 3. FormTheme

```tsx
import { FormTheme } from '@/container/theme';

const fields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true
  }
];

<FormTheme
  title="Registration"
  fields={fields}
  onSubmit={(data) => console.log(data)}
/>
```

## ตัวอย่างการใช้งาน

ดูตัวอย่างใน:
- `/examples/login` - Login page
- `/examples/dashboard` - Dashboard page
- `/examples/form` - Dynamic form page

## การพัฒนาเพิ่มเติม

### เพิ่ม UI Component ใหม่

1. สร้างไฟล์ใน `src/components/ui/`
2. Export ใน `src/components/ui/index.ts`

### เพิ่ม Theme Container ใหม่

1. สร้างไฟล์ใน `src/container/theme/`
2. Import UI components ที่ต้องการใช้
3. Export ใน `src/container/theme/index.ts`

## หมายเหตุ

- UI Components เป็น **reusable components** ที่ไม่มี business logic
- Theme Containers เป็น **composed components** ที่ประกอบด้วย UI components หลายตัว
- ใช้ Tailwind CSS สำหรับ styling
- รองรับ TypeScript พร้อม type definitions
