import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TutorCourse from "./components/TutorCourse";
import TutorHome from "./components/TutorHome";
import TutorAllCourse from "./components/TutorAllCourse";
import AdminWaiting from "./components/AdminWaiting";
import AdminSuccess from "./components/AdminSuccess";
import { useSelector } from "react-redux";
import MyNav from "./components/TutorNavBar";

const PrivateRouter = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  let arr = [
    {
      path: "/tutor/course",
      component: TutorCourse,
    },
    {
      path: "/tutor/allcourse",
      component: TutorAllCourse,
    },
    {
      path: "/tutor/home",
      component: TutorHome,
    },
  ];

  if (auth.login === true)
    return (
      <>
        <Switch>
          {arr.map((item) => {
            return <Route path={item.path} component={MyNav} exact={true} />;
          })}
        </Switch>
        <Switch>
          {arr.map((item) => {
            return (
              <Route path={item.path} component={item.component} exact={true} />
            );
          })}
        </Switch>
      </>
    );
  return <Redirect to="/login" />;
};

export default PrivateRouter;
