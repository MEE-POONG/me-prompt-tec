
import { AdminDashboard } from '@/container/Admin/AdminDashboard';
import { useAuth } from '@/hooks/useAuth'; // We'll need to check if this hook exists or create it
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Temporary Mock Auth until we hook up real auth
const MockAuthWrapper = () => {
    // In a real app, this would come from a context or hook
    const [user, setUser] = useState<{ name: string; role: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Simulate auth check
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/v1/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    if (data.data.user.role === 'admin') {
                        setUser(data.data.user);
                    } else {
                        router.push('/examples/login'); // Not admin
                    }
                } else {
                    router.push('/examples/login');
                }
            } catch (e) {
                router.push('/examples/login');
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [router]);

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

    return <AdminDashboard user={user} />;
}

export default function AdminPage() {
    return <MockAuthWrapper />;
}
