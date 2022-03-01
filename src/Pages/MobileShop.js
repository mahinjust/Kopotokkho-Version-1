import React from 'react';
import styled from 'styled-components';
import { CCard } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewMultipleRowItem from '../components/NewMultipleRowItem';
import LinkHeader from '../components/templates/LinkHeader';

const Container = styled.div``; 
const Header = styled.div`
  text-align: center;
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 300px) {
    margin: 10px;
    font-size: 0.8rem;
  }
  @media (min-width: 301px) and (max-width: 450px) {
    margin: 10px;
    font-size: 0.8rem;
  }
  @media (min-width: 451px) and (max-width: 600px) {
    margin: 10px;
    font-size: 0.8rem;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    margin: 10px;
    font-size: 0.9rem;
  }
`;
const ProductContainer = styled.div`
  text-align: center;
  margin-top: 5%;
`;
function MobileHome() {
    return <Container>
      <LinkHeader link={'www.w3schools.com'} text={'INTERNET PRODUCTS'} />
      {[
      { color: 'dark' },].map((item, index) => (
          <CCard
          textColor={item.textColor}
          className={`mb-3 border-top-${item.color} border-top-3`}
          style={{ maxWidth: '180rem' }}
          key={index}
          >
          <CCardBody>
          <Header>
          <b>INTERNET PRODUCTS</b>          
          </Header>
            <ProductContainer>
               <NewMultipleRowItem/>
            </ProductContainer>
          </CCardBody>
          </CCard>
      ))}
    </Container>;
  };

export default MobileHome