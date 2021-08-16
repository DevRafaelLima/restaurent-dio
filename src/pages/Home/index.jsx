import React, {useState } from "react";
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles';


const Home = ()=> {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight:true
      };
return (
<Wrapper>
   
    <Container>
        <Search>
            <Logo src={logo} alt="logo do Restaurante"/>
            <TextField
            label='Pesquisar restautante'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
            ><Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            <CarouselTitle>teste</CarouselTitle>
            <Carousel {...settings}>
                <Card photo={restaurante} title= "is name"/>
                <Card photo={restaurante} title= "is name"/>
                <Card photo={restaurante} title= "is name"/>
                <Card photo={restaurante} title= "is name"/>
                <Card photo={restaurante} title= "is name"/>
                <Card photo={restaurante} title= "is name"/>
                <Card photo={restaurante} title= "is name"/>
            </Carousel>
        </Search>
        <RestaurantCard></RestaurantCard>
    </Container>
    <Map/>
   {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}></Modal>*/}
</Wrapper>


    );
};

export default Home;