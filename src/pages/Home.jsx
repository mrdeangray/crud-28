import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import CirclePercent from "../components/CirclePercent";
import { motion } from "framer-motion";

const Home = () => {
  const { currUser, handleSignIn, handleSignOut } = useContext(AuthContext);
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  const [isScalable, setIsScalable] = useState(false)
  return (
    <div>
      <h3>Home</h3>
      {currUser ? (
        <div>
          <Link to={`/readtasks`}>
            <button>Read Tasks</button>
          </Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
      <CirclePercent radius="20" percentage="80" />
      <motion.div animate={{ x: 100, scale: 1 }} initial={{ scale: 0 }}>
        <button>Button 1</button>
      </motion.div>

      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => setRotate(!rotate)}
      >
        <button>Button 2</button>
      </motion.div>

      <motion.div
        animate={{ x: move ? 100 : -100 }}
        transition={{ delay: 0.5, type: "tween", duration: 5 }}
        onClick={() => setMove(!move)}
      >
        <button>Button 3</button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 2 }}
        transition={{ delay: 0.5, type: "tween", duration: 5 }}
      >
        <button>Button 4</button>
      </motion.div>

      <motion.div drag whileDrag={{ scale: 2 }}>
        <button>Button 5</button>
      </motion.div>

      <motion.div drag="x" dragConstraints={{ left: 50 }}>
        <button>Button 6</button>
      </motion.div>

      <motion.div drag whileDrag={{ scale: 2 }}>
        <button>button 7</button>
      </motion.div>
      <motion.button drag="x" whileDrag={{ scale: 2 }}>
        Button 8
      </motion.button>
      <motion.button 
      drag="x" 
      whileDrag={{ scale: 2 }}
      onClick={()=>setIsScalable(!isScalable)}
      >
        button 9
      </motion.button>
    </div>
  );
};

export default Home;
