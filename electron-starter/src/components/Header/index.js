import {
  Container,
  ContainerTitle,
  IconStyle,
  Menu,
  MenuText,
  Separator,
  TextPhone,
  Title,
} from "../../styled/HomePageStyled";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlinePushpin,
  AiOutlineFile,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const navigate = useNavigate();
  const ChangePage = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <Container>
        <ContainerTitle>
          <Title onClick={ChangePage}>Nami</Title>
          <TextPhone>Suivi de commande</TextPhone>
          <IconStyle>
            <AiOutlineFile />
          </IconStyle>
          <TextPhone>Pas très loin d'ici</TextPhone>
          <IconStyle>
            <AiOutlinePushpin />
          </IconStyle>
          <TextPhone>01 23 45 67 89</TextPhone>
          <IconStyle>
            <AiOutlinePhone />
            <AiOutlineUser />
            <AiOutlineShoppingCart />
          </IconStyle>
        </ContainerTitle>
        <Separator />
        <Menu>
          <MenuText>Livres photo</MenuText>
          <MenuText>Tirages photo</MenuText>
          <MenuText>Décos murales</MenuText>
          <MenuText>Cadeaux photo</MenuText>
          <MenuText>Coques</MenuText>
          <MenuText>Calendriers photo</MenuText>
        </Menu>
      </Container>
    </>
  );
};

export default Header;
