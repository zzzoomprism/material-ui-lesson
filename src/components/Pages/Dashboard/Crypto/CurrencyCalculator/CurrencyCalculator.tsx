import React from "react";
import {Box, Grid, Paper} from "@material-ui/core";
import Advertisment from "./Advertisment";
import {makeStyles} from "@material-ui/core/styles";
import {InjectedFormProps, reduxForm} from "redux-form";
import Calculator from "../../../../../containers/Pages/Dashboard/Crypto/Calculator";

const useStyle = makeStyles((theme: any) => ({
    paper: {
        height: 350,
        [theme.breakpoints.between('sm', 'md')]: {
            height: 400,
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(3),
        },
    }
}));


type FormProps = {
    from: string
    to: string
    amount: number
}

let CurrencyCalculator: React.FC<InjectedFormProps<FormProps>> = ({handleSubmit}) => {
    const classes = useStyle();
    return <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
            <Box mt={3}>
                <Advertisment/>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
                <Box p={4}>
                    <Box fontSize="h4.fontSize">
                        Currency Calculator
                    </Box>
                    <Box fontSize={"body1.fontSize"} mt={2}>
                        1.87 BT equals
                    </Box>
                    <Box fontSize={"h2.fontSize"} mt={1} fontWeight={"bold"}>
                        11345.89 USD
                    </Box>
                    <Box fontSize={"caption.fontSize"} color={"secondary"} mt={1}>
                        @ 1 BTC = 6718.72 USD
                    </Box>
                    <Box mt={2}>
                        <form onSubmit={handleSubmit}>
                            <Calculator/>
                        </form>
                    </Box>
                </Box>
            </Paper>
        </Grid>

    </Grid>
};

let CalculatorForm = reduxForm<FormProps>({
    form: 'calculator',
})(CurrencyCalculator);

export default CalculatorForm;