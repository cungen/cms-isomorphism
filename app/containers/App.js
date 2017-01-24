import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../common/layout.sass';

class App extends Component {
    render() {
		const styles = {
			root: {
				height: '100%'
			}
		};

        return (
            <div style={styles.root}>{this.props.children }</div>
        )
    }
}

export default connect(state => {
    return state.server;
})(App)
