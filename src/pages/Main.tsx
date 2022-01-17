import { Link } from "react-router-dom";
import styled from "styled-components";

function Main(): JSX.Element {
  const REPORT: string = "레포트";
  const PASSENGER: string = "승객목록";
  return (
    <Wrapper>
      <List>
        <Link to="/report">
          <Page>{REPORT}</Page>
        </Link>
        <Link to="/passenger">
          <Page>{PASSENGER}</Page>
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
  height: 100vh;
  padding: 60px;
  background: white;
`;

const Page = styled.li`
  margin: 40px 0;
  list-style-type: disc;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
`;
