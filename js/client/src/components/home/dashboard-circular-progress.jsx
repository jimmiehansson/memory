'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: fix
 * Filename: dashboard.jsx by jimmie
 * Created: 2017-05-29 @ 15:16
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
 * Created by jimmie on (2017-05-29).
 *
 * Repository link: http://jimmie@gitlab.localdomain/connectiontool/fix.git
 */

/**
 * DOING: Import react and associated libraries
 * here to separate from the rest of the code.
 */
import React from 'react';


/**
 * DOING: Import app associated and universal libraries
 * here to separate from the rest of the code.
 */
import {
    propsHasKey
} from '../../lib/common-state';
import {
    DASHBOARD_CIRCULAR_PROGRESS_LABEL,
    DASHBOARD_CIRCULAR_PROGRESS_LABEL_COLOR,
    DASHBOARD_CIRCULAR_PROGRESS_RADIUS,
    DASHBOARD_CIRCULAR_PROGRESS_STROKE,
    DASHBOARD_CIRCULAR_PROGRESS_BACKGROUND_STROKE_COLOR,
    DASHBOARD_CIRCULAR_PROGRESS_FOREGROUND_STROKE_COLOR,
    DASHBOARD_CIRCULAR_PROGRESS_PERCENTAGE,
    DASHBOARD_CIRCULAR_PROGRESS_FILL_COLOR,
    DASHBOARD_CIRCULAR_PROGRESS_FOREGROUND_COLOR
} from '../../constants/common-ui';


/**
 * DOING: Import material ui and interface
 * here to separate from the rest of the code.
 */


const DashboardCircularProgress = props => {


    /**
     * CLARIFY: Props should return valid key
     * to assemble object.
     * @params viewLabel
     * @params viewLabelColor
     * @params viewRadius
     * @params viewStroke
     * @params viewBackgroundStrokeColor
     * @params viewForegroundStrokeColor
     * @params viewPercentage
     * @params viewProgressFillColor
     * @params viewProgressForeground
     */


    // Validate and return prop, or default.
    const viewLabel = propsHasKey(props.render, 'label') ? props.render.label : DASHBOARD_CIRCULAR_PROGRESS_LABEL;
    const viewLabelColor = propsHasKey(props.render, 'labelColor') ? props.render.labelColor : DASHBOARD_CIRCULAR_PROGRESS_LABEL_COLOR;
    const viewRadius = propsHasKey(props.render, 'radius') ? props.render.radius : DASHBOARD_CIRCULAR_PROGRESS_RADIUS;
    const viewStroke = propsHasKey(props.render, 'stroke') ? props.render.stroke : DASHBOARD_CIRCULAR_PROGRESS_STROKE;
    const viewBackgroundStrokeColor = propsHasKey(props.render, 'backgroundStrokeColor') ? props.render.backgroundStrokeColor : DASHBOARD_CIRCULAR_PROGRESS_BACKGROUND_STROKE_COLOR;
    const viewForegroundStrokeColor = propsHasKey(props.render, 'foregroundStrokeColor') ? props.render.foregroundStrokeColor : DASHBOARD_CIRCULAR_PROGRESS_FOREGROUND_STROKE_COLOR;
    const viewPercentage = propsHasKey(props.render, 'percentage') ? props.render.percentage : DASHBOARD_CIRCULAR_PROGRESS_PERCENTAGE;
    const viewProgressFillColor = propsHasKey(props.render, 'fillColor') ? props.render.fillColor : DASHBOARD_CIRCULAR_PROGRESS_FILL_COLOR;
    const viewProgressForeground = propsHasKey(props.render, 'foregroundColor') ? props.render.foregroundColor : DASHBOARD_CIRCULAR_PROGRESS_FOREGROUND_COLOR;


    /**
     * CLARIFY: Draws SVG object from
     * calculations.
     * @params radius
     * @params width
     * @params height
     * @params viewBox
     * @params dashArray
     * @params dashOffset
     */

    // Calculate render
    const radius = viewRadius - viewStroke / 2;
    const width = viewRadius * 2;
    const height = viewRadius * 2;
    const viewBox = `0 0 ${width} ${height}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * viewPercentage / 100;


    return (
        <div>
            <svg
                className="CircularProgress"
                style={{fill:viewLabelColor}}
                width={viewRadius * 2}
                height={viewRadius * 2}
                viewBox={viewBox}>
                <circle
                    className="CircularProgress-Bg"
                    style={{
                        fill:viewProgressFillColor,
                        stroke:viewBackgroundStrokeColor
                    }}
                    cx={viewRadius}
                    cy={viewRadius}
                    r={radius}
                    strokeWidth={`${viewStroke}px`}
                />
                <circle
                    className="CircularProgress-Fg"
                    cx={viewRadius}
                    cy={viewRadius}
                    r={radius}
                    strokeWidth={`${viewStroke}px`}
                    style={{
                        fill:viewProgressForeground,
                        stroke:viewForegroundStrokeColor,
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
                <text
                    className="CircularProgress-Text"
                    x={viewRadius}
                    y={viewRadius}
                    dy=".4em"
                    textAnchor="middle">
                    {`${viewLabel} ${viewPercentage}%`}
                </text>
            </svg>

        </div>
    )
};

export default DashboardCircularProgress;