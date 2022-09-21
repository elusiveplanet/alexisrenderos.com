import React, { useEffect, useState } from "react";
import styled from "styled-components";

// ViewportHeightContainer is designed to render a div that's the exact height of the current
// viewport from initial page load + load, as described by the Javascript window interface.

// This component should only be used on mobile.
// The component itself will take care of creating appropriate listeners, hooks, and styling.
// With this in mind, you can safely wrap any element that is intended to be exactly one
// viewport height tall with ViewportHeightContainer.

// This component was created due to an inconsistency in the 100vh CSS measurement that occurs primarily on mobile.
// 100vh will change on some browsers based on the browser chrome (toolbars+url bar) that is visible.
// This measurement inconsistency leads to some undesired scroll behavior as browser chrome is hidden on scroll.
// To fix this, we can use the window interface to get the true size of the browser.

// Unfortunately, on Instagram and Facebook's in-app browsers, there is an inconsistency in the browser height
// measurement that is reported to the window interface. This is described and fixed in getInitialPageHeight.

const Container = styled.div.attrs<{
  height: number;
}>(({ height }) => ({
  style: {
    height: `${height}px`,
  },
}))<{ height: number }>`
  width: 100%;
`;

type ViewportHeightContainerProps = {
  children: JSX.Element;
};

const ViewportHeightContainer = ({
  children,
}: ViewportHeightContainerProps) => {
  // const [width, setWidth] = useState(0);
  const [initialInnerHeight, setInitialInnerHeight] = useState(0);
  const [initialOuterHeight, setInitialOuterHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  const getInitialPageHeight = () => {
    // If we haven't captured the initial window size + browser chrome yet,
    // let's grab it and store it in state to create a reasonable assumption
    // of what the "full bleed" height should be for the landing.
    // Inner and outer sometimes are different depending on mobile browser

    // On Instagram and Facebook's in-app browsers, the page loads in a way
    // that causes the inner window dimensions to be significantly larger than the
    // outer, something that should *never* be the case. To fix this, we check if
    // this error in reported window size exists (inner>outer), if so, we rely on the outer to populate
    if (window.innerHeight > window.outerHeight) {
      setInitialInnerHeight((prev) => window.outerHeight);
    } else {
      setInitialInnerHeight((prev) => window.innerHeight);
    }
    setInitialOuterHeight((prev) => window.outerHeight);
  };

  // const getPageWidth = () => {
  //   // Similar bug as described in getInitialPageHeight, same fix.
  //   if (window.innerWidth > window.outerWidth) {
  //     setWidth((prev) => window.outerWidth);
  //   } else {
  //     setWidth((prev) => window.innerWidth);
  //   }
  // };

  const handleWindowChange = () => {
    setInnerHeight((prev) => window.innerHeight);
    setOuterHeight((prev) => window.outerHeight);
    // getPageWidth();
  };

  useEffect(() => {
    // component is mounted and window is available

    // Run only once on page mount.
    getInitialPageHeight();

    handleWindowChange();

    // Re-calculate on resize
    window.addEventListener("resize", handleWindowChange);

    // Re-calculate on device orientation change
    window.addEventListener("orientationchange", handleWindowChange);

    // unsubscribe from the event on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowChange);
      window.removeEventListener("orientationchange", handleWindowChange);
    };
  }, []);

  return <Container height={initialInnerHeight}>{children}</Container>;
};

export default ViewportHeightContainer;
