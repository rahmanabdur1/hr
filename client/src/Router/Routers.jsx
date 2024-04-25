import {
  createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import LeaveApplication from "../components/LeaveManagement/LeaveApplication/LeaveApplication";
import LeaveType from "../components/LeaveManagement/LeaveType/LeaveType";
import EmployeeManagement from "../components/EmployeeManagement/EmployeeManagement";
import EmployeeLeaveRegister from "../components/LeaveManagement/EmployeeLeaveRegister/EmployeeLeaveRegister";
import Login from "../components/Login/Login";
import AttendanceReport from "../components/AttendanceManagement/AttendanceReport/AttendanceReport";
import AttendanceDetails from "../components/AttendanceManagement/AttendanceDetails/AttendanceDetails";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/leave-application',
        element: <LeaveApplication />

      },
      {
        path: '/leave-type',
        element: <LeaveType />
      },
      {
        path: '/employee-info',
        element: <EmployeeManagement />
      },
      {
        path:'/leave-register',
        element:<EmployeeLeaveRegister/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/attendance-report',
        element:<AttendanceReport/>
      },
      {
        path:'/attendance-details',
        element:<AttendanceDetails/>
      }
    ]
  }
])