import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PieChart from "@material-ui/icons/PieChart";
import SignOut from "@material-ui/icons/PowerSettingsNew";
import Help from "@material-ui/icons/Help";
import Code from "@material-ui/icons/Code";
import School from "@material-ui/icons/School";
import Notes from "@material-ui/icons/Notes";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    link: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    formControl: {
        margin: "10px",
        minWidth: 160
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    btnAdd: {
        marginTop: "25px"
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    listItems: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    },
    container: {
        display: "flex",
        flexDirection: "column"
    }
}));

const Nav = props => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openSub1, setOpenSub1] = React.useState(false);
    const [openSub2, setOpenSub2] = React.useState(false);
    const [openSub3, setOpenSub3] = React.useState(false);
    const [openSub4, setOpenSub4] = React.useState(false);
    const [stateCourse, setStateCourse] = React.useState({
        open: false,
        name: ""
    });

    const handleChange = e => {
        setStateCourse({ ...stateCourse, [e.target.name]: e.target.value });
    };

    const handleClickOpenCourse = () => {
        setStateCourse({ ...stateCourse, open: true });
    };

    const handleCloseCourse = () => {
        setStateCourse({ ...stateCourse, open: false });
    };

    const handleCourseSubmit = e => {
        e.preventDefault();
        console.log(stateCourse);
        setStateCourse({ name: "", open: false });
    };

    const handleClick1 = () => {
        setOpenSub1(!openSub1);
        if (openSub2) {
            setOpenSub2(!openSub2);
        }
        if (openSub3) {
            setOpenSub3(!openSub3);
        }
        if (openSub4) {
            setOpenSub4(!openSub4);
        }
    };

    const handleClick2 = () => {
        setOpenSub2(!openSub2);
        if (openSub1) {
            setOpenSub1(!openSub1);
        }
        if (openSub3) {
            setOpenSub3(!openSub3);
        }
        if (openSub4) {
            setOpenSub4(!openSub4);
        }
    };

    const handleClick3 = () => {
        setOpenSub3(!openSub3);
        if (openSub1) {
            setOpenSub1(!openSub1);
        }
        if (openSub2) {
            setOpenSub2(!openSub2);
        }
        if (openSub4) {
            setOpenSub4(!openSub4);
        }
    };

    const handleClick4 = () => {
        setOpenSub4(!openSub4);
        if (openSub1) {
            setOpenSub1(!openSub1);
        }
        if (openSub2) {
            setOpenSub2(!openSub2);
        }
        if (openSub3) {
            setOpenSub3(!openSub3);
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        TESTIFY
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <Link className={classes.link} to="/dashboard">
                        <ListItem button>
                            <ListItemText primary="ADMIN TESTIFY" />
                        </ListItem>
                    </Link>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.listItems}>
                    <List>
                        <ListItem button onClick={handleClick3}>
                            <ListItemIcon>
                                <School />
                            </ListItemIcon>
                            <ListItemText primary="Students" />
                            {openSub3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openSub3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link
                                    className={classes.link}
                                    to="/add-student"
                                >
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Student" />
                                    </ListItem>
                                </Link>
                                <Link
                                    className={classes.link}
                                    to="/add-bulk-students"
                                >
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Bulk Students" />
                                    </ListItem>
                                </Link>
                                <Link
                                    className={classes.link}
                                    to="/student-management"
                                >
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Student Management" />
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick4}>
                            <ListItemIcon>
                                <Notes />
                            </ListItemIcon>
                            <ListItemText primary="Course" />
                            {openSub4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openSub4} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link
                                    className={classes.link}
                                    to="#"
                                    onClick={handleClickOpenCourse}
                                >
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Course" />
                                    </ListItem>
                                </Link>
                                <Link className={classes.link} to="/add-topic">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Topics" />
                                    </ListItem>
                                </Link>
                                <Link className={classes.link} to="/">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Notes" />
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick1}>
                            <ListItemIcon>
                                <Help />
                            </ListItemIcon>
                            <ListItemText primary="Questions" />
                            {openSub1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openSub1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link className={classes.link} to="/">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Questions" />
                                    </ListItem>
                                </Link>
                                <Link className={classes.link} to="/">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Add Bulk Questions" />
                                    </ListItem>
                                </Link>
                                <Link className={classes.link} to="/">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="View Questions" />
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick2}>
                            <ListItemIcon>
                                <Code />
                            </ListItemIcon>
                            <ListItemText primary="Test" />
                            {openSub2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openSub2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link className={classes.link} to="/">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Create Test" />
                                    </ListItem>
                                </Link>
                                <Link className={classes.link} to="/">
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Modify Test" />
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                        <Link className={classes.link} to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <PieChart />
                                </ListItemIcon>
                                <ListItemText primary="Statistics" />
                            </ListItem>
                        </Link>
                    </List>
                    <List>
                        <Link className={classes.link} to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <SignOut />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader} />
                {props.display}
            </main>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={stateCourse.open}
                onClose={handleCloseCourse}
            >
                <DialogTitle>Add New Course</DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={handleCourseSubmit}
                        className={classes.container}
                    >
                        <TextField
                            id="outlined-name"
                            label="Course Name"
                            name="name"
                            className={classes.textField}
                            value={stateCourse.name}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        type="submit"
                        onClick={handleCourseSubmit}
                    >
                        Add Course
                    </Button>
                    <Button onClick={handleCloseCourse} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Nav;
