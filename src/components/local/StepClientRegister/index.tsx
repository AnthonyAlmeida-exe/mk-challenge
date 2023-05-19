import { Select } from "@/components/global/Select";
import { FormWrapper } from "../../global/FormWrapper";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { Button } from "@/components/global/Button";
import { Divider } from "@/components/global/Divider";
import Input from "@/components/global/Input";
import { useFormContext } from "@/context/useFormContext";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUser } from "../../../redux/actions/userAction";
import RootState from "@/redux/types";
import { toast } from "react-toastify";
import { userSchema } from "@/utils/schemaFormUser";

export function StepClientRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const { goToNextStep } = useFormContext();
  const users = useSelector((state: RootState) => state?.users);
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(addUser(data));
    goToNextStep();

    toast.success("Usuário cadastrado com sucesso!");
  };

  const handleEmptyAction = () => {
    toast.error("Feature em progresso!");
  };

  const usersOptions = users.map((e) => {
    return { value: e.nomeCompleto, option: e.nomeCompleto };
  });

  return (
    <FormWrapper
      title={"Buscar cliente"}
      cta={handleSubmit(onSubmit)}
      disabled={false}
      goBack={handleEmptyAction}
    >
      <form>
        {usersOptions.length > 0 && (
          <S.InputsWrapper>
            <Select
              label="Buscar cliente"
              options={usersOptions}
              id={"client-search"}
            />
            <Button
              title="Buscar"
              className="search"
              onClick={handleEmptyAction}
              type="button"
            />
            <Button
              title="Adicionar pessoas"
              className="register-client"
              onClick={handleEmptyAction}
              type="button"
            />
          </S.InputsWrapper>
        )}
        <Divider />
        <S.FormUserWrapper>
          <Input
            label="Nome Completo"
            className="full-name"
            placeholder="Antônio José dos Santos"
            {...register("nomeCompleto", { required: true })}
            error={errors?.nomeCompleto?.message as string}
          />

          <div>
            <Input
              label="CPF"
              className="cpf"
              placeholder="407.495.188-98"
              mask="999.999.999-99"
              {...register("cpf", { required: true })}
              error={errors?.cpf?.message as string}
            />
            <Input
              label="IR/RG"
              className="rg"
              placeholder="34.420.078-0"
              mask="99.999.999-9"
              {...register("rg", { required: true })}
              error={errors?.rg?.message as string}
            />
            <Input
              label="Orgão Emissor"
              className="issuer"
              placeholder="SSP"
              type="text"
              {...register("orgaoEmissor", { required: true })}
              error={errors?.orgaoEmissor?.message as string}
            />
          </div>
          <div>
            <Input
              label="Telefone"
              className="phone"
              placeholder="(11) 0000-000"
              mask="(99) 9999-9999"
              {...register("telefone", { required: true })}
              error={errors?.telefone?.message as string}
            />
            <Input
              label="Celular"
              className="celphone"
              placeholder="(11) 0000-000"
              mask="(99) 9999-9999"
              {...register("celular", { required: true })}
              error={errors?.celular?.message as string}
            />
          </div>
        </S.FormUserWrapper>
        <Divider />
        <S.SecondFormContainer>
          <Input
            label="Data de nascimento"
            className="birthday"
            placeholder="17/04/1995"
            mask="99/99/9999"
            {...register("dataNascimento", { required: true })}
            error={errors?.dataNascimento?.message as string}
          />
          <Input
            label="Nacionalidade"
            className="nationality"
            placeholder="Brasileira"
            {...register("nacionalidade", { required: true })}
            error={errors?.nacionalidade?.message as string}
          />
          <Select
            label="Estado de nascimento"
            options={[
              { value: "Acre", option: "Acre" },
              { value: "Alagoas", option: "Alagoas" },
              { value: "Amapá", option: "Amapá" },
              { value: "Amazonas", option: "Amazonas" },
              { value: "Bahia", option: "Bahia" },
            ]}
            id={"state"}
            {...register("estadoNascimento", { required: true })}
            error={errors?.estadoNascimento?.message as string}
          />
          <Select
            label="Naturalidade (Cidade de Nascimento)"
            options={[
              { value: "São Paulo", option: "São Paulo" },
              { value: "Rio de Janeiro", option: "Rio de Janeiro" },
              { value: "Salvador", option: "Salvador" },
              { value: "Brasília", option: "Brasília" },
              { value: "Belo Horizonte", option: "Belo Horizonte" },
            ]}
            id={"city"}
            {...(register("naturalidade"), { required: true })}
            error={errors?.naturalidade?.message as string}
          />
        </S.SecondFormContainer>
        <Divider />
        <S.ThirtyFormContainer>
          <Select
            label="Estado civil"
            options={[
              { value: "Solteiro", option: "Solteiro" },
              { value: "Casado", option: "Casado" },
              { value: "Divorciado", option: "Divorciado" },
            ]}
            id={"estado-civil"}
            {...(register("estadoCivil"), { required: true })}
            error={errors?.estadoCivil?.message as string}
          />
          <Select
            label="Sexo"
            options={[
              { value: "Masculino", option: "Masculino" },
              { value: "Feminino", option: "Feminino" },
            ]}
            id={"sexo"}
            {...(register("sexo"), { required: true })}
            error={errors?.sexo?.message as string}
          />
        </S.ThirtyFormContainer>

        <Divider />
        <S.RefreshButtonWrapper>
          <Button title="Atualizar" className="refresh-button" />
        </S.RefreshButtonWrapper>
      </form>
    </FormWrapper>
  );
}
