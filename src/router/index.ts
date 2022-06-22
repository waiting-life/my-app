import AntdTest from '../pages/AntdTest'
import ReduxTest from '../pages/ReduxTest'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Other from '../pages/Other'
import Test from '../pages/Test'
import ReactTest from '../pages/ReactTest'
import { FrontStudy, OtherStudy } from '../pages/study'
// () => import(/* webpackChunkName: "about" */'../pages/Home')

export interface RouteItem {
  path: string;
  title?: string;
  component?: any;
  redirect?: string;
  routes?: RouteItem[]
}

export const routes: RouteItem[] = [
  {
    path: '/home', 
    title: '首页',
    component: Home
  },
  {
    path: 'study',
    title:'学习系统',
    redirect: '/study/front-study',
    routes: [
      {
        path: '/study/front-study',
        title: '前端学习', 
        component: FrontStudy
      },
      {
        path: '/study/other-study',
        title: '其他学习', 
        component: OtherStudy
      }
    ]
  },
  {
    path: 'mytest',
    title: '我的练习',
    redirect: '/mytest/antd-test',
    routes: [
      {
        path: '/mytest/antd-test',
        title: 'antd练习',
        component: AntdTest
      },
      {
        path: '/mytest/react-test',
        title: 'react练习',
        component: ReactTest
      },
      {
        path: '/mytest/redux-test',
        title: 'redux测试',
        component: ReduxTest
      },
    ]
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