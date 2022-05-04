import { useState } from 'react'
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'; 
import SiderMenu from "./components/SiderMenu";
import BreadcrumbCom from './components/BreadcrumbCom';
import { routes } from "./router";

const { Header, Footer, Sider } = Layout;

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const App = () => {
  // const history = useHistory()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout style={{minHeight: '100vh'}}>
      {/* <Header>hader</Header>
      <Content>content</Content>
      <Footer>footer</Footer> */}
      {/* <Header>hader</Header>
      <Layout>
        <Sider>sider</Sider>
        <Content>content</Content>
      </Layout>
      <Footer>footer</Footer> */}
      {/* <Sider>sider</Sider>
      <Layout>
        <Header>hader</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout> */}
      <Header style={{display: 'flex', position: 'fixed', width: '100%', zIndex: 1}}>
        <div className="logo" style={{
          width: "120px",
          height: "31px",
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.3)" }}></div>
        <div onClick={() => setCollapsed(!collapsed)} style={{padding: "0 24px", fontSize: "18px", lineHeight: "64px", cursor: "pointer", color: "#fff" }}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>}</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {new Array(15).fill(null).map((_, index) => <Menu.Item>{`nav${index+1}`}</Menu.Item>)}
        </Menu>
      </Header>
    
      <Layout style={{ marginTop: 64 }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
          <SiderMenu />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadcrumbCom/>
          <Switch>
            {routes.map((route: any, i: number) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
          <Footer style={{ textAlign: 'center' }} >Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

