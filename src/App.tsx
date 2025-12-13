import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import useTheme from "./hooks/use-Theme";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import ClassDashboard from "./pages/Class/ClassDashboard";
import ClassTimetable from "./pages/Class/ClassTimeTable";
import ClassAttendance from "./pages/Class/ClassAttendance";
import ClassDailySchedule from "./pages/Class/ClassDailySchedule";
import ClassTeachers from "./pages/Class/ClassTeachers";
import ClassSubjects from "./pages/Class/ClassSubjects";
import ClassStudents from "./pages/Class/ClassStudents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:year/class/:className" element={<ClassDashboard />} />
          <Route
            path="/class/:year/:className/timetable"
            element={<ClassTimetable />}
          />
          <Route
            path="/class/:year/:className/students"
            element={<ClassStudents />}
          />
          <Route
            path="/class/:year/:className/attendance"
            element={<ClassAttendance />}
          />
          <Route
            path="/class/:year/:className/schedule"
            element={<ClassDailySchedule />}
          />
          <Route
            path="/class/:year/:className/teachers"
            element={<ClassTeachers />}
          />
          <Route
            path="/class/:year/:className/subjects"
            element={<ClassSubjects />}
          />

          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </>
  )
);

const App = () => {
  const [theme] = useTheme();

  return (
    <>
      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
