import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Teacher from './pages/teacher';
import ViewCourses from './pages/viewcourses';
import CreateCourse from './components/createcourse';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Signup from './pages/signup';
import Student from './pages/student/Student';
import Signin from './pages/signin';
import Profile from './pages/profile';
import SendEmail from './pages/sendemail/SendEmail';
import NotAuth from './pages/unauthorized/UnAuth';
import ConfirmPasswordReset from './pages/confirmpasswordreset';
import ResetPassword from './pages/resetpassword';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher" element={<Teacher />}>
              <Route index element={<ViewCourses />} />
              <Route path="create-course" element={<CreateCourse />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/student" element={<Student />}>
              <Route index element={<ViewCourses />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/confirm-password-reset" element={<ConfirmPasswordReset />} />
            <Route path="/not-authorized" element={<NotAuth />} />
            <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);