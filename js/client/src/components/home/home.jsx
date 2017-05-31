'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: fix
 * Filename: home.component.jsx by jimmie
 * Created: 2017-03-09 @ 14:04
 * Product of: WebStorm
 * // -------------------------------------------------
 * Make sure this file is part of its proper namespace
 * and project before moving on.
 * // -------------------------------------------------
 * Code-tags conventionally should be used (See below) :
 * TODO - Something that someone need to do.
 * DOING - Self remind for what you are doing.
 * CONSIDER - Reminder to consider a change or addition.
 * BUG - The below section of a code cause a bug.
 * FIXME - The below section of code need to be fixed.
 * HACK - The below section of code is a workaround.
 * XXX - Any notation important enough to consider implementing.
 * CLARIFY - Very incomprehensible section of code below.
 *
 * Created by jimmie on (2017-03-09).
 *
 * Repository link: project/repository
 */

/**
 * DOING: Import react and associated libraries
 * here to separate from the rest of the code.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/home';
import { populate } from '../../store/populate-state';
import { networkSelector } from '../../selectors/home';


/**
 * DOING: Import custom components and stateless helpers
 * here to separate from the rest of the code.
 */
import AppInfo from '../core/app-info.jsx';
import ConnectionStatusProgress from './connection-status-progress.jsx';
import ConnectionStatusList from './connection-status-list.jsx';
import Dashboard from './dashboard.jsx';
//
/**
 * DOING: Import ui and interface libraries and components
 * here to separate from the rest of the code.
 */
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {
    pink400,
} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import MultiLineChart from 'material-ui/svg-icons/editor/multiline-chart';
import Security from 'material-ui/svg-icons/hardware/security';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer
} from 'recharts';
import Toggle from 'material-ui/Toggle';




class Home extends Component {

    constructor(props){

        super(props);


        this.lineChartConnectionStateData = [
            {name: 'Måndag', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Tisdag', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Onsdag', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Torsdag', uv: 2780, pv: 3908, amt: 2000},
        ];


    }

    handleToggle = (event, toggle) => {

        // Set this in initial state
        // switch to reducer init state
        // once this is finished
        let payload = populate.load();
        this.props.preloadState(payload);
    };

     lineChartConnectionState = () => this.lineChartConnectionStateData;



    render() {

        return(
            <div>

                <Card>
                    <CardText style={{fontSize: '13px'}}>
                        <Dashboard {...this.props} />
                    </CardText>
                </Card>

                <Card>
                    <CardHeader
                        title={"Anslutningsstatus"}
                        subtitle="Klicka för att visa mer."
                        avatar={<Avatar icon={<Security />} backgroundColor={pink400} />}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />

                    <ConnectionStatusProgress {...this.props} />

                    <CardText expandable={true}>
                        <Card>
                            <CardText expandable={false}>
                                <ConnectionStatusList {...this.props} />
                            </CardText>
                        </Card>
                    </CardText>
                </Card>



                <Card expandable={true} >
                    <CardHeader
                        title="Aktivitetsmätaren"
                        subtitle="Klicka för att visa mer."
                        avatar={<Avatar icon={<MultiLineChart />} backgroundColor={pink400}  />}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />

                    <CardText expandable={true}>

                        <CardText>
                            <Toggle
                                onToggle={this.handleToggle}
                                labelPosition="right"
                                label="Mät min uppkoppling just nu"
                            />
                        </CardText>

                        <ResponsiveContainer width="95%" height="40%" minHeight={200} minWidth={600}>
                            <LineChart width={600} height={210} data={this.lineChartConnectionState()} margin={{ top: 20, right: 50, left: 10, bottom: 20 }}>
                                <Line type="monotone" dataKey="uv" stroke="#E91E63" />
                                <CartesianGrid stroke="#fff" />
                                <XAxis dataKey="name" />
                                <YAxis />
                            </LineChart>
                        </ResponsiveContainer>

                    </CardText>
                </Card>
                <Card>
                    <CardText style={{fontSize: '13px'}}>
                        <AppInfo {...this.props} />
                    </CardText>
                </Card>
            </div>
        )
    };
}


/**
 * CLARIFY: Mapping the current (initial) state to props
 * initial state set by scope reducer.
 * @param state
 * @param props
 * @returns {{home: (Array|*)}}
 */
const mapStateToProps = (state, props) => {
    return {
        home: state.home,
        network: networkSelector(state.home.network),
    }
};


/**
 * CLARIFY: Returning dispatched action state for
 * getInitialConnection.
 * @param dispatch
 * @returns {{getInitialConnection: (function(*=): *)}}
 */
const mapDispatchToProps = (dispatch) => {

    return {
        preloadState: payload => dispatch(homeActions.preloadState(payload)),

    }

};


export default connect(mapStateToProps, mapDispatchToProps)(Home);