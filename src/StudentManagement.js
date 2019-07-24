import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Nav from "./Nav";
import { Tooltip, Zoom } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AccountCircle, Edit, VisibilityOff } from "@material-ui/icons";

const styles = {
    root: {
        width: "100%",
        marginTop: "30px",
        overflowX: "auto"
    },
    table: {
        minWidth: 650
    },
    heading: {
        fontSize: "20px",
        fontWeight: 300
    },
    icon: {
        marginLeft: "10px",
        borderRadius: "40px",
        fontSize: "28px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    editIcon: {
        color: "#4caf50"
    },
    deleteIcon: {
        color: "#f44336"
    },
    viewIcon: {
        color: "#2196F3"
    },
    progress: {
        position: "absolute",
        top: "40%",
        left: "55%"
    }
};

function createData(name, batchName, id) {
    return { name, batchName, id };
}

const rows = [
    createData("Frozen yoghurt", 159, 6),
    createData("Ice cream sandwich", 237, 9),
    createData("Eclair", 262, 167),
    createData("Cupcake", 305, 3),
    createData("Gingerbread", 356, 16)
];

class StudentManagement extends Component {
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

    handleClick = (id, type) => {
        switch (type) {
            case "view":
                this.props.history.push(`/view-student?id=${id}`);
                break;
            case "edit":
                this.props.history.push(`/edit-student?id=${id}`);
                break;
            case "inactive":
                this.inActivateUser(id);
                break;
            default:
                break;
        }
    };

    inActivateUser = id => {
        const data = document.getElementById(id);
        data.style.textDecoration = "line-through";
    };

    render() {
        const { classes } = this.props;
        const display = this.state.loaded ? (
            <Zoom in={this.state.loaded}>
                <div>
                    <h3 className={classes.heading}>Student Management</h3>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">
                                        Batch Name
                                    </TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow id={row.id} key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.batchName}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Tooltip title="View">
                                                <AccountCircle
                                                    onClick={() =>
                                                        this.handleClick(
                                                            row.id,
                                                            "view"
                                                        )
                                                    }
                                                    className={
                                                        classes.viewIcon +
                                                        " " +
                                                        classes.icon
                                                    }
                                                />
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <Edit
                                                    onClick={() =>
                                                        this.handleClick(
                                                            row.id,
                                                            "edit"
                                                        )
                                                    }
                                                    className={
                                                        classes.editIcon +
                                                        " " +
                                                        classes.icon
                                                    }
                                                />
                                            </Tooltip>
                                            <Tooltip title="Inactive">
                                                <VisibilityOff
                                                    onClick={() =>
                                                        this.handleClick(
                                                            row.id,
                                                            "inactive"
                                                        )
                                                    }
                                                    className={
                                                        classes.deleteIcon +
                                                        " " +
                                                        classes.icon
                                                    }
                                                />
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </Zoom>
        ) : (
            <CircularProgress className={classes.progress} />
        );
        return <Nav display={display} />;
    }
}

export default withStyles(styles)(StudentManagement);
