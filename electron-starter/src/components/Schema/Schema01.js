import React from "react";
import styled from "styled-components";
import Button01 from "../Button/Schema01/ButtonSchema01";
import Button02 from "../Button/Schema01/ButtonSchema02";
import Button03 from "../Button/Schema01/ButtonSchema03";
import Button04 from "../Button/Schema01/ButtonSchema04";
import Button05 from "../Button/Schema01/ButtonSchema05";
import Background01 from "../../screens/Background01";

const Schema01 = () => {
  return (
    <>
      <Background01 />
      <ContainerPicture>
        <Schema1>
          <Button01 />
          <Button02 />
          <Button03 />
        </Schema1>
        <Button04 />
        <Button05 />
      </ContainerPicture>
    </>
  );
};

const ContainerPicture = styled.div`
  display: column;
  position: absolute;
  z-index: 2;
  margin-top: 8%;
  margin-left: 24%;
`;
const Schema1 = styled.div`
  display: flex;
`;

export default Schema01;
