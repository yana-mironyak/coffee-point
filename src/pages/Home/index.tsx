import { Logo, StyledLink, StyledPage, Title } from "./style";

export const Home = () => {
  return (
    <StyledPage>
      <Logo />
      <Title>COFFEE POINT</Title>
      <StyledLink to={""}>Login</StyledLink>
      <StyledLink to={""}>Sign up</StyledLink>
    </StyledPage>
  );
};
