import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon } from 'antd';
import './Login.sass';
const FormItem = Form.Item;

const Login = Form.create()(React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	},
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="page-login">
				<div className="avatar">
					<Icon type="user" />
				</div>

				<Form className="login-form" onSubmit={this.handleSubmit}>
					<FormItem>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }]
						})(
							<Input addonBefore={<Icon type="user" />} placeholder="Username" />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your password!' }]
						})(
							<Input addonBefore={<Icon type="lock" />} placeholder="Password" />
						)}
					</FormItem>

					<FormItem>
						<a>Forgot password</a>
						<div className="login-form-register">Or <a>register now!</a></div>
						<Button type="primary" htmlType="submit" className="login-form-button">Login</Button>

                    </FormItem>
				</Form>
			</div>
		)
	}
}))

export default connect(state => {
	return state.server;
})(Login)
