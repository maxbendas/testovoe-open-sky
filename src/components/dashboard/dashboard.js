import React from 'react';
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AirportList from "../airport-list/airport-list";
import {airports} from "./dashboard-list";



const Dashboard = ({isLoggedIn}) => {

    if (isLoggedIn) {
        return (
            <Container>
                <h3>This page is full of secrets!!!</h3>
                <AirportList airports={airports}/>
            </Container>
        )
    }
    return <Redirect to={'/'}/>
};

export default Dashboard;