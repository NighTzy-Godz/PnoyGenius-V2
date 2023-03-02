const ProtectedRoute = ({ inGame }) => {
  if (inGame)
    return toast.error("Sorry You are still in game. Finish it first");
  return children;
};

export default ProtectedRoute;
