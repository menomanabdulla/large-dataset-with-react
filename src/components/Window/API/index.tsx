import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from "react-window";
import { WindowWrap } from './window.style'

import { GetData } from '../../../Utilities/Fetching-data/api.controller';

type DataType = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const WindowAPI:React.FC = () => {
    const [data, setData] = useState<DataType[]>([])

    const fetchData = async () => {
      const data = await GetData();
      setData(data)
    }

    useEffect(() => {
      fetchData()
    }, [])

    const Row = ({ index,  style } : {index: number, style: any }) => (
       <div key={index} style={style} className={index % 2 ? "ListItemOdd listItem" : "ListItemEven listItem"}>
         <h3>{`${data[index].title}-${data[index].id}`}</h3>
         <p>{data[index].body}</p>
       </div>
     )

  return (
    <WindowWrap>
        {
          data && 
          <List
            width={800}
            height={700}
            itemCount={data.length}
            itemSize={120}
          >
            {Row}
          </List>
        }
    </WindowWrap>
  );
}
