import { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'; 
import SiderMenu from "./components/SiderMenu";
import BreadcrumbCom from './components/BreadcrumbCom';
import { routes } from "./router";

const { Header, Footer, Sider } = Layout;

interface RouteItem {
  path: string;
  title?: string;
  component?: any;
  redirect?: string;
  routes?: RouteItem[]
}
function RouteWithSubRoutes(MyRoute: RouteItem) {
  return (
    <Route
      path={MyRoute.path} 
      render={props => (
        <MyRoute.component {...props} routes={MyRoute.routes} />
      )}
    />
  );
}

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout style={{minHeight: '100vh'}} className="my-layout">
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
          {new Array(8).fill(null).map((_, index) => <Menu.Item key={index}>{`nav${index+1}`}</Menu.Item>)}
        </Menu>
      </Header>
    
      <Layout style={{ marginTop: 64 }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
          <SiderMenu />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadcrumbCom/>
          <Switch>
            {/* {routes.map((route: any, i: number) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))} */}
            {Array.from(generateRoutes(routes))}
          </Switch>
          <Footer style={{ textAlign: 'center' }} >Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

function* generateRoutes(routes: RouteItem[]): any {
  for (const route of routes) {
    yield  <RouteWithSubRoutes key={route.path} {...route} />
    if (route.routes) {
      yield* generateRoutes(route.routes)
    }
  }
}

export default App;


