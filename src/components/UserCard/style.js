import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h2{
        color: #480ca8;
        margin-bottom: 40px;
        font-size: 30px;
    }

    input{
        width: 250px;
        height: 30px;
        border: 1px solid grey;
        border-radius:5px;
        padding-left: 10px;
        margin-right: 10px;
        :focus{
            outline: 2px solid #eae4e9;
        }
    }

    button{
        height: 35px;
        width: 150px;
        background-color: #f72585;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: #ffffff;
        font-weight: bold;
        :hover{
            background-color: #b5179e;
        }
    }
`