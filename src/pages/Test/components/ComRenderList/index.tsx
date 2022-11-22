import { useState } from "react"
import { Button } from "antd"
import ComRenderItem from "../ComRenderItem"

interface ItemDataType { 
    title: string; 
    content: string; 
    count: number; 
    id: number;
}

const ComRenderList = () => {
    const dataList: ItemDataType[] = [
        {
            title: 'title1',
            content: 'content1',
            id: 1,
            count: 0
        },
        {
            title: 'title2',
            content: 'content3',
            id: 2,
            count: 0
        },
        {
            title: 'title3',
            content: 'content3',
            id: 3,
            count: 0
        }
    ]

    const handleClick = (item: ItemDataType, index: number) => {
        console.log(item, '????')

    }

    return (
      <div>
        {dataList.map((item, index) => (
            <div>
                <ComRenderItem {...item} />
                <Button onClick={() => handleClick(item, index)}>点击+1</Button>
            </div>
        ))}
        
      </div>
    )
  }
  
  export default ComRenderList