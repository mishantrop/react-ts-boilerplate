import { ApiError } from '@app/common/interfaces/ApiError'

export interface ApiResponseAuthorizeAgreementData {
    agreementClaimsTitle?: string;
    agreementText?: string;
    oldAgreementClaims?: string[];
    oldAgreementText?: string;
    personalAgreementRequired?: boolean;
    scopes?: {
        name?: string;
        description?: string;
        isHide?: boolean;
        claims?: {
            name?: string;
            description?: string;
        }[];
    }[];
}

export interface ApiResponseAuthorize {
    body?: ApiResponseAuthorizeAgreementData;
    error?: ApiError;
    redirect: string;
    success?: boolean;
    token?: string;
}
