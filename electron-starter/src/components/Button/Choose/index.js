import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";



const Choose = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const ChangePage = () => {
    setActiveButton("schema1");
    navigate("/schema01", { replace: true });
  };
  const ChangePage1 = () => {
    setActiveButton("schema2");
    navigate("/schema02", { replace: true });
  };
  const ChangePage2 = () => {
    setActiveButton("schema3");
    navigate("/schema03", { replace: true });
  };
  return (
    <>
      <Container>
        <Button onClick={ChangePage} active={activeButton === "schema1"}>Schema 1</Button>
        <Button onClick={ChangePage1} active={activeButton === "schema2"}>Schema 2</Button>
        <Button onClick={ChangePage2} active={activeButton === "schema3"}>Schema 3</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 2%;
  margin-bottom: -3%;
  margin-left: 33%;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 4%;
  z-index: 100;
  border-radius: 15px;
  font-family: "Shantell Sans", cursive;
  background-color: ${(props) => (props.active ? "#EFDFCF" : "white")}; color: ${(props) => (props.active ? "black" : "black")};;
`;

export default Choose;
