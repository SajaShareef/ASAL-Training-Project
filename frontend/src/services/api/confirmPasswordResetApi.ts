import axiosInstance from './AxiosInstance';

export interface ConfirmPasswordResetFormData {
    token: string | null;
    newPassword: string;
}

export const confirmPasswordResetControllersUrls = {
    confirmPasswordReset : ()=> 'Users/confirmResetPassword'
};

export const confirmPasswordReset = async(userData:ConfirmPasswordResetFormData)=>{
    const {data} = await axiosInstance.post(confirmPasswordResetControllersUrls.confirmPasswordReset(),userData);
    return data;
};