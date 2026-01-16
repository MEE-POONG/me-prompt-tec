
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardBody, Button } from '@/components/ui';
import { Loader2, AlertCircle, FileText, Mail, Users } from 'lucide-react';
import Link from 'next/link';

interface AdminDashboardProps {
    user: any;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        interns: 0,
        messages: 0,
        members: 0
    });
    const [recentApplications, setRecentApplications] = useState<any[]>([]);

    useEffect(() => {
        // Check if user is admin
        if (!user || user.role !== 'admin') {
            router.push('/examples/login'); // Redirect to login if not admin
            return;
        }

        // Fetch real stats
        const fetchStats = async () => {
            try {
                // Note: You need to include the token in the request headers if it's not handled by cookies/interceptor automatically
                // Assuming token is in localStorage for this example, or relying on cookie-based auth if set up
                const token = localStorage.getItem('accessToken');
                const res = await fetch('/api/v1/admin/dashboard-stats', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await res.json();

                if (data.success) {
                    setStats(data.data.stats);
                    setRecentApplications(data.data.recentInterns);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [user, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Sidebar (Simplified) */}
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-slate-900 text-white p-6 hidden md:block">
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Me Prompt Admin
                </h2>
                <nav className="space-y-4">
                    <NavItem href="/admin/dashboard" icon={FileText} label="Genera Overview" active />
                    <NavItem href="/admin/interns" icon={Users} label="Intern Applications" />
                    <NavItem href="/admin/messages" icon={Mail} label="Contact Messages" />
                </nav>

                <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold">
                            {user.name ? user.name[0] : 'A'}
                        </div>
                        <div>
                            <p className="font-bold text-sm">{user.name || 'Admin User'}</p>
                            <p className="text-xs text-slate-400">Administrator</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="md:ml-64 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
                    <div className="flex gap-4">
                        <input placeholder="Search..." className="bg-white border rounded-lg px-4 py-2 text-sm shadow-sm" />
                        <Button variant="primary" size="sm">Download Report</Button>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard title="Intern Applications" value={stats.interns} icon={Users} color="text-blue-600" bgColor="bg-blue-100" />
                    <StatCard title="New Messages" value={stats.messages} icon={Mail} color="text-emerald-600" bgColor="bg-emerald-100" />
                    <StatCard title="Total Members" value={stats.members} icon={Users} color="text-purple-600" bgColor="bg-purple-100" />
                </div>

                {/* Recent Applications Preview */}
                <Card variant="default" padding="md" className="mb-8">
                    <CardHeader title="Recent Intern Applications" subtitle="Latest submissions from the website" />
                    <CardBody>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-500 text-sm border-b">
                                        <th className="py-3 px-2">Name</th>
                                        <th className="py-3 px-2">Position</th>
                                        <th className="py-3 px-2">University</th>
                                        <th className="py-3 px-2">Date</th>
                                        <th className="py-3 px-2">Status</th>
                                        <th className="py-3 px-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    {recentApplications.map((intern) => (
                                        <tr key={intern.id} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                                            <td className="py-4 px-2 font-medium">
                                                {intern.name.display || `${intern.name.first} ${intern.name.last}`}
                                            </td>
                                            <td className="px-2">{intern.major || '-'}</td>
                                            <td className="px-2">{intern.university}</td>
                                            <td className="px-2 text-sm text-slate-500">
                                                {new Date(intern.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${intern.status === 'published' ? 'bg-green-100 text-green-700' :
                                                        intern.status === 'draft' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {intern.status}
                                                </span>
                                            </td>
                                            <td className="px-2"><Button variant="outline" size="sm">View</Button></td>
                                        </tr>
                                    ))}
                                    {recentApplications.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="py-8 text-center text-slate-500">No applications found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

// Helper Components
const NavItem = ({ href, icon: Icon, label, active }: any) => (
    <Link href={href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
        <Icon size={20} />
        <span className="font-medium">{label}</span>
    </Link>
);

const StatCard = ({ title, value, icon: Icon, color, bgColor }: any) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor} ${color}`}>
            <Icon size={28} />
        </div>
        <div>
            <p className="text-slate-500 text-sm font-medium">{title}</p>
            <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
        </div>
    </div>
);
