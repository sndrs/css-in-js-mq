import { fromQuery, fromUntilQuery, untilQuery } from './media-queries'

test('should create valid and accurate media queries', () => {
	expect(fromQuery(16)).toBe('@media (min-width: 1em)')
	expect(untilQuery(100)).toBe('@media (max-width: 6.1875em)')
	expect(fromUntilQuery(16, 100)).toBe(
		'@media (min-width: 1em) and (max-width: 6.1875em)',
	)
})
