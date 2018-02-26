import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank,Button } from 'antd-mobile';
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import imoocForm from '../../component/imooc-form/imooc-form'
// function hello(){
// 	console.log('hi imooc i like react')
// }


// function WrapperHello(fn){
// 	return function ()
// 	{
// 	console.log('before say hello')
// 	fn()
// 	console.log('after say hello')
// 	}
// }
// hello = WrapperHello(hello)
// hello()
@connect(
	state=>state.user,
	{login}
	)

@imoocForm
class Login extends React.Component{

	constructor(props){
		super(props)
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}


	register(){
		console.log(this.props)
		this.props.history.push('register')
	}

	handleLogin(){
		this.props.login(this.props.state)
	}

	render(){
		return (
			<div>
			{(this.props.redirectTo&&this.props.redirectTo!='/login')? <Redirect to={this.props.redirectTo}/> : null}
				<Logo></Logo>
				<h2>I'm Logoin page</h2>
				<WingBlank>
					<List>
					{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
						<InputItem
						onChange={v=>this.props.handleChange('user',v)}
						>User</InputItem>
						<WhiteSpace />
						<InputItem
						onChange={v=>this.props.handleChange('pwd',v)}
						type = 'password'
						>Password</InputItem>
					</List>
					<Button onClick={this.handleLogin} type='primary'>Login</Button>
					<WhiteSpace/>
					<Button  onClick={this.register} type='primary'>Register</Button>
				</WingBlank>
			</div>
			)
	}
}

export default Login