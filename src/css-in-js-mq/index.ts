import { fromQuery, fromUntilQuery, untilQuery } from './media-queries'

type Breakpoints = keyof typeof breakpoints

export type CallProps = {
	and?: [string]
	media?: [string]
}

type Until = { [key in Breakpoints]: { (arg0?: CallProps): string } }

type From = {
	[key in Breakpoints]: {
		(arg0?: CallProps): string
		until: Until
	}
}

const breakpoints = {
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
		[untilName]: (opts: CallProps) => untilQuery(untilWidth, opts),
		...untils,
	}),
	{},
) as Until

export const from = Object.entries(breakpoints).reduce(
	(froms, [fromName, fromWidth], i) => {
		const bp = (opts: CallProps) => fromQuery(fromWidth)

		bp.until = Object.entries(breakpoints)
			.splice(i + 1)
			.reduce(
				(untils, [untilName, untilWidth]) => ({
					[untilName]: (opts: CallProps) =>
						fromUntilQuery(fromWidth, untilWidth),
					...untils,
				}),
				{},
			)

		return { [fromName]: bp, ...froms }
	},
	{},
) as From
