import { useState } from 'react'
import { Button } from 'antd'
import ComRenderItem from '../ComRenderItem'

export interface ItemDataType {
  title: string
  content: string
  count: number
  id: number
}

const ComRenderList = () => {
  const [dataList, setDataList] = useState<ItemDataType[]>([
    {
      title: 'title1',
      content: 'content1',
      id: 1,
      count: 0,
    },
    {
      title: 'title2',
      content: 'content3',
      id: 2,
      count: 0,
    },
    {
      title: 'title3',
      content: 'content3',
      id: 3,
      count: 0,
    },
  ])

  const handleClick = (index: number) => {
    console.log('>>>>点击')
    const newDataList = dataList.map((item) => {})
  }

  return (
    <div>
      {dataList.map((item, index) => (
        <div key={`${item.id} + ${item.count}`}>
          <ComRenderItem {...item} />
          <Button onClick={() => handleClick(index)} type="primary">
            点击+1
          </Button>
        </div>
      ))}
    </div>
  )
}

export default ComRenderList
