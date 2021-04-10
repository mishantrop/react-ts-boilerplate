import { ApiErrorType, ErrorCode } from '@app/common/enums'

export interface ApiWarning {
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
    field?: string;
    isPopup?: boolean;
    redirect?: string;
    timestamp?: number;
    title?: string;
    type?: ApiErrorType;
}
