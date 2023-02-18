import React from "react";
import {Route, withRouter} from "react-router-dom";

const Main = function (props:any) {
    const {
        component: ChildComponent,
        match,
        history,
        ...rest
    } = props;

    return (
        <div className='G-container'>
            <Route
              {...rest}
              render={matchProps => {
                  return <ChildComponent className='G-page' {...matchProps} />;
              }}
            />
        </div>
    )
};

export default withRouter(Main);
