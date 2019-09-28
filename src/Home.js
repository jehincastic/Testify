import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
	container: {
		marginTop: '15%',
		width: '400px',
		margin: '0 auto',
	},
	link: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)"
    },
	main: {
		color: '#1976D2',
		fontSize: '35px',
		fontWeight: '200',
		letterSpacing: '1rem',
		textAlign: 'center'
	},
	name: {
		marginTop: '30px',
		letterSpacing: '0.5rem'
	},
	btn: {
		marginTop: '30px',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.background}>
				<div className={classes.container}>
					<h1 className={classes.main}>WELCOME TO</h1>
					<h1 className={classes.main + ' ' + classes.name}>
						TESTIFY
					</h1>
					<div>
						<Link className={classes.link} to="/register">
							<Button className={classes.btn} variant="contained" color="primary">
								Get Started
							</Button>
						</Link>
					</div>
					<div>
						<Link className={classes.link} to="/login">
							<Button className={classes.btn} variant="contained" color="primary">
								Login
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
