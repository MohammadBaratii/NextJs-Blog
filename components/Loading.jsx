const Loading = ({ container, classes }) => {
  return (
    <div className={container && `w-fit m-auto p-2 bg-black/50 rounded-full`}>
      <div
        className={`${classes} rounded-full border-4 border-white/50 border-t-white animate-spin`}
      ></div>
    </div>
  );
};

export default Loading;
