import { useState, useEffect } from "react";
import LineGraph from "../components/LineGraph";
import BarChart from "../components/BarChart";
import Bar from "../components/Bar";
import styled from "styled-components";

export interface data {
  startDate: string;
  endDate: string;
  period: number;
  cycle: number;
}

function Report(): JSX.Element {
  const [data, setData] = useState<data[]>([]);
  const [lineGraphData, setLineGraphData] = useState<any>([]);
  const [longestPeriod, setLongestPeriod] = useState<number>(0);

  const calculateLongestPeriod = (data: data[]) =>
    data.reduce((acc, cur) => {
      const { period } = cur;
      return period > acc ? period : acc;
    }, 0);

  const calculateLongestCycle = (data: data[]) =>
    data.reduce((acc, cur) => {
      const { cycle } = cur;
      return cycle > acc ? cycle : acc;
    }, 0);

  const makeLineGraphData = (data: data[]) => {
    const longestCycle = calculateLongestCycle(data);

    const arr = data.map((info: any, index) => {
      const lineHeight = (info.cycle / longestCycle) * 80;
      const chartHeight = 80;
      return {
        x: index * 100 + 30,
        y: chartHeight - lineHeight,
      };
    });
    setLineGraphData(arr);
  };

  const getData = () => {
    fetch(`https://motionz-kr.github.io/playground/apis/report.json`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setLongestPeriod(calculateLongestPeriod(data));
    makeLineGraphData(data);
  }, [data]);

  return (
    <Wrapper>
      <Container>
        <Title>User Report</Title>
        <Charts>
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
          <LineGraphWrapper>
            <LineGraph points={lineGraphData} data={data} />
          </LineGraphWrapper>
          <BarGraph>
            <BarChart height={123} width={556}>
              {data.map((info, index) => {
                const chartHeight = 100;
                const barWidth = 30;
                const barMargin = 78;
                const barHeight = (info.period / longestPeriod) * 100;
                return (
                  <Bar
                    key={info.period}
                    x={index * (barWidth + barMargin) + 20}
                    y={chartHeight - barHeight}
                    width={barWidth}
                    height={
                      info.period === longestPeriod ? chartHeight : barHeight
                    }
                    startDate={info.startDate}
                    period={info.period}
                  />
                );
              })}
            </BarChart>
          </BarGraph>
        </Charts>
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
  background: white;
`;

const Title = styled.h2`
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  color: rgb(36, 36, 36);
  font-size: 1.5em;
  font-weight: bold;
`;

const Charts = styled.div`
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

const LineGraphWrapper = styled.div`
  margin-top: 60px;
  padding-left: 50px;
`;

const BarGraph = styled.div`
  display: flex;
  margin-top: 50px;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
