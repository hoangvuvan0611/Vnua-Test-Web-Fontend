import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/UserManagement';
import ExamManagement from '../pages/admin/ExamManagement';
import QuestionBank from '../pages/admin/QuestionBank';
import StudentManagement from '../pages/admin/StudentManagement';
import SubjectManagement from '../pages/admin/SubjectManagement';
import ExamBank from '../pages/admin/ExamBank';
import Setting from '../pages/admin/Setting';

function AdminRoutes() {
    return (
        <AdminLayout>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/students' element={<StudentManagement/>} />
                <Route path='/subjects' element={<SubjectManagement/>} />
                <Route path='/examBank' element={<ExamBank/>} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/exams" element={<ExamManagement />} />
                <Route path="/questions" element={<QuestionBank />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </AdminLayout>
    );
}

export default AdminRoutes;