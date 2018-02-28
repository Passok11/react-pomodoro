import React, { Component } from 'react';
import StopWatch from './StopWatch.js';
class App extends Component {
	state = { 
		time: 0,
		isRunning: false,
	}
	handleStart = () =>{
		if(!this.state.isRunning){
			this.timer = setInterval(()=> {
				this.setState({time: this.state.time + 1});		
			},1000)
			this.setState({
				isRunning: !this.state.isRunning,
			});	
		}else{
			clearInterval(this.timer);
			this.setState({isRunning: !this.state.isRunning});
		}	
	}
	handleClear = () => {
		this.setState({
			time: 0,	
		})
	}
	render() {
    return (
      <div className="App">
				<StopWatch 
					time={this.state.time} 
					statusButton={this.handleStart} 
					clearButton={this.handleClear}
					status={this.state.isRunning ? 'STOP' : 'START'}
				/>
			</div>
    );
	}

}

export default App;
