import styles from "../styles/DropdownEditDelete.module.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

  export const DropdownEditDelete = ({handleEdit, handleDelete}) => {
    return (
        <Dropdown className="ml-auto" drop="left">
        <Dropdown.Toggle as={CustomToggle} />
    
        <Dropdown.Menu className="text-center"
         popperConfig={{ strategy: "fixed" }}>
          <Dropdown.Item 
            onClick={handleEdit}
            aria-label="edit">
                <i className="fas fa-edit" /> Edit
            </Dropdown.Item>

          <Dropdown.Item 
            onClick={handleDelete}
            aria-label="delete">
                <i className="fas fa-trash"> Delete</i>
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  
  