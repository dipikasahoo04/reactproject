import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import image1 from '../../../assets/image 1.png';
import image2 from '../../../assets/image 2.png';
import image3 from '../../../assets/image 3.png';
import image4 from '../../../assets/image 4.png';
import image5 from '../../../assets/image 5.png';
import image6 from '../../../assets/image 6.png';
import image7 from '../../../assets/image 7.png';
import image8 from '../../../assets/image 8.png';
import image9 from '../../../assets/image 9.png';
import image10 from '../../../assets/image 10.png';
import image11 from '../../../assets/image 11.png';
import image12 from '../../../assets/image 12.png';
import image13 from '../../../assets/image 13.png';
import image14 from '../../../assets/image 14.png';
import image15 from '../../../assets/image 15.png';
import image16 from '../../../assets/image 16.png';
import image17 from '../../../assets/image 17.png';
import image18 from '../../../assets/image 18.png';
import image19 from '../../../assets/image 19.png';
import image20 from '../../../assets/image 14-1.png';

const Container = styled.div`
  padding: 0 40px;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #000;
  text-transform: uppercase;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  position: absolute;
  right: 40px;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
  background-color: #fff;
  margin-top: 30px;
  padding: 20px;
`;

const ProductImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex: 2;
  padding: 0 20px;
`;

const ProductTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 60px;
  color: #000;
`;

const SectionTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
  text-decoration: underline;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom:20px;
  color: #000;
`;

const CareGuide = styled.div`
  margin-bottom: 20px;
`;

const CareItem = styled.div`
  margin-bottom: 25px;
  padding-bottom: 0px;
  font-size: 1.2em;
  color: #000;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

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

const ProductDescriptionPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  if (!product) return <div>Product not found</div>;

  return (
    <Container>
      <Header>
        <Title>Green planet</Title>
        <Button onClick={() => window.history.back()}>Back</Button>
      </Header>
      <MainContent>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ProductImageContainer>
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <SectionTitle>Plant Care Guide</SectionTitle>
          <CareGuide>
            <CareItem>
              <strong>Water:</strong> Allow the soil to dry out completely before watering.
            </CareItem>
            <CareItem>
              <strong>Light:</strong> Bright indirect light environments.
            </CareItem>
            <CareItem>
              <strong>Tips:</strong> Gently insert a toothpick into the soil to determine if your plant needs watering.
            </CareItem>
          </CareGuide>
          <SectionTitle>Description</SectionTitle>
          <Description>
            A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets. Plants images depicted are solely for illustration purposes only.
          </Description>
        </ProductInfo>
      </MainContent>
    </Container>
  );
};

export default ProductDescriptionPage;
