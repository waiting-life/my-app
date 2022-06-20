import { NavLink, useHistory } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from 'antd';
import { routes } from "../../router";

type MenuItem = Required<MenuProps>['items'][number];

function getItems(routes: any) {
  let arr: any[] = []
  routes
  .filter((item: any) => item.title)
  .forEach((item: any) => {
    arr.push({
        key: item.path,
        label: item.title,
        children: item.routes && getItems(item.routes) 
    })
  })
  return arr
}
const items: MenuProps['items'] = getItems(routes)

const SiderMenu = (props: any) => {
  const history = useHistory()
  const handleMenuItem: MenuProps['onClick'] = (e) => {
    history.push(e.key)
  }
  return (
    // <Menu
    //   mode="inline"
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
    //   style={{ height: '100%', borderRight: 0 }}
    //   theme="dark"
    // >
    //   {/* <SubMenu key="home" icon={<UserOutlined />} title="首页" >
    //     <Menu.Item key="home1"><NavLink to={'/home/home1'} >home1</NavLink></Menu.Item>
    //     <Menu.Item key="home2"><NavLink to={'/home/home2'} >home2</NavLink></Menu.Item>
    //     <Menu.Item key="home3"><NavLink to={'/home/home3'} >home3</NavLink></Menu.Item>
    //   </SubMenu> */}
    //   {/* <Menu.Item key="home1"><NavLink to={'/home1'} >Home</NavLink></Menu.Item>
    //   <Menu.Item key="other"><NavLink to={'/other'}>Other</NavLink></Menu.Item>
    //   <Menu.Item key="antd-test"><NavLink to={'/antd-test'}>AntdTest</NavLink></Menu.Item>
    //   <Menu.Item key="react-test"><NavLink to={'/react-test'}>ReactTest</NavLink></Menu.Item>
    //   <Menu.Item key="redux-test"><NavLink to={'/redux-test'}>ReduxTest</NavLink></Menu.Item>
    //   <Menu.Item key="test"><NavLink to={'/test'}>Test</NavLink></Menu.Item> */}
    //   {routes.map((item, index) => {
    //     return <Menu.Item key={index}><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>
    //   })}
    // </Menu>
    <Menu
      onClick={handleMenuItem}
      defaultSelectedKeys={['/home']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      items={items} 
    />
  ) 
}

export default SiderMenu