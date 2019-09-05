// this isn't in use the moment, but don't want to trash it just yet...

// import { fromQuery, fromUntilQuery, untilQuery } from './media-queries'
// import { breakpoint } from './types'

// export const breakpoints: breakpoint = {
// 	xxSmall: 320,
// 	xSmall: 375,
// 	small: 480,
// 	medium: 740,
// 	large: 980,
// 	xLarge: 1140,
// 	xxLarge: 1300,
// }

// export const xxSmall = fromQuery(breakpoints.xxSmall)
// export const xSmall = fromQuery(breakpoints.xSmall)
// export const small = fromQuery(breakpoints.small)
// export const medium = fromQuery(breakpoints.medium)
// export const large = fromQuery(breakpoints.large)
// export const xLarge = fromQuery(breakpoints.xLarge)
// export const xxLarge = fromQuery(breakpoints.xxLarge)

// export const until = {
// 	xxSmall: untilQuery(breakpoints.xxSmall),
// 	xSmall: untilQuery(breakpoints.xSmall),
// 	small: untilQuery(breakpoints.small),
// 	medium: untilQuery(breakpoints.medium),
// 	large: untilQuery(breakpoints.large),
// 	xLarge: untilQuery(breakpoints.xLarge),
// 	xxLarge: untilQuery(breakpoints.xxLarge),
// }

// export const from = {
// 	xxSmall: {
// 		until: {
// 			xSmall: fromUntilQuery(breakpoints.xxSmall, breakpoints.xSmall),
// 			small: fromUntilQuery(breakpoints.xxSmall, breakpoints.small),
// 			medium: fromUntilQuery(breakpoints.xxSmall, breakpoints.medium),
// 			large: fromUntilQuery(breakpoints.xxSmall, breakpoints.large),
// 			xLarge: fromUntilQuery(breakpoints.xxSmall, breakpoints.xLarge),
// 			xxLarge: fromUntilQuery(breakpoints.xxSmall, breakpoints.xxLarge),
// 		},
// 	},
// 	xSmall: {
// 		until: {
// 			small: fromUntilQuery(breakpoints.xSmall, breakpoints.small),
// 			medium: fromUntilQuery(breakpoints.xSmall, breakpoints.medium),
// 			large: fromUntilQuery(breakpoints.xSmall, breakpoints.large),
// 			xLarge: fromUntilQuery(breakpoints.xSmall, breakpoints.xLarge),
// 			xxLarge: fromUntilQuery(breakpoints.xSmall, breakpoints.xxLarge),
// 		},
// 	},
// 	small: {
// 		until: {
// 			medium: fromUntilQuery(breakpoints.small, breakpoints.medium),
// 			large: fromUntilQuery(breakpoints.small, breakpoints.large),
// 			xLarge: fromUntilQuery(breakpoints.small, breakpoints.xLarge),
// 			xxLarge: fromUntilQuery(breakpoints.small, breakpoints.xxLarge),
// 		},
// 	},
// 	medium: {
// 		until: {
// 			large: fromUntilQuery(breakpoints.medium, breakpoints.large),
// 			xLarge: fromUntilQuery(breakpoints.medium, breakpoints.xLarge),
// 			xxLarge: fromUntilQuery(breakpoints.medium, breakpoints.xxLarge),
// 		},
// 	},
// 	large: {
// 		until: {
// 			xLarge: fromUntilQuery(breakpoints.large, breakpoints.xLarge),
// 			xxLarge: fromUntilQuery(breakpoints.large, breakpoints.xxLarge),
// 		},
// 	},
// 	xLarge: {
// 		until: {
// 			xxLarge: fromUntilQuery(breakpoints.xLarge, breakpoints.xxLarge),
// 		},
// 	},
// }
