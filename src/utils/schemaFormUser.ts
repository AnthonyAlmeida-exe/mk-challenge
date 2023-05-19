import * as yup from "yup";

export const userSchema = yup.object().shape({
  nomeCompleto: yup.string().required("Nome completo é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  rg: yup.string().required("IR/RG é obrigatório"),
  orgaoEmissor: yup.string().required("Órgão emissor é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  celular: yup.string().required("Celular é obrigatório"),
  dataNascimento: yup.string().required("Campo obrigatório"),
  nacionalidade: yup.string().required("Nacionalidade é obrigatória"),
  estadoNascimento: yup.string(),
  naturalidade: yup.string(),
  estadoCivil: yup.string(),
  sexo: yup.string(),
});
