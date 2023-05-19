import { render, screen } from "@testing-library/react";
import { Select } from "./";

describe("Select", () => {
  const mockLabel = "Test Label";
  const mockOptions = [
    { value: "option1", option: "Option 1" },
    { value: "option2", option: "Option 2" },
    { value: "option3", option: "Option 3" },
  ];
  const mockId = "test-select";
  const mockClassName = "custom-select";
  const mockRef = jest.fn();
  const mockError = "Test error";

  beforeEach(() => {
    render(
      <Select
        label={mockLabel}
        options={mockOptions}
        id={mockId}
        className={mockClassName}
        ref={mockRef}
        error={mockError}
      />
    );
  });

  it("renders the label", () => {
    const labelElement = screen.getByText(mockLabel);
    expect(labelElement).toBeInTheDocument();
  });

  it("renders the options", () => {
    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(mockOptions.length);
  });

  it("renders the error message", () => {
    const errorMessageElement = screen.getByText(mockError);
    expect(errorMessageElement).toBeInTheDocument();
  });
});
