import styled from "styled-components";
import Button01 from "../Button/Schema02/ButtonSchema01";
import Button02 from "../Button/Schema02/ButtonSchema02";
import Button03 from "../Button/Schema02/ButtonSchema03";
import Button04 from "../Button/Schema02/ButtonSchema04";
import Button05 from "../Button/Schema02/ButtonSchema05";
import Button06 from "../Button/Schema02/ButtonSchema06";
import Background02 from "../../screens/Background02";

const Schema02 = () => {
  return (
    <>
      <Background02/>
      <ContainerPicture>
          <Schema>
            <Button01 />
            <Button02 />
          </Schema>
          <Schema1>
            <Button03 />
            <Button05 />
          </Schema1>
          <Schema>
            <Button04 />
            <Button06 />
          </Schema>
        </ContainerPicture>
    </>
  );
};

const ContainerPicture = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  margin-top: 8%;
  margin-left: 24%;
`;
const Schema = styled.div`
  display: column;
`;
const Schema1 = styled.div`
  display: column;
  margin-left: 18%;
`;

export default Schema02;
