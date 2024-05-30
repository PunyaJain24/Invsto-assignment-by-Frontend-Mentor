import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />
    }
  ])
  return (
    <Provider store={reduxStore}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
};

export default App;