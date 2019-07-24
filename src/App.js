import "./App.css";
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddTopic from "./AddTopic";
import AddStudent from "./AddStudent";
import AddBulkStudents from "./AddBulkStudents";
import StudentManagement from "./StudentManagement";
import ViewStudent from "./ViewStudent";
import EditStudent from "./EditStudent";
import PageNotFound from "./PageNotFound";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route
                    exact
                    path="/dashboard"
                    render={defaultProps => <Dashboard {...defaultProps} />}
                />
                <Route
                    exact
                    path="/add-topic"
                    render={defaultProps => <AddTopic {...defaultProps} />}
                />
                <Route
                    exact
                    path="/add-student"
                    render={defaultProps => <AddStudent {...defaultProps} />}
                />
                <Route
                    exact
                    path="/add-bulk-students"
                    render={defaultProps => (
                        <AddBulkStudents {...defaultProps} />
                    )}
                />
                <Route
                    exact
                    path="/student-management"
                    render={defaultProps => (
                        <StudentManagement {...defaultProps} />
                    )}
                />
                <Route
                    exact
                    path="/view-student"
                    render={defaultProps => <ViewStudent {...defaultProps} />}
                />
                <Route
                    exact
                    path="/edit-student"
                    render={defaultProps => <EditStudent {...defaultProps} />}
                />
                <Route render={() => <PageNotFound />} />
            </Switch>
        </div>
    );
};

export default withRouter(App);
