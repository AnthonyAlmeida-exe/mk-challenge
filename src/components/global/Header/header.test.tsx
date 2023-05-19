import { render, screen } from "@testing-library/react";
import { Header } from "./";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the MK logo", () => {
    const mkLogo = screen.getByAltText("MK Logo");
    expect(mkLogo).toBeInTheDocument();
  });

  it("renders the bell icon", () => {
    const bellIcon = screen.getByAltText("Bell Icon");
    expect(bellIcon).toBeInTheDocument();
  });

  it("renders the user icon", () => {
    const userIcon = screen.getByAltText("User Icon");
    expect(userIcon).toBeInTheDocument();
  });

  it("has a link to the admin website", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://admin.mknext.com.br/");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
});
