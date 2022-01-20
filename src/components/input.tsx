import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
} from "react";

import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
}

type inputVariavelOptions = {
  [key: string]: string;
};

const inputVariavel: inputVariavelOptions = {
  error: "red.2",
  default: "gray.3",
  field: "green.2",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, label, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("field");
    }
  }, [error, value]);
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDirection={"column"}>
        <ChakraInput
          {...rest}
          name={name}
          variant={"outline"}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          color={inputVariavel[variation]}
          borderColor={inputVariavel[variation]}
          onBlurCapture={handleInputBlur}
          _placeholder={{ color: "gray.1" }}
          size={"lg"}
          h="60px"
          ref={ref}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
