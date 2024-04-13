import {useQueries} from "@tanstack/react-query"
import { useState } from "react"
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData";

export const useCurrency = () => {
    const [amount, setAmount] = useState(25);
    const [currencyOne, setCurrencyOne] = useState("GBP");
    const [currencyTwo, setCurrencyTwo] = useState("EUR");

    const [ratesData, symbolsData] = useQueries({
        queries: [
        {
        queryKey:["rates", currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({rates,date,timestamp}) => {
            return {rates,date,timestamp};
        }
    },
    {
        queryKey: ['symbols'],
        queryFn: () => fetchSymbols,
        staleTime: Infinity,
        select: ({symbols}) => symbols
    }
]
});

    console.log(ratesData);

    return { amount, currencyOne, currencyTwo};
};