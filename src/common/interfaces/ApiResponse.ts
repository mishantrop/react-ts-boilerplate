import { ResponseStatus } from '../enums'

import { ApiError } from './ApiError'

export enum AuthResponseState {
    ATTEMPTS_EXHAUSTED = 'ATTEMPTS_EXHAUSTED',
    NEED_CONFIRM = 'NEED_CONFIRM',
    WRONG_PASS = 'WRONG_PASS',
}

export interface LoginListItem {
    connectorGuid: number,
    login: string,
}

export interface FraudData {
    detection: boolean;
    fso: {
        detection: boolean;
        token: string;
        swfPath: string;
        sendUrl: string;
    };
}

export interface ShowPopup {
    cardNumber: string;
    formId: string;
    onCloseRedirect: string;
    saveCardNumber: string;
}

export interface ApiResponseStatus {
    code: ResponseStatus;
    errors?: ApiError[];
    warnings?: ApiError[];
}

export interface AuthFailParameters {
    remainingAttempts?: number;
    blockedUntil?: number;
    blockedFor?: number;
}

export interface ApiResponse {
    authFailParameters?: AuthFailParameters;
    birthdate?: string;
    blockingTimeout?: string;
    body: any;
    captcha?: boolean;
    cards?: any;
    consumerShortName?: string;
    defaultType?: any;
    error?: ApiError;
    fields?: {
        confirmPassword?: string;
        isUseAuthConfirm?: boolean;
        pageInputType?: 'INDEX' | 'PREFILLED_LOGIN';
        Referer?: string;
        storeLogin?: boolean | 'false';
    };
    fraud?: FraudData;
    login?: string;
    loginList?: LoginListItem[];
    needCaptcha?: boolean;
    paymentDocument?: string;
    phones?: {
        id: number;
        number: string;
    }[];
    redirect?: string;
    showPopup?: ShowPopup;
    smsRequestAttemptsExhausted?: 'true' | 'false';
    state?: AuthResponseState | 'NEED_CONFIRM' | '' | 'WRONG_PASS';
    status: ApiResponseStatus;
    success: boolean;
    successNextStage?: boolean;
    timeout?: string;
    timer?: number;
    token?: string;
}
