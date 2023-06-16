import styled from '@emotion/styled';

const UserProfile = styled.div`
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
  padding: 25px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const Userinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserAvatar = styled.img`
  display: block;
  width: 150px;
  border: 1px solid black;
  border-radius: 45em;
  margin-bottom: 35px;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
`;
const UserTag = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 500;
  color: grey;
`;
const UserLocation = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 500;
  color: grey;
`;
const UserStats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    display: inline-flex;
    flex-basis: calc((100% / 3) - 20px - 2px);
    flex-direction: column;
    padding: 10px;

    text-align: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
`;
const StatsLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: grey;
`;
const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export {
  UserProfile,
  Userinfo,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsLabel,
  StatsQuantity,
};
