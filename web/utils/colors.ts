// Yellows
export const SaffronYellow = "rgba(243, 200, 27, 1)";
export const NectarYellow = "rgba(244, 184, 10, 1)";

// Blues
export const IndigoBlue = "rgba(24, 48, 73, 1)";
export const NavyBlue = "rgba(24, 48, 73, 1)";
export const CobaltBlue = "rgba(24, 58, 91, 1)";
export const AzureBlue = "rgba(24, 81, 135, 1)";

// Other Colors
export const White = "rgba(255, 255, 255, 1)";
export const NeutralOffWhite = "rgba(244, 244, 244, 1)";
export const Black = "rgba(0, 0, 0, 1)";

// RGBA Shadows
export const AlmostInsignificantShadow = "rgba(0, 0, 0, 0.075)";
export const SlightShadow = "rgba(0, 0, 0, 0.15)";
export const QuarterShadow = "rgba(0, 0, 0, 0.25)";

// Text Colors
export const LightText = "rgba(255, 255, 255, 1)";
export const DarkText = "rgba(0, 0, 0, 1)";

// Background Colors
export const FullyTransparent = "rgba(0, 0, 0, 0)";
export const SlightlyDarken = "rgba(0, 0, 0, 0.075)";
export const ModeratelyDarken = "rgba(0, 0, 0, 0.1)";
export const SignificantlyDarken = "rgba(0, 0, 0, 0.15)";
export const SlightlyLighten = "rgba(255, 255, 255, 0.15)";
export const SignificantlyLighten = "rgba(255, 255, 255, 0.075)";

export const IndigoToAzureGradient = `linear-gradient(to right,
  ${IndigoBlue} 0%,
  ${NavyBlue} 8%,
  ${CobaltBlue} 36%,
  ${AzureBlue} 100%)`;

export const SaffronToNectarGradient = `linear-gradient(180deg,
  ${SaffronYellow} 0%,
  ${NectarYellow} 100%)`;
