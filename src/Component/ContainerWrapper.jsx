const ContainerWrapper = ({ children, className }) => {
  return (
    <div
      className={`container ${className}`}
      // onClick={(e) => console.log(e.target.closest("div"))}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
