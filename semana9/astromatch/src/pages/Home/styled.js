import styled from "styled-components";

export const ProfileImg = styled.img`
  max-height: 350px;
  max-width: 350px;
  display: block;
`;
export const ContainerProfile = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsMatch = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const SelectionButton = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   width: 100px;
   height: 100px;
   border: 1px solid ${(props) => props.option === 'false' ? 'green' : 'red'};
   color: ${(props) => props.option === 'false' ? 'green' : 'red'};
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: ${props => props.option === 'false' ? 'green' : 'red'};
    color: white;
    transform: scale(0.8);
    cursor: pointer;
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`