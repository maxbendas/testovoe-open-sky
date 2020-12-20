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
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DetailsTable from "../detailsTable/detailsTable";

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
    const [departureData, setDepartureData] = useState([])
    const [arrivalData, setArrivalData] = useState([])
    const [time, setTime] = useState(10)
    const [error, setError] = useState(10)

    useEffect(() => {
        openSkyService.getDeparturesByAirport(airport, time)
            .then((departureData) => {
                setDepartureData(departureData)
                setError(null)
            })
            .catch((error)=>{
                setError(error)
            })
    }, [airport, time])

    useEffect(() => {
        openSkyService.getArrivalsByAirport(airport, time)
            .then((arrivalData) => {
                setArrivalData(arrivalData)
                setError(null)
            })
            .catch((error)=>{
                setError(error)
            })
    }, [airport, time])

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
            <Box m={2}>
                <Typography color="primary" align='center' component='h3' variant='h5'>Departure</Typography>
                <DetailsTable data={departureData}/>
                <Typography color="primary" align='center' component='h3' variant='h5'>Arrival</Typography>
                <DetailsTable data={arrivalData}/>
            </Box>
        </Fragment>

    )
}

export default Details



