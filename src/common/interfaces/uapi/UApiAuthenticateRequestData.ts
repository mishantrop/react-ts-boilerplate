import { UApiRequestData } from './UApiRequestData'
import { UApiChannelData } from './UApiChannelData'

export interface UApiPushAuthenticateRequestData extends UApiRequestData {
    identifier: { type: 'sb_user_cookie' }
        | { type: 'phone'; data: { value: string } };
    authenticator: {
        type: 'pat_push';
    };
    flow?: 'authcode';
    channel?: {
        type: 'web_sbol';
        data: UApiChannelData;
    };
}
