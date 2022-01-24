import { Grid, Text, VStack } from "@chakra-ui/react";
import { useCart } from "../providers/CartProviders";
const Cart = () => {
  const { cart, getCart } = useCart();
  return (
    <Grid>
      <Text color={"gray.0"} bgColor={"green.1"}>
        Carrinho de compras
      </Text>
      <VStack>
        <Grid>Hamburguer</Grid>
      </VStack>
    </Grid>
  );
};

export default Cart;
