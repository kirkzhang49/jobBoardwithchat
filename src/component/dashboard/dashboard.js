import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import {Switch,Route} from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import Msg from '../msg/msg'
import {getMegList,recvMsg} from '../../redux/chat.redux'



@connect(
	state=>state,
	{getMegList,recvMsg}
)

class Dashboard extends React.Component{

	componentDidMount(){
		if(!this.props.chat.chatmsg.length){
		this.props.getMegList()
		 this.props.recvMsg()
		}
	
	}
	render(){

	const {pathname} = this.props.location
	const user = this.props.user
	const navList = [
	 {
	 	path:'/boss',
	 	text:'genius',
	 	icon:'boss',
	 	title:'genius List',
	 	component:Boss,
	 	hide:user.type == 'genius'
	 },
	 {
	 	path:'/genius',
	 	text:'boss',
	 	icon:'job',
	 	title:'Boss List',
	 	component:Genius,
	 	hide:user.type == 'boss'
	 },
	 {
	 	path:'/msg',
	 	text:'message',
	 	icon:'msg',
	 	title:'msg List',
	 	component:Msg
	 },
	 {
	 	path:'/me',
	 	text:'I',
	 	icon:'user',
	 	title:'User Center',
	 	component:User
	 }
	]

		return (
			<div>
		 <NavBar className='fixed-header' mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
			<div style={{marginTop:45}}>
				<Switch>
					{navList.map(v=>(
						<Route key={v.path} path={v.path} component={v.component}></Route>
						))}
				</Switch>
			</div>
			<NavLinkBar data={navList}></NavLinkBar>

			</div>
			)
	}
}

export default Dashboard