import React, { Component } from "react";
import Nav from "./Nav";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";

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
        width: "55%",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "40px 0px 40px 0px"
    },
    mainFormContainer: {
        display: "flex",
        flexDirection: "column"
    },
    firstConatinerForm: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    nameInput: {
        display: "flex",
        flexDirection: "column",
        width: "60%"
    },
    fname: {
        marginBottom: "20px"
    },
    email: {
        width: "100%",
        margin: "0 auto",
        marginTop: "20px"
    },
    picture: {
        width: "120px",
        height: "120px",
        borderRadius: "80px",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        border: "3px solid #f1f1f1",
        transition: "all 0.3s ease",
        "&:hover": {
            cursor: "pointer",
            borderColor: "red"
        }
    },
    file: {
        marginTop: "-100px",
        transform: "scale(6)",
        width: "120px",
        height: "120px",
        position: "relative",
        opacity: 0,
        zIndex: 2000
    },
    imgUpload: {
        width: "120px",
        height: "120px"
    },
    button: {
        marginTop: "20px"
    },
    progress: {
        position: "absolute",
        top: "40%",
        left: "55%"
    }
};

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: "",
            fName: "",
            lName: "",
            email: "",
            phone: "",
            userName: "",
            password: "",
            batch: "newBatch",
            src: "http://macc.chauka.in/img/default-profile.png",
            open: false,
            batchName: "",
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

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleOpen1 = () => {
        this.setState({ open1: true });
    };

    handleClose1 = (event, reason) => {
        if (reason === "clickaway") {
            this.setState({ open1: false });
            return;
        }
        this.setState({ open1: false });
    };

    handleClose = (event, reason) => {
        if (reason === "clickaway") {
            this.setState({ open: false });
            return;
        }
        this.setState({ open: false });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (
            this.state.batchName.toLowerCase() === "one" &&
            this.state.batch === "newBatch"
        ) {
            this.handleOpen1();
        } else {
            console.log(this.state);
        }
    };

    handleChange = e => {
        if (e.target.name === "imgURL") {
            const input = document.getElementById("fileUpload");
            const fReader = new FileReader();
            if (
                input.files[0].type === "image/x-icon" ||
                input.files[0].type === "image/jpeg" ||
                input.files[0].type === "image/png"
            ) {
                fReader.readAsDataURL(input.files[0]);
                fReader.onloadend = e => {
                    const data = e.target.result;
                    // const encoded = new TextEncoder().encode(data);
                    // const buf = encoded.buffer;
                    this.setState({ src: data, imgURL: data });
                };
            } else {
                this.handleOpen();
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    };

    render() {
        const { classes } = this.props;
        const display = this.state.loaded ? (
            <Grow in={this.state.loaded}>
                <div className={classes.root}>
                    <h3 className={classes.heading}>Add New Student</h3>
                    <div className={classes.container}>
                        <div className="row">
                            <div className="col-md-2" />
                            <div className="col-md-8">
                                <div className={classes.conatinerSub}>
                                    <form onSubmit={this.handleSubmit}>
                                        <div
                                            className={
                                                classes.mainFormContainer
                                            }
                                        >
                                            <div
                                                className={
                                                    classes.firstConatinerForm
                                                }
                                            >
                                                <div
                                                    className={
                                                        classes.imgUpload
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            classes.picture
                                                        }
                                                    >
                                                        <img
                                                            src={this.state.src}
                                                            alt="Placeholder"
                                                            className={
                                                                classes.imgUpload
                                                            }
                                                        />
                                                        <input
                                                            className={
                                                                classes.file +
                                                                " file"
                                                            }
                                                            id="fileUpload"
                                                            type="file"
                                                            accept="image/x-icon, image/jpeg, image/png"
                                                            name="imgURL"
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        classes.nameInput
                                                    }
                                                >
                                                    <TextField
                                                        id="first-name"
                                                        label="First Name"
                                                        className={
                                                            classes.textField
                                                        }
                                                        value={this.state.fName}
                                                        name="fName"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                        margin="normal"
                                                        required
                                                    />
                                                    <TextField
                                                        id="last-name"
                                                        label="Last Name"
                                                        className={
                                                            classes.textField
                                                        }
                                                        value={this.state.lName}
                                                        name="lName"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                        margin="normal"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <TextField
                                                id="email"
                                                label="Email"
                                                className={classes.email}
                                                value={this.state.email}
                                                name="email"
                                                type="email"
                                                onChange={this.handleChange}
                                                margin="normal"
                                                required
                                            />
                                            <TextField
                                                id="phone"
                                                label="Phone Number"
                                                className={classes.email}
                                                value={this.state.phone}
                                                name="phone"
                                                onChange={this.handleChange}
                                                margin="normal"
                                                type="number"
                                            />
                                            <TextField
                                                id="userName"
                                                label="User Name"
                                                className={classes.email}
                                                value={this.state.userName}
                                                name="userName"
                                                onChange={this.handleChange}
                                                margin="normal"
                                                required
                                                autoComplete="username"
                                            />
                                            <TextField
                                                id="password"
                                                label="Password"
                                                className={classes.email}
                                                value={this.state.password}
                                                name="password"
                                                onChange={this.handleChange}
                                                margin="normal"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                            />
                                            <FormControl
                                                className={classes.email}
                                            >
                                                <InputLabel htmlFor="age-simple">
                                                    Batch
                                                </InputLabel>
                                                <Select
                                                    value={this.state.batch}
                                                    onChange={this.handleChange}
                                                    inputProps={{
                                                        name: "batch",
                                                        id: "batch-simple"
                                                    }}
                                                >
                                                    <MenuItem value="newBatch">
                                                        <em>New Batch</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>
                                                        One
                                                    </MenuItem>
                                                    <MenuItem value={2}>
                                                        Two
                                                    </MenuItem>
                                                    <MenuItem value={3}>
                                                        Three
                                                    </MenuItem>
                                                </Select>
                                                {this.state.batch ===
                                                "newBatch" ? (
                                                    <TextField
                                                        id="batchName"
                                                        label="Batch Name"
                                                        className={
                                                            classes.email
                                                        }
                                                        value={
                                                            this.state.batchName
                                                        }
                                                        name="batchName"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                        margin="normal"
                                                        type="text"
                                                        required
                                                    />
                                                ) : null}
                                            </FormControl>
                                        </div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            type="submit"
                                        >
                                            Add Student
                                        </Button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-2" />
                        </div>
                    </div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        onExited={this.handleExited}
                        ContentProps={{
                            "aria-describedby": "message-id1"
                        }}
                        message={<span id="message-id1">Use Images Only</span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        ]}
                    />
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                        open={this.state.open1}
                        autoHideDuration={6000}
                        onClose={this.handleClose1}
                        onExited={this.handleExited}
                        ContentProps={{
                            "aria-describedby": "message-id"
                        }}
                        message={
                            <span id="message-id">
                                Batch Name Already Exists
                            </span>
                        }
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleClose1}
                            >
                                <CloseIcon />
                            </IconButton>
                        ]}
                    />
                </div>
            </Grow>
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

export default withStyles(style)(AddStudent);
