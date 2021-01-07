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
        <div>
            <Route
              {...rest}
              render={matchProps => {
                  return <ChildComponent className='G-page G-container' {...matchProps} />;
              }}
            />
        </div>
    )
};

export default withRouter(Main);
