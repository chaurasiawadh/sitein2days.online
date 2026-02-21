import { redirect } from 'next/navigation';
import { checkAdminAuth, getSubmissions } from './actions';
import AdminDashboard from './AdminDashboard';

export default async function AdminPage() {
    const isAuthenticated = await checkAdminAuth();

    if (!isAuthenticated) {
        redirect('/admin/login');
    }

    const submissions = await getSubmissions();

    return <AdminDashboard submissions={submissions} />;
}
