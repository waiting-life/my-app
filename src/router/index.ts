import AntdTest from '../pages/AntdTest'
import ReduxTest from '../pages/ReduxTest'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Other from '../pages/Other'
import Test from '../pages/Test'
import ReactTest from '../pages/ReactTest'
// import { FrontStudy, OtherStudy } from '../pages/study'
// () => import(/* webpackChunkName: "about" */'../pages/Home')

export interface RouteItem {
  path: string;
  title?: string;
  component?: any;
  redirect?: string;
  routes?: RouteItem[]
}

export const routes: RouteItem[] = [
  // {
  //   path: 'study',
  //   redirect: '/front-study',
  //   routes: [
  //     {
  //       path: '/front-study',
  //       title: '前端学习', 
  //       component: FrontStudy
  //     },
  //     {
  //       path: '/other-study',
  //       title: '其他学习', 
  //       component: OtherStudy
  //     }
  //   ]
  // },
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