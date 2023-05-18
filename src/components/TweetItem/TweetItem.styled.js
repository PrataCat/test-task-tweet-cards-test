import styled from 'styled-components';

export const Tweet = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
`;

export const Marks = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Сircle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  border-radius: 50%;
  background-color: #5736a3;
`;

export const Stat = styled.div`
  padding-top: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  ${'' /* padding-left: 15px; */}
`;

export const Info = styled.p`
  display: flex;
  gap: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Count = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
