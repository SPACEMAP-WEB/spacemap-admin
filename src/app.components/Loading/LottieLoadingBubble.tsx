import Lottie from 'react-lottie';
import LottieBubble from './Lottie/890-loading-animation.json';
import styled from 'styled-components';

const LottieLoadingBubble = ({ width = 80 }) => (
  <StyledWrapper>
    <Lottie options={{ animationData: LottieBubble }} width={width} />
  </StyledWrapper>
);

export default LottieLoadingBubble;

const StyledWrapper = styled.div`
  height: 100px;
`;
