import styled from "styled-components";

interface barProps {
  x: number;
  y: number;
  width: number;
  height: number;
  startDate: string;
  period: number;
}

function Bar({
  x,
  y,
  width,
  height,
  startDate,
  period,
}: barProps): JSX.Element {
  const changeDateForm = (date: string) => {
    const dateArr = date.split("-");
    return dateArr && dateArr[1] + "/" + dateArr[2];
  };

  return (
    <>
      <rect
        x={x}
        y={y}
        rx={10}
        ry={10}
        width={width}
        height={height}
        fill={"rgb(51, 51, 51)"}
      />
      <Period x={x + 4} y={y - 12}>
        {period + "일"}
      </Period>
      <Date x={x} y={120}>
        {changeDateForm(startDate)}
      </Date>
    </>
  );
}

export default Bar;

const Period = styled.text`
  color: rgb(85, 85, 85);
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

const Date = styled.text`
  color: rgb(85, 85, 85);
  font-size: 12px;
  font-weight: 600;
`;
