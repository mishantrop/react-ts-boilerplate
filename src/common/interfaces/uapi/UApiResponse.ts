import { UApiError } from './UApiError'
import { UApiNotification } from './UApiNotification'

export interface UApiResponse {
    authcode?: string;
    authenticator?: any;
    captcha?: string;
    error?: UApiError;
    host?: string;
    notification?: UApiNotification;
    ouid?: string;
    redirect_uri: string;
    state: string;
}
