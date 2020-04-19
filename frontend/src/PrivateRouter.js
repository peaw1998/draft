import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import StudentHome from "./components/StudentHome";
import Status from "./components/Status";
import TutorCourse from "./components/TutorCourse";
import TutorHome from "./components/TutorHome";
import AdminWaiting from "./components/AdminWaiting";
import AdminSuccess from "./components/AdminSuccess";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  if (auth.login === true)
    return (
      <Switch>
        <Route path="/status" component={Status} exact={true} />
        <Route path="/add" component={AddCourse} exact={true} />
        <Route path="/course" component={TutorCourse} exact={true} />
        <Route path="/home" component={TutorHome} exact={true} />
        <Route path="/waiting" component={AdminWaiting} exact={true} />
        <Route path="/success" component={AdminSuccess} exact={true} />
        <Route path="/" component={StudentHome} exact={true} />
      </Switch>
    );
  return <Redirect to="/login" />;
};

export default PrivateRouter;
