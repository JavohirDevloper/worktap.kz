import React from "react";
import Navbar from "../../component/Home/Navbar/Navbar";
import Section from "../../component/Home/Section/Section";
import Section1 from "../../component/Home/Section1/Section";
import Frlancer from "../../component/Home/Frlancer/Frlancer";
import WorkTap from "../../component/Home/WorkTap/WorkTap";
import Business from "../../component/Home/Business/Business";
import Footer from "../../component/Home/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Section1 />
      <Frlancer />
      <WorkTap />
      <Business />
      <Footer />
    </div>
  );
};

export default Dashboard;
