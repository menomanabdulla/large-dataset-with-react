import React,{ useEffect, useState } from 'react';
import ReactPaginate  from 'react-paginate';
import faker from 'faker'

import { Item, PaginationWrap } from './pagination.style'

type DataType = {
    id: number,
    title: string,
    body: string
}
type PaginationData = {
    data: Array<DataType>,
    offset: number,
    numberPerPage: number,
    pageCount: number,
    currentData: Array<DataType>
}
type eventType = {
    selected: number
}
const dummy = {
    id: 1,
    title: '',
    body: ''
}

export const PaginationFaker:React.FC = () => {
    const [pagination, setPagination] = useState<PaginationData>({
        data: new Array<DataType>(1000).fill(dummy).map((value, index) => ({
          id: index,
          title: faker.lorem.words(5),
          body: faker.lorem.sentences(8)
        })),
        offset: 1,
        numberPerPage: 5,
        pageCount: 0,
        currentData: []
    });

    useEffect(() => {
        setPagination((prevState) => ({
          ...prevState,
          pageCount: prevState.data.length / prevState.numberPerPage,
          currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
        }))
    }, [pagination.numberPerPage, pagination.offset])

    const handlePageClick = (event: eventType) : void => {
        const selected = Number(event.selected);
        const offset = selected * pagination.numberPerPage
        setPagination({ ...pagination, offset })
    }

    return (
        <PaginationWrap>
             {
                pagination.currentData && pagination.currentData.map(((item) => (
                    <Item key={item.id} className="post">
                        <h3>{`${item.title} - ${item.id}`}</h3>
                        <p>{item.body}</p>
                    </Item>
                )))
            }
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </PaginationWrap>
    )
}
