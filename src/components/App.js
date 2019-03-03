import React, {PureComponent} from 'react';
export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			title: 'http/2'
		}
	}


	render() {
		const {title} = this.state;
		return (
			<div>
				{title}
			</div>
		)
	}

}

