import styled from "styled-components";
import { useEffect, useState } from "react";

const Button05 = () => {
  const [filePath, setFile] = useState();
  const openDialog = () => {
    window.dialog.open();
    window.dialog.getFilePath(setFile);
  };

  useEffect(() => {
    return () => {
      window.dialog.removeEventListener();
    };
  }, []);

  useEffect(() => {
    window.dialog.removeEventListener();  
    console.log(filePath);
  }, [filePath]);
  return (
    <Container>
      <Button onClick={openDialog}>Second Picture</Button>
      <Image src={filePath}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  background-color: white;
  border-style: dotted;
  border: 1px;
  margin-top: -85%;
  margin-left: 125%;
  position: relative;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  z-Index: 100;
  background-color: transparent;
  outline: none;
  border: none;
  color: transparent;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default Button05;
