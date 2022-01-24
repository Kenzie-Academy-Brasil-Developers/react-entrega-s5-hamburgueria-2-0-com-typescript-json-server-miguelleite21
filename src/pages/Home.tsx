import { Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../providers/AuthProviders";
import { useCart } from "../providers/CartProviders";
const Home = () => {
  const { Logout, goTo } = useAuth();
  const { filterProducts, products, getProducts } = useCart();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Flex p={"20px 50px"} flexDirection={"column"} h={"100vh"}>
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"24px"}>Burguerkenzie</Text>
        <Flex>
          <Flex
            alignItems={"center"}
            border={"1px solid"}
            borderColor={"gray.3"}
            borderRadius={"10px"}
            _hover={{ border: "2px solid" }}
          >
            <Input
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Digitar Pesquisa"
              border="none"
              _hover={{ border: "none" }}
            />
            <Button
              onClick={() => filterProducts(filter)}
              w={"40px"}
              h={"40px"}
              bg={"green.1"}
              color={"gray.0"}
              border={"none"}
              _hover={{ border: "none" }}
            >
              p
            </Button>
          </Flex>
          <Button
            onClick={() => goTo("/cart")}
            w={"40px"}
            h={"40px"}
            bg={"gray.0"}
            color={"gray.2"}
            ml={"20px"}
            _hover={{ bg: "gray.1" }}
          >
            Cart
          </Button>
          <Button
            onClick={() => Logout()}
            w={"40px"}
            h={"40px"}
            bg={"gray.0"}
            color={"gray.2"}
            ml={"20px"}
            _hover={{ bg: "gray.1" }}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
      <Flex mt="80px" flexWrap={"wrap"} justifyContent={"center"}>
        {products.map((product) => (
          <Card
            key={product.ProductId}
            image={product.img}
            flaver={product.name}
            type={product.category}
            price={product.price}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
