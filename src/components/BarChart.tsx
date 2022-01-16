interface chartProps {
  children: React.ReactNode;
  width: number;
  height: number;
}

function BarChart({ children, width, height }: chartProps): JSX.Element {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMax meet"
    >
      {children}
    </svg>
  );
}

export default BarChart;
