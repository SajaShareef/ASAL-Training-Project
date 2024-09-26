import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { MainContent, StudentContainer } from './Student.style';
import { ReadOutlined } from '@ant-design/icons';
import { STUDENT_PAGE_TEST_ID } from './Student.const';
import { UserRole } from '../../enum/userRole';
import { useAuthCheck } from '../../hooks/auth/useAuthCheck/useAuthCheck';
import LoadingScreen from '../../components/loadingScreen';

const Student = () => {
  const { isAuthenticated, isAuthorized} = useAuthCheck({ allowedRoles: [UserRole.Student] });

  if (!isAuthenticated || !isAuthorized) {
      return <LoadingScreen/>;
  }

  const items = [
    {
      key: 'Courses',
      label: <Link to="/student">Courses</Link>,
      icon: <ReadOutlined />,
    },
  ];
  return (
    <StudentContainer data-testid={STUDENT_PAGE_TEST_ID}>
      <Sidebar items={items} />
      <MainContent>
        <Outlet context={{role:UserRole.Student}}/>
      </MainContent>
    </StudentContainer>
  );
};

export default Student;