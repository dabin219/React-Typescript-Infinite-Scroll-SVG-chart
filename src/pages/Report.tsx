import { useState, useEffect } from "react";
import styled from "styled-components";

interface data {
  startDate: string;
  endDate: string;
  period: number;
  cycle: number;
}

function Report(): JSX.Element {
  const [data, setData] = useState<data[]>([]);

  const getData = () => {
    fetch(`https://motionz-kr.github.io/playground/apis/report.json`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const SVG_WIDTH = 400;
  const SVG_HEIGHT = 300;

  return (
    <Wrapper>
      <Container>
        <Title>User Report</Title>
        <Chart>
          <Info>
            <Cycle>
              <Dot />
              <Description>활동 주기</Description>
            </Cycle>
            <Start>
              <Line />
              <Description>활동 기간, 시작일</Description>
            </Start>
          </Info>
          <LineGraph>
            {data.map((info) => {
              return (
                <svg
                  key={info.cycle}
                  width={SVG_WIDTH}
                  height={SVG_HEIGHT}
                ></svg>
              );
            })}
          </LineGraph>
          <BarGraph>
            {data.map((info) => {
              return (
                <svg
                  key={info.cycle}
                  width={SVG_WIDTH}
                  height={SVG_HEIGHT}
                ></svg>
              );
            })}
          </BarGraph>
        </Chart>
      </Container>
    </Wrapper>
  );
}

export default Report;

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

const Chart = styled.div`
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const Cycle = styled.div`
  display: flex;
  align-items: center;
`;

const Start = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.span`
  font-size: 10px;
  color: rgb(96, 96, 96);
  margin-right: 4px;
`;

const Dot = styled.div`
  background-color: rgb(34, 34, 34);
  width: 7px;
  height: 7px;
  border-radius: 14px;
  margin-right: 6px;
`;

const Line = styled.div`
  background-color: rgb(34, 34, 34);
  width: 22px;
  height: 7px;
  border-radius: 14px;
  margin-right: 6px;
  margin-left: 18px;
`;

const LineGraph = styled.div`
  position: relative;
`;

const BarGraph = styled.div`
  margin-top: 40px;
`;
