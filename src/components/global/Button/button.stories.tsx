import { Meta } from "@storybook/react";

import { Button, ButtonProps } from "./index";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    modifier: {
      control: {
        type: "select",
        options: ["default", "link", "link green"],
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button {...args} />
);

export const Default = () => (
  <Template title="Default Button" modifier="default" />
);

export const Link = () => <Template title="Link Button" modifier="link" />;

export const GreenLink = () => (
  <Template title="Green Link Button" modifier="link green" />
);
