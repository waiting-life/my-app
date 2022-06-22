import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from 'antd';
import { routes } from "../../router";
import type { RouteItem } from '../../router/index'

type MenuItem = Required<MenuProps>['items'][number];

function getItems(routes: RouteItem[]) {
  let arr: MenuItem[] = []
  routes
  .filter((item) => item.title)
  .forEach((item) => {
    arr.push({
        key: item.path,
        label: item.title,
        children: item.routes && getItems(item.routes) 
    })
  })
  return arr
}
const items: MenuItem[] = getItems(routes)
const SiderMenu = () => {
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