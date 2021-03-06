import React from 'react';

// FUNCTION BASED COMPONENT
// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		position => console.log(position),
// 		err => console.log(err)
// 	);
// 	return <div>Latitude: </div>;
// }


// CLASS BASED COMPONENT
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: 40 };
	}

	// React says we have to define render!!
	render() {
		window.navigator.geolocation.getCurrentPosition(
			position => console.log(position),
			err => console.log(err)
		);
		return <div>Latitude: {this.state.lat}</div>;
	}
}

export default TestComponent;


