import axiosInstance from './AxiosInstance';

export interface resetPasswordFormData {
    oldPassword: string;
    newPassword: string;
}

export const resetPasswordControllersUrls = {
    resetPassword : ()=> 'Users/resetPassword'
};

export const resetPassword = async(userData:resetPasswordFormData)=>{
    const {data} = await axiosInstance.post(resetPasswordControllersUrls.resetPassword(),userData);
    return data;
};