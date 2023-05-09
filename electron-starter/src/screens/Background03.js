import React from "react";
import styled from "styled-components";
import ButtonBack from "../components/Button/Back";
import Choose from "../components/Button/Choose";
import ButtonNext03 from "../components/Button/Next/ButtonSchema03";
import Header from "../components/Header";

const Background03 = () => {
  return (
    <>
      <Header />
      <Designer>
        <Choose/>
        <ButtonBack/>
        <ButtonNext03/>
        <Picture src="https://media.istockphoto.com/id/874779108/photo/open-booklet-with-dark-hardcover-and-blank-square-pages-mock-up-illustration.jpg?s=612x612&w=0&k=20&c=ppgDG5zfWmN9gRLGKm1qfhVt3RQ9kbtBZVlcgURx1zs=" />
      </Designer>
    </>
  );
};

const Designer = styled.div`
  position relative;
`;
const Picture = styled.img`
  position: absolute;
  z-index: 1;
  width: 70%;
  margin-left: 14%;
`;
export default Background03;
