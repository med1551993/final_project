import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "./JS/userSlice";
import PrivateRoute from "./router/PrivateRoute";
import Welcome from "./Components/Welcome/Welcome";
import PostList from "./Components/PostList/PostList";
import PublishPost from "./Components/PublishPost/PublishPost";
import Apropos from "./Components/A propos/Apropos";
import Contact from "./Components/Contact/Contact";
import { getVoyage } from "./JS/voyageSlice";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    };
      
      dispatch(getVoyage())
  
  }, []); 
  return (
 
  <Routes>
       <Route index element={ <Welcome />} />
       <Route path="/welcome" element={<Welcome />} />
       <Route path="/apropos" element={<Apropos />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/search" element={<PostList />} />
       <Route path="/publish" element={<PublishPost />} />
       <Route element={<PrivateRoute />}>
           <Route path="/Dashbord" element={<Dashbord />} />
       </Route>
  </Routes>
  );
}

export default App;
