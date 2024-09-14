import { Component } from 'react';
import './ClockAddForm.css';

class ClockAddForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			nameSity: '',
			timezone: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { nameSity, timezone } = this.state;   
		if (!nameSity || isNaN(parseFloat(timezone))) return;  
		
		this.props.onAdd(nameSity, parseFloat(timezone)); 
		
		this.setState({
			nameSity: '',
			timezone: ''
		})
	}

	render() {
		const {nameSity, timezone} = this.state;
		return (
			<div className="app-add-form">
				<div className="title">Мировое время</div>

				<form	className="add-form" onSubmit={this.onSubmit}> 
					<div className="info-clocks">
						<div className="sub-title">Название</div> 
						<input type="text" 
							className="form-control"
							name="nameSity"
							value={nameSity}
							onChange={this.onValueChange} 
							placeholder="Самара"/>
					</div>

					<div className="info-clocks"> 
					<div className="sub-title">Временная зона</div> 
						<input type="text" 
							className="form-control"
							name="timezone"
							value={timezone}
							onChange={this.onValueChange}   
							placeholder="+04:00"/>
					</div>

					<button type="submit"
						className="btn">Добавить</button>
				</form>
			</div>
        )
	}
}

export default ClockAddForm;