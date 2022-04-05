import Lottie from 'react-lottie';
// @ts-ignore
import ErrorLottie from './Lottie/39620-404-network';

const Lottie404 = ({ width = 350 }) => (
  <Lottie options={{ animationData: ErrorLottie }} width={width} />
);

export default Lottie404;
