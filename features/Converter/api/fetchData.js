import { axios } from "../../../lib/axios";

export const fetchRates = async (currencyOne) => {
    const {data} = await axios.get(
        `/latest?base=${currencyOne}&apiKey${import.meta.env.VITE_API_KEY}`
    )
};
export const fetchSymbols = async () => {}