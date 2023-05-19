import { render, fireEvent } from "@testing-library/react";
import { Input } from "./";
import "@testing-library/jest-dom";

describe("Input", () => {
  const defaultProps = {
    label: "Test Label",
  };

  it("renders input with label", () => {
    const { getByText, getByLabelText } = render(<Input {...defaultProps} />);

    const labelElement = getByText("Test Label");
    const inputElement = getByLabelText("Test Label");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("renders input with custom attributes", () => {
    const { getByLabelText } = render(
      <Input {...defaultProps} data-testid="test-input" />
    );

    const inputElement = getByLabelText("Test Label");

    expect(inputElement).toHaveAttribute("data-testid", "test-input");
  });

  it("calls onChange function when input value changes", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Input {...defaultProps} onChange={onChangeMock} />
    );

    const inputElement = getByLabelText("Test Label");

    fireEvent.change(inputElement, { target: { value: "Test Value" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
