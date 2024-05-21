const InvitationContainer = ({
  backgroundColor,
  children,
  screen,
  full = false,
}) => {
  return (
    <div
      className={
        screen
          ? "flex flex-col justify-center items-center p-2 min-h-screen gap-3"
          : full
            ? "flex flex-col justify-center items-center p-2 min-h-full gap-3"
            : "flex flex-col justify-center items-center p-2 gap-3"
      }
      style={{
        backgroundColor: backgroundColor,
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default InvitationContainer;
