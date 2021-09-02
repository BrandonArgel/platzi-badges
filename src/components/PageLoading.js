import React, { Component } from 'react'

// static
import './styles/PageLoading.css'

// components
import Loader from './Loader'

export default class PageLoading extends Component {
	render() {
		return (
			<div className='PageLoading'>
				<Loader />
			</div>
		)
	}
}
