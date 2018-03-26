import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AuthorInfo } from './../components/AuthorInfo'
import { AuthorAddress } from './../components/AuthorAddress'
import { AuthorCompany } from './../components/AuthorCompany'
import { fetchService } from './../../services/FetchService'
import { createUserDetailsInstance } from './../../shared/utils'


class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.id
        this.state = {
            details: null
        }
    }

    fetchDetails = () => {
        fetchService.fetchUserDetails(this.id)
            .then(details => createUserDetailsInstance(details))
            .then(details => this.setState({ details }))
    }

    componentDidMount = () => {
        this.fetchDetails()
    }

    render() {
        if (!this.state.details) {
            return <h1>frrr</h1>
        }
        const { name, username, email, phone } = this.state.details
        const { city, street, zipcode, geo } = this.state.details.address
        const { name: companyName, catchPhrase: slogan } = this.state.details.company


        return (
            <div className="container" >
                <br />
                <Link className="waves-effect waves-light btn" to="singlepost">Back</Link>
                <br /> <br />
                <AuthorInfo name={name} username={username} email={email} phone={phone} />
                <hr />
                <AuthorAddress city={city} street={street} zipcode={zipcode} lat={geo.lat} long={geo.lng} />
                <hr />
                <AuthorCompany name={companyName} slogan={slogan} />
            </div>
        )
    }
}

export { SingleAuthorPage }