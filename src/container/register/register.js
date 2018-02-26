import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank,Button,Radio } from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import imoocForm from '../../component/imooc-form/imooc-form'

@connect(
	state=>state.user,
	{register}
	)

@imoocForm
class Register extends React.Component{
	constructor(props){
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
	}
	componentDidMount(){
		this.props.handleChange('type','genius')
	}
	handleRegister(){
		this.props.register(this.props.state)
	}
	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo? <Redirect to={this.props.redirectTo}/> : null}
				<Logo></Logo>
				<h2>I'm Register page</h2>
					<List>
					{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
						<InputItem 
							onChange={v=>this.props.handleChange('user',v)}
						>User</InputItem>
						<WhiteSpace />
						<InputItem type='password'
						onChange={v=>this.props.handleChange('pwd',v)}
						>Password</InputItem>
						<WhiteSpace />
						<InputItem type='password'
						onChange={v=>this.props.handleChange('repeatpwd',v)}
						>Verify </InputItem>
						<WhiteSpace />
						<RadioItem checked={this.props.state.type == 'genius'}
						onChange={()=>this.props.handleChange('type','genius')}
						>
							Job Seeker
						</RadioItem>
						<WhiteSpace />
						<RadioItem checked={this.props.state.type =='boss'}
						onChange={()=>this.props.handleChange('type','boss')}
						>
							Boss
						</RadioItem>
						<WhiteSpace/>
						<Button type='primary' onClick={this.handleRegister}> Register </Button>
					</List>
			</div>
			)
	}
}

export default Register