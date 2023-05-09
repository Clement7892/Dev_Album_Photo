import styled from "styled-components";
import Background03 from "../../screens/Background03";
import Button01 from "../Button/Schema03/ButtonSchema01";
import Button02 from "../Button/Schema03/ButtonSchema02";
import Button03 from "../Button/Schema03/ButtonSchema03";
import Button04 from "../Button/Schema03/ButtonSchema04";

const Schema03 = () => {
    return (
        <>
          <Background03 />
          <ContainerPicture>
            <Button01/>
            <Design>
                <Schema>
                    <Button02/>
                    <Button03/>
                </Schema>
                <Button04/>
            </Design>
          </ContainerPicture>
        </>
      );
}
const ContainerPicture = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  margin-top: 9%;
  margin-left: 25%;
`;
const Schema = styled.div`
  display: flex;
`;
const Design = styled.div`
  display: column;
  margin-right: -1%;
  margin-left: 15%;
`;
export default Schema03;
