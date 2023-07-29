import styled from 'styled-components';
import {devices} from '../utils/breakpoints';

export default function Question({children, id, className}) {
  return (
    <QuestionText className={className} id={id}>{children}</QuestionText>
  )
}  

const QuestionText = styled.p`
  color: white;
  padding-bottom: 1.5rem;
  border-bottom: 4px solid white;
  width: 80%;
  font-size: 2.5rem;
  /* margin-top: -5rem; */

  &:not(:first-child){
    margin-top: 7rem;
  }

  &.design-preferences {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }

  &.business-description {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }

  &.services-description {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }
  
  &.website-goals {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }

  &.content-type {
    @media ${devices.mobileM} {
      margin-top: 10rem;
    }
  }
 
  &.website-features {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }

  &.unique-qualities, &.target-demographic {
    margin-top: -15rem;
    margin-bottom: 3rem;
    width: 100%;
  }

  &.brand-personality {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }

  &.favorite-websites {
    margin-top: -15rem;
    margin-bottom: 3rem;
  }

  &#submit-message {
    margin-top: -15rem;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
  }


`;

