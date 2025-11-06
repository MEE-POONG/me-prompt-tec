import { DashboardTheme } from '@/container/theme';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      description: '+12% from last month'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      description: '+8% from last month'
    },
    {
      title: 'Projects',
      value: '24',
      description: '3 active projects'
    }
  ];

  return <DashboardTheme userName="John Doe" stats={stats} />;
}
