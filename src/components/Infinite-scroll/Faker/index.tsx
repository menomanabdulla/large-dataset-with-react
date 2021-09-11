import React, { useState } from 'react';
import faker from 'faker';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Item, InfinityScrollWrap } from './InfinityScroll.style'

const dummy = {
    id: 1,
    title: '',
    body: ''
}

export const InfiniteScrollFaker:React.FC = () => {
    const data = new Array(1000).fill(dummy).map((id) => (({
        id: id,
        title: faker.lorem.words(5),
        body: faker.lorem.sentences(8)
    })))

    const [count, setCount] = useState({
        prev: 0,
        next: 10
    })

    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(data.slice(count.prev, count.next))
    const getMoreData = () => {
      if (current.length === data.length) {
        setHasMore(false);
        return;
      }
      setTimeout(() => {
        setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
      }, 2000)
      setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
    }


      return (
        <InfinityScrollWrap>
            <InfiniteScroll
                dataLength={current.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                }
            >
            <div>
                {current && current.map(((item, index) => (
                <Item key={index} className="post">
                    <h3>{`${item.title}-${item.id}`}</h3>
                    <p>{item.body}</p>
                </Item>
                )))
                }
            </div>
            </InfiniteScroll>
        </InfinityScrollWrap>
  );
}
