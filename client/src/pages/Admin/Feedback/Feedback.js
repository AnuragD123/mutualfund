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
/*
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
*/
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
      
      <button onClick={handleOpenModal} style={header}>Feedback</button>
      
      {isModalOpen && (
        <div style={modalStyles}>
          <div style={modalHeaderStyles}>
            
            <div style = {styles.container}>
            <h3 style={space}>Leave a Feedback</h3>
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
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)"
};

const modalHeaderStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
};
const space = {
  //left: "20px",
  top: "50%",
  margin: "80px 0",
  width: 300,
};

const styles = {
  container: {
    //margin: "40px 0",
    //marginRight: "40px 0"
    left: "20px",
    alignItems: "centre",
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
const header = {
  //top: "50%",
  margin: "40px 0",
  //width: 300,
}

export default FeedbackModal;