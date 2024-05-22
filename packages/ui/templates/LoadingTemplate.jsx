const LoadingTemplate = ({ screen=true }) => {
  return (
    <div className={ screen ? "min-h-screen flex items-center justify-center" : "flex items-center justify-center h-full" }>
      <div className="border-lightpink h-20 w-20 animate-spin rounded-full border-8 border-t-pink" />
    </div>
  );
};

export default LoadingTemplate;
