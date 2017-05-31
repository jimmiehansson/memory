'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: fix
 * Filename: populate-state.js by jimmie
 * Created: 2017-05-25 @ 20:53
 * Product of: Diskovery
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
 * Created by jimmie on (2017-05-25).
 *
 * Repository link: http://10.10.10.200/connectiontool/fix.git
 */

/**
 * Import language libraries
 * here to separate from other code.
 */
import * as language from '../constants/language/swedish';


/**
 * DOING: Should return a predefined
 * state for its purpose to populate
 * the initialState.
 */
export const populate = {

    /**
     * CLARIFY: Default state sets initial
     * load, production defaults.
     * @returns {object}
     */
    default : () => {
        return {
            home : {
                online: false,
                application: {
                    name:'Diskovery',
                        version:1.0,
                        rc:'1',
                        rcType:'Alpha default',
                },
                network: {
                    byName : {
                        localAddress: {
                            id : "localAddress",
                            alias : language.NETWORK_DEVICE_LAN_IP_TITLE,
                            address : '10.10.10.101',
                            loading: true,
                            alive : false,
                            ms : 34,
                            avg : 32,
                            host : 'local.domain',
                            min : 28,
                            max : 42,
                        },
                        localGateway: {
                            id : "localGateway",
                            alias : language.NETWORK_DEVICE_LAN_GATEWAY_TITLE,
                            address : '10.10.10.1',
                            loading: true,
                            alive : false,
                            ms : 34,
                            avg : 32,
                            host : 'local.domain',
                            min : 28,
                            max : 42,
                        },
                        remoteAddress: {
                            id : "remoteAddress",
                            alias : language.NETWORK_DEVICE_WAN_IP_TITLE,
                            address : '83.227.226.5',
                            loading: true,
                            alive : false,
                            ms : 34,
                            avg : 32,
                            host : 'remote.domain',
                            min : 28,
                            max : 42,
                        },
                        remoteGateway: {
                            id : "remoteGateway",
                            alias : language.NETWORK_DEVICE_WAN_GATEWAY_TITLE,
                            address : '83.227.226.1',
                            loading: true,
                            alive : false,
                            ms : 34,
                            avg : 32,
                            host : 'remote.domain',
                            min : 28,
                            max : 42,
                        },
                        dnsPrimary: {
                            id : "dnsPrimary",
                            alias : language.NETWORK_DEVICE_WAN_DNS_PRIMARY_TITLE,
                            address : '8.8.4.4',
                            loading: true,
                            alive : false,
                            ms : 34,
                            avg : 32,
                            host : 'dns1.domain',
                            min : 28,
                            max : 42,
                        },
                        dnsSecondary: {
                            id : "dnsSecondary",
                            alias : language.NETWORK_DEVICE_WAN_DNS_SECONDARY_TITLE,
                            address : '8.8.8.8',
                            loading: true,
                            alive : false,
                            ms : 34,
                            avg : 32,
                            host : 'dns2.domain',
                            min : 28,
                            max : 42,
                        },
                    },
                    byId : {


                    }
                }
            }
        };
    },

    /**
     * CLARIFY: Load state sets initial
     * load, testing defaults.
     * Should return the new state
     * object for the existing state store.
     * @returns {object}
     */
    load : () => {
        return {
            online: true,
            application: {
                name:'Diskovery',
                version:1.0,
                rc:'1',
                rcType:'Alpha load',
            },
            network: {
                byName : {
                    localAddress: {
                        id : "localAddress",
                        alias : language.NETWORK_DEVICE_LAN_IP_TITLE,
                        address : '10.10.10.2',
                        loading: true,
                        alive : false,
                        ms : 34,
                        avg : 32,
                        host : 'local.domain',
                        min : 28,
                        max : 42,
                    },
                    localGateway: {
                        id : "localGateway",
                        alias : language.NETWORK_DEVICE_LAN_GATEWAY_TITLE,
                        address : '10.10.10.1',
                        loading: true,
                        alive : false,
                        ms : 34,
                        avg : 32,
                        host : 'local.domain',
                        min : 28,
                        max : 42,
                    },
                    remoteAddress: {
                        id : "remoteAddress",
                        alias : language.NETWORK_DEVICE_WAN_IP_TITLE,
                        address : '83.227.226.5',
                        loading: true,
                        alive : false,
                        ms : 34,
                        avg : 32,
                        host : 'remote.domain',
                        min : 28,
                        max : 42,
                    },
                    remoteGateway: {
                        id : "remoteGateway",
                        alias : language.NETWORK_DEVICE_WAN_GATEWAY_TITLE,
                        address : '83.227.226.1',
                        loading: true,
                        alive : false,
                        ms : 34,
                        avg : 32,
                        host : 'remote.domain',
                        min : 28,
                        max : 42,
                    },
                    dnsPrimary: {
                        id : "dnsPrimary",
                        alias : language.NETWORK_DEVICE_WAN_DNS_PRIMARY_TITLE,
                        address : '8.8.4.4',
                        loading: true,
                        alive : false,
                        ms : 34,
                        avg : 32,
                        host : 'dns1.domain',
                        min : 28,
                        max : 42,
                    },
                    dnsSecondary: {
                        id : "dnsSecondary",
                        alias : language.NETWORK_DEVICE_WAN_DNS_SECONDARY_TITLE,
                        address : '8.8.8.8',
                        loading: true,
                        alive : false,
                        ms : 34,
                        avg : 32,
                        host : 'dns2.domain',
                        min : 28,
                        max : 42,
                    },
                },
                byId : {


                }
            }
        };
    },
};