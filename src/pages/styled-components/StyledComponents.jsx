import styled from "styled-components";
import { Link } from "react-router-dom";

//styles for NavMenu.jsx

export const HeaderNav = styled.header`
  background-color: #35363a;
  padding: 10px 0;
  border-bottom: 1px solid #747474;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 90px;
  padding: 0;
`;

export const NavItem = styled.li`
  background-color: #202124;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid #606164;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #c4bdbd;
  cursor: pointer;
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

//styles for Publications.jsx

export const PublicationsTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #202124;
`;

//styles for Publication.jsx

export const PublicationWrapper = styled.div`
  width: 60%;
  align-items: center;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  margin: auto;
  background-color: #35363a;
  margin-bottom: 40px;
  border-radius: 10px;
`;

export const PublicationTopContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const PublicationImgAvatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

export const PublicationImg = styled.img`
  width: 100%;
`;

export const PublicationBottonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
  align-items: center;
`;

export const PublicationButtonsNumber = styled.p`
  display: flex;
  align-items: center;
`;

export const PublicationButtons = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const PublicationImgReactions = styled.img`
  width: 30px;
`;

//styles for AddPublications.jsx

export const AddForm = styled.form`
  padding: 30px 0;
  width: 500px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const AddFormInputs = styled.input`
  cursor: pointer;
  width: 70%;
  border: 1px solid #929292;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  color: #000;
  &::placeholder {
    color: #000;
  }
`;

export const AddFormSelect = styled.select`
  cursor: pointer;
  width: 74.2%;
  border: 1px solid #929292;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  color: #000;
`;

export const AddSubmit = styled.button`
  cursor: pointer;
  font-size: 18px;
  width: 120px;
  border: 1px solid #606164;
  border-radius: 5px;
  padding: 10px;
  background-color: #35363a;
  color: #fff;
  &:active {
    color: #bbb;
    background-color: #202124;
  }
  &:hover {
    color: #bbb;
    background-color: #202124
  }
`;