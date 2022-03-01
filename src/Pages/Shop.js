import React from 'react';
import styled from 'styled-components';
import { CCard } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { categories } from "../data";
import NewWebMultiple from '../components/NewWebMultiple';
import LinkHeader from '../components/templates/LinkHeader';

const Container = styled.div``;
const MiddleHeader = styled.div`  
  text-align: center;
  margin: 0%;
  font-size: 20px;
  @media (max-width: 1025px) {
    font-size: 20px;    
  }
  @media (min-width: 1026px) and (max-width: 1450px) {   
    font-size: 20px;    
  }
  @media (max-width: 2570px) {
    font-size: 22px;
  }                          
`;
const IconSection = styled.div`
  text-align: center;
  margin: 5px;                       
`;
const BottomHeader = styled.div`
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  @media (max-width: 2570px) {
    font-size: 15px;
  }                                                    
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
    @media (max-width: 1025px) {
    font-size: 18px;
    }
    @media (min-width: 1026px) and (max-width: 1450px) {
      font-size: 19px;  
    }
    @media (max-width: 768px) {
      font-size: 16px;
      margin-top: 2%;  
    }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  @media (max-width: 1025px) {
    width: 70%;
    font-size: 12px;
    }
  @media (min-width: 1026px) and (max-width: 1450px) { 
    font-size: 14px;
    }
`;
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;
const Input = styled.input`
  flex: 1;
  min-width: 0.5%;
  margin: 10px 10px 0px 0px;
  padding: 0.5px;
  text-align: center;
`;

function Home() { 
  const options  = [
    'All',
    'Router',
    'ONU',
    'Patch Cord',
    'Splitter',
    'Internet Cable',
    'Ethernet Switch',
    'Internet Accessories',
    'Network Switch',
    'Joint Box',
    'Node',
    'Dish Accessories',
    'Monitor',
    'Mobile Accessories',
    'Smart TV',
    'Smart TV Box',
    'Camera',
    'Sound Box',
    'Smart Watch',
    'Others'
]

  return <Container>
      <LinkHeader link={'www.w3schools.com'} text={'INTERNET PRODUCTS'} />
    {[
    { color: 'dark' },].map((item, index) => (
        <CCard
        textColor={item.textColor}
        className={`mb-3 border-top-${item.color} border-top-3`}
        style={{ maxWidth: '180rem' }}
        key={index}>
        <CCardBody>  
    <MiddleHeader>
        <b>INTERNET PRODUCTS</b>
    </MiddleHeader>
    <IconSection>
      <i class="fas fa-th-large"></i> &nbsp;
      <i class="fas fa-list"></i> &nbsp;
      <b>SHOW:</b> &nbsp;
      <Input type="text" placeholder="Search Here.."/>  
      <select id="selectNumber">
        {options.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
    </IconSection>
    <BottomHeader>
      SHOWING ALL XXX RESULTS
    </BottomHeader>
    </CCardBody>
        </CCard>
  ))}
  {[
    { color: 'dark' },].map((item, index) => (
        <CCard
        textColor={item.textColor}
        className={`mb-3 border-top-${item.color} border-top-3`}
        style={{ maxWidth: '180rem' }}
        key={index}>
        <CCardBody>
        <ProductContainer>
            <Center>
            <Title><b>PRODUCT CATEGORIES</b></Title>   
                {categories.map((item, index) =>(
                <List key={index}>
                    <ListItem>
                        <p>{item.title}{"\n"}</p>
                    </ListItem>
                    <i class="fas fa-chevron-down"></i>  
                </List>
                ))}       
            </Center>
              <NewWebMultiple/>
            </ProductContainer>
        </CCardBody>
        </CCard>
  ))}
  </Container>;
};

export default Home;
