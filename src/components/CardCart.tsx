import { Button, Grid, HStack, Image, Text } from "@chakra-ui/react";
import { useCart } from "../providers/CartProviders";

interface Product {
  ProductId: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface CardProps {
  product: Product;
}
const CardCart = ({ product }: CardProps) => {
  const { addToCart, removeToCart } = useCart();
  return (
    <Grid key={product.ProductId}>
      <HStack justifyContent={"space-between"}>
        <HStack>
          <Image src={product.img} w={"100px"} h={"100px"} />
          <Text color={"gray.3"} fontSize={"18px"} fontWeight={"bold"}>
            {product.name}
          </Text>
        </HStack>
        <Button
          onClick={() => removeToCart(product)}
          color={"gray.2"}
          bgColor={"gray.0"}
        >
          X
        </Button>
      </HStack>
    </Grid>
  );
};
export default CardCart;
