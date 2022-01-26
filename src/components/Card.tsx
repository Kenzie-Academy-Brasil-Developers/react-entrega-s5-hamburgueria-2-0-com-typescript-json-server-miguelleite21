import { Image, Grid, Text, Button, VStack, Heading } from "@chakra-ui/react";
import { useCart } from "../providers/CartProviders";
interface Product {
  ProductId: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface CardProps {
  flaver: string;
  type: string;
  price: number;
  image: string;
  key: number;
  product: Product;
}

const Card = ({ key, image, flaver, type, price, product }: CardProps) => {
  const { addToCart } = useCart();
  return (
    <Grid
      padding={"0px 20px"}
      key={key}
      h={"350px"}
      w="330px"
      margin={"20px"}
      border="2px solid"
      borderColor={"gray.1"}
      borderRadius={"3px"}
      _hover={{ borderColor: "green.1" }}
    >
      <Image ml={"50px"} src={image} h={"190px"} w={"190px"} mb={"5px"} />

      <Heading fontSize={"18px"} mb={"5px"}>
        {flaver}{" "}
      </Heading>
      <Text mb={"5px"} color={"gray.2"}>
        {type}
      </Text>
      <Text mb={"5px"} color={"green.1"}>{`R$ ${price}.00`}</Text>
      <Button
        onClick={() => addToCart(product)}
        mb={"10px"}
        h={"40px"}
        w={"110px"}
        bg="gray.2"
        color={"gray.0"}
        _hover={{ bg: "green.1" }}
      >
        Adicionar
      </Button>
    </Grid>
  );
};

export default Card;
