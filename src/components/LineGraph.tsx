import { data } from "../pages/Report";
import styled from "styled-components";

interface pointsProps {
  x: number;
  y: number;
}

interface lineGraphProps {
  points: pointsProps[];
  data: data[];
}

function LineGraph({ points, data }: lineGraphProps): JSX.Element {
  const lines = points.reduce((result: any, point: any, index: number) => {
    if (index === 0) return [];
    const previous = points[index - 1];
    const line = { x1: previous.x, y1: previous.y, x2: point.x, y2: point.y };
    return [...result, line];
  }, []);

  return (
    <svg width="556" height="100">
      {lines.map(({ x1, x2, y1, y2 }: any) => (
        <GraphLine x1={x1} x2={x2} y1={y1} y2={y2} />
      ))}

      {points.map(({ x, y }: any, index) => (
        <>
          <GraphCircle cx={x} cy={y} r="5" />
          <Text x={x - 7} y={y - 10} isLastIndex={index === points.length - 1}>
            {data[index].cycle + "일"}
          </Text>
        </>
      ))}
    </svg>
  );
}

export default LineGraph;

const GraphLine = styled.line`
  stroke: rgb(34, 34, 34);
  stroke-width: 2;
`;

const GraphCircle = styled.circle`
  fill: rgb(34, 34, 34);
`;

const Text = styled.text<{ isLastIndex: boolean }>`
  font-weight: bold;
  font-size: 12px;
  color: ${(props) =>
    !props.isLastIndex ? `rgb(255, 117, 102)` : `rgb(112, 112, 112)`};
`;
