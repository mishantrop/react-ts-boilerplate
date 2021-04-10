import { UApiErrorCode } from './UApiError'
import { UApiNotification } from './UApiNotification'

export interface UApiAuthenticateResponse {
    ouid: string;
    authenticator: {
        lifetime: number;
        type: string;
    }[];
    notification: UApiNotification;
}

export interface UApiResponseAuthenticateError {
    captcha: string;
    error: {
        code: UApiErrorCode;
        parameter: string;
    };
    notification: UApiNotification;
    ouid: string;
}
