import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class RoutingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.handleOnChange = this.handleOnChange.bind(this);
    }

    render() {
        // const {gotDataNew} = this.state;
        // console.log(gotDataNew);
        return (
            <React.Fragment>
                <div style={{textAlign: "center", marginTop: "250px"}}>
                <button style={{padding: "20px"}}><a href="/characters/583" >Click Here for Characters</a></button>
                </div>
            </React.Fragment>
        );
    }
}

export default RoutingComponent;
