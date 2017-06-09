'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: memory
 * Filename: tile-wrapper.jsx by jimmie
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
import React from 'react';


/**
 * DOING: Import component specific files
 * here to separate from the rest of the code.
 */
import Tile from './tile.jsx';

/**
 * DOING: Import app associated and universal libraries
 * here to separate from the rest of the code.
 */


/**
 * DOING: Import material ui and interface
 * here to separate from the rest of the code.
 */


const TileWrapper = props => {

    return (
        <div
            key={`tileDiv${props.index}`}
            className={`card tile${props.index} ${(!props.locked) ? (props.flipped) ? 'flipped' : '' : ''}` }
        >
            <Tile key={`tileComponent${props.index}`} index={props.index} {...props} />
        </div>
    )
};


export default TileWrapper;