import './App.css';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddTopic from './AddTopic';
import AddStudent from './AddStudent';
import AddBulkStudents from './AddBulkStudents';
import StudentManagement from './StudentManagement';
import ViewStudent from './ViewStudent';
import EditStudent from './EditStudent';
import PageNotFound from './PageNotFound';
import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			id: '',
			name: '',
			email: ''
		};
	}

	componentDidMount() {
		this.loginStateChange();
		this.loginCheck();
	}
	
	loginCheck = () => {
		const path = document.location.pathname.replace(/^\/+|\/+$/g, '');
		if (!sessionStorage.hasOwnProperty('user')) {
			if (
				path === 'login' ||
				path === 'register' ||
				path === ''
			) {
				this.props.history.push(document.location.pathname);
			} else {
				this.props.history.push('/login');
			}
		}
	}

	loginStateChange = () => {
		if (sessionStorage.hasOwnProperty('user')) {
			const path = document.location.pathname.replace(/^\/+|\/+$/g, '');
			const user = sessionStorage.getItem('user');
			this.setState(
				{
					loggedIn: true,
					id: user.id,
					name: user.name,
					email: user.email
				},
				() => {
					if (
						path === 'login' ||
						path === 'register' ||
						path === ''
					) {
						this.props.history.push('/dashboard');
					} else {
						this.props.history.push(document.location.pathname);
					}
				}
			);
		}
	};

	handleLogOut = () => {
		sessionStorage.removeItem('user');
		this.setState(
			{
				loggedIn: false,
				id: '',
				name: '',
				email: ''
			},
			() => {
				this.props.history.push('/');
			}
		);
	};

	render() {
		const user = {...this.state};
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={defaultProps => (
							<Home user={user} loginFunc={this.loginStateChange} {...defaultProps} />
						)}
					/>
					<Route
						exact
						path="/login"
						render={defaultProps => (
							<Login user={user} loginFunc={this.loginStateChange} {...defaultProps} />
						)}
					/>
					<Route
						exact
						path="/register"
						render={defaultProps => (
							<Register user={user} loginFunc={this.loginStateChange} {...defaultProps} />
						)}
					/>
					<Route
						exact
						path="/dashboard"
						render={defaultProps => (
							<Dashboard {...defaultProps} />
						)}
					/>
					<Route
						exact
						path="/add-topic"
						render={defaultProps => (
							<AddTopic {...defaultProps} />
						)}
					/>
					<Route
						exact
						path="/add-student"
						render={defaultProps => (
							<AddStudent {...defaultProps} />
						)}
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
						path="/view-student/:id"
						render={defaultProps => (
							<ViewStudent {...defaultProps} />
						)}
					/>
					<Route
						exact
						path="/edit-student/:id"
						render={defaultProps => (
							<EditStudent {...defaultProps} />
						)}
					/>
					<Route render={() => <PageNotFound />} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
