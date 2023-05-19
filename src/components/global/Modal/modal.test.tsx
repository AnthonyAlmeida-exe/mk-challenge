import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./";
import ReactModal from "react-modal";
ReactModal.setAppElement(document.createElement("div"));

describe("Modal", () => {
  const mockTitle = "Test Title";
  const mockChildren = <div>Test Children</div>;
  const mockCta = jest.fn();
  const mockCloseModal = jest.fn();
  const mockModalIsOpen = true;

  beforeEach(() => {
    render(
      <Modal
        title={mockTitle}
        cta={mockCta}
        children={mockChildren}
        modalIsOpen={mockModalIsOpen}
        closeModal={mockCloseModal}
      />
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

  it('calls the cta function when the "Excluir" button is clicked', () => {
    const excluirButton = screen.getByRole("button", { name: "Excluir" });
    fireEvent.click(excluirButton);
    expect(mockCta).toHaveBeenCalled();
    expect(mockCloseModal).toHaveBeenCalled();
  });

  it('calls the closeModal function when the "Voltar" button is clicked', () => {
    const voltarButton = screen.getByRole("button", { name: "Voltar" });
    fireEvent.click(voltarButton);
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
