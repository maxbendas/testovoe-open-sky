import React from 'react';
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AirportList from "../airport-list/airport-list";
import {airports} from "./dashboard-list";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";


const Dashboard = ({isLoggedIn}) => {

    if (isLoggedIn) {
        return (
            <Container>
                <AppBar position="static">
                    <Typography align='center' variant="h4" component="h1">10 major cities with heavy
                        air traffic</Typography>
                    <Typography align='center' component='h2' variant='subtitle1'>Select airport to view
                        flights</Typography>
                </AppBar>
                <AirportList airports={airports}/>
            </Container>
        )
    }
    return <Redirect to={'/'}/>
};

export default Dashboard;