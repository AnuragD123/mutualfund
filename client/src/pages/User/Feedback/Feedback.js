/*import React from "react";
import {FaStar} from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

function Feedback() {

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = value => {
    setHoverValue(undefined)
  }
  return (
    
    <div style = {styles.container}>
      <h2>Rate Us</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar key = {index} size = {24} style = {
              {
                marginRight: 10,
                cursor: "pointer",
              }
            }
            color={(hoverValue || currentValue)> index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={()=>handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your feedback"
        style={styles.textarea}
      />
      <button style={styles.button}>Submit</button>
    </div>
  );
};

const styles = {
  container: {
    margin: "40px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
}

export default Feedback;*/
import React, { useState } from "react";
import {FaStar} from "react-icons/fa";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}
const FeedbackModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = value => {
    setHoverValue(undefined)
  }
  return (
    <div>
      
      <button onClick={handleOpenModal}>Feedback</button>
      
      {isModalOpen && (
        <div style={modalStyles}>
          <div style={modalHeaderStyles}>
            
            <div style = {styles.container}>
            <h3>Leave a Feedback</h3>
            <div style={styles.stars}>
              {stars.map((_, index) => {
                return (
              <FaStar key = {index} size = {24} style = {
              {
                marginRight: 10,
                cursor: "pointer",
              }
            }
            color={(hoverValue || currentValue)> index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={()=>handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
    </div>
            <button onClick={handleCloseModal}>x</button>
          </div>
          <form>
          <textarea
        placeholder="Write your feedback..."
        style={styles.textarea}
      />
            <button style={styles.button}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)"
};

const modalHeaderStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
};

const styles = {
  container: {
    //margin: "40px 0",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
  },
  textarea: {
    alignItems: "center",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10,
  },
  button: {
    alignItems: "center",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
}

export default FeedbackModal;