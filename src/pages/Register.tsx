import {
  Heading,
  Flex,
  Text,
  Grid,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../providers/AuthProviders";

const signInSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatoria"),
  comfirmPassword: yup.string().required("Senha obrigatoria"),
});

interface signInData {
  name: string;
  email: string;
  password: string;
  comfirmPassword: string;
}

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { Register, goTo } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<signInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: signInData) => {
    setLoading(true);
    Register(data);
  };

  return (
    <Flex
      h={["auto", "auto", "100vh", "100vh"]}
      bg={"gray.0"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      padding={["100px 100px", "100px 100px", "300px 300px ", "300px 300px "]}
      flexDirection={["column", "column", "row", "row"]}
    >
      <Grid
        w={"50%"}
        pr={["0px", "0px", "150px", "150px"]}
        mb={["0px", "0px", "200px", "200px"]}
      >
        <Heading as="h1" color={"gray.3"} fontSize={"24px"} display={"flex"}>
          Burguer <Text color={"red.2"}> kenzie</Text>
        </Heading>
        <Text color={"gray.2"}>
          A vida é como um sanduíche, é preciso
          <br /> recheá-la com os <b color="gray.3">melhores</b>
          <br /> ingredientes.
        </Text>
      </Grid>
      <Grid
        onSubmit={handleSubmit(handleSignIn)}
        as="form"
        mt={"4"}
        w={["100%", "80%", "80%", "40%"]}
        padding={"30px 15px"}
        mr={"80px"}
      >
        <HStack>
          <Heading fontSize={"24px"} mr={"200px"}>
            Cadastro
          </Heading>
          <Button
            textDecoration={"underline"}
            onClick={() => goTo("/")}
            bgColor={"gray.0"}
            width={"100%"}
            color={"gray.2"}
            border={"none"}
            _hover={{
              bgColor: "gray.0",
              color: "gray.3",
            }}
          >
            Retornar ao Login
          </Button>
        </HStack>

        <VStack spacing={"5"} mt={"4"}>
          <Input
            placeholder="digite seu nome"
            label={"Nome"}
            error={errors.name}
            {...register("name")}
          />
          <Input
            placeholder="digite seu email"
            label={"Email"}
            error={errors.email}
            {...register("email")}
            type="email"
          />
          <Input
            placeholder="digite sua senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
          <Input
            placeholder="confirme sua senha"
            type="password"
            error={errors.comfirmPassword}
            {...register("comfirmPassword")}
          />
          <Button
            type="submit"
            isLoading={loading}
            bgColor={"green.1"}
            width={"100%"}
            h={"60px"}
            color={"gray.0"}
            _hover={{
              bgColor: "green.2",
            }}
          >
            Cadastrar
          </Button>
        </VStack>
      </Grid>
    </Flex>
  );
};

export default Register;
