import { useState } from 'react'
import { Switch, Route, useHistory} from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'; 
import SiderMenu from "./components/SiderMenu";
import BreadcrumbCom from './components/BreadcrumbCom';
import { RouteItem, routes } from "./router";

const { Header, Footer, Sider } = Layout;
const getSideRoutes = (key: string) => {
  const route = routes.find(route => route.path === key || route.redirect === key )
  return route?.routes ? route.routes : [route]
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
function* generateRoutes(routes: RouteItem[]): any {
  for (const route of routes) {
    yield  <RouteWithSubRoutes key={route.path} {...route} />
    if (route.routes) {
      yield* generateRoutes(route.routes)
    }
  }
}
// 头部导航栏生成
const items: MenuProps['items'] = routes
                                    .filter(route => route.title)
                                    .map(route => ({ key: route.redirect ? route.redirect : route.path, label: route.title}))

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const history = useHistory()
  // 点击头部导航事件
  const onItemClick: MenuProps['onClick'] = (e) => {
    console.log(e, 'e')
    history.push(e.key)
    getSideRoutes(e.key)
  }

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
        <div className="logo" 
          style={{
            width: "120px",
            height: "31px",
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.3)" }}>
        </div>
        <div onClick={() => setCollapsed(!collapsed)} style={{padding: "0 24px", fontSize: "18px", lineHeight: "64px", cursor: "pointer", color: "#fff" }}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>}</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/home']} items={items} onClick={onItemClick}/> 
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



export default App;


