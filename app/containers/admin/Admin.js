import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { mock } from 'mockjs';

import './Admin.sass';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu, MenuItemGroup } = Menu;

@connect(
	state => state.server
)

class Admin extends Component {
	constructor() {
		super();
	}
	state = {
		collapsed: true
    };
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};
	render() {
		const currentMenu = this.props.location.pathname.replace('/', '') || 'home';

		return (
			<Layout className="page-admin">
				<Sider
					className="aside"
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}>
					<div className='logo'>{this.state.collapsed ? 'CG' : 'CUNGEN'}</div>
					<Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="appstore-o" />
							<span className="nav-text">Dashboard</span>
						</Menu.Item>
						<SubMenu key="posts" title={<span><Icon type="pushpin-o" /><span className="nav-text">Posts</span></span>}>
                            <Menu.Item key="2">
                                <Icon type="plus" />
                                <span className="nav-text">Add Post</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="bars" />
                                <span className="nav-text">Post List</span>
                            </Menu.Item>
						</SubMenu>
						<Menu.Item key="5">
							<Icon type="link" />
							<span className="nav-text">Pages</span>
						</Menu.Item>
						<Menu.Item key="6">
							<Icon type="user" />
							<span className="nav-text">Users</span>
						</Menu.Item>
						<Menu.Item key="7">
							<Icon type="setting" />
							<span className="nav-text">Setting</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
						Content
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Admin;
