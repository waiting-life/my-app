import AntdTest from '../pages/AntdTest'
import ReduxTest from '../pages/ReduxTest'
import Home1 from '../pages/home/Home1'
import Home2 from '../pages/home/Home2'
import Home3 from '../pages/home/Home3'
import Login from '../pages/Login'
import Other from '../pages/Other'
import Test from '../pages/Test'
// () => import(/* webpackChunkName: "about" */'../pages/Home')

export const routes: any = [
  {
    path: '/home1',
    title: '首页',
    component: Home1
    // routes: [
    //   {
    //     title: '主页1',
    //     path: '/home/home1',
    //     component: Home1,
    //   },
    //   {
    //     title: '主页2',
    //     path: '/home/home2',
    //     component: Home2,
    //   },
    //   {
    //     title: '主页3',
    //     path: '/home/home3',
    //     component: Home3,
    //   },
    // ]
  },
  {
    path: '/antd-test',
    title: 'antd练习',
    component: AntdTest
  },
  {
    path: '/redux-test',
    title: 'redux测试',
    component: ReduxTest
  },
  {
    path: '/other',
    title: '其他',
    component: Other
  },
  {
    path: '/test',
    title: '测试',
    component: Test
  },
  {
    path: '/login',
    component: Login
  },
]