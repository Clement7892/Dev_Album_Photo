import { AiOutlineCaretRight } from "react-icons/ai";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const ButtonNext03 = ()  => {
    
    const navigate = useNavigate();
    const ChangePage = () => {
      navigate('/schema01', {replace: true});
    };

    return (
        <StyledBtnRight onClick={ChangePage}>
          <AiOutlineCaretRight />
        </StyledBtnRight>
    );
}

const StyledBtnRight = styled.div`
  position: absolute;
  margin-top: 17%;
  font-size: 50px;
  margin-left: 90%;
  
  &:hover {
    transform: rotate(10deg);
  }
`;

export default ButtonNext03;