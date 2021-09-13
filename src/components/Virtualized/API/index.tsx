import React, { useEffect, useState } from 'react';
import { List } from "react-virtualized";

import { VirtualizedWrap } from './virtualized.style'

import { GetData } from '../../../Utilities/Fetching-data/api.controller';

type DataType = {
  userId: number,
  id: number,
  title: string,
  body: string
}


export const VirtualizeAPI:React.FC = () => {
    const [data, setData] = useState<DataType[]>([])
    const fetchData = async () => {
      const data = await GetData();
      setData(data)
    }

    useEffect(() => {
      fetchData()
    }, [])

    const renderRow = ({ index, style } : {index: number, style: any}) => {
      console.log(data)
      return (
       <div key={index} style={style} className="post">
         <h3>{`${data[index].title}-${data[index].id}`}</h3>
         <p>{data[index].body}</p>
       </div>
    )}

  return (
    <VirtualizedWrap>
      {
        data && 
        <List
          width={800}
          height={800}
          rowRenderer={renderRow}
          rowCount={data.length}
          rowHeight={120}
        />
      }
    </VirtualizedWrap>
  );
}
