import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    displayName: 'ReposPage',

    mixins: [ampersandMixin],

    render() {
        const {repos} = this.props;

        return (
            <div>
                <h1>repos page</h1>

                <div>
                    {repos.map((repo) =>{
                        return (
                            <div key={repo.id}>
                                <a href={repo.app_url}><span className='octicon octicon-repo'></span> {repo.full_name}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
})
