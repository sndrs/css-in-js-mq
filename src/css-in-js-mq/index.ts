import { fromQuery, fromUntilQuery, untilQuery } from './media-queries'
import { From, Until } from './types'

export const breakpoints = {
	xxSmall: 320,
	xSmall: 375,
	small: 480,
	medium: 740,
	large: 980,
	xLarge: 1140,
	xxLarge: 1300,
}

export const until = Object.entries(breakpoints).reduce(
	(untils, [untilName, untilWidth], i) => ({
		[untilName]: () => untilQuery(untilWidth),
		...untils,
	}),
	{},
) as Until

export const from = Object.entries(breakpoints).reduce(
	(froms, [fromName, fromWidth], i) => {
		const bp = () => fromQuery(fromWidth)

		bp.until = Object.entries(breakpoints)
			.splice(i + 1)
			.reduce(
				(untils, [untilName, untilWidth]) => ({
					[untilName]: () => fromUntilQuery(fromWidth, untilWidth),
					...untils,
				}),
				{},
			)

		return { [fromName]: bp, ...froms }
	},
	{},
) as From
