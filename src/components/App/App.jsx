import { Component } from "react";
import ClockAddForm from "../ClockAddForm/ClockAddForm";
import ClockList from "../ClockList/ClockList";
import './app.css'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clocks: [],
			referenceTime: new Date()
		}
 
		this.maxId = 1;
	}

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.setState({ referenceTime: new Date() });
	}, 1000);
  }

	componentWillUnmount() {
    clearInterval(this.intervalID);
  }

	addClock = (nameSity, timezone) => {
		const newClock = {
			nameSity,
			timezone,
			id: this.maxId++
		}

	
		this.setState(({clocks}) => {
			const newArr = [...clocks, newClock];
			
			return {
				clocks: newArr
			}
		})			
	};

	deleteClock = (id) => {
		this.setState(({clocks}) => {
			return {
				clocks: clocks.filter(item => item.id !== id)
			}
		})
	}

	render() {
		const {clocks, referenceTime } = this.state;

		return (
			<div className="container">
				<ClockAddForm onAdd={this.addClock} />
				<ClockList 
				clocks={clocks} 
				referenceTime={referenceTime}
				onDelete={this.deleteClock}
			/>
			</div>
		)
	}
}

export default App;