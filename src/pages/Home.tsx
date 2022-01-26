import {
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../providers/AuthProviders";
import { useCart } from "../providers/CartProviders";
import { useDisclosure } from "@chakra-ui/react";
import CardCart from "../components/CardCart";
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Logout } = useAuth();
  const { filterProducts, products, getProducts, removeAll, cart } = useCart();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    getProducts();
  }, []);

  const total = cart.reduce(function (acc, value) {
    return acc + value.price;
  }, 0);

  return (
    <Flex p={"20px 50px"} flexDirection={"column"} h={"100vh"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"gray.0"} bgColor={"green.1"}>
            Carrinho de Compras
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.map((product) => (
              <CardCart product={product} />
            ))}
            <HStack justifyContent={" space-between"}>
              <Text fontWeight={"bold"}>Total</Text>
              <Text fontSize={"16px"} color={"gray.2"}>{`R$${total}.00`}</Text>
            </HStack>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button
              onClick={() => removeAll()}
              w={"90%"}
              bg={"gray.1"}
              color={"gray.2"}
              _hover={{ bg: "gray.1" }}
            >
              Remover Todos
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"24px"} display={"flex"}>
          Burguer <Text color={"red.2"}> kenzie</Text>
        </Text>
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
            onClick={onOpen}
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
            product={product}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
