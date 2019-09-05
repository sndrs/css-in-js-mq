import { configure, mq, xxSmall } from './index'

test('should export default shortcut media queries', () => {
	expect(xxSmall).toBe('@media (min-width: 20em)')
})

test('should set bespoke breakpoints', () => {
	expect(mq).toStrictEqual({})
	configure({ 'my-breakpoint': 666 })
	expect(mq).toStrictEqual({ 'my-breakpoint': 666 })
})
