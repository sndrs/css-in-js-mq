import { from } from './index'

test('should export default shortcut media queries', () => {
	expect(from.xxSmall).toBe('@media (min-width: 20em)')
})

// test('should set bespoke breakpoints', () => {
// 	expect(mq).toStrictEqual({})
// 	configure({ 'my-breakpoint': 666 })
// 	expect(mq).toStrictEqual({ 'my-breakpoint': 666 })
// })
