import { breakpoints } from '.'

type Breakpoints = keyof typeof breakpoints

type breakpoint = {
	[key in Breakpoints]: number
}

type Until = {
	[key in Breakpoints]: { (): string }
}

type From = {
	[key in Breakpoints]: {
		(): string
		until: Until
	}
}
