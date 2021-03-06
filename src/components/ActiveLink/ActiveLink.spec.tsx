import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

/**
 * Veja que o ActiveLink faz uso do useRouter (funcionalidade externa ao componente).
 * Logo, e necessario criar esse mock.
 */
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

// vai criar uma categorizacao dos testes
describe("ActiveLink component", () => {
  it("renders correctly", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link is currently active", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });
});
