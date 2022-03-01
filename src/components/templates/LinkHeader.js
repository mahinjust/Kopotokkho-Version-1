import React from 'react'
import styled from 'styled-components';

function LinkHeader({link, text}) {
  return (
    <Header>
        <b>
          <a href='www.google.com'>HOME</a>/<a href='www.github.com'>SHOP</a>/<a href={link}>{`${text}`}</a>
        </b>          
    </Header>
  )
}

export default LinkHeader

const Header = styled.div`
  text-align: center;
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  a
  { 
    text-decoration: none;
    color: black;
  }
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