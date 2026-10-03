import { Deck } from './components/Deck';
import { IntroSlide } from './slides/IntroSlide';
import { VisionSlide } from './slides/VisionSlide';
import { FounderPuzzleSlide } from './slides/FounderPuzzleSlide';
import { FundraisingCalibrationSlide } from './slides/FundraisingCalibrationSlide';
import { LogisticsSlide } from './slides/LogisticsSlide';

export default function App() {
  const slides = [
    IntroSlide,
    VisionSlide,
    FounderPuzzleSlide,
    FundraisingCalibrationSlide,
    LogisticsSlide
  ];

  return <Deck slides={slides} />;
}
