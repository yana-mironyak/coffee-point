import styled from "styled-components";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 145px 43px 153px 43px;
  height: 100vh;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.darkBrown} 15%,
    ${({ theme }) => theme.colors.brown} 65%,
    ${({ theme }) => theme.colors.lightBrown} 100%
  );
`;

export const Logo = styled.div`
  margin-bottom: 35px;
  width: 156px;
  height: 242px;
  background-image: url(${logo});
  background-size: cover;
`;

export const Title = styled.div`
  margin-bottom: 50px;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #7e7ef0;
`;
