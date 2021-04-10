import { ErrorCode } from '@app/common/enums'

export interface ApiErrorGuestRegistrationPhone {
    captcha: boolean;
    captchaMessage?: string;
    code?: ErrorCode;
    data?: {
        field: 'popupError';
        message: string;
    }[];
    emailAttemptsEnded?: boolean;
    SMSAttemptsEnded?: boolean;
}

export interface ApiErrorGuestRegistrationConfirmPassword {
    captcha?: boolean;
    captchaMessage?: string;
    data?: {
        field?: 'confirmPassword' | 'confirmUserPassword' | 'popupError';
        message?: string | 'userAlreadyRegistered';
    }[];
    emailAttemptsEnded?: boolean;
    SMSAttemptsEnded?: boolean;
}

export interface ApiErrorGuestRegistrationAccount {
    captcha?: boolean;
    captchaMessage?: string;
    data?: {
        field?: 'confirmUserPassword' | 'email' | 'login' | 'password' | 'popupError';
        message?: string;
    }[];
    emailAttemptsEnded?: boolean;
    SMSAttemptsEnded?: boolean;
}

export interface ApiResponseGuestRegistrationConfirmPassword {
    error?: ApiErrorGuestRegistrationConfirmPassword;
    success?: boolean;
    token?: string;
}

export interface ApiResponseGuestRegistrationPhone {
    body?: {
        captcha: boolean;
        timer: number;
    };
    error?: ApiErrorGuestRegistrationPhone;
    success?: boolean;
    token?: string;
}

export interface ApiResponseGuestRegistrationAccount {
    error?: ApiErrorGuestRegistrationAccount;
    redirect?: string;
    success?: boolean;
    token?: string;
}
