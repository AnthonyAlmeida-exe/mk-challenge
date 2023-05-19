import { render, screen, fireEvent } from "@testing-library/react";
import { FormWrapper } from "./";

describe("FormWrapper", () => {
  const mockTitle = "Test Title";
  const mockChildren = <div>Test Children</div>;
  const mockCta = jest.fn();
  const mockGoBack = jest.fn();
  const mockDisabled = false;

  beforeEach(() => {
    render(
      <FormWrapper
        title={mockTitle}
        goBack={mockGoBack}
        cta={mockCta}
        disabled={mockDisabled}
      >
        {mockChildren}
      </FormWrapper>
    );
  });

  it("renders the title", () => {
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the children", () => {
    const childrenElement = screen.getByText("Test Children");
    expect(childrenElement).toBeInTheDocument();
  });

  it('calls the cta function when the "Continuar" button is clicked', () => {
    const continuarButton = screen.getByRole("button", { name: "Continuar" });
    fireEvent.click(continuarButton);
    expect(mockCta).toHaveBeenCalled();
  });

  it('calls the goBack function when the "Voltar" button is clicked', () => {
    const voltarButton = screen.getByRole("button", { name: "Voltar" });
    fireEvent.click(voltarButton);
    expect(mockGoBack).toHaveBeenCalled();
  });
});
