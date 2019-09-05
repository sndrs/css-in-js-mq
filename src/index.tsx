import { css } from 'emotion'
import React from 'react'
import ReactDOM from 'react-dom'
import { from, until } from './css-in-js-mq'

const style = css({
	fontFamily: 'system-ui',

	['::after']: {
		display: 'block',
		marginTop: '1em',
		content: "'no mq applies'",
		fontFamily: 'menlo',
		color: 'gray',
		fontSize: 12,

		[until.xxSmall()]: {
			content: "'until.xxSmall()'",
		},

		[from.small()]: {
			content: "'from.small()'",
		},

		[from.medium.until.large()]: {
			content: "'from.medium.until.large()'",
		},
	},
})

const App = () => <p className={style}>resize your browser…</p>

ReactDOM.render(<App />, document.getElementById('root'))
