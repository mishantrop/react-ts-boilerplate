import { isDiffers } from '@app/common/validators/isDiffers'

describe('isDiffers', () => {
    it('Equal', () => {
        expect(isDiffers('', '')).toBe(false)
        expect(isDiffers('Aa', 'Aa')).toBe(false)
        expect(isDiffers('1', '1')).toBe(false)
        expect(isDiffers('∑', '∑')).toBe(false)
        expect(isDiffers('∑', '∑')).toBe(false)
    })
    it('Different', () => {
        // @ts-ignore
        expect(isDiffers('', 0)).toBe(true)
        // @ts-ignore
        expect(isDiffers('', null)).toBe(true)
        // @ts-ignore
        expect(isDiffers('', [])).toBe(true)
        // @ts-ignore
        expect(isDiffers('')).toBe(true)
        expect(isDiffers(false, null)).toBe(true)
        expect(isDiffers(0, null)).toBe(true)
    })
})
