import React from 'react';
import {NavigationComponent, NextNavigation, BackNavigation} from '../styles/NavigationComponentStyles';

const NextBackNavigation = () => {


    const arrowStyles = {
        fontSize: '40px'
    }
    const textPadding = {
        padding: '0 5px',
        fontSize: '18px'
    }

    return (
        <NavigationComponent>
            <BackNavigation><i style={arrowStyles} class="fa fa-angle-left"></i> <div style={textPadding}>Back</div></BackNavigation>
            <NextNavigation><div style={textPadding}>Next</div> <i  style={arrowStyles} class="fa fa-angle-right"></i></NextNavigation>
        </NavigationComponent>
    )
}



export default NextBackNavigation;