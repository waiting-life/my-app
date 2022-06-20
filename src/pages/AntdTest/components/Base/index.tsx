import { useState } from 'react'
import {
  Row,
  Col,
  Divider,
  Space,
  Button,
  Slider,
  Affix,
  Dropdown,
  Menu,
  AutoComplete,
  Cascader,
  PageHeader,
  Tag,
  Tabs
} from 'antd';

const DemoBox = (props: any) => <p style={{ height: props.value, backgroundColor: '#00a0e9' }}>{props.children}</p>;

export const Base = () => {
  const [size, setSize] = useState(8)
  const [top, setTop] = useState(100)
  const [bottom, setBottom] = useState(100)
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const [options, setOptions] = useState<{ value: string }[]>([])

  const menus = ['item1', 'item2', 'item3']
  const menu = (<Menu>
    {menus.map((menu, index) => <Menu.Item key={index}>{menu}</Menu.Item>)}
  </Menu>)
  const mockVal = (str: string, repeat: number = 1) => ({
    value: str.repeat(repeat),
  });
  const cascaderOptions = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (value: any) => {
    console.log(value);
  }

  const onSearch = (searchText: string) => {
    setOptions(searchText ? [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] : [])
  }
  return (
    <div>Base
      <div>antd相关</div>
      <Affix offsetTop={top}><Button onClick={() => setTop(top + 10)}>Affix Top</Button></Affix>
      <Divider orientation="left">Horizontal</Divider>
      <Row>
        <Col span={3}  ><div className='gutter-box'>col - 1</div></Col>
        <Col span={3} offset={4} ><div className='gutter-box'>col - 2</div></Col>
        <Col span={3} offset={4} ><div className='gutter-box'>col - 3</div></Col>
        <Col span={3} offset={4} ><div className='gutter-box'>col - 4</div></Col>
      </Row>
      <Divider orientation="left">start</Divider>
      {/* start  center  end */}
      <Row justify="start">
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
      </Row>
      <Divider orientation="left">center</Divider>
      {/* space-between  space-around */}
      <Row justify="space-between">
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
      </Row>
      <Divider orientation="left">Align Top</Divider>
      {/* align: top middle bottom */}
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
      <Row gutter={[32, 16]}>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
        <Col span={4}> <div className="gutter-box">col-4</div></Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row gutter={[32, 16]}>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
        <Col span={6} ><div className="gutter-box">col</div></Col>
      </Row>
      <Divider orientation="left">响应式</Divider>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <div className="gutter-box">Col</div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <div className="gutter-box">Col</div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <div className="gutter-box">Col</div>
        </Col>
      </Row>
      <Divider orientation="left">响应式</Divider>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className="gutter-box">Col</div>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className="gutter-box">Col</div>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className="gutter-box">Col</div>
        </Col>
      </Row>
      <Divider orientation="left">space</Divider>
      <Slider value={size} onChange={value => setSize(value)} />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
      <Affix offsetBottom={bottom}><Button onClick={() => setBottom(bottom + 10)}>Affix Bottom</Button></Affix>
      <Divider orientation="left">container</Divider>
      <div className="container" ref={setContainer} style={{ maxHeight: 300, overflow: 'scroll' }}>
        <Affix offsetTop={80} target={() => container} onChange={(value) => console.log(value)}>
          <Button>container的图钉</Button>
        </Affix>
        {new Array(20).fill(null).map((_, index) => {
          return <div key={index}>内容{index}</div>
        })}
      </div>
      <Dropdown overlay={menu} placement="top" arrow={{ pointAtCenter: true }} trigger={['contextMenu']}>
        <Button>hover me</Button>
      </Dropdown>
      <AutoComplete onSearch={onSearch} options={options} style={{ width: 200 }} backfill />
      <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={cascaderOptions} onChange={onChange} />
    </div>
  )
}
