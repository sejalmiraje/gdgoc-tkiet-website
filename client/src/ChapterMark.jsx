function ChapterMark() {
  const segments = [
    { d: "M 43,55 L 96,18", color: "#EA4335" },
    { d: "M 43,55 L 96,92", color: "#4285F4" },
    { d: "M 220,18 L 273,55", color: "#34A853" },
    { d: "M 220,92 L 273,55", color: "#FBBC04" },
  ];

  return (
    <svg
      className="chapter-mark"
      viewBox="0 0 316 110"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Google Developer Groups logo"
    >
      {segments.map((segment, index) => (
        <g key={index}>
          <path
            d={segment.d}
            fill="none"
            stroke="#17191D"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={segment.d}
            fill="none"
            stroke={segment.color}
            strokeWidth="34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}
export default ChapterMark;