import styled from "styled-components"




export const Spinner = styled.img`

animation: spinner 1s infinite linear;

@keyframes spinner {
  
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

`