import React from 'react'
import {NavBar,Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'
class AvatarSelector extends React.Component{
	static PropTypes = {
		selectAvatar:PropTypes.func
	}

	constructor(props){
		super(props)
		this.state = {}
	}
	render(){
		const avatarList = 'soldier_avatar,designer_avatar,assassin_avatar,sexy_avatar,boy_9,doubt,money,super_man,smile,big_smile,xp_ppl10,grimace'.split(',')
													.map(v=>({
														icon:require(`../images/${v}.png`),
														text:v
													}))

		const gridHeader = this.state.text ? (<div>
											<span>Choose picture</span>
											<img stype={{width:20}} src={this.state.icon} alt="" />
											</div>) :'please pick the picture'
		return (
			<div>
			<List renderHeader={()=>gridHeader}>
				<Grid 
					onClick= {
						elm=>{
							this.setState(elm)
							this.props.selectAvatar(elm.text)
						}
					}
					data={avatarList}  />
			</List>
			</div>
			)
	}
}

export default AvatarSelector

