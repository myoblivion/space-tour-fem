import React from "react";
import { Route, useLocation } from "react-router";

import NavbarComponent from "./navbar";
import HomeComponent from "./home"
import DestinationComponent from "./destination";
import CrewComponent from "./crew"
import TechnologyComponent from "./technology";

import "../scss/index.scss";

const AppComponent = () => {
    const URL =
    "https://raw.githubusercontent.com/myoblivion/space-tourism-website-frontendmentor/main/data_13.json";
    const getData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
      };
      const location = useLocation().pathname;
      const newClass = location.split("/")[1];
      console.log(newClass)
    return (
        <div className={"main " + newClass}>
          <NavbarComponent currentRoute={newClass} />
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/destination">
            <DestinationComponent data={getData()} />
          </Route>
          <Route path="/crew">
            <CrewComponent data={getData()} />
          </Route>
          <Route path="/technology">
            <TechnologyComponent data={getData()} />
          </Route>
        </div>
      );
    };
    
export default AppComponent;