import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>App.jsx</h1>
        );
    }
}

export default connect((state) => {
    return {};
})(App);
