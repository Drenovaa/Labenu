import styled, {keyframes} from 'styled-components'



const sideToSideSlide = keyframes`
  0%{
      background: #8c1eff;
      box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #8c1eff,
                0 0 1.7rem #8c1eff,
                0 0 0.8rem #8c1eff,
                0 0 1.5rem #7900bf,
                0 0 1.0rem #7900bf;
      width: 10px;
      left:0;
  }  
  25%{
      background: #8c1eff;
      box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #8c1eff,
                0 0 1.7rem #8c1eff,
                0 0 0.8rem #8c1eff,
                0 0 1.5rem #7900bf,
                0 0 1.0rem #7900bf;
      width: 100px;
      left:0;
  }
  50%{
      background: #f222ff;
      box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #f222ff,
                0 0 1.7rem #f222ff,
                0 0 0.8rem #f222ff,
                0 0 1.5rem #7900bf,
                0 0 1.0rem #7900bf;
      width: 100px;
      width: 10px;
      left: 90px;
  }
  75%{
      background: #f222ff;
      box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #f222ff,
                0 0 1.7rem #f222ff,
                0 0 0.8rem #f222ff,
                0 0 1.5rem #7900bf,
                0 0 1.0rem #7900bf;
      width: 100px;
      left:0;
  }
  100%{
    background: #8c1eff;
      box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #8c1eff,
                0 0 1.7rem #8c1eff,
                0 0 0.8rem #8c1eff,
                0 0 1.5rem #7900bf,
                0 0 1.0rem #7900bf;
      width: 10px;
      left:0;
  }
`

export const LoadingSlider = styled.div`
    margin-top: 50px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: aqua;
    box-shadow: 0 0 10px aqua;
    animation: ${sideToSideSlide} 2s ease infinite;
`
export const LoadingDisplay = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;

`