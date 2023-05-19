import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin: 26px auto 0 auto;
  text-align: center;

  background: ${({ background }) => background || '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  transition: 250ms;

  &:hover {
    background: ${({ background }) => (background ? '#ebd8ff' : '#5cd3a8')};
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }
`;
