import React from "react";
import  {cardBreadcrumbs} from "../../../../utils/helpers/cardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";
import PortfolioBalance from "./PortfolioBalance";
import SendMoneyTo from "../../../../containers/Pages/Dashboard/Crypto/SendMoneyTo";
import Box from "@material-ui/core/Box";
import CurrencyNews from "../../../../containers/Pages/Dashboard/Crypto/CurrencyNews";
import CalculatorForm from "./CurrencyCalculator/CurrencyCalculator";
import {withAuthRedirect} from "../../../../hoc/AuthRedirect";

type PropsType = {
    currencyExchange: (from: string, to: string, amount: number) => void
}

type FormDataType = {
    from: string
    to: string
    amount: number
}

const Crypto: React.FC<PropsType> = ({currencyExchange}) => {
    const handleSubmit = ({from, to, amount}: FormDataType) => {
        currencyExchange(from, to, amount);
    }

    return (
        <Box m={3}>
            {cardBreadcrumbs("Crypto", "App", "Dashboard", "Crypto")}
            <CryptoPrice/>
            <PortfolioBalance/>
            <SendMoneyTo/>
            <CalculatorForm onSubmit={handleSubmit}/>
            <CurrencyNews/>
        </Box>
    );
};

export default withAuthRedirect(Crypto);
