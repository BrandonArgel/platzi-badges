import React from 'react'

// static
import './styles/PageError.css'

export default function PageError(props) {
	return (
		<div className='PageError'>
			<span>{props.error.message}</span>
		</div>
	)
}
