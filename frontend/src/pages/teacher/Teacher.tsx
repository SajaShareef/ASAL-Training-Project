import { Link, Outlet} from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { MainContent, TeacherContainer } from './Teacher.style';
import { FormOutlined, ReadOutlined } from '@ant-design/icons';
import { useAuthCheck } from '../../hooks/auth/useAuthCheck/useAuthCheck';
import LoadingScreen from '../../components/loadingScreen';
import { UserRole } from '../../enum/userRole';

function Teacher() {
  const { isAuthenticated, isAuthorized} = useAuthCheck({ allowedRoles: [UserRole.Teacher] });

  if (!isAuthenticated || !isAuthorized) {
    return <LoadingScreen/>;
  }

  const items = [
    {
      key: 'Courses',
      label: <Link to="/teacher">Courses</Link>,
      icon: <ReadOutlined />,
    },
    {
      key: 'create-course',
      label: <Link to="create-course">Create Course</Link>,
      icon: <FormOutlined />,
    },
  ];
  return (
    <TeacherContainer>
      <Sidebar items={items} />
      <MainContent>
        <Outlet/>
      </MainContent>
    </TeacherContainer>
  );
}

export default Teacher;