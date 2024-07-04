import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
