import { Breadcrumb } from "antd"
import { useLocation, Link } from "react-router-dom"
import { routes } from "../../router"

const breadcrumbMap: any = {}
routes.forEach((route: any) => breadcrumbMap[route.path] = route.title)

export default function BreadcrumbCom() {
  const location = useLocation()
  const url = location.pathname
  // const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  //   return (
  //     <Breadcrumb.Item key={url}>
  //       <Link to={url}>{breadcrumbMap[url]}</Link>
  //     </Breadcrumb.Item>
  //   );
  // });
  // const breadcrumbItems = [
  //   <Breadcrumb.Item key="home">
  //     <Link to="/">Home</Link>
  //   </Breadcrumb.Item>,
  // ].concat(extraBreadcrumbItems);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item><Link to={url}>{ breadcrumbMap[url]}</Link></Breadcrumb.Item>
    </Breadcrumb>
  )
}
