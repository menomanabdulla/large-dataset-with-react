import React,{ useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { GetData } from '../../../Utilities/Fetching-data/api.controller';
import { Item, InfinityScrollWrap } from './InfinityScroll.style'

type DataType = {
    id: number,
    title: string,
    body: string
}


export const InfiniteScrollAPI:React.FC = () => {
    const [data, setData] = useState<DataType[]>([])

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

    const fetchData = async () => {
        const data = await GetData();
        setData(data)
        setCurrent(data.slice(count.prev, count.next))
    }

    useEffect(() => {
        fetchData()
    },[])

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
