import React from 'react'
import ProductList from './product-list';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    noticeBox: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        border: "1px solid black",
        top: "10vh",
        height: '10vh',
        minWidth: '250px',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center"
    },
    productPayment:{
        width: '50vw',
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        border: '1px solid black',
        top: "30%",
        minWidth: '250px'
    }
}));

export default function PaymentCash() {
    
        const classes = useStyles();

        return (
            <div className="container">
                <div className="notice">
                    <Box sx={{ width: '30vw' }} className={classes.noticeBox}>
                        <Typography variant="body1" textAlign="center">
                            CONTACT CLERK FOR <br/> COMPLETE PAYMENT
                        </Typography>
                    </Box>
                </div>
                <div className={classes.productPayment}>
                    <ProductList/>
                </div>
            </div>
            
        );
        
}