import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import OpenSkyService from "../service/open-sky-service";

const openSkyService = new OpenSkyService()

const Dashboard = ({isLoggedIn}) => {

    // const [data, setData] = useState([])

    useEffect(() => {
        openSkyService.getDeparturesByAirport('KJFK', '10')
            .then((data)=>{
                console.log(data)
            })
    },[])



    if (isLoggedIn) {
        return (
            <Container>
                <h3>This page is full of secrets!!!</h3>
            </Container>
        )
    }
    return <Redirect to={'/'}/>
};

export default Dashboard;