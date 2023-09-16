import React, { useEffect } from "react";

const App = () => {
	useEffect(() => {
		console.log("rendering client side");
	}, []);

	return (
		<div className='App'>
			<h1>
				Hurry rendering client side!! <b>(CSR)</b>
			</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
				blanditiis placeat nesciunt reiciendis nihil harum quidem deserunt porro
				vel, suscipit doloremque alias, itaque obcaecati temporibus.
			</p>
		</div>
	);
};

export default App;
