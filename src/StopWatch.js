import React from 'react';
import './StopWatch.css';
const StopWatch = ({time, statusButton, clearButton, status})=> (
	<div className="container"> 
		<div className="display">{time}</div>
		<button onClick={statusButton} children={status} />
		<button onClick={clearButton} children="Clear"/>
	</div>
);

export default StopWatch;


