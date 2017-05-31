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
 * TODO:
 * Could include this in separate file perhaps
 * called inclusion file.
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Header extends Component {


    constructor(props) {

        super(props);

        this.state = {
            drawerNavOpen:false
        };
    }

    /**
     * TODO: Add these as stateless components / rethink the state flow from here
     * down to create better detachable components.
     */
    handleToggle = () => this.setState({drawerNavOpen: !this.state.drawerNavOpen});

    render() {
        return(
            <div>
            <AppBar
                title=""
                onLeftIconButtonTouchTap={this.handleToggle}
                titleStyle={{fontSize:'26px'}}
                iconElementRight={<img className="header-logo" src="http://localhost/public/images/memoryinja.jpg" /> }
            />
                <Drawer open={this.state.drawerNavOpen} width={200} openSecondary={true}>



                    <MenuItem>
                        <i className="material-icons" style={{float:'left', color:'#888', margin:'10px 10px 0px 0px'}}>
                            face
                        </i>
                        My score
                    </MenuItem>
                </Drawer>
            </div>
        )
    }

}


export default Header