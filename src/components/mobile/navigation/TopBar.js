import React from 'react';
import styled from 'styled-components'
import TopSection from './headerComponents/TopSection';

function TopBar() {
  return (
    <div>
      <TopSection/>
      <BottomSection>
        <AlignmentDiv>
          <input type="text" placeholder="Looking for something?" />
          <SearchBtn>
            <i className="fa fa-search"></i>
          </SearchBtn>
        </AlignmentDiv>
      </BottomSection>
    </div>
  );
}

export default TopBar;

const BottomSection = styled.div`
  background-color: #00FFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0%;
`

const AlignmentDiv = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  height: 37px;
  @media (min-width: 550px) and (max-width: 700px) {
    height: 33px;
  }
  @media (min-width: 400px) and (max-width: 549px) {
    height: 26px;
  }
  @media (max-width: 399px) {
    height: 23px;
  }
  input{
    position: absolute;
    padding: 2%;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    @media (min-width: 550px) and (max-width: 700px) {
      font-size: 1rem;
    }
    @media (min-width: 400px) and (max-width: 549px) {
      font-size: 0.8rem;
    }
    @media (max-width: 399px) {
      font-size: 0.8rem;
    }
  }
`

const SearchBtn = styled.div`
  background-color: #CCCCCC;
  padding: 2%;
  border: none;
  border-radius: 5px;
  position: absolute;
  right: -4%;
  @media (min-width: 550px) and (max-width: 700px) {
    padding: 2%;
  }
  @media (min-width: 400px) and (max-width: 549px) {
    padding: 1.4%;
  }
  @media (max-width: 399px) {
    padding: 1.2%;
  }
  i{
    font-size: 1.2rem;
    @media (min-width: 550px) and (max-width: 700px) {
      font-size: 1rem;
    }
    @media (min-width: 400px) and (max-width: 549px) {
      font-size: 0.8rem;
    }
    @media (max-width: 399px) {
      font-size: 0.8rem;
    }
  }
`