import AntdTest from '../pages/AntdTest'
import ReduxTest from '../pages/ReduxTest'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Other from '../pages/Other'
import Test from '../pages/Test'
import ReactTest from '../pages/ReactTest'
// () => import(/* webpackChunkName: "about" */'../pages/Home')

export const routes: {path: string; title?: string; component?:any, routes?: any[]}[] = [
  {
    path: '/home', 
    title: '首页',
    component: Home
  },
  {
    path: '/mytest',
    title: '我的练习',
    routes: [
      {
        path: '/antd-test',
        title: 'antd练习',
        component: AntdTest
      },
      {
        path: '/react-test',
        title: 'react练习',
        component: ReactTest
      },
      {
        path: '/redux-test',
        title: 'redux测试',
        component: ReduxTest
      },
    ]
  },
  // {
  //   path: '/antd-test',
  //   title: 'antd练习',
  //   component: AntdTest
  // },
  // {
  //   path: '/react-test',
  //   title: 'react练习',
  //   component: ReactTest
  // },
  // {
  //   path: '/redux-test',
  //   title: 'redux测试',
  //   component: ReduxTest
  // },
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