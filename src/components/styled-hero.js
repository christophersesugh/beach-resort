import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) =>
      props?.img ??
      "https://res.cloudinary.com/christo/image/upload/v1659900170/room-1_tu7mvy.jpg"})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
