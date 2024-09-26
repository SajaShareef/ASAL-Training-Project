import { Avatar, Typography } from 'antd';
import {
  ProfileCard,
  ProfileContainer,
  ProfileInfo,
  ResetButton,
} from './Profile.style';
import { UserOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { PROFILE_TEST_ID, ProfileProps } from './Profile.const';

const Profile: FC<ProfileProps> = ({ className }) => {
  return (
    <ProfileContainer className={className} data-testid={PROFILE_TEST_ID}>
      <ProfileCard>
        <Avatar size={64} icon={<UserOutlined />} />
        <ProfileInfo>
          <Typography>Tasneem Ghazal</Typography>
          <Typography>tasneemgazal5@gmail.com</Typography>
        </ProfileInfo>
        <ResetButton to="/reset-password">Reset Password</ResetButton>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
