import React from 'react';

class Header extends React.Component {
    render() {
        return <p>Header Created by {this.props.creator}</p>
    }
}

export default Header;