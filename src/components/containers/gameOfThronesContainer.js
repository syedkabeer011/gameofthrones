import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    getDataAction,
} from '../../actions/appActions';

class GameOfThronesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.id;
        this.props.getData(id);    
    }



    static getDerivedStateFromProps(props, state) {
        const {gotData} = props;
        let gotDataNew = {};
        if(gotData.isDone){
            gotDataNew = gotData.data;
        }

        return {
            ...props, ...state , gotDataNew: gotDataNew
        }
    }

    render() {
        const {gotDataNew} = this.state;
        console.log(gotDataNew);
        return (
            <React.Fragment>
                <div><span>Book Title: </span>{gotDataNew.titles}</div>
                <div><span>Book URL: </span>{gotDataNew.url}</div>
                <div><span>Name: </span>{gotDataNew.name}</div>
                <div><span>Gender: </span>{gotDataNew.gender}</div>
                <div><span>Culture: </span>{gotDataNew.culture}</div>
                <div><span>Born: </span>{gotDataNew.born}</div>
                <div><span>Books:  </span>{gotDataNew.books}</div>
                <div><span>POV Books: </span>{gotDataNew?.povBooks?.map((a)=> (
                <>
                <div key={gotDataNew.url}><a href={a}>{a}</a></div>
                </>
                ))}</div>

            </React.Fragment>
        );
    }
}

export default withRouter(
    connect(
        ({ app}) => ({
            gotData: app.gotData,
            
        }),
        dispatch => ({
            getData: (params) => dispatch(getDataAction(params)),
        }),
    )(GameOfThronesContainer),
);
