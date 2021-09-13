import React from 'react';
import faker from 'faker';
import { List } from "react-virtualized";

import { VirtualizedWrap } from './virtualized.style'

const dummy = {
    id: 1,
    title: '',
    body: ''
}

export const VirtualizeFaker:React.FC = () => {
    const data = new Array(1000).fill(dummy).map((_,id) => (({
        id: id,
        title: faker.lorem.words(5),
        body: faker.lorem.sentences(6)
    })))

    const renderRow = ({ index, style } : {index: number, style: any}) => {
      console.log(data[index])
      return (
       <div key={index} style={style} className="post">
         <h3>{`${data[index].title}-${data[index].id}`}</h3>
         <p>{data[index].body}</p>
       </div>
    )}

  return (
    <VirtualizedWrap>
      <List
        width={800}
        height={800}
        rowRenderer={renderRow}
        rowCount={data.length}
        rowHeight={120}
      />
    </VirtualizedWrap>
  );
}
