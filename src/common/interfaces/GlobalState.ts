import { State as StateEtc } from '@app/__data__/reducers/common/Etc'
import { State as StateGuestRegistration } from '@app/__data__/reducers/guestRegistration'
import { State as StateGuestRestore } from '@app/__data__/reducers/guestRestore'
import { State as StateLogin } from '@app/__data__/reducers/login'
import { State as StateNmt } from '@app/__data__/reducers/nmt'
import { State as StatePrelogin } from '@app/__data__/reducers/prelogin'
import { State as StatePush } from '@app/__data__/reducers/push'
import { State as StateQr } from '@app/__data__/reducers/qr'
import { State as StateRecover } from '@app/__data__/reducers/recover'
import { State as StateRegistration } from '@app/__data__/reducers/registration'
import { State as StateRestore } from '@app/__data__/reducers/restore'
import { State as StateSberId } from '@app/__data__/reducers/sberid'
import { State as StateScreenResolution } from '@app/__data__/reducers/common/ScreenResolution'
import { State as StateSlider } from '@app/__data__/reducers/common/Slider'
import { State as StateSliderOld } from '@app/__data__/reducers/common/SliderOld'
import { State as StateTips } from '@app/__data__/reducers/common/Tips'

import { Config } from './Config'

export interface GlobalState {
    common: {
        Etc: StateEtc;
        ScreenResolution: StateScreenResolution;
        Slider: StateSlider;
        SliderOld: StateSliderOld;
        Tips: StateTips;
    };
    config: Config;
    guestRegistration: StateGuestRegistration;
    guestRestore: StateGuestRestore;
    login: StateLogin,
    nmt: StateNmt;
    prelogin: StatePrelogin;
    push: StatePush;
    qr: StateQr;
    recover: StateRecover;
    registration: StateRegistration;
    restore: StateRestore;
    sberid: StateSberId;
}
