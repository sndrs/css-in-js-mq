import {
	breakpoints,
	from,
	large,
	medium,
	small,
	until,
	xLarge,
	xSmall,
	xxLarge,
	xxSmall,
} from './defaults'

export let mq: breakpoint = {}

const _bps = Object.entries(breakpoints)

export const configure = (bps: breakpoint) => (mq = bps)

export { xxSmall, xSmall, small, medium, large, xLarge, xxLarge, from, until }
