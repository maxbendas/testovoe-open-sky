import React from 'react';
import {List} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const AirportList = ({airports}) => {

    const generate = (element)=> {
        return airports.map((value) =>
            React.cloneElement(element, {
                key: {value},
            }),
        );
    }
    return (
            <List>
                {generate(
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>,
                )}
            </List>
        )

    // const items = airports.map((item) => {
    //     return (
    //     <ListItem button
    //         key={item.icao}
    //         // onClick={() => onItemSelected(id)}
    //     >
    //         <ListItemText primary={
    //             item.name
    //         }/>
    //     </ListItem>
    //     )
    // })
    //
    //
    //
    // return (
    //     <List>
    //
    //             {items}
    //
    //     </List>
    // );
}

export default AirportList;