import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Card from './Card';
import axios from 'axios';
import CardList from './CardList';
import InfiniteScroll from 'react-infinite-scroll-component';


class App extends React.Component{

  state = {
  	items:[],
	cards: [],
	page : 1
  };

  fetchMoreData = (page,perPage) => {
  	if (this.state.page <= 10) {
  	setTimeout(()=>{
    axios.get("http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&only=data&page="+page+"&per_page="+perPage)
			.then((response)=>{
				this.setState({cards: this.state.cards.concat(response.data.data)});
				console.log("something",this.state.cards)
			});
    },2000)
  	}
    };


	render(){
		return (
			<div class='tc' >
		        <h1>Assessment task</h1>
		        <p>i have no previous experience with React i did this by searching, googling and tried taking a course this is what i was able to doin the given duration</p>
		        <hr />

		        <InfiniteScroll
		          dataLength={this.state.cards.length}
		          next={this.fetchMoreData(this.state.page+=1,25)}
		          hasMore={true}
		          loader={<h4>Loading...</h4>}>

		            {this.state.cards.map((page,index)=>(
		        	   <Card	
							id = {page.id}
							source = {page.cover_photo_urls}
							title = {page.title}
							description = {page.location}/>
						))
					}
		        </InfiniteScroll>
	      </div>
			);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
