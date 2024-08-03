import React from 'react';
import styled from 'styled-components';
import contactImage from '../../assets/Hero image 1.png'; // Import the contact image

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const ContactHeader = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const ContactForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialLink = styled.a`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  text-decoration: none;
`;

const ContactImage = styled.img`
  width: 45%;
  border-radius: 8px;
`;

const ContactUsPage = () => (
  <ContactContainer>
    <ContactHeader>Contact us</ContactHeader>
    <ContactForm>
      <ContactImage src={contactImage} alt="Contact" />
      <FormSection>
        <h2>Stay Updated</h2>
        <SocialLinks>
          <SocialLink href="#">Facebook 📱</SocialLink>
          <SocialLink href="#">Instagram 🌐</SocialLink>
        </SocialLinks>
      </FormSection>
      <FormSection>
        <FormLabel>Name</FormLabel>
        <FormInput type="text" placeholder="Enter your name" />
        <FormLabel>Email</FormLabel>
        <FormInput type="email" placeholder="Enter your email" />
        <FormLabel>Message</FormLabel>
        <FormTextArea rows="4" placeholder="Enter your message" />
        <Button onClick={() => window.alert('submit successful')}>Submit</Button>

      </FormSection>
    </ContactForm>
  </ContactContainer>
);

export default ContactUsPage;
