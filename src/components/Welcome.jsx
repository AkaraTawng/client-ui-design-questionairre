import React from 'react'
import styled from 'styled-components'
import { devices } from '../utils/breakpoints';

function Welcome() {
  return (<>
    <HeaderMessage>Welcome</HeaderMessage>
    <BodyText>
      This questionnaire is used to help us understand your business goals and needs and guide us to create the best solution for you. 
    </BodyText>
    
    <BodyText>
      Please be as specific as possible in your answers as it will give us the most insight and enable us to help you best. 
    </BodyText>
    
    <BodyText>
      Use the back arrow in the top left corner at any time to navigate to a previous page to amend your answers.
    </BodyText>

  </>)
}

// font-family: 'Krona One', sans-serif;
// font-family: 'Montserrat', sans-serif;

const HeaderMessage = styled.h1`
  color: #BA3D9C;
  text-transform: uppercase;
  font-family: 'Krona One', sans-serif;
  font-size: 2.2rem;
  letter-spacing: .5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  @media ${devices.mobileM} {
    margin-top: 0;
  };
  
  @media ${devices.mobileL} {
  font-size: 3rem;
  margin-top: 1.5rem;
  };

  @media ${devices.tablet}{
  font-size: 3.2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  };

  @media ${devices.laptop} {
    margin-bottom: 3rem;
  }
`;

const BodyText = styled.p`
  color: white;
  text-align: center;
  width: 90%;
  line-height: 2rem;
  font-size: 0.9rem;
  margin-bottom: 2rem;
    
    @media ${devices.mobileL} {
      font-size: 1rem;
    }

    @media ${devices.tablet} {
     font-size: 1.1rem;
     width: 70%;
     margin-bottom: 3rem;
    }
    
    @media ${devices.laptop} {
      margin-bottom: 4rem;
    }
    
  

  &:nth-of-type(3) {
    margin-bottom: 0rem;
    
    @media ${devices.tablet} {
   margin-bottom: 1.5rem;
    }
  }
`;
 
export default Welcome


//make color variables
//import fonts