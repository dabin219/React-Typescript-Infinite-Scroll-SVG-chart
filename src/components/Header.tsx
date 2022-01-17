import styled from "styled-components";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  const LOGO: string = "Motionlabs";
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Title>{LOGO}</Title>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 600px;
  height: 70px;
  padding: 0 20px;
  background: #000000;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 70px;
`;
