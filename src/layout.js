import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import NavHelper from './components/nav-helper';


export default React.createClass({
    displayName: 'Layout',

    mixins: [ampersandMixin],

    render() {
        const {me} = this.props;

        return (
            <NavHelper>
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        <li className='pull-right'>{me.login} <a href='/logout'>Logout</a></li>
                    </ul>
                </nav>
                <div className='container'>
                    { this.props.children }
                </div>
            </NavHelper>
        );
    }
})
