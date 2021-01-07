import React, {Suspense, useState} from "react";
import {BrowserRouter, Redirect, Switch} from "react-router-dom";
import Main from "../modules/layouts/main";
import {
  Home,
} from "../modules/home";
import StateContext from "../contexsts/stateContext";
import Paths from './paths';
import {IUserModel} from "../platform/api/user/res/user-model";
import AuthStorage from "../platform/services/storages/authStorage";

const RoutContainer = () => {

  const [user, setUser] = useState<IUserModel>(AuthStorage.getUser());

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
        <StateContext.Provider value={
          {
            userState: {user, setUser},
          }
        }>
          <BrowserRouter>
            <Switch>
              <Main exact path={Paths.HOME} component={Home}/>
              <Redirect to={Paths.HOME} />
            </Switch>
          </BrowserRouter>
        </StateContext.Provider>
    </Suspense>
  )
};

export default RoutContainer;
