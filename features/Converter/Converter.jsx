import { RepeatIcon } from "@chakra-ui/icons";
import { Spinner, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import { useCurrency } from "../common/hooks/useCurrency";
import ConverterHeader from "./components/ConverterHeader/ConverterHeader";
import ConverterOption from "./components/ConverterOption";
import ConverterInput from "./components/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay";

const Converter = () => {
  const {
    amount,
    setAmount,
    currencyOne,
    currencyTwo,
    setCurrencyOne,
    setCurrencyTwo,
    currencyList,
    convertedAmount,
    ratesData,
    symbolsData,
    date,
    time,
    isLoading,
    isError,
  } = useCurrency();
  if (isError)
    return (
      <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
        Something has gone terribly wrong
      </Text>
    );

  if (isLoading)
    return (
      <Spinner
        margin="auto 0"
        size="xl"
        thickness="4px"
        speed="0.65s"
        color="purple.500"
        emptyColor="purple.200"
      />
    );
  return (
    <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
      <ConverterHeader />
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        padding={{ base: "6", sm: "10" }}
        gap="1rem"
        backgroundColor="white"
        borderRadius="lg"
      >
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf="center"
          alignSelf="center"
        >
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </GridItem>
        <GridItem
          display={{ base: "none", sm: "block" }}
          colSpan={1}
          justifySelf="center"
          alignSelf="center"
        >
          <RepeatIcon boxSize="2rem" color="purple.300" />
        </GridItem>
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf="center"
          alignSelf="center"
        >
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <ConverterInput value={amount} onAmountChange={setAmount} />
        </GridItem>
        <GridItem colSpan={3} justifySelf='right' alignSelf='right'>
          <ConverterDisplay
            amount={amount}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
          />
        </GridItem>
      </Grid>
      <Text textAlign='center' marginTop='1.5rem' color='whiteAlpha.600' fontSize='sm:'>Built with ❤️, MBTECH✅ 
      <br/>
      {/* <a href="https://olajidemubarak561@gmail.com" target="_blank" ref="noopener noreferrer">Send Your Feedback</a> */}
      </Text>
    </Box>
  );
};

export default Converter;
