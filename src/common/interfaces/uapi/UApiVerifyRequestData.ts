import { UApiChannelData } from './UApiChannelData'

interface UApiVerifyRequestData {
    identifier: any;
    authenticator: {
        type: 'pat_check';
        data: any;
    };
    channel: any;
}

export interface UApiPushVerifyRequestData extends UApiVerifyRequestData {
    identifier: {
        type: 'ouid',
        data: {
            value: string;
        };
    };

    authenticator: {
        type: 'pat_check';
        data: any;
    };

    channel: {
        type: 'web_sbol';
        data: UApiChannelData;
    };
}
