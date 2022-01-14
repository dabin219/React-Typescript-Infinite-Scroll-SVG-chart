import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

interface passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Array<any>;
}

function Passenger(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [passengers, setPassengers] = useState<passenger[]>([]);

  const getData = (currentPage: number) => {
    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`
    )
      .then((res) => res.json())
      .then((res) =>
        setPassengers((currentPassengers) => [
          ...currentPassengers,
          ...res.data,
        ])
      );
  };

  useEffect(() => {
    getData(page);
  }, []);

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPage((prevPage: number) => prevPage + 1);
      getData(page);
    }
  }, [page, passengers]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Wrapper>
      <Container>
        <Title>Passenger List</Title>
        {passengers.map((passenger) => {
          const { _id, name, trips, airline } = passenger;
          return (
            <List key={_id}>
              <Info>
                <Name>{name}</Name>
                <Trips>{trips + " trips"}</Trips>
              </Info>
              <Airline>
                <Logo alt={airline[0].name} src={airline[0].logo}></Logo>
                <Slogan>{airline[0].slogan}</Slogan>
              </Airline>
              <Id>{_id}</Id>
            </List>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default Passenger;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 600px;
  padding: 20px;
`;

const Title = styled.h2`
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  color: rgb(36, 36, 36);
  font-size: 1.5em;
  font-weight: bold;
`;

const List = styled.div`
  padding: 20px 0px;
  border-top: 1px solid rgb(241, 243, 249);
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Trips = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const Airline = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: rgb(242, 242, 242);
`;

const Logo = styled.img`
  width: 80px;
`;

const Slogan = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

const Id = styled.div`
  margin-top: 20px;
  color: rgb(211, 211, 211);
  font-size: 12px;
  font-weight: bold;
  text-align: right;
`;
