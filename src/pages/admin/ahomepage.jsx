import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import plant1 from '../../assets/Hero image 1.png';
import plant2 from '../../assets/hero image 2.png';
import mainprofile from '../../assets/mainprofile.jpg'; // Import profile icon
// Import other images as needed
import image1 from '../../assets/image 1.png';
import image2 from '../../assets/image 2.png';
import image3 from '../../assets/image 3.png';
import image4 from '../../assets/image 4.png';
import image5 from '../../assets/image 5.png';
import image6 from '../../assets/image 6.png';
import image7 from '../../assets/image 7.png';
import image8 from '../../assets/image 8.png';
import image9 from '../../assets/image 9.png';
import image10 from '../../assets/image 10.png';
import image11 from '../../assets/image 11.png';
import image12 from '../../assets/image 12.png';
import image13 from '../../assets/image 13.png';
import image14 from '../../assets/image 14.png';
import image15 from '../../assets/image 15.png';
import image16 from '../../assets/image 16.png';
import image17 from '../../assets/image 17.png';
import image18 from '../../assets/image 18.png';
import image19 from '../../assets/image 19.png';
import image20 from '../../assets/image 14-1.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
  flex: 1;
  text-align: left;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin-right: 20px;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const BannerText = styled.h2`
  font-size: 3em;
  color: #333;
`;

const FeaturedProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h2`
  font-size: 1em;
  margin: 10px 0;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;

const AUserHomePage = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const products = [
    { id: 1, name: 'Tree 1', image: image1 },
    { id: 2, name: 'Tree 2', image: image2 },
    { id: 3, name: 'Tree 3', image: image3 },
    { id: 4, name: 'Tree 4', image: image4 },
    { id: 6, name: 'Plant 1', image: image5 },
    { id: 7, name: 'Plant 2', image: image6 },
    { id: 8, name: 'Plant 3', image: image7 },
    { id: 9, name: 'Plant 4', image: image8 },
    { id: 10, name: 'Tray', image: image9 },
    { id: 11, name: 'Soil 1', image: image10 },
    { id: 12, name: 'Soil 2', image: image11 },
    { id: 13, name: 'Spade', image: image12 },
    { id: 14, name: 'Duck 1', image: image13 },
    { id: 15, name: 'Duck 2', image: image20 },
    { id: 16, name: 'Duck 3', image: image14 },
    { id: 17, name: 'Duck 4', image: image15 },
    { id: 18, name: 'Pot 1', image: image16 },
    { id: 19, name: 'Pot 2', image: image17 },
    { id: 20, name: 'Pot 3', image: image18 },
    { id: 21, name: 'Pot 4', image: image19 },
  ];

  const handleContactClick = () => {
    navigate('/admin/acontact');
  };

  const handleProfileClick = () => {
    navigate('/admin/aprofile');
  };

  return (
    <Container>
      <Header>
        <Title>Green Planet</Title>
        <HeaderActions>
          <Button onClick={handleContactClick}>Contact Us</Button>
          <ProfileIcon src={mainprofile} alt="Profile" onClick={handleProfileClick} />
        </HeaderActions>
      </Header>
      <MainContent>
        <Banner>
          <BannerText>"As interesting as a plant"</BannerText>
          <BannerImage>
            <img src={plant1} alt="Plant 1" style={{ width: '200px', height: '200px' }} />
            <img src={plant2} alt="Plant 2" style={{ width: '250px', height: '250px' }} />
          </BannerImage>
        </Banner>
        <h2>Featured Products</h2>
        <FeaturedProduct>
          {products.map((product) => (
            <Product key={product.id} onClick={() => navigate(`/admin/product/${product.id}`)}> {/* Add onClick */}
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
            </Product>
          ))}
        </FeaturedProduct>
        <Pagination>
          <PaginationButton>Previous</PaginationButton>
          <PaginationButton>Next</PaginationButton>
        </Pagination>
      </MainContent>
    </Container>
  );
};

export default AUserHomePage;
