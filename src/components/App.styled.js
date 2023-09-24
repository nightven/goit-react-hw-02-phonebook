import styled from 'styled-components';

export const Container = styled.div`
margin-left: 40px;
color: white;;
text-shadow: 5px 3px 2px rgba(103, 22, 128, 1);
`;

export const Label = styled.label`
display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  width: 400px;
  padding: 18px;
  color: white;
  background-color: #831fe0;
  text-shadow: 5px 3px 2px rgba(103, 22, 128, 1);

  webkit-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);

  border: 1px solid black;
  border-radius: 15px;
  input {
    width: 95%;
    height: 30px;
    padding: 5px;
    font-size: 20px;

    color: white;
    background-color: rgb(181 125 197 / 80%);
    border: 1px solid black;
    border-radius: 10px;
    webkit-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);

    &:hover {
      background-color: white;
      color: violet;
    }
  }
`;
