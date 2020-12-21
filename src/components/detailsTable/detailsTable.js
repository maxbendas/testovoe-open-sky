import React from 'react';
import moment from "moment";
import {Paper} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const DetailsTable = ({data}) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>icao24</TableCell>
                        <TableCell align="center">Arrival Airport</TableCell>
                        <TableCell align="center">Departure Airport</TableCell>
                        <TableCell align="center">Time Of Departure</TableCell>
                        <TableCell align="center">Time Of Arrival</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item,idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                {item.icao24}
                            </TableCell>
                            <TableCell align="center">{item.estArrivalAirport}</TableCell>
                            <TableCell align="center">{item.estDepartureAirport}</TableCell>
                            <TableCell align="center">
                                {moment.unix(item.firstSeen).format("YYYY-MM-DD HH:mm")}
                            </TableCell>
                            <TableCell align="center">
                                {moment.unix(item.lastSeen).format("YYYY-MM-DD HH:mm")}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DetailsTable;