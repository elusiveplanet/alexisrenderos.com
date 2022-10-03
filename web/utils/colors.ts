// Yellows
export const SaffronYellow = "rgba(243, 200, 27, 1)";
export const SaffronYellowSlightlyTransparent = "rgba(243, 200, 27, 0.65)";
export const SaffronYellowTransparent = "rgba(243, 200, 27, 0.5)";
export const NectarYellow = "rgba(244, 184, 10, 1)";

// Blues
export const IndigoBlue = "rgba(24, 48, 73, 1)";
export const NavyBlue = "rgba(24, 51, 79, 1)";
export const CobaltBlue = "rgba(24, 58, 91, 1)";
export const AzureBlue = "rgb(24,81,135)"; //#185187

// Other Colors
export const White = "rgba(255, 255, 255, 1)";
export const NeutralOffWhite = "rgba(237, 237, 237, 1)";
export const VeryDarkGrey = "rgba(26, 29, 31, 1)";
export const Black = "rgba(0, 0, 0, 1)";

// RGBA Shadows
export const AlmostInsignificantShadow = "rgba(0, 0, 0, 0.075)";
export const SlightShadow = "rgba(0, 0, 0, 0.2)";
export const QuarterShadow = "rgba(0, 0, 0, 0.25)";
export const HalfShadow = "rgba(0, 0, 0, 0.5)";
export const ThreeQuarterShadow = "rgba(0, 0, 0, 0.75)";
export const NearFullShadow = "rgba(0, 0, 0, 0.9)";

// Text Colors
export const LightText = "rgba(237, 239, 241, 1)";
export const DarkText = "rgba(23, 24, 28, 1)";
export const DarkTextAlternate = CobaltBlue;
export const AccentText = SaffronYellow;
export const ErrorText = SaffronYellow;

// Transparencies
export const FullyTransparent = "rgba(0, 0, 0, 0)";
export const SlightlyDarken = "rgba(0, 0, 0, 0.075)";
export const ModeratelyDarken = "rgba(0, 0, 0, 0.12)";
export const SignificantlyDarken = "rgba(0, 0, 0, 0.15)";
export const MegaDarken = "rgba(0, 0, 0, 0.15)";
export const GigaDarken = "rgba(0, 0, 0, 0.3)";
export const SlightlyLighten = "rgba(255, 255, 255, 0.15)";
export const SignificantlyLighten = "rgba(255, 255, 255, 0.075)";

// Gradients
export const IndigoToAzureGradient = `linear-gradient(to right,
  ${IndigoBlue} 0%,
  ${NavyBlue} 8%,
  ${CobaltBlue} 36%,
  ${AzureBlue} 100%)`;

export const IndigoToAzureTextGradient = `linear-gradient(45deg,
  ${IndigoBlue} 0%,
  ${NavyBlue} 8%,
  ${CobaltBlue} 36%,
  ${AzureBlue} 75%)`;

export const RepeatingRainbowGradientFill = `repeating-linear-gradient(
      45deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 5%,
      rgba(208, 222, 33, 1) 10%,
      rgba(79, 220, 74, 1) 15%,
      rgba(63, 218, 216, 1) 20%,
      rgba(47, 201, 226, 1) 25%,
      rgba(28, 127, 238, 1) 30%,
      rgba(95, 21, 242, 1) 35%,
      rgba(186, 12, 248, 1) 40%,
      rgba(251, 7, 217, 1) 45%,
      rgba(255, 0, 0, 1) 50%,
      rgba(255, 154, 0, 1) 55%,
      rgba(208, 222, 33, 1) 60%,
      rgba(79, 220, 74, 1) 65%,
      rgba(63, 218, 216, 1) 70%,
      rgba(47, 201, 226, 1) 75%,
      rgba(28, 127, 238, 1) 80%,
      rgba(95, 21, 242, 1) 85%,
      rgba(186, 12, 248, 1) 90%,
      rgba(251, 7, 217, 1) 95%,
      rgba(255, 0, 0, 1) 100%
    )`;
export const SaffronToNectarGradient = `linear-gradient(180deg,
  ${SaffronYellow} 0%,
  ${NectarYellow} 100%)`;
export const PrimaryGradientFill = IndigoToAzureGradient;
export const AccentGradientFill = SaffronToNectarGradient;

// Background Colors
export const PrimaryBackgroundColor = IndigoToAzureGradient;
export const AlternateBackgroundColor = NeutralOffWhite;
export const CoolToneAlternateBackgroundColor = LightText;
