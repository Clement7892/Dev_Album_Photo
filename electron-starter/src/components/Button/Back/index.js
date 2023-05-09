import { AiOutlineCaretLeft } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledBtnLeft onClick={goBack}>
      <AiOutlineCaretLeft />
    </StyledBtnLeft>
  );
};

const StyledBtnLeft = styled.div`
  position: absolute;
  margin-top: 17%;
  font-size: 50px;
  margin-left: 5%;

  &:hover {
    transform: rotate(-10deg);
  }
`;

export default ButtonBack;
