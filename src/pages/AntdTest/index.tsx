import { Tabs } from 'antd';
import PageContainer from '../../components/PageContainer';
import { Base, FormCom, TableCom } from './components';
import './index.css'

const {TabPane} = Tabs

export default function AntdTest() {
  return (
    <PageContainer 
      header={{
      title: "Antd学习", 
      // subTitle: 'This is a subtitle'
      }}>
      <Tabs defaultActiveKey='base'>
        <TabPane tab="基础" key="base" ><Base/></TabPane>
        <TabPane tab="表单" key="form" ><FormCom/></TabPane>
        <TabPane tab="表格" key="table"><TableCom/></TabPane>
      </Tabs>
    </PageContainer>
    
    
  )
}
