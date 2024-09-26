import axiosInstance from './AxiosInstance';

export interface SigninFormData {
  email: string;
  password: string;
}

export const signinControllersUrls = {
  signin: () => 'Users/login',
};

export const signin = async (userData: SigninFormData) => {
  const { data } = await axiosInstance.post(
    signinControllersUrls.signin(),
    userData
  );
  sessionStorage.setItem('token',data.token);
  return data;
};