import { ApiErrorType, ErrorCode } from '@app/common/enums'

export interface ApiError {
    attempts?: number;
    blockedFor?: number;
    body?: {
        captcha: boolean;
        timer: number;
    };
    captcha?: boolean;
    captchaMessage?: string;
    code?: number | ErrorCode;
    data?: any[];
    description?: string;
    emailAttemptsEnded?: boolean;
    field?: string;
    isPopup?: boolean;
    redirect?: string;
    SMSAttemptsEnded?: boolean;
    timestamp?: number;
    title?: string;
    type?: ApiErrorType;
}
