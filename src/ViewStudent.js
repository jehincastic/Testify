import React, { Component } from "react";
import Nav from "./Nav";
import { withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";

const style = {
    root: {
        marginTop: "-30px"
    },
    heading: {
        fontSize: "20px",
        fontWeight: 300,
        marginLeft: "0px"
    },
    container: {
        width: "100%"
    },
    containerProfile: {
        background: "white",
        paddingBottom: "20px"
    },
    flexConatiner: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    image: {
        marginTop: "30px",
        width: "120px",
        height: "120px",
        borderRadius: "80px",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        border: "3px solid #f1f1f1",
        transition: "all 0.1s linear",
        "&:hover": {
            cursor: "pointer",
            borderColor: "#797979"
        }
    },
    border: {
        width: "97%",
        borderBottom: "1px solid #eeeeee"
    },
    userName: {
        fontSize: "23px",
        fontWeight: "300",
        marginTop: "15px"
    },
    email: {
        fontSize: "18px",
        fontWeight: "300"
    },
    infoContainer: {
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        fontSize: "16px",
        marginTop: "-10px",
        marginBottom: "-10px"
    },
    progress: {
        position: "absolute",
        top: "40%",
        left: "55%"
    }
};

class ViewStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        let i = 0;
        const a = setInterval(() => {
            if (i === 0) {
                i++;
                this.setState({ loaded: true });
            } else {
                clearInterval(a);
            }
        }, 5000);
    }

    render() {
        const { classes } = this.props;
        const display = this.state.loaded ? (
            <div className={classes.root}>
                <Zoom in={this.state.loaded}>
                    <h3 className={classes.heading}>View Student Details</h3>
                </Zoom>
                <div className={classes.container}>
                    <div className="row">
                        <Slide
                            direction="right"
                            timeout={800}
                            in={this.state.loaded}
                            mountOnEnter
                            unmountOnExit
                        >
                            <div className="col-md-3">
                                <div className={classes.containerProfile}>
                                    <div className={classes.flexConatiner}>
                                        <img
                                            src="https://www.flynz.co.nz/wp-content/uploads/profile-placeholder-300x300.png"
                                            className={classes.image}
                                            alt="Profile"
                                        />
                                        <div className={classes.userName}>
                                            Name
                                        </div>
                                        <div className={classes.email}>
                                            9999999990
                                        </div>
                                        <div className={classes.email}>
                                            emailid@emailid.in
                                        </div>
                                        <hr className={classes.border} />
                                        <div className={classes.infoContainer}>
                                            <div>Rank</div>
                                            <div>1</div>
                                        </div>
                                        <hr className={classes.border} />
                                        <div className={classes.infoContainer}>
                                            <div>Test Completed</div>
                                            <div>10</div>
                                        </div>
                                        <hr className={classes.border} />
                                        <div className={classes.infoContainer}>
                                            <div>Score</div>
                                            <div>163</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        ) : (
            <CircularProgress className={classes.progress} />
        );
        return (
            <div>
                <Nav display={display} />
            </div>
        );
    }
}

export default withStyles(style)(ViewStudent);
