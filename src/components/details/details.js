import React, {Fragment} from "react"
import {useEffect, useState} from "react";
import OpenSkyService from "../../service/open-sky-service";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import ErrorMessage from "../errorMessage/errorMessage";

const openSkyService = new OpenSkyService()

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Details = ({airport}) => {
    const classes = useStyles();
    console.log(airport)
    const [data, setData] = useState([])
    const [time, setTime] = useState(10)
    const [error, setError] = useState(10)

    useEffect(() => {
        openSkyService.getDeparturesByAirport(airport, time)
            .then((data) => {
                setData(data)
                setError(null)
            })
            .catch((error)=>{
                setError(error)
            })
    }, [airport, time])
    console.log(time)

    const items = data.map((item, idx) => {
        return (
            <ListItem
                key={idx}
            >
                <ListItemText primary={
                    item.estArrivalAirport
                }/>
            </ListItem>
        )
    })

    return (
        <Fragment>
            {error && <ErrorMessage/>}
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Time Interval</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <MenuItem value={10}>Ten minutes</MenuItem>
                    <MenuItem value={20}>Twenty minutes</MenuItem>
                    <MenuItem value={30}>Thirty minutes</MenuItem>
                </Select>
            </FormControl>
            <List>
                {items}
            </List>
        </Fragment>

    )
}

export default Details



