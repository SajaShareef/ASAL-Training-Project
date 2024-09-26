import { FC, useState } from 'react';
import CourseCard from '../../components/CourseCard';
import { useViewCourses } from '../../hooks/queries/useViewCourses/useViewCourses';
import { Row, Col } from 'antd';
import {
  CoursesContainer,
  StyledPagination,
  ViewCoursesContainer,
  ButtonContainer,
  DeleteButton,
  EditButton,
  EnrollButton,
} from './ViewCourses.style';
import StatusRendering from '../../components/statusRendering';
import { VIEW_COURSES_TEST_ID, ViewCoursesProps } from './ViewCourses.const';
import { UserRole } from '../../enum/userRole';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { EnrollInCourseData } from '../../services/api/courseApi';
import { useEnrollInCourse } from '../../hooks/mutations/userEnrollInCourse/useEnrollInCourse';

const ViewCourses: FC<ViewCoursesProps> = ({ className }) => {
  const { mutate: EnrollInCourse } = useEnrollInCourse();
  const { data: courses, isError, errorMessage, isFetching } = useViewCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCourses = courses?.slice(startIndex, endIndex);
  const role = localStorage.getItem('role');

  const handlePaginationChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const enroll = (courseId: EnrollInCourseData) => {
    EnrollInCourse(courseId);
  };

  return (
    <ViewCoursesContainer
      className={className}
      data-testid={VIEW_COURSES_TEST_ID}
    >
      <StatusRendering
        isError={isError}
        isPending={isFetching}
        errorMessage={errorMessage}
      >
        <CoursesContainer>
          <Row gutter={[4, 4]}>
            {paginatedCourses?.map((course) => (
              <Col key={course.id} md={8}>
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  className="card-img"
                >
                  {role && role === UserRole.Teacher ? (
                    <ButtonContainer>
                      <EditButton block icon={<EditOutlined />}>
                        Edit
                      </EditButton>
                      <DeleteButton block icon={<DeleteOutlined />}>
                        Delete
                      </DeleteButton>
                    </ButtonContainer>
                  ) : (
                    <ButtonContainer>
                      <EnrollButton block onClick={() => enroll({courseId: course.id})}>
                        Enroll
                      </EnrollButton>
                    </ButtonContainer>
                  )}
                </CourseCard>
              </Col>
            ))}
          </Row>
          <StyledPagination
            current={currentPage}
            pageSize={pageSize}
            total={courses?.length || 0}
            onChange={handlePaginationChange}
          />
        </CoursesContainer>
      </StatusRendering>
    </ViewCoursesContainer>
  );
};

export default ViewCourses;
