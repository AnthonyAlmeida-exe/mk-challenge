import { FormWrapper } from "./index";

export default {
  title: "Components/FormWrapper",
  component: FormWrapper,
};

export const Default = () => (
  <div
    style={{
      backgroundColor: "#f0f4f5",
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <FormWrapper title="Wrapper title" />
  </div>
);
