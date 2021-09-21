import React,{ useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { GetData } from '../../../Utilities/Fetching-data/api.controller';
import { Item, PaginationWrap } from './pagination.style';

type DataType = {
    userId: number,
    id: number,
    title: string,
}

type PaginationData = {
    data: Array<DataType>,
    offset: number,
    numberPerPage: number,
    pageCount: number,
    currentData: Array<any>
}

type eventType = {
    selected: number
}

export const PaginationAPI:React.FC = () => {
    const [pagination, setPagination] = useState<PaginationData>({
        data: [],
        offset: 0,
        numberPerPage: 5,
        pageCount: 0,
        currentData: []
    });
    
    const setData = async () => {
        const  data  = await GetData();
        setPagination((prevState) => {
            return({
                ...prevState,
                data,
                pageCount: data.length / prevState.numberPerPage,
                currentData: data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
            })
        })
    }

    useEffect(() => {
        setData();
        setPagination((prevState) => ({
          ...prevState,
          pageCount: prevState.data.length / prevState.numberPerPage,
          currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
        }))
    }, [pagination.numberPerPage, pagination.offset])


    const handlePageClick = (event: eventType) : void => {
        const selected = Number(event.selected);
        const offset = selected * pagination.numberPerPage
        setPagination({...pagination, offset})
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
                marginPagesDisplayed={0}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </PaginationWrap>
    )
}
