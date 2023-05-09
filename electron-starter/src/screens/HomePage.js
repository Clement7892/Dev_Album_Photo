import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import {
  Button,
  Design,
  DesignHome,
  End,
  IconStyle2,
  Image,
  TextHome,
  TextHome2,
} from "../styled/HomePageStyled";

const HomePage = () => {
  
  const navigate = useNavigate();
  const ChangePage = () => {
    navigate('/schema01', {replace: true});
  };

  return (
    <>
      <Header />
      <DesignHome>
        <Image src="https://smash-images.photobox.com/optimised/3cf96cf609c7c42a7ccd1ea0f2908853ac3b2b00_file_desktop_photobook-range-lifestyle-5760x1920-@1x.webp" />
        <Design>
          <TextHome>Venez créer votre album photo</TextHome>
          <TextHome2>avec le logiciel Nami</TextHome2>
          <Button onClick={ChangePage}>Créer Ici</Button>
        </Design>
        <IconStyle2>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </IconStyle2>
      </DesignHome>
      <End>Créé par Clément IIIème du nom</End>
    </>
  );
}

export default HomePage;
