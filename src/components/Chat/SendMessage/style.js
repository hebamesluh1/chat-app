import styled from 'styled-components';

export const Form = styled.form`
height:50px;
width:100%;
max-width:728px;
display:flex;
position:absolute;
border-radius: 0 0 10px 10px;
bottom:0;
input{
    width:100%;
    border-radius: 0 0 0 10px;
    padding:20px;
    font-size:16px;
    border:none;
    background:#000;
    color:#fff;
    outline:none;
}
button{
    width:100px;
    border-radius: 0 0  7px 0;
    background:#fffb8f;
    outline:1px solid #fffb8f;
    border:none;
    color:#010101;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
}
`
