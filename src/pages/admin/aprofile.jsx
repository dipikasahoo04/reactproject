import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/mainprofile.jpg'; // Import the profile image

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  position: relative;
`;

const ProfileHeader = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

const ProfileBox = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileField = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const ProfileLabel = styled.label`
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const ProfileInfo = styled.div`
  font-size: 1em;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #fafafa;
`;

const ContactButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: grey;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
  &:hover {
    background-color: #0056b3;
  }
`;

const ProfilePage = () => (
  <ProfileContainer>
    <ContactButton to="/admin/acontact">Contact Us</ContactButton>
    <ProfileHeader>B.planet</ProfileHeader>
    <ProfileBox>
      <ProfileImage src={profilePic} alt="Profile Picture" />
      <ProfileField>
        <ProfileLabel>Name</ProfileLabel>
        <ProfileInfo>XYZ</ProfileInfo>
      </ProfileField>
      <ProfileField>
        <ProfileLabel>Email</ProfileLabel>
        <ProfileInfo>XYZ@gmail.com</ProfileInfo>
      </ProfileField>
      <ProfileField>
        <ProfileLabel>Password</ProfileLabel>
        <ProfileInfo>********</ProfileInfo>
      </ProfileField>
      <ProfileField>
        <ProfileLabel>Phone Number</ProfileLabel>
        <ProfileInfo>9908976589</ProfileInfo>
      </ProfileField>
      <ProfileField>
        <ProfileLabel>Address</ProfileLabel>
        <ProfileInfo>Patia, Bhubaneswar</ProfileInfo>
      </ProfileField>
      <ProfileField>
        <ProfileLabel>State</ProfileLabel>
        <ProfileInfo>Odisha</ProfileInfo>
      </ProfileField>
      <ProfileField>
        <ProfileLabel>Zip Code</ProfileLabel>
        <ProfileInfo>751024</ProfileInfo>
      </ProfileField>
    </ProfileBox>
  </ProfileContainer>
);

export default ProfilePage;
