import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chartuser.redux'
import UserCard from '../usercard/usercard'

@connect(
	state=>state.chartuser,
	{getUserList}
	)

class Genius extends React.Component{

	componentDidMount(){
		this.props.getUserList('boss')
	}
	render(){

		return <UserCard userlist={this.props.userlist}></UserCard>
	}

}

export default Genius