import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
	} from 'react-router-dom'
import BossInfo from './container/bossinfo/bossinfo' 
import Geniusinfo from './container/geniusinfo/geniusinfo'
import './index.css'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import reducer from './reducer'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import './config'
import 'antd-mobile/dist/antd-mobile.css'


const store = createStore(reducer,compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	))

	ReactDom.render(
		(<Provider store={store}>
		<BrowserRouter>
			<div>
			<AuthRoute></AuthRoute>
			<Switch>
				<Route path='/bossinfo' component={BossInfo}></Route>
				<Route path='/geniusinfo' component={Geniusinfo}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/register' component={Register}></Route>
				<Route path='/chat/:user' component={Chat}></Route>
				<Route component ={Dashboard} ></Route>
			</Switch>
			</div>

		</BrowserRouter>
		</Provider>),
		document.getElementById('root')
		)

