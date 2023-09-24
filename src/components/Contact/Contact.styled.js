import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;

  width: 95%;
  padding-left: 12px;
  
  color: white;
  background-color: rgb(181 125 197 / 80%);
  border: 1px solid black;
  border-radius: 10px;
  webkit-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);

  button {
    margin-left: auto;
    height: 30px;
    min-width: 100px;

    font-size: 18px;

    border: 1px solid black;
    border-radius: 10px;

    color: white;
    background-color: #831fe0;
    cursor: pointer;
    

    &:hover {
      background-color: white;
      color: violet;
    }
  }
`;
