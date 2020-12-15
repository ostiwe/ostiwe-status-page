import React, {Component} from 'react';
import {RootState} from "../../redux/rootReducer";
import {connect} from "react-redux";
import {SiteCard} from "../../components";

class Home extends Component<RootState, {}> {
    constructor(props: RootState) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="app-cards-content">
                    <SiteCard
                        title='test'
                        id={112}
                        incidents={[]}
                        lastCheck={1}
                        responseTime={0}
                        uptime={100}
                        status='warning'
                    />
                </div>
            </div>
        );
    }
}

const stateToProps = (state: RootState) => {
    return state;
}

export default connect(stateToProps)(Home);