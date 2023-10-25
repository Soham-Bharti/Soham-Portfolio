import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const toaster = () => {
  toast.success("Hello Ji!", {
    icon: "👋",
    style: {
      color: 'white',
      borderRadius: "100px",
      fontSize: "18px",
      background: "rgb(2,0,36)",
      background:
        "-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 27%, rgba(2,175,230,1) 80%, rgba(0,212,255,1) 100%)",
      background:
        "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 27%, rgba(2,175,230,1) 80%, rgba(0,212,255,1) 100%)",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 27%, rgba(2,175,230,1) 80%, rgba(0,212,255,1) 100%)",
      filter:
        'progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1)',
    },
  });
};

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          style={{ cursor: "grab" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-name"
          onClick={toaster}
        >
          Soham Bharti
          <Toaster />
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/soham-bharti/" target="_blank">
            <img className="l" src="/linkedin.png" alt="L" />
          </a>
          <a href="https://github.com/Soham-Bharti/" target="_blank">
            <img src="/gitHubW.png" alt="G" />
          </a>
          <a href="https://www.instagram.com/_soham_27/" target="_blank">
            <img src="/instagram.png" alt="I" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCLANTLcPEQIikjTU_eNFi-Q"
            target="_blank"
          >
            <img src="/youtube.png" alt="Y" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
