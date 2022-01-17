interface chartProps {
  children: React.ReactNode;
}

function BarChart({ children }: chartProps): JSX.Element {
  return (
    <svg
      viewBox={`0 -40 556 220`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMax meet"
    >
      {children}
    </svg>
  );
}

export default BarChart;
