import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import Label from '../components/label';

export default React.createClass({
    displayName: 'RepoDetailPage',

    mixins: [ampersandMixin],

    onAddClick (){
        this.props.labels.add({
            name: '',
            color: '',
            editing: true,
            saved: false
        }, { at: 0 });
    },

    render() {
        const {repo, labels} = this.props;

        return (
            <div className='container'>
                <h1>{repo.full_name} Labels</h1>

                <p>
                    <button onClick={this.onAddClick} className='button'>Add a Label</button>
                </p>

                <ul>
                    {labels.map((label) =>
                        <Label key={label.name} label={label}/>
                    )}
                </ul>
            </div>
        );
    }
})
