import { useCurrency } from "../common/hooks/useCurrency"

const Converter = () => {
    const {amount,currencyOne,currencyTwo} = useCurrency();
  return (
    <>
        <>{amount}</>
        <>{currencyOne}</>
        <>{currencyTwo}</>
    </>
  )
}

export default Converter