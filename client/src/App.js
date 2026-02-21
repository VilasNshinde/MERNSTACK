
import User from "./getuser/Userdata";
import Adduser from "./adduser/Adduser";
import Update from"./updateuser/Update";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
const route = createBrowserRouter([

  {
    path:"/",
    element:<User/>,
  },

  {

    path:"/add",
    element:<Adduser/>,
  },
  {

    path:"/update/:id",
    element:<Update/>,
  }

]);
  return (
    <div className="App">
      <RouterProvider router={route}>

      </RouterProvider>
     
    </div>
  );
}

export default App;
