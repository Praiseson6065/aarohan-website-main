const BackgroundDiv = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: top;
  }

  @media (max-width: 480px) {
    background-image: url(${props => props.mobileImageUrl});
  }
`;