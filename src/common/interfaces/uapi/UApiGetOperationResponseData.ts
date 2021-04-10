import { PushStage, QrStage } from '@app/common/enums'

import { UApiNotification } from './UApiNotification'
import { UApiError } from './UApiError'

export interface UApiGetOperationResponsePush {
    operation?: {
        ouid?: string;
        status?: PushStage;
    };
    notification?: UApiNotification;
    error?: UApiError;
}

export interface UApiGetOperationResponseQr {
    operation?: {
        ouid?: string;
        status?: QrStage;
    };
    notification?: UApiNotification;
    error?: UApiError;
}
