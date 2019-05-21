import React from 'react';
import { RentalCard } from './RentalCard';

import * as actions from '../../../actions';

export class RentalList extends React.Component {


	renderRentals() {
		return this.props.rentals.map((rental, index) =>{
			return (
				<RentalCard key={index} rental = {rental} colNum = 'col-md-3 col-xs-6'/>
				)
		})
	}



	render() {
		return (
			<div className='row'>
			{this.renderRentals()}
			</div>
			)
	}
}


