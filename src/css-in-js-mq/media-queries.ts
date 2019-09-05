const asEms = (pixels: number) => `${pixels / 16}em`

export const fromQuery = (value: number) =>
	`@media (min-width: ${asEms(value)})`

export const untilQuery = (value: number) =>
	`@media (max-width: ${asEms(value - 1)})`

export const fromUntilQuery = (from: number, until: number) =>
	`@media (min-width: ${asEms(from)}) and (max-width: ${asEms(until - 1)})`
