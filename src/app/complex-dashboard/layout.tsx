//layout with children props. Implements notifications, revenue and users slots.
export default function ComplexDashboardLayout({
    login,
    children,
    revenue,
    notifications,
    users,
}: {
    login: React.ReactNode;
    children: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
}) {
    const isLoggedIn = false; // Simulated authentication status
    return isLoggedIn ? (
        <div>
            <h1>Complex Dashboard Layout</h1>
            <div style={{ border: '2px solid skyblue', margin: '10px', padding: '10px' }}>
                <h2>Main Content Area</h2>
                {children}
            </div>
            <div style={{ border: '2px solid blue', margin: '10px', padding: '10px' }}>
                <h2>Notifications Section</h2>
                {notifications}
            </div>
            <div style={{ border: '2px solid green', margin: '10px', padding: '10px' }}>
                <h2>Revenue Section</h2>
                {revenue}
            </div>
            <div style={{ border: '2px solid orange', margin: '10px', padding: '10px' }}>
                <h2>Users Section</h2>
                {users}
            </div>
        </div>
    ) : (
        <div style={{ border: '2px solid white', margin: '10px', padding: '10px' }}>
            <h2>Login Section</h2>
            {login}
        </div>
    );
}
