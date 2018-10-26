import React, { PureComponent } from "react";
//Stateless Functional Component
const Footer = () => {
  const styles = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "60px",
    lineHeight: "60px",
    backgroundColor: "#f5f5f5"
  };
  return (
    <footer className="footer" style={styles}>
      <div class="container">
        <span class="text-muted">©2018 Yogesh Prabhukhanolkar</span>
      </div>
    </footer>
  );
};

export default Footer;
