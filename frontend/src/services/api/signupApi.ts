import { User } from '../../interfaces/user/IUser';
import axiosInstance from './AxiosInstance';

export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export const signUpControllersUrls = {
  signup: () => 'Users/register',
};

export const signup = async(userData:SignupFormData): Promise<User> => {
    const { data } = await axiosInstance.post<User>(signUpControllersUrls.signup(), userData);
    return data;
};