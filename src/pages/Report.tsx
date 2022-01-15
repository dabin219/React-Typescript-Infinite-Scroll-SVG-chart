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

  const SVG_WIDTH = 556;
  const SVG_HEIGHT = 160;

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
            <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
              {data.map((info) => {
                return (
                  <>
                    <GraphLine x1={1} y1={1} x2={1} y2={1} />
                    <GraphCircle cx={1} cy={1} r="4.5" />
                  </>
                );
              })}
            </svg>
          </LineGraph>
          <BarGraph>
            <svg>
              {data.map((info) => {
                const { startDate, endDate, period, cycle } = info;
                return (
                  <BarWrapper>
                    <BarContainer />
                    <Bar>
                      <PeriodWrapper>
                        <Period>{cycle + "일"}</Period>
                      </PeriodWrapper>
                    </Bar>
                    <DateWrapper>
                      <Date>{startDate}</Date>
                    </DateWrapper>
                  </BarWrapper>
                );
              })}
            </svg>
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
  display: flex;
  margin-top: 40px;
  padding-left: 46.5px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const GraphLine = styled.line`
  stroke: rgb(34, 34, 34);
  stroke-width: 2;
`;

const GraphCircle = styled.circle`
  fill: rgb(34, 34, 34);
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 93px;
`;

const BarContainer = styled.div`
  height: 73px;
  width: 30px;
`;

const Bar = styled.div`
  border-radius: 10px;
  height: 27px;
  width: 33px;
  background-color: rgb(51, 51, 51);
`;

const PeriodWrapper = styled.div`
  margin-top: -23px;
  text-align: center;
`;

const Period = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: rgb(85, 85, 85);
`;

const DateWrapper = styled.div`
  margin-top: 5px;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgb(85, 85, 85);
`;
