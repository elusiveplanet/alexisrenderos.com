const isMobile = (window: Window): boolean => {
  if ("maxTouchPoints" in window.navigator)
    return window.navigator.maxTouchPoints > 0;

  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") return !!mQ.matches;

  if ("orientation" in window) return true;

  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(
      window.navigator.userAgent
    ) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(window.navigator.userAgent)
  );
};

export default isMobile;
