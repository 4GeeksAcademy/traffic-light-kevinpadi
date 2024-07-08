import React from "react";
import { useState } from "react";

const Home = () => {
	let [ red, setRed ] = useState('border-danger')
	let [ green, setGreen ] = useState('border-success')
	let [ yellow, setYellow ] = useState('border-warning')

	function click(e) {
		if(e.target.id == 'red') {
			setRed("border-primary")
			setGreen('bg-opacity-50 border-success')
			setYellow('bg-opacity-50 border-warning')
		} else if(e.target.id == 'yellow') {
			setRed('bg-opacity-50 border-danger')
			setGreen('bg-opacity-50 border-success')
			setYellow("border-primary")
		} else {
			setRed('bg-opacity-50 border-danger')
			setGreen("border-primary")
			setYellow('bg-opacity-50 border-warning')
		}
	}

	return (
		<div className="d-flex flex-column align-items-center w-100 vh-100 bg-secondary">
			<div className="bg-dark h-25" style={{width: '30px'}}></div>
			<div className="d-flex flex-column bg-dark p-4 gap-2 rounded">
				<button onClick={click} id="red" className={"red p-5 border border-5 rounded rounded-pill bg-danger "+ red} style={{width: '50px'}}></button>
				<button onClick={click} id="yellow" className={"yellow bg-warning p-5 border border-5 rounded rounded-pill " + yellow} style={{width: '50px'}}></button>
				<button onClick={click} id="green" className={"green bg-success p-5 border border-5 rounded rounded-pill "+ green} style={{width: '50px'}}></button>
			</div>
		</div>
	);
};

export default Home;
