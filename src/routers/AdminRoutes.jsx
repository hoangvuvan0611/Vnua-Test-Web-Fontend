import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/UserManagement';
import ExamManagement from '../pages/admin/ExamManagement';
import QuestionBank from '../pages/admin/QuestionBank';

function AdminRoutes() {
    return (
        <AdminLayout>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/exams" element={<ExamManagement />} />
                <Route path="/questions" element={<QuestionBank />} />
            </Routes>
        </AdminLayout>
    );
}

export default AdminRoutes;