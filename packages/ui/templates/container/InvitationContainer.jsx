const InvitationContainer = ({ backgroundColor, children, screen }) => {
  return (
    <div
      className={
        screen
          ? "flex flex-col justify-center items-center p-2 min-h-screen"
          : "flex flex-col justify-center items-center p-2"
      }
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default InvitationContainer;
