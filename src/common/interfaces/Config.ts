import { AuthType, SignMode } from '@app/common/enums'

export interface PageUrlData {
    url: string;
    isPl: boolean;
}

export interface PageUrls {
    [key: string]: PageUrlData;
    businessEnvironmentLogin: PageUrlData;
    businessEnvironmentVerify: PageUrlData;
    error: PageUrlData;
    login: PageUrlData;
    logoff: PageUrlData;
    oidcMainPage: PageUrlData;
    payOrderPaymentLogin: PageUrlData;
    recover: PageUrlData;
    recoverPrelogin: PageUrlData;
    registration: PageUrlData;
    restore: PageUrlData;
    secondFactor: PageUrlData;
    service: PageUrlData;
    unallowedbrowsers: PageUrlData;
    view: PageUrlData;
}

export interface ConfigFunctionality {
    cookieNoticeEnabled: boolean;
    deeplinkRegisterRestore: boolean;
    enableVerification: boolean;
    loginCaptchaPasswordSavedEnabled?: boolean;
    passwordAlphabetRuleEnabled: boolean;
    passwordAtLeastOneInUpperAndLowerCaseRuleEnabled: boolean;
    passwordCapsLockWarningEnabled: boolean;
    passwordCaseSensitiveRuleEnabled: boolean;
    passwordKeysNearbyRuleEnabled: boolean;
    passwordSpecialCharacterRuleEnabled: boolean;
    phoneAuthorizationAvailable: boolean;
    phoneRegistrationAvailable?: boolean;
    saveLoginRemember: boolean;
    sbolSaveLoginDefault: boolean;
    showHelp: boolean;
    showLinks: boolean;
    showLoginAndPasswordForm: boolean;
    showPopupAfterReg: boolean;
    showRecoverBirthdate: boolean;
    showRecoverPassword: boolean;
    showRegistration: boolean;
    showRestoreLogin: boolean;
    showSecurityBlock: boolean;
    webGuestRecoverEnabled?: boolean;
    webGuestRestoreEnabled?: boolean;
    webGuestRegistrationEnabled?: boolean;
}

export interface ConfigQR {
    enabledQr: boolean;
    requestTime: number;
    periodTime: number[];
    periodValue: number[];
    format: 'bitmatrix' | 'png' | 'content';
    size: number;
    errorHeader?: string;
    errorText?: string;
    lifetime: number;
}

export interface Config {
    encryptionKeyValue?: string;
    analyticsYandexId?: string;
    bannerUrl?: string;
    baseApiUrl?: string;
    baseUApiUrl?: string;
    baseUrl?: string;
    constants?: {
        loginMinLength?: number;
        deeplinkST?: string[];
    };
    authTypeByCookie?: AuthType;
    bizoneEnabled?: boolean;
    panEncryptionEnabled?: boolean;
    cookieNotice?: {
        lifetime?: number;
    };
    deepLinkCreditEnabled?: boolean;
    encryptionKeyId?: string;
    eribMainUrl?: string;
    eribNode?: string;
    functionality?: ConfigFunctionality;
    isCookieDeleteEnabeld?: boolean;
    isOIDC?: boolean;
    isPersonalPayOrderLoginPage?: boolean;
    isShowChooseAppPage?: boolean;
    isStoredLoginEnabled?: boolean;
    isWebSbolNmtOtpEnabled?: boolean;
    isWebSbolPushEnabled?: boolean;
    isWebSbolQrEnabled?: boolean;
    language?: string;
    pingUrl?: string;
    externalLinks?: {
        x?: any;
    };
    pageUrls?: PageUrls;
    resUrl?: string;
    sendPropertiesHtmlFormData?: boolean;
    userId?: string;
    userIO?: string;
    useStoredLogin?: boolean;
    nmtConfig?: {
        enabledNmt?: boolean;
        errorHeader?: string;
        errorText?: string;
    },
    pushConfig?: {
        enabledPush?: boolean;
        errorHeader?: string;
        errorText?: string;
    };
    unallowedbrowsersPage?: {
        clientEnable: boolean;
        frequencyShowPage: number;
        promoterEnable?: boolean;
    };
    qrConfig?: ConfigQR;

    signMode?: SignMode;
}
