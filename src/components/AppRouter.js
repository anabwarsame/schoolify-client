import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AppProvider';
import { Login } from '../pages/Login';
import { ParentSignup } from '../pages/ParentSignup';
import { TeacherSignup } from '../pages/TeacherSignup';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Appointment } from '../pages/Appointment';
import { Dashboard } from '../pages/Dashboard';
import { AddChild } from '../pages/AddChild';
import { ViewChildren } from '../pages/ViewChildren';
import { ViewAppointments } from '../pages/ViewAppointments';
import { AbsenceRequest } from '../pages/AbsenceRequest';
import { StudentInfo } from '../pages/StudentInfo';

export const AppRouter = () => {
	const { isLoggedIn } = useAuth();

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/parent/sign-up' element={<ParentSignup />} />
			<Route path='/teacher/sign-up' element={<TeacherSignup />} />
			<Route path='/login' element={<Login />} />
			<Route path='/about' element={<About />} />

			{isLoggedIn ? (
				<>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/children/new' element={<AddChild />} />
					<Route path='/children/view' element={<ViewChildren />} />
					<Route path='/children/view/:studentId' element={<StudentInfo />} />
					<Route path='/appointment/new' element={<Appointment />} />
					<Route path='/appointment/view' element={<ViewAppointments />} />
					<Route path='/absenceRequest/new' element={<AbsenceRequest />} />
				</>
			) : (
				<Route path='*' element={<Navigate to='/' />} />
			)}
		</Routes>
	);
};
