import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  const defaultProps = {
    title: "Test Button",
  };

  it("renders button with default modifier", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText("Test Button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("default");
  });

  test("renders button wtesth link modifier", () => {
    const { getByText } = render(<Button {...defaultProps} modifier="link" />);
    const buttonElement = getByText("Test Button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("link");
  });

  test("renders button wtesth link green modifier", () => {
    const { getByText } = render(
      <Button {...defaultProps} modifier="link green" />
    );
    const buttonElement = getByText("Test Button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("link");
    expect(buttonElement).toHaveClass("green");
  });

  test("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button {...defaultProps} onClick={onClickMock} />
    );
    const buttonElement = getByText("Test Button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
