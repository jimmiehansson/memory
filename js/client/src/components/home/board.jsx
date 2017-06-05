'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: fix
 * Filename: board.jsx by jimmie
 * Created: 2017-05-31 @ 15:16
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
 * Created by jimmie on (2017-05-31).
 *
 * Repository link: https://github.com/jimmiehansson/memory.git
 */


/**
 * DOING: Import react and associated libraries
 * here to separate from the rest of the code.
 */
import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import * as boardActions from '../../actions/board';


/**
 * DOING: Import react components here
 * to separate from the rest of the code.
 */
import TileWrapper from './tile-wrapper.jsx';


/**
 * DOING: Import universal and associated libraries
 * here to separate from the rest of the code.
 */
import {
    isNumber,
    isDefined,
    isArray
} from '../../lib/common-type';


/**
 * DOING: Import ui and interface libraries and components
 * here to separate from the rest of the code.
 */
import {
    Card,
    CardText
} from 'material-ui/Card';



class Board extends PureComponent {


    constructor(props) {
        super(props);

        this.counter = 0;
        this.matchingTiles = [];
        this.locked = false;;
    }


    /**
     * DOING: Should reset the board triggered
     * by the function. Resets the state by dispatch.
     */
    triggerResetBoard() {

        setTimeout(() => {
            Object.keys(this.props.board.byId).forEach((item) => {
                this.props.board.byId[item].flipped = !!(this.props.board.byId[item].matched);
            });

            this.resetHelpers();
            if(this.getCounter() <= 2) {
            this.props.boardState(this.props.board);
            }

            this.triggerUnlockBoard();
        },2200);
    }


    /**
     * DOING: Should reset common
     * functions to their initial
     * values.
     */
    resetHelpers(){
        this.resetMatchingTiles();
        this.resetCounter();
    }


    /**
     * DOING: Should lock the board triggered
     * by the function.
     */
    triggerLockBoard() {
        this.locked = true;
    }


    /**
     * DOING: Should unlock the board triggered
     * by the function.
     */
    triggerUnlockBoard() {
        this.locked = false;
    }


    /**
     * DOING: Should return status of
     * the state in the locked member.
     * @returns {boolean}
     */
    getLocked() {
        return this.locked;
    }


    /**
     * DOING: Should increment the counter
     * by one numeral literal.
     */
    doIncrementCounter() {
        if(this.counter < 2) {
            ++this.counter;
        }
    }


    /**
     * DOING: Should reset the counter
     * to zero (its initial state).
     */
    resetCounter() {
        this.counter = 0;
    }


    /**
     * DOING: Should get the current counter
     * value and return it.
     */
    getCounter() {
        (isDefined(this.counter) && isNumber(this.counter));
        return this.counter;
    }


    /**
     * DOING: Should update tiles of match
     * to proper state and return.
     */
    triggerMatchUpdate(){
        this.triggerResetBoard();
    }


    /**
     * DOING: Should reset the array containing
     * matches of the tiles to an empty state.
     */
    resetMatchingTiles() {
        this.matchingTiles = [];
    }


    /**
     * DOING: Should add the current tile
     * to the matches array.
     * @param data
     */
    setMatchingTiles(data) {
        (isDefined(data) && isArray(data));
        this.matchingTiles.push(data);
    }


    /**
     * DOING: Should set matched property
     * to true in the state object.
     * @param payloadId
     */
    setMatched(payloadId) {
        (isDefined(payloadId) && isNumber(payloadId));
        this.props.board.byId[`tile${payloadId}`].matched = true;
        this.props.decrementFlipCount();
    }


    /**
     * DOING: Should return the matchingTiles
     * array in complete.
     */
    getMatchingTiles() {
        (isDefined(this.matchingTiles) && isArray(this.matchingTiles));
        return this.matchingTiles;
    }


    /**
     * DOING: Returns new state after
     * dispatching new payload to the
     * store.
     * @param payload
     */
    dispatchState(payload) {
        this.props.boardState(payload);
    }


    /**
     * DOING: Dispatches a new payload when the tile
     * triggers onClick. Should return a new state
     * for the child component while stateless render
     * an update for the store.
     * @param payloadId
     */
    triggerDispatch(payloadId) {

        (isNumber(payloadId) && isDefined(payloadId));

        this.doIncrementCounter();

        // Increment per click for score keeping
        this.props.incrementFlipCount();

        // Dispatch initial flipped state
        this.props.board.byId[`tile${payloadId}`].flipped = !(this.props.board.byId[`tile${payloadId}`].matched);
        this.dispatchState(this.props.board.byId);

        /**
         * Should add the current tile to the
         * array for matching.
         */
        this.setMatchingTiles(this.props.board.byId[`tile${payloadId}`]);

        /**
         * Should if 2 tiles are flipped, check them
         * if they match. Return the proper state
         * if match or not.
         */
        if(this.getCounter()===2 || this.getMatchingTiles().length===2) {

            this.triggerLockBoard();

            /**
             * Return the n of matched tiles
             */
            let getMatch = this.getMatchingTiles().reduce((acm, val) => acm + (val.name === this.props.board.byId[`tile${payloadId}`].name), 0);

            if (getMatch === 2) {
                this.getMatchingTiles().forEach((item) => this.setMatched(item.index));
                this.triggerMatchUpdate();
            }
            else {
                this.triggerUnlockBoard();
            }

            this.triggerResetBoard();
        }
    }

    render() {

        return (
            <div>
                <Card>
                    <CardText style={{fontSize: '13px'}}>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>

                            {Object.keys(this.props.board.byId).map((tile) => {
                                return <div
                                    key={`triggerWrapper${this.props.board.byId[tile].index}`}
                                    onClick={
                                        (!this.getLocked() && this.getCounter() < 2 && !this.props.board.byId[tile].matched)
                                        ?
                                        () => {
                                            this.triggerDispatch(this.props.board.byId[tile].index)
                                        }
                                        : () => {
                                            if(this.getLocked()){
                                                alert('too fast, calm down');
                                            }
                                            this.triggerResetBoard();
                                        }
                                    }
                                >
                                <TileWrapper
                                        key={`tileWrapper${this.props.board.byId[tile].index}`}
                                        index={this.props.board.byId[tile].index}
                                        {...this.props.board.byId[tile]}
                                    />
                                </div>
                            })}

                        </div>
                    </CardText>
                </Card>
            </div>

        )
    }
}


/**
 * CLARIFY: Mapping the current (initial) state to props
 * initial state set by scope reducer.
 * @param state
 * @param props
 * @returns {{board: (Array|*)}}
 */
const mapStateToProps = (state, props) => {
    return {
        board : state.board,
    }
};


/**
 * CLARIFY: Returning dispatched action state for
 * boardState.
 * @param dispatch
 * @returns {{boardState: (function(*=): *)}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        boardState : payload => dispatch(boardActions.boardState(payload)),
        resetBoardState  : payload => dispatch(boardActions.resetBoardState ()),
        incrementFlipCount : payload => dispatch(boardActions.incrementFlipCount(payload)),
        decrementFlipCount : payload => dispatch(boardActions.decrementFlipCount(payload))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Board);