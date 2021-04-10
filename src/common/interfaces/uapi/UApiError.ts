import { ApiErrorType } from '@app/common/enums'

export enum UApiErrorCode {
    attempts_limit_reached = 'attempts_limit_reached',
    authentication_method_unavailable = 'authentication_method_unavailable',
    authenticator_is_blocked = 'authenticator_is_blocked',
    captcha_required = 'captcha_required',
    guest_off = 'guest_off',
    invalid_captcha = 'invalid_captcha',
    invalid_credentials = 'invalid_credentials',
    invalid_request = 'invalid_request',
    no_mobile_connector = 'no_mobile_connector',
    no_operation_web_notification = 'no_operation_web_notification',
    operation_timeout = 'operation_timeout',
    phone_is_blocked = 'phone_is_blocked',
    user_authentication_required = 'user_authentication_required',
    user_channel_blocked = 'user_channel_blocked',
    user_is_blocked = 'user_is_blocked',
}

export interface UApiError {
    code?: UApiErrorCode;
    description?: string;
    field?: string;
    header?: string;
    type: ApiErrorType;
}
