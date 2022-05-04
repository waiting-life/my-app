import { Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

// function generateMenu(routes: any) {
//   routes.map((item: any, index: number) => {
//     if(!item.routes || item.routes.length === 0) {
//       return <Menu.Item key={index}>{item.title}</Menu.Item>
//     }
//     ge
//   })
// }

{/* <NavLink to={'/antd-test'} style={{ marginRight: 20 }}>跳转到AntdTest页面</NavLink>
      <NavLink to={'/redux-test'} style={{ marginRight: 20 }}>跳转到ReduxTest页面</NavLink>
      <NavLink to={'/home'} style={{ marginRight: 20 }}>跳转到Home页面</NavLink>
      <NavLink to={'/login'} style={{ marginRight: 20 }}>跳转到Login页面</NavLink>
      <NavLink to={'/other'} style={{ marginRight: 20 }}>跳转到Other页面</NavLink>
      <NavLink to={'/test'} style={{ marginRight: 20 }}>跳转到Test页面</NavLink>
      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch> */}

const SiderMenu = (props: any) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      theme="dark"
    >
      {/* <SubMenu key="home" icon={<UserOutlined />} title="首页" >
        <Menu.Item key="home1"><NavLink to={'/home/home1'} >home1</NavLink></Menu.Item>
        <Menu.Item key="home2"><NavLink to={'/home/home2'} >home2</NavLink></Menu.Item>
        <Menu.Item key="home3"><NavLink to={'/home/home3'} >home3</NavLink></Menu.Item>
      </SubMenu> */}
      <Menu.Item key="home1"><NavLink to={'/home1'} >Home</NavLink></Menu.Item>
      <Menu.Item key="other"><NavLink to={'/other'}>Other</NavLink></Menu.Item>
      <Menu.Item key="antd-test"><NavLink to={'/antd-test'}>AntdTest</NavLink></Menu.Item>
      <Menu.Item key="redux-test"><NavLink to={'/redux-test'}>ReduxTest</NavLink></Menu.Item>
      <Menu.Item key="test"><NavLink to={'/test'}>Test</NavLink></Menu.Item>
    </Menu>
  ) 
}

export default SiderMenu