import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
	heading: {
		color: '#3f51b5',
		margin: '0 auto',
		width: '100px',
        textAlign: 'center',
        marginTop: '40px'
	},
	emailField: {
		width: '30%'
	},
	nameField: {
		width: '30%'
	},
	passwordField: {
		width: '30%'
	},
	btn: {
		width: '80px',
		position: 'relative',
		top: '20px'
	},
	form: {
		marginTop: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '30vh',
		justifyContent: 'space-between'
	},
	login: {
		position: 'relative',
		top: '170px',
		color: '#3f51b5',
        borderColor: '#3f51b5',
        margin: '0 auto',
		width: '30%',
        textAlign: 'center'
	}
};

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: '',
			username: '',
			open: false,
			loading: false,
			errMsg: 'Could Not Register You.'
		};
	}

	componentDidMount() {
	    this.props.loginFunc();
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ open: false });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({loading: true});
		const button = document.getElementById('register');
        button.disabled = true;
		const { name, email, password, username } = this.state;
		axios
		    .post("http://localhost:4000/register", {
		        name,
				email,
				username,
		        password
		    })
		    .then(res => res.data)
		    .then(data => {
		        if (data.status === "FAILED") {
					const message = data.message;
					if(message.includes("Duplicate entry") && message.includes("for key")) {
						const errorMessage = `A user has already registered with the ${message.substring(message.indexOf('for key ') + 8)}`;
						this.setState({errMsg: errorMessage});
					} else {
						this.setState({errMsg: 'Could Not Register You.'});
					}
                    button.disabled = false;
		            this.setState({ open: true, loading: false });
		        } else {
					this.setState({
						email: '',
						password: '',
						username: '',
						name: '',
						errMsg: 'Could Not Register You.'
					});
		            sessionStorage.setItem("user", data.user);
		            this.props.loginFunc();
		            this.props.history.push("/dashboard");
                }
		    })
		    .catch(function(error) {
		        console.log(error);
		    });
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
                {this.state.loading ? <LinearProgress /> : ''}
				<h1 className={classes.heading}>Register</h1>
				<div className={classes.containerForm}>
					<form
						onSubmit={this.handleSubmit}
						className={classes.form}
					>
						<TextField
							id="standard-name"
							label="Name"
							className={classes.nameField}
							value={this.state.name}
							onChange={this.handleChange}
							autoComplete="name"
							type="text"
							name="name"
							margin="normal"
							required
						/>
						<TextField
							id="standard-username"
							label="User Name"
							className={classes.nameField}
							value={this.state.username}
							onChange={this.handleChange}
							autoComplete="name"
							type="text"
							name="username"
							margin="normal"
							required
						/>
						<TextField
							id="standard-email"
							label="Email"
							className={classes.emailField}
							value={this.state.email}
							onChange={this.handleChange}
							autoComplete="email"
							type="email"
							name="email"
							margin="normal"
							required
						/>
						<TextField
							id="standard-password-input"
							label="Password"
							className={classes.passwordField}
							type="password"
							name="password"
							autoComplete="password"
							value={this.state.password}
							onChange={this.handleChange}
							margin="normal"
							required
						/>
						<Button
							type="submit"
							id="register"
							variant="contained"
							color="primary"
							className={classes.btn}
						>
							Register
						</Button>
					</form>
					<div className={classes.login}>
						Already have an account login{' '}
						<Link to="/login">here</Link>.
					</div>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={this.state.open}
					autoHideDuration={6000}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={
						<span id="message-id">
							{this.state.errMsg}
						</span>
					}
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
			</div>
		);
	}
}

export default withStyles(styles)(Register);
