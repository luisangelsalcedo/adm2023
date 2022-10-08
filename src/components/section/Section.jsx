import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, autoheight, id }) => {
  return (
    <div className={autoheight ? "fp-auto-height section" : "section"} id={id}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  autoheight: PropTypes.bool,
};

Section.defaultProps = {
  autoheight: false,
};

export default Section;
