/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Container, ContainerTitles } from './styles';

interface CurrentPage {
  page: string;
}

const Header = ({ page }: CurrentPage) => {
  return (
    <Container>
      <ContainerTitles>
        <p>PETSHOP &nbsp; &nbsp; | &nbsp; &nbsp; {page.toUpperCase()}</p>
      </ContainerTitles>
    </Container>
  );
};

export default Header;
