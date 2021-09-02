import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import logo from '../images/logo.svg'

export default class Navbar extends Component {
	render() {
		return (
			<div className='Navbar py-2'>
				<div className='container w-100 d-flex justify-content-between align-items-center'>
					<Link className='Navbar__brand' to='/'>
						<img className='Navbar__brand-logo' src={logo} alt='Logo' />
						<span className='font-weight-light'>Platzi</span>
						<span className='font-weight-bold'>Conf</span>
					</Link>

					<div>
						<Link
							className='nav-link dropdown-toggle text-reset font-weight-bold color-white'
							to='#'
							id='navbarDropdown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'
						>
							Badge
						</Link>

						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='dropdown-item' to='/badges'>
								List Badges
							</Link>
							<Link className='dropdown-item' to='/badges/new'>
								Add Badge
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
