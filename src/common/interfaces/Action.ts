import { ActionType } from '@app/common/enums'

export interface Action {
    type: ActionType;
    data?: any;
}
