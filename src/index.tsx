import { from } from 'css-in-js-mq'
import { css } from 'emotion'
import React from 'react'
import ReactDOM from 'react-dom'

const style = css({
	color: 'red',

	[from.small()]: {
		color: 'blue',
	},
})

const App = () => <p className={style}>hello</p>

ReactDOM.render(<App />, document.getElementById('root'))
