const LineGradient = ({ width = "w-full" }) => {
  // bg-gradient no funciona con bordes por eso usamos un div
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
};

export default LineGradient;
