import { Link } from "react-router-dom";
import styled from "styled-components";

function Main(): JSX.Element {
  return (
    <Wrapper>
      <List>
        <Link to="/report">
          <Page>레포트</Page>
        </Link>
        <Link to="/passenger">
          <Page>승객목록</Page>
        </Link>
      </List>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  width: 600px;
  padding: 40px;
  list-style-type: disc;
  background: white;
`;

const Page = styled.li`
  margin: 40px 0;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
`;
