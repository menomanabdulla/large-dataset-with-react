import styled from 'styled-components'

export const Item = styled.div `
    background: #eee;
    margin: 15px 0;
    padding: 15px;
    border-radius: 10px;
`
export const PaginationWrap = styled.div `
    max-width: 800px;
    margin: 0 auto;
    .pagination{
        li{
            list-style: none;
            display: inline-block;
            margin: 0 8px;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #eee;
            transition: all 0.3s ease-in;
            cursor: pointer;
            &:hover{
                background-color: rgba(173,229,255,0.54);
            }
        }
        li.active{
            background-color: rgba(173,229,255,0.54);
        }

    }
`