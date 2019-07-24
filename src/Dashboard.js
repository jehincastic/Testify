import React, { Component } from "react";
import Nav from "./Nav";
import { withStyles } from "@material-ui/styles";

const style = {
    root: {
        marginTop: "-30px"
    },
    heading: {
        fontSize: "20px",
        fontWeight: 300,
        marginLeft: "28px"
    },
    container: {
        width: "95%",
        margin: "0 auto",
    },
    colContainer: {
        width: "100%",
        margin: "0 auto",
        marginTop: "20px",
        height: "160px",
        display: "flex",
        justifyContent: "space-between"
    },
    colContainer2: {
        backgroundColor: "#1976D2"
    },
    colContainer1: {
        backgroundColor: "#d32f2f"
    },
    colContainer3: {
        backgroundColor: "#388E3C"
    },
    colContainer4: {
        backgroundColor: "#E64A19"
    },
    textContent: {
        marginTop: "40px",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
        color: "white"
    },
    number: {
        fontSize: "40px",
        fontWeight: "500"
    },
    name: {
        fontSize: "20px",
        fontWeight: "300",
        marginLeft: "7px"
    },
    icon: {
        fontSize: "70px",
        marginTop: "35px",
        marginRight: "35px"
    },
    icon2: {
        color: "#2196F3"
    },
    icon1: {
        color: "#f44336"
    },
    icon3: {
        color: "#4CAF50"
    },
    icon4: {
        color: "#FF5722"
    }
};

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        const displayData = (
            <div className={classes.root}>
                <h3 className={classes.heading}>Admin Portal</h3>
                <div className={classes.container}>
                    <div className="row">
                        <div className="col-md-3">
                            <div
                                className={
                                    classes.colContainer +
                                    " " +
                                    classes.colContainer1
                                }
                            >
                                <div className={classes.textContent}>
                                    <span className={classes.number}>150</span>
                                    <span className={classes.name}>Users</span>
                                </div>
                                <div
                                    className={
                                        classes.icon + " " + classes.icon1
                                    }
                                >
                                    <i className="fas fa-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div
                                className={
                                    classes.colContainer +
                                    " " +
                                    classes.colContainer2
                                }
                            >
                                <div className={classes.textContent}>
                                    <span className={classes.number}>150</span>
                                    <span className={classes.name}>Users</span>
                                </div>
                                <div
                                    className={
                                        classes.icon + " " + classes.icon2
                                    }
                                >
                                    <i className="fas fa-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div
                                className={
                                    classes.colContainer +
                                    " " +
                                    classes.colContainer3
                                }
                            >
                                <div className={classes.textContent}>
                                    <span className={classes.number}>150</span>
                                    <span className={classes.name}>Users</span>
                                </div>
                                <div
                                    className={
                                        classes.icon + " " + classes.icon3
                                    }
                                >
                                    <i className="fas fa-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div
                                className={
                                    classes.colContainer +
                                    " " +
                                    classes.colContainer4
                                }
                            >
                                <div className={classes.textContent}>
                                    <span className={classes.number}>150</span>
                                    <span className={classes.name}>Users</span>
                                </div>
                                <div
                                    className={
                                        classes.icon + " " + classes.icon4
                                    }
                                >
                                    <i className="fas fa-user" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                <Nav display={displayData} />
            </div>
        );
    }
}

export default withStyles(style)(Dashboard);
