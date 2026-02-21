export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            {/* No Navbar or Footer for admin pages */}
            {children}
        </div>
    );
}
