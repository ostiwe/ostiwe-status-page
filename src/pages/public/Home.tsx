import React, {Component} from 'react';
import {RootState} from "../../redux/rootReducer";


class Home extends Component<RootState, {}> {
    constructor(props: RootState) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default Home;