import { Heading, Flex, Text, Grid, VStack, Button } from "@chakra-ui/react";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../providers/AuthProviders";

const signInSchema = yup.object().shape({
  email: yup.string().required("email obrigatorio").email("email obrigatorio"),
  password: yup.string().required("Senha obrigatoria"),
});

interface signInData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn, goTo, loginErr } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<signInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: signInData) => {
    signIn(data);
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
        onSubmit={handleSubmit(handleSignIn)}
        as="form"
        mt={"4"}
        w={["100%", "80%", "80%", "40%"]}
        padding={"30px 15px"}
      >
        <Heading fontSize={"24px"}>Login</Heading>
        {loginErr && (
          <Text color={"red.2"} fontSize={"20px"}>
            Email ou Senha Invalidos
          </Text>
        )}
        <VStack spacing={"5"} mt={"4"}>
          <Input
            placeholder="digite seu email"
            label={"Email"}
            error={errors.email}
            {...register("email")}
          />
          <Input
            placeholder="digite sua senha"
            label={"Senha"}
            type="password"
            error={errors.password}
            {...register("password")}
          />
          <Button
            type="submit"
            bgColor={"green.1"}
            width={"100%"}
            h={"60px"}
            color={"gray.0"}
            _hover={{
              bgColor: "green.2",
            }}
          >
            Logar
          </Button>
          <Text textAlign={"center"} color={"gray.2"}>
            Crie sua conta para saborear muitas delícias e <br />
            matar sua fome!
          </Text>
          <Button
            onClick={() => goTo("/register")}
            bgColor={"gray.1"}
            width={"100%"}
            h={"60px"}
            color={"gray.3"}
            _hover={{
              bgColor: "gray.2",
            }}
          >
            Cadastrar
          </Button>
        </VStack>
      </Grid>
      <Grid
        w={"50%"}
        pl={["0px", "0px", "100px", "100px"]}
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
    </Flex>
  );
};

export default Login;
