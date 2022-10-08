import React, { useEffect } from "react";
import fpInit from "../../utils/fullpage-init";
import { Section, Sliders } from "..";

const Layout = () => {
  useEffect(() => {
    fpInit(["inscribete", "5datos", "testimonios"]);
  }, []);

  return (
    <div className="main">
      <Section id="section1">uno</Section>
      <Section id="section2">
        <Sliders />
      </Section>
      <Section id="section3">tres</Section>
    </div>
  );
};

export default Layout;
