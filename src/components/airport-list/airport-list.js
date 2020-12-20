import React, {useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Details from "../details/details";

const useStyles = makeStyles(() =>
    createStyles({
        root: {},
    }),
);

const AirportList = ({airports}) => {

    const classes = useStyles();

    const [icao, setIcao] = useState(null)
    const [name, setName] = useState(null)
    const [openModal, setOpenModal] = useState(false)


    const onItemSelected = ({icao, name}) => {
        setIcao(icao)
        setName(name)
        setOpenModal(true)
        console.log(name, icao)
    }

    const onClose = () => {
        setOpenModal(false)
    }

    const items = airports.map((item, idx) => {
        return (
            <ListItem
                onClick={() => onItemSelected(item)}
                button
                key={idx}
            >
                <ListItemText primary={
                    item.name
                }/>
            </ListItem>
        )
    })

    return (
        <>
            <List className={classes.root}>
                {items}
            </List>
            <Dialog open={openModal}
                    onClose={onClose}
                    fullWidth={true}
                    // maxWidth='lg'
            >
                <Container>
                    <Typography>{name}</Typography>
                    <Typography>{icao}</Typography>
                </Container>
                <Details airport={icao}/>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onClose}>
                        Close
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );
}

export default AirportList;