export interface User {
  nomeCompleto: string;
  cpf: string;
  rg: string;
  orgaoEmissor: string;
  telefone: string;
  celular: string;
  dataNascimento: string;
  nacionalidade: string;
  estadoNascimento: string;
  naturalidade: string;
  estadoCivil: string;
  sexo: string;
}

export interface RootState {
  users: User[];
}

export default RootState;

export interface UserState {
  users: User[];
}

export const ADD_USER = "ADD_USER";

interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

export type UserActionTypes = AddUserAction;
