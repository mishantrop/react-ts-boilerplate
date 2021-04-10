import { QrFormat } from '@app/common/enums'

import { UApiChannelData } from './UApiChannelData'

export interface UApiRequestData {
    identifier?: { type: 'sb_user_cookie' }
        | { type: 'phone', data: { value: string } }
        | {
            type: 'qr',
            data: {
                qr_size: number,
                qr_format: QrFormat,
            },
        }[];
    authenticator?: {
        type: 'pat_push' | 'pat_qr';
    };
    channel?: {
        type: 'web_sbol';
        data: UApiChannelData;
    };
    flow?: 'authcode';
}
