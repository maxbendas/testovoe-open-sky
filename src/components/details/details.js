import React from "react"
import {useEffect, useState} from "react";
import OpenSkyService from "../../service/open-sky-service";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List";

const openSkyService = new OpenSkyService()

const Details = ({airport, time}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        openSkyService.getDeparturesByAirport(airport, time)
            .then((data) => {
                return setData(data)
            })
    }, [airport, time])
    console.log(data)

    const items = data.map((item) => {
        return (
            <ListItem
                key={item.icao24}
            >
                <ListItemText primary={
                    item.estDepartureAirport
                }/>
            </ListItem>
        )
    })

    return (
        <List>
            {items}
        </List>
    )
}

export default Details



