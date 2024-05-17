const InvitationContainer = ({ backgroundColor, children, screen, full=false }) => {
  return (
    <div
      className={
        screen
          ? "flex flex-col justify-center items-center p-2 min-h-screen"
          :  full ? "flex flex-col justify-center items-center p-2 min-h-full" : "flex flex-col justify-center items-center p-2"
      }
      style={{
        backgroundColor: backgroundColor,
        position: "relative"
      }}
    >
      {children}
    </div>
  );
};

export default InvitationContainer;
