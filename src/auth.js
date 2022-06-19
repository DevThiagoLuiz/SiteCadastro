export const isAuthenticate = () => {
  if (!!localStorage.getItem("token")) {
    return true;
  }
  return false;
};

export default isAuthenticate;
