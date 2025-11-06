import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

export interface DashboardThemeProps {
  userName?: string;
  stats?: {
    title: string;
    value: string | number;
    description?: string;
  }[];
}

export const DashboardTheme: React.FC<DashboardThemeProps> = ({
  userName = 'User',
  stats = []
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {userName}!
            </h1>
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} variant="default" padding="md">
              <CardHeader title={stat.title} />
              <CardBody>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                {stat.description && (
                  <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
                )}
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Main Card */}
        <Card variant="elevated" padding="lg">
          <CardHeader
            title="Recent Activity"
            subtitle="Your latest updates and actions"
          />
          <CardBody>
            <div className="space-y-4">
              <p className="text-gray-600">No recent activity to display.</p>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex gap-2">
              <Button variant="primary" size="md">
                View All
              </Button>
              <Button variant="outline" size="md">
                Refresh
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};
