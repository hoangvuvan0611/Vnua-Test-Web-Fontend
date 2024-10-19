import { useState } from 'react';
import Header from '../components/common/header/Header';
import Sidebar from '../components/admin/sidebar/Sidebar';

function AdminLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="admin-layout">
            <Header 
                isAdmin={true}
                onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
            />
            <div className="admin-container">
                <Sidebar isOpen={sidebarOpen} />
                <main className="admin-main">{children}</main>
            </div>
        </div>
    );
}

export default AdminLayout;