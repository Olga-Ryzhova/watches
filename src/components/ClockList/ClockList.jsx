import './ClockList.css';
import ClockListItem from '../ClockListItem/ClockListItem';


const ClockList = ({clocks, referenceTime, onDelete}) => {
	const elements = clocks.map(item=> {
		const {id, ...itemProps} = item;

		return (
			<ClockListItem
				key={id} {...itemProps}
				referenceTime={referenceTime}
				onDelete={() => onDelete(id)}
			/>
		)
	});
	
	return (
		<>
			<ul className="app-list">
				{elements}
			</ul>
		</>
	)
}

export default ClockList;
