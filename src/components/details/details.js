import React, {Fragment} from "react"
import {useEffect, useState} from "react";
import OpenSkyService from "../../service/open-sky-service";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import ErrorMessage from "../errorMessage/errorMessage";
import Box from "@material-ui/core/Box";
import DetailsTable from "../detailsTable/detailsTable";
import Button from "@material-ui/core/Button";

const openSkyService = new OpenSkyService()

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    }
}));

const Details = ({airport}) => {
    const classes = useStyles();
    const [departureData, setDepartureData] = useState([])
    const [arrivalData, setArrivalData] = useState([])
    const [time, setTime] = useState(10)
    const [error, setError] = useState(null)
    const [departureDetails, setDepartureDetails] = useState(true)
    const [arrivalDetails, setArrivalDetails] = useState(false)

    useEffect(() => {
        openSkyService.getDeparturesByAirport(airport, time)
            .then((departureData) => {
                setDepartureData(departureData)
                setError(null)
            })
            .catch((error) => {
                setDepartureData([])
                setError(error)
            })
    }, [airport, time])

    useEffect(() => {
        openSkyService.getArrivalsByAirport(airport, time)
            .then((arrivalData) => {
                setArrivalData(arrivalData)
                setError(null)
            })
            .catch((error) => {
                setArrivalData([])
                setError(error)
            })
            .catch(error => alert(error.message))
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
                <Button
                    variant={departureDetails ? "contained" : 'outlined'}
                    color="primary"
                    onClick={() => {
                        setDepartureDetails(true)
                        setArrivalDetails(false)
                    }}>
                    Departure
                </Button>&nbsp;&nbsp;
                <Button
                    variant={arrivalDetails ? "contained" : 'outlined'}
                    color="primary"
                    onClick={() => {
                        setDepartureDetails(false)
                        setArrivalDetails(true)
                    }}
                >
                    Arrival
                </Button>
                {departureDetails && <DetailsTable data={departureData}/>}
                {arrivalDetails && <DetailsTable data={arrivalData}/>}
            </Box>
        </Fragment>

    )
}

export default Details



