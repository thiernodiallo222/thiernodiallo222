import React from 'react'
 import HomeChild from '../children/HomeChild';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeChild />
            <Footer />
        </div>
    )
}
export default Home


// {/* <Dropdown className ="drop-down-menu">
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/">Home</Dropdown.Item>
//     <Dropdown.Item href="#/about">About</Dropdown.Item>
//     <Dropdown.Item href="#/projects">Projects</Dropdown.Item>
//     <Dropdown.Item href="#/skills ">Skills</Dropdown.Item>
//     <Dropdown.Item href="#/go-to">Go to</Dropdown.Item>
//     <Dropdown.Item href="#/contact">Contact</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown> */}


//========================================================
// import React, { useState } from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const DropDown = props => {
//   const [dropdownOpen, setOpen] = useState(false);

//   const toggle = () => setOpen(!dropdownOpen);

//   return (
//     <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle caret>
//         Button Dropdown
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Header</DropdownItem>
//         <DropdownItem disabled>Action</DropdownItem>
//         <DropdownItem>Another Action</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Another Action</DropdownItem>
//       </DropdownMenu>
//     </ButtonDropdown>
//   );
// }

// export default DropDown;
