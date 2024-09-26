import axiosInstance from './AxiosInstance';

export interface SendEmailFormData {
    email: string;
}

export const sendEmailControllersUrls = {
    sendEmail : ()=> 'Users/forgotPassword'
};

export const sendEmail = async(userData:SendEmailFormData)=>{
    const {data} = await axiosInstance.post(sendEmailControllersUrls.sendEmail(),userData);
    return data;
};