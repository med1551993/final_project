import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../JS/userSlice";

const Dashbord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div>
      Dashbord 
      <button
        onClick={() => {
          dispatch(logout());
          navigate('/login')
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Dashbord;
