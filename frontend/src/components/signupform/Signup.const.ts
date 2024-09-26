export const SIGN_UP_FORM_TEST_ID = 'sign-up';

export interface SignupFormProps {
    className?: string;
}

export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?~`]).{8,}$/;
