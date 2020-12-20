import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ErrorMessage = () => {
    return (
        <Box m={2}>
            <Typography  color='error' component='h6' variant='h6'>Choose a longer time interval</Typography>
        </Box>
    );
};

export default ErrorMessage;