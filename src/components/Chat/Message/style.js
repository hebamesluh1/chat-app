import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction == "send" ? "row-reverse" : "row"};
`;
export const Text = styled.div`
  background: ${(props) => (props.direction == "send" ? "#c596fe" : "#191b1d")};
  color: #fff;
  width: 150px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  width: fit-content;
  flex-wrap: wrap;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row-reverse;
`;

export const Name = styled.p`
  position: absolute;
  margin-top: -1.5rem;
  font-size: 10px;
  color: ${(props) => (props.direction == "send" ? "#c596fe" : "#191b1d")};
  ${(props) => (props.direction == "send" ? "right:10px" : "left:10px")};
`;
