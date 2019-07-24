import React from "react";
import Nav from "./Nav";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const styles = {
    root: {
        width: "90%"
    },
    button: {
        marginTop: "10px",
        marginRight: "10px"
    },
    actionsContainer: {
        marginBottom: "20px"
    },
    resetContainer: {
        padding: "30px"
    },
    heading: {
        fontSize: "20px",
        fontWeight: 300,
        marginLeft: "0px"
    },
    icon: {
        marginRight: "5px"
    },
    input: {
        display: "none"
    },
    formControl: {
        marginRight: "40px",
        width: "140px"
    },
    textField: {
        marginLeft: "0px",
        marginRight: "40px"
    },
    resetBtn: {
        marginTop: "15px"
    }
};

const getSteps = () => {
    return ["Read Instructions", "Download Template", "Upload Template"];
};

const getStepContent = step => {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
        case 1:
            return "An ad group contains one or more ads which target a shared set of keywords.";
        case 2:
            return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
        default:
            return "Unknown step";
    }
};

class AddBulkStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            downloaded: false,
            uploaded: false,
            file: "",
            open: false,
            open1: false,
            batch: "newBatch",
            name: ""
        };
    }

    handleNext = () => {
        const active = this.state.activeStep;
        this.setState({
            activeStep: active + 1
        });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === "clickaway") {
            this.setState({ open: false });
            return;
        }
        this.setState({ open: false });
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

    handleChange = e => {
        if (e.target.name === "file") {
            if (e.target.files[0].name.slice(-4) === "xlsx") {
                // const fReader = new FileReader();
                // fReader.readAsDataURL(e.target.files[0]);
                // fReader.onloadend = e => {
                //     const data = e.target.result;
                //     // const encoded = new TextEncoder().encode(data);
                //     // const buf = encoded.buffer;
                //     this.setState({ file: data });
                // };
                const imagedata = e.target.files[0];
                const data = new FormData();
                data.append("data", imagedata);
                this.setState({ file: data, uploaded: true });
            } else {
                this.handleOpen();
            }
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    handleBack = () => {
        const active = this.state.activeStep;
        this.setState({
            activeStep: active - 1
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (
            this.state.name.toLowerCase() === "one" &&
            this.state.batch === "newBatch"
        ) {
            this.handleOpen1();
        } else {
            console.log(this.state);
        }
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            downloaded: false,
            uploaded: false,
            file: "",
            open: false,
            open1: false,
            batch: "newBatch",
            name: ""
        });
    };

    downloadClick = () => {
        this.setState({ downloaded: true });
    };

    render() {
        const steps = getSteps();
        const { downloaded, activeStep, uploaded, batch } = this.state;
        const { classes } = this.props;
        const display = (
            <div className={classes.container}>
                <h3 className={classes.heading}>Add Bulk Students</h3>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>
                                        {getStepContent(index)}
                                    </Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={
                                                    (activeStep === 1 &&
                                                        !downloaded) ||
                                                    (activeStep === 2 &&
                                                        !uploaded)
                                                }
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1
                                                    ? "Finish"
                                                    : "Next"}
                                            </Button>

                                            {activeStep === 1 ? (
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    // href="./abc.pptx"
                                                    className={classes.button}
                                                    onClick={this.downloadClick}
                                                >
                                                    <SaveIcon
                                                        className={classes.icon}
                                                    />
                                                    Download Template
                                                </Button>
                                            ) : activeStep === 2 ? (
                                                <span>
                                                    <input
                                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                        className={
                                                            classes.input
                                                        }
                                                        id="contained-button-file"
                                                        type="file"
                                                        name="file"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button
                                                            variant="contained"
                                                            component="span"
                                                            className={
                                                                classes.button
                                                            }
                                                        >
                                                            <CloudUploadIcon
                                                                className={
                                                                    classes.icon
                                                                }
                                                            />
                                                            Upload
                                                        </Button>
                                                    </label>
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper
                            square
                            elevation={0}
                            className={classes.resetContainer}
                        >
                            <form
                                className={classes.form}
                                autoComplete="off"
                                onSubmit={this.handleSubmit}
                            >
                                <Typography>Select Batch</Typography>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-simple">
                                        Batch
                                    </InputLabel>
                                    <Select
                                        value={batch}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: "batch",
                                            id: "batch-simple"
                                        }}
                                        required
                                    >
                                        <MenuItem value="newBatch">
                                            New Batch
                                        </MenuItem>
                                        <MenuItem value={1}>One</MenuItem>
                                        <MenuItem value={2}>Two</MenuItem>
                                        <MenuItem value={3}>Three</MenuItem>
                                    </Select>
                                </FormControl>
                                {this.state.batch === "newBatch" ? (
                                    <TextField
                                        id="standard-name"
                                        label="Batch Name"
                                        className={classes.textField}
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        name="name"
                                        required
                                    />
                                ) : null}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                >
                                    Add Student
                                </Button>
                            </form>
                            <Button
                                onClick={this.handleReset}
                                className={
                                    classes.button + " " + classes.resetBtn
                                }
                            >
                                Reset
                            </Button>
                        </Paper>
                    )}
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    onExited={this.handleExited}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={<span id="message-id">Use .xlsx Format Only</span>}
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
                        <span id="message-id">Batch Name Already Exists</span>
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
        );
        return <Nav display={display} />;
    }
}

export default withStyles(styles)(AddBulkStudents);
