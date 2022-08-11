import styled from '@emotion/styled';

export const UserContainer = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: #fff;
`;

export const UserDescription = styled.div`
  width: 550px;
  margin: 0 auto;
`;

export const UserName = styled.p`
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
`;

export const UserInfo = styled.p`
  margin-top: 10px;
  color: darkgrey;
  text-align: center;
`;

export const UserAvatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const UserStatsBox = styled.ul`
  width: 300px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: center;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid silver;
`;

export const UserStat = styled.span``;

export const UserStatValue = styled.span`
  margin-top: 10px;
  font-weight: bold;
`;
