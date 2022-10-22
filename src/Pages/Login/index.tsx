import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { IFormLogin, defaultValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Column, Title } from "./styles"

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo Obrigatório."),
  senha: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório.")
}).required();

function App() {

  const {
    control, 
    formState: {errors, isValid}
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange"
  })

  const submitForm = () => {
    if(isValid){
      alert("Bem Vindo!")
    }
  }

  return (
    <>
    <Container>
      <Column>
    <Title>Login</Title>
    <Input 
    name="email"
    placeholder="Nome"
    control={control} errorMessage={errors.email?.message}/>
    <Input 
    name="senha"
    placeholder="Senha"
    type="password"
    control={control} errorMessage={errors.senha?.message}/>
    <Button title="Login" handleOnClick={submitForm} />
    </Column>
    </Container>
    </>
  );
}

export default App;
