import Lottie from 'react-lottie'
import BusinessProcesses from './Lottie/40277-man-working-on-business-processes.json'
import styled from 'styled-components'

const LottieLoadingTable = ({ width = 350 }) => (
  <StyledWrapper>
    <Lottie options={{ animationData: BusinessProcesses }} width={width} />
  </StyledWrapper>
)

export default LottieLoadingTable

const StyledWrapper = styled.div`
  height: 30vh;
`
