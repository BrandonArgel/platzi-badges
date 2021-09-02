import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// statics
import './style/Badges.css'
import confLogo from '../images/badge-header.svg'

// componentes
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

// api
import api from '../api'

export default class Badges extends Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })

		try {
			const data = await api.badges.list()
			this.setState({ loading: false, data: data })
		} catch (error) {
			this.setState({ loading: false, error: error })
			console.log(error.message)
		}
	}

	render() {
		if (this.state.loading === true) {
			return <PageLoading />
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />
		}

		return (
			<React.Fragment>
				<div className='Badges'>
					<div className='Badges__hero'>
						<div className='Badges__container'>
							<img
								className='Badges_conf-logo'
								src={confLogo}
								alt='Conf Logo'
							/>
						</div>
					</div>
				</div>

				<div className='Badge__container'>
					<div className='Badges__buttons container'>
						<Link to='/badges/new' className='btn btn-primary'>
							New Badge
						</Link>
					</div>

					<div className='Badges__list'>
						<div className='Badges__container'>
							<BadgesList badges={this.state.data} />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
