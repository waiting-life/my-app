import { useState } from 'react'
import { Table, Button } from "antd"
export const TableCom = () => {
  const columns = [
    {
      title: '姓名', 
      dataIndex: 'name',
      filters: [
        {
          text: 'cpp',
          value: 'cpp'
        },
        {
          text: 'www',
          value: 'www'
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: any, record: any) => record.name.includes(value),
    },
    {
      title: '年龄',
      dataIndex: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: '地址',
      dataIndex: 'address'
    }
  ]
  const dataSource = [
    {
      key: 1,
      name: 'cpp',
      age: 22,
      address: '深圳市南山区',
    },
    {
      key: 2,
      name: 'www',
      age: 23,
      address: '深圳市南山区'
    },
    {
      key: 3,
      name: 'www',
      age: 23,
      address: '深圳市南山区'
    },
    {
      key: 4,
      name: 'www',
      age: 23,
      address: '深圳市南山区'
    },
  ]

  const [loading, setLoading] = useState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0;

  const start = () => {
    setLoading(true)
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000);
  }
  return (
    <div>
      <div>
        <Button type="primary" loading={loading} onClick={start} disabled={!hasSelected}>Reload</Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns as any} dataSource={dataSource} rowKey="key"/>
    </div>
  )
}
