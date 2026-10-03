import { IntroSlide } from './slides/IntroSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { ProblemSlidePublic } from './slides/ProblemSlidePublic';
import { SolutionSlide } from './slides/SolutionSlide';
import { SolutionSlidePublic } from './slides/SolutionSlidePublic';
import { WhyNowSlide } from './slides/WhyNowSlide';
import { MarketSlide } from './slides/MarketSlide';
import { ProductsSummarySlide } from './slides/ProductsSummarySlide';
import { AssistantPHDSlide } from './slides/AssistantPHDSlide';
import { CreativeLabSlide } from './slides/CreativeLabSlide';
import { GeniusSuiteSlide } from './slides/GeniusSuiteSlide';
import { GoToMarketSlide } from './slides/GoToMarketSlide';
import { GoToMarketSlidePublic } from './slides/GoToMarketSlidePublic';
import { TechnologySlide } from './slides/TechnologySlide';
import { TechnologySlidePublic } from './slides/TechnologySlidePublic';
import { TractionSlide } from './slides/TractionSlide';
import { BusinessModelSlide } from './slides/BusinessModelSlide';
import { FinancialsSlide } from './slides/FinancialsSlide';
import { TeamSlide } from './slides/TeamSlide';
import { AskSlide } from './slides/AskSlide';
import { AskSlidePublic } from './slides/AskSlidePublic';
import { VisualsSlide1, VisualsSlide2, VisualsSlide3, VisualsSlide4, VisualsSlide5 } from './slides/VisualsSlide';
import { CapTableSlide } from './slides/CapTableSlide';
import { DataRoomIndexSlide1, DataRoomIndexSlide2 } from './slides/DataRoomIndexSlide';
import { GoToMarketStrategySlide } from './slides/GoToMarketStrategySlide';
import { PandLStatementSlide } from './slides/PandLStatementSlide';

export const V1_FULL = [
  IntroSlide,
  ProblemSlide,
  SolutionSlide,
  WhyNowSlide,
  MarketSlide,
  ProductsSummarySlide,
  AssistantPHDSlide,
  CreativeLabSlide,
  GeniusSuiteSlide,
  GoToMarketSlide,
  TechnologySlide,
  TractionSlide,
  BusinessModelSlide,
  FinancialsSlide,
  TeamSlide,
  AskSlide,
  CapTableSlide,
  DataRoomIndexSlide1,
  DataRoomIndexSlide2,
  GoToMarketStrategySlide,
  PandLStatementSlide,
  VisualsSlide1,
  VisualsSlide2,
  VisualsSlide3,
  VisualsSlide4,
  VisualsSlide5
];

export const V1_PUBLIC_VC = [
  IntroSlide,
  ProblemSlidePublic,
  SolutionSlidePublic,
  WhyNowSlide,
  MarketSlide,
  ProductsSummarySlide,
  AssistantPHDSlide,
  CreativeLabSlide,
  GeniusSuiteSlide,
  GoToMarketSlidePublic,
  TechnologySlidePublic,
  TractionSlide,
  BusinessModelSlide,
  TeamSlide,
  AskSlidePublic,
  // Hidden: CapTableSlide (17), DataRoomIndexSlide1 (18), DataRoomIndexSlide2 (19), GoToMarketStrategySlide (20), Financials (14), P&L (21)
  VisualsSlide1,
  VisualsSlide2,
  VisualsSlide3,
  VisualsSlide4,
  VisualsSlide5
];

export const decks = {
  'OWT - PD - V1 - All Slides': V1_FULL,
  'OWT - PD - V1 - IC': [...V1_FULL],
  'OWT - PD - V1 - PublicVC': V1_PUBLIC_VC
};
