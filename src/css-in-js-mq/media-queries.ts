import { CallProps } from '.'

const asEms = (pixels: number) => `${pixels / 16}em`

export const fromQuery = (from: number, { and, media }: CallProps = {}) =>
	`${mediaQuery(media)} (min-width: ${asEms(from)}) ${andQueries(and)}`

export const untilQuery = (until: number, { and, media }: CallProps = {}) =>
	`${mediaQuery(media)} (max-width: ${asEms(until - 1)}) ${andQueries(and)}`

export const fromUntilQuery = (
	from: number,
	until: number,
	{ and, media }: CallProps = {},
) =>
	`${mediaQuery(media)} (min-width: ${asEms(from)}) and (max-width: ${asEms(
		until - 1,
	)}) ${andQueries(and)}`

const andQueries = (ands: CallProps['and']) =>
	ands ? `and ${ands.join(' and ')} ` : ''

const mediaQuery = (media: CallProps['media']) =>
	`@media ${media ? media.join(',') : ''}`
