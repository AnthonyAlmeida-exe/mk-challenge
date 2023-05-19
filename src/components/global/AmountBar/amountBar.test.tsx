import { render, screen } from "@testing-library/react";
import { AmountBar } from "./";

describe("AmountBar", () => {
  test('exibe o texto "SubTotal"', () => {
    render(<AmountBar />);
    const subtotalText = screen.getByText("SubTotal");
    expect(subtotalText).toBeInTheDocument();
  });

  test('exibe o valor "R$ 114,75"', () => {
    render(<AmountBar />);
    const amountValue = screen.getByText("R$ 114,75");
    expect(amountValue).toBeInTheDocument();
  });

  test("exibe a imagem do ícone", () => {
    render(<AmountBar />);
    const arrowIcon = screen.getByAltText("seta verde para baixo");
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon.getAttribute("src")).toContain("test-file-stub");
  });
});
