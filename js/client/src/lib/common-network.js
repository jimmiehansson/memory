'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: fix
 * Filename: common-network.js by jimmie
 * Created: 2017-05-16 @ 15:16
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
 * Created by jimmie on (2017-06-16).
 *
 * Repository link: http://jimmie@gitlab.localdomain/connectiontool/fix.git
 */

/**
 * Import universal/associated libraries
 * here to separate from other code.
 */
import {
    SYSTEM_NETWORK_PROBE_INTERVAL,
    SYSTEM_NETWORK_PING_NUMERIC,
    SYSTEM_NETWORK_PING_TIMEOUT,
    SYSTEM_NETWORK_PING_MINREPLY
} from '../constants/common-application';
import {
    addToState
} from '../lib/common-state';

/**
 * Import node.js specific libraries
 * here to separate from other code.
 */
import ping from 'ping';


/**
 * DOING: A network address passed should evaluate
 * against IPV4 expressions.
 * @param address
 * @returns {boolean}
 */
export const isIPV4Address = (address=false) => {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address);
};


/**
 * DOING: Preload default ping configuration
 * to prevent configuration overrides.
 * @returns {{numeric, timeout, min_reply}}
 */
export const pingConfig = () => {

  return {
    numeric: SYSTEM_NETWORK_PING_NUMERIC,
    timeout: SYSTEM_NETWORK_PING_TIMEOUT,
    min_reply: SYSTEM_NETWORK_PING_MINREPLY,
  };

};


/**
 * DOING: A network address should
 * respond to a single ping or more.
 * @param address
 * @returns {object}
 */
export const pingHost = (address=undefined) => {

    return ping.promise.probe(address, pingConfig())
        .then(function(response) {
            return response;
        })
        .catch((e)=> {
            return { error: e };
        });
};


/**
 * DOING: Iterates the hosts object to
 * return the ping state of each object entity.
 * Should return a promise object.
 * @param items
 * @returns {object}
 */
export const isRepondingWithPing = (items={}) => {

    let interval = SYSTEM_NETWORK_PROBE_INTERVAL;
    let obj = {};

    return new Promise((resolve) => {

        Object.keys(items).map((item) => {
            (isIPV4Address(items[item].address));
            pingHost(items[item].address)
                .then((response)=> {
                    obj[item] = addToState(items[item], response);
            });
        });
        // create function runInterval
        let probeInterval = setInterval(()=> {
            let hostsLeftToRespond = (Object.keys(items).length-Object.keys(obj).length);
            interval = SYSTEM_NETWORK_PROBE_INTERVAL * hostsLeftToRespond;
            if(hostsLeftToRespond===0){ clearInterval(probeInterval); resolve(obj); }

        }, interval);
        // end fn runInterval
    });
};


/**
 * DOING: Iterates the hosts object to
 * return the http state of each object entity.
 * Should return a promise object.
 * @param items
 * @returns {object}
 */
export const isRespondingWithHTTP = (items={}) => {

};


/**
 * DOING: Iterates the hosts object to
 * return the TCP state of each object entity.
 * Should return a promise object.
 * @param items
 * @returns {object}
 */
export const isRespondingWithTCP = (items={}) => {

};


/**
 * DOING: Iterates the hosts object to
 * return the NetBIOS state of each object entity.
 * Should return a promise object.
 * @param items
 * @returns {object}
 */
export const isRespondingWithNetBIOS = (items={}) => {

};