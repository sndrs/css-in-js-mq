import { css } from 'emotion'
import React from 'react'
import ReactDOM from 'react-dom'
import { from } from './css-in-js-mq'

const style = css({
	color: 'red',

	[from.small()]: {
		color: 'blue',
	},

	[from.medium.until.large()]: {
		color: 'green',
	},
})

const App = () => <p className={style}>resize your browser</p>

ReactDOM.render(<App />, document.getElementById('root'))
