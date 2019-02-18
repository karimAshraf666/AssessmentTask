import React from 'react';
import axios from 'axios';	
import Card from './Card';
export default class CardList extends React.Component{
	state = {
		cards: []
	}

	componentDidMount(){
		axios.get("http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&only=data")
			.then((response)=>{
				this.setState({cards: response.data.data});
				console.log("something",this.state.cards)
			})
	}
	render(){
		return(
			this.state.cards.map(page=> <Card	
				id = {page.id}
				source = {page.cover_photo_urls}
				title = {page.title}
				description = "zby" /> )
			
			);

	}
}