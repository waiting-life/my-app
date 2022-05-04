import { PageHeader, Layout } from "antd"
const {Content} = Layout

export default function PageContainer(props: any) {
  const {header, children} = props
  return (
    <>
      <PageHeader {...header} style={{backgroundColor: '#fff', marginBottom: 20}}/>
      <Content style={{ minHeight: "280px", padding: "50px", backgroundColor: '#fff' }}>
        {children}
      </Content>
    </>
  )
}
