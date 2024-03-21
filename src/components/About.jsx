import React from 'react'
import '../styles/About.css';
import { Row,Col } from 'react-bootstrap';

function About() {
  return (
      <div>
    <h1 className='text-center m-4'>About<span style={{color:'red'}}> us</span></h1>
    <p style={{textAlign:'center',color:"black"}}>Internet real estate is the concept of publishing housing estates for sale or rent online, and for consumers seeking to buy or rent properties through such platforms</p>
      <Row>
        <Col>
              <img  className='m-5' src="https://wallpapercave.com/wp/wp2019326.jpg" width={'500px'} height={'350px'} style={{marginLeft:'100px'}}  alt="" />
        </Col>
        <Col>
        <p style={{marginRight:'70px'}}>
            Real estate is property consisting of land and the buildings on it, along with its natural resources such as growing crops (e.g. timber), minerals or water, and wild animals;
            immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general. In terms of law, real relates to land property and is different from personal property while estate means the "interest" a person has in that land property.One of the largest initial real estate deals in history known as the "Louisiana Purchase" happened in 1803 when the Louisiana Purchase Treaty was signed. This treaty paved the way for western expansion and made the U.S. the owners of the "Louisiana Territory" as the land was bought from France for fifteen million, making each acre roughly 4 cents.The oldest real estate brokerage firm was established in 1855 in Chicago, Illinois, and was initially known as "L. D. Olmsted & Co." but is now known as "Baird & Warner". In 1908, the National Association of Realtors was founded in Chicago and in 1916, the name was changed to the National Association of Real Estate Boards and this was also when the term "realtor" was coined to identify real estate professionals.The stock market crash of 1929
            <button className='btn btn-danger m-5'>Readmore</button>
               </p>
        </Col>
      </Row>

      </div>

  )
}

export default About