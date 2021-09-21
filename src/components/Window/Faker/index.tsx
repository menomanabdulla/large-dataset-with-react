import React from 'react';
import faker from 'faker';
import { FixedSizeList as List } from "react-window";
import { WindowWrap } from './window.style'

const dummy = {
    id: 1,
    title: '',
    body: ''
}

export const WindowFaker:React.FC = () => {
    const data = new Array(1000).fill(dummy).map((_,id) => (({
        id: id,
        title: faker.lorem.words(5),
        body: faker.lorem.sentences(6)
    })))


    const Row = ({ index,  style } : {index: number, style: any }) => (
       <div key={index} style={style} className={index % 2 ? "ListItemOdd listItem" : "ListItemEven listItem"}>
         <h3>{`${data[index].title}-${data[index].id}`}</h3>
         <p>{data[index].body}</p>
       </div>
     )

  return (
    <WindowWrap>
         <List
          width={800}
          height={700}
          itemCount={data.length}
          itemSize={120}
        >
          {Row}
        </List>
    </WindowWrap>
  );
}
