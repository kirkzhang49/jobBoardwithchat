import React from 'react'
import {connect} from 'react-redux'
import {Result,List,WhiteSpace,Button,Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.user,
	{logoutSubmit}
	)


class User extends React.Component
{
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout(){
	const alert =Modal.alert

	alert('Logout', 'Are you sure???', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => {
      	browserCookie.erase('userid')
      	// window.location.href = window.location.href
      	this.props.logoutSubmit()
      } },
    ])
		// console.log('logout')
		// 
		// 
	}
	render(){
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
			// console.log(this.props)
		return props.user?(

			<div>

			<Result
				img={<img src={require(`../images/${props.avatar}.png`)} style={{width:50}} alt=""/>}
				title = {props.user}
				message={props.type=='boss'?props.company:null}
			/>

			<List renderHeader={()=>'Resume'}>
				<Item
					multipleLine
				>
				{props.title}
				{this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
				{props.money?<Brief >Salary: {props.money}</Brief>:null}
				</Item>
			</List>
			<WhiteSpace></WhiteSpace>
			<List>
				<Item style={{zindex:10}} onClick ={this.logout}>Log Out</Item>
			</List>
			</div>
			):<Redirect to={props.redirectTo}/>
	}
}

export default User