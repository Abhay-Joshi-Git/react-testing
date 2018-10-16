import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Store from 'store'

const MainApp = () => (
	<Store>
		<App />
	</Store>
)

ReactDOM.render(<MainApp />, document.querySelector('#root'))