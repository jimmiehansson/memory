'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: memory
 * Filename: common-api.js by jimmie
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
 * Created by jimmie on (2017-06-31).
 *
 * Repository link: https://github.com/jimmiehansson/memory.git
 */


/**
 * Import universal/associated libraries
 * here to separate from other code.
 */
import fetch from 'isomorphic-fetch';
import {
    BAD_REQUEST,
    BAD_OBJECT_PROPERTIES
} from '../constants/language/english';
import {
    API_FETCH_URL
} from '../constants/common-application';
import {
    isDefined,
    isObject,
    isArray
} from '../lib/common-type';


/**
 * DOING: Should wrap fetch request
 * function and return json object.
 * @param url
 * @returns object
 */
export const fetchFromUrl = (url = API_FETCH_URL) =>
    fetch(url)
        .then((response) => (response.status < 200 || response.status > 400) ? () => { throw new Error(BAD_REQUEST); } : response.json())
        .then((data)=> data)
        .catch((error) => error);


/**
 * DOING: Should return the default set
 * of object properties used in the return data
 * from the http object.
 * @returns array
 */
export const getHttpObjectProperties = () => ['name', 'imagePortraitUrl', 'index', 'filename'];


/**
 * DOING: Should validate if the object
 * has properties matching those in the
 * params.
 * @param object
 * @param properties
 * @param propertyMatch
 * @returns boolean
 */
export const hasObjectProperties = (object, properties = [], propertyMatch=false) => {
    if(isDefined(object) && isDefined(properties) && isObject(object) && isArray(properties)){
        Object.keys(object).forEach((item) => properties.forEach((property) => propertyMatch = object[item].hasOwnProperty(property)));
        return propertyMatch;
    }
    else { throw new Error(BAD_OBJECT_PROPERTIES); }
};


/**
 * DOING: Should assemble a new object
 * structure based on computations from
 * the fetched data.
 * @returns object
 */
export const buildNextIndex = () => {



};









/**
 * DOING: Should iterate and validate
 * the returned data from the url fetch.
 * Data should match the normalized structure
 * of the state object and return.
 * @returns object
 */
export const buildDataFromUrl = () => {

    fetchFromUrl(API_FETCH_URL).then((dataFromUrl) => {

        if(hasObjectProperties(dataFromUrl, getHttpObjectProperties())){

            Object.keys(dataFromUrl).forEach((item, index) => {


                    /*
                    ++iterator;
                        if(iterator===5) { iterator = 0; ++sessions; }
                        for( let x = 0; x <= 5; x++ ) {
                            tiles[`tile${dataFromUrl[item].index}`] = dataFromUrl[item];
                        }
                        if(Object.keys(tiles).length === 5){
                            //console.log(tiles[`tile${dataFromUrl[item].index}`]);
                        }

                        */








        /*
                        if(Object.keys(tiles).length <= 5) {

                            fiveObjects[`session${sessions}`] = { tiles };
                            fiveObjectsCopy[`session${sessions}`] = fiveObjects;


                            let o = tiles[`tile${dataFromUrl[item].index}`].index;

                            let x = 0;

                            for(; x < 5; ++x){

                                ++o;

                                tiles[`tile${o}`] = {
                                        name : tiles[`tile${dataFromUrl[item].index}`].name,
                                        imagePortraitUrl : tiles[`tile${dataFromUrl[item].index}`].imagePortraitUrl,
                                        index : o,
                                        filename : tiles[`tile${dataFromUrl[item].index}`].filename,
                                        flipped : false,
                                        matched : false,
                                    };
                            }

                            fiveObjectsCopy[`session${sessions}`] = { tiles };
                            mergedFiveObjects = Object.assign(fiveObjects, fiveObjectsCopy);

                            tiles = {};
                        }
        */
                });



        }




    });

    // 6. loop that object
    // 7. build a new object using the index from the loop, index should now be 1-10
    // 8. do this until all 134 items are done
    // 9. return the object to the state

    //console.log(fiveObjectsCopy);
};





