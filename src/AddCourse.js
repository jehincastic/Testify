import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const style = {
    container: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: 1200,
        backgroundColor: "rgba(0,0,0,0.7)",
        top: 0,
        left: 0
    },
    baseContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    containerForm: {
        display: "flex",
        // flexDirection: "column",
        width: "90%",
        margin: "0 auto",
        marginTop: "80px"
    },
    textField: {
        marginLeft: "10px",
        marginRight: "10px",
        color: "white"
    },
    heading: {
        color: "black",
        fontSize: "26px",
        fontWeight: "500",
        marginTop: "30px",
        marginLeft: "40px"
    },
    closeBtn: {
        marginTop: "30px",
        color: "black",
        fontSize: "30px",
        marginRight: "40px",
        width: "21px",
        transition: "all 0.3s",
        "&:hover": {
            fontSize: "31px",
            cursor: "pointer"
        }
    },
    content: {
        color: "white",
        width: "600px",
        backgroundColor: "#E8E8E8",
        paddingTop: "30px",
        paddingBottom: "100px",
        zIndex: 1222,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )"
    },
    btn: {
        width: "120px",
        margin: "0 auto",
        marginTop: "40px"
    },
    fab: {
        
    }
};

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name);
        this.setState({
            name: ""
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    closeClick = () => {
        this.props.setAddCourse(!this.props.addCourse);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div onClick={this.closeClick} className={classes.container} />
                <div className={classes.content}>
                    <div className={classes.baseContainer}>
                        <div className={classes.heading}>Create New Course</div>
                        <div className={classes.closeBtn}>
                            <i
                                onClick={this.closeClick}
                                className="fas fa-times"
                            />
                        </div>
                    </div>
                    <form
                        className={classes.containerForm}
                        noValidate
                        autoComplete="off"
                        onSubmit={this.handleSubmit}
                    >
                        <TextField
                            id="outlined-name"
                            label="Topic Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                            margin="normal"
                            variant="outlined"
                        />
                        <Fab
                            color="primary"
                            aria-label="Add"
                            className={classes.fab}
                        >
                            <AddIcon />
                        </Fab>
                        {/* <Button
                            variant="contained"
                            className={classes.btn}
                            color="primary"
                        >
                            Add Topic
                        </Button> */}
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(AddCourse);
