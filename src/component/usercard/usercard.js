import React from 'react'
import PropTypes from 'prop-types'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component{
	static PropTypes = {
		userlist: PropTypes.array.isRequired
	}
	handleClick(v){
		this.props.history.push(`/chat/${v._id}`)
	}
	render(){
		const Header = Card.Header
		const Body = Card.Body
		return (
			<WingBlank>
				{this.props.userlist.map(v=>(
					v.avatar&&v.desc?(<Card 
						key={v._id}
						onClick={()=>this.handleClick(v)}
						>
						<WhiteSpace/>
						<Header
						  title = {v.user}
						  thumb={require(`../images/${v.avatar}.png`)}
						  extra={<span>{v.title}</span>}
						>
						</Header>
						<Body>
						{v.type =='boss'? <div>Company:{v.company}</div>:null}
						{v.desc.split('\n').map(d=>(
							<div key={d}>{d}</div>
							))}
						{v.type =='boss'? <div>Salary:{v.money}</div>:null}
						</Body>
					</Card>):null
					))}
			</WingBlank>
			)
	}
}



export default UserCard