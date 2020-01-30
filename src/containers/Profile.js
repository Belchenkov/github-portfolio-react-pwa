import React, { Component } from 'react';

import Link from '../components/Link/Link';
import List from '../components/List/List';
import './Profile.css';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true
        };
    }

    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/Belchenkov');
        const profileJSON = await profile.json();

        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false
            });
        }
    }

    render() {
        const { data, loading } = this.state;

        if (loading) return <div>Loading ...</div>;

        const items = [
            {
                label: 'html_url',
                value: <Link url={data.html_url} title='Github URL' />,
            },
            { label: 'repos_url', value: data.repos_url },
            { label: 'name', value: data.name },
            { label: 'company', value: data.company },
            { label: 'location', value: data.location },
            { label: 'email', value: data.email },
            { label: 'bio', value: data.bio },
        ];

        return (
            <div>
                <div className='Profile-container'>
                    <img className='Profile-avatar' src={data.avatar_url}
                         alt='avatar' />
                    <ul>
                        <li><strong>html_url:</strong> <Link url={data.html_url} title='Github URL' /></li>
                        <li><strong>repos_url:</strong> {data.repos_url}</li>
                        <li><strong>name:</strong> {data.name}</li>
                        <li><strong>company:</strong> {data.company}</li>
                        <li><strong>location:</strong> {data.location}</li>
                        <li><strong>email:</strong> {data.email}</li>
                        <li><strong>bio:</strong> {data.bio}</li>
                    </ul>
                    <List items={items} />
                </div>
            </div>
        );
    }
}

export default Profile;