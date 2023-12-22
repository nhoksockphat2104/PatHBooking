import React from 'react'
import '../../styles/Global.css';
import NTimages from '../../assets/imgs/NTimages/NTimage1.jpg';
import Vinpearlimage from '../../assets/imgs/Vinpearlimage/vinpearl-image2.jpg';
import WaterparkVin from '../../assets/imgs/WaterparkVin/vinpearlwaterpark3.jpg';
import VinpearlCablecar from '../../assets/imgs/VinpearlCablecar/vinpearl-cablecar4.jpg';
import VienHaiDuongHoc from '../../assets/imgs/VienHaiDuongHoc/vienhaiduonghoc5.jpg';
import Bigfish from "../../assets/imgs/Bigfish/bigfish6.jpg";
import HonMun from "../../assets/imgs/HonMun/honmunispland.jpg";
import Diving from "../../assets/imgs/Diving/diving7.jpg";
import beachNT from "../../assets/imgs/beachNT/beachNT8.jpg";
import NT9 from "../../assets/imgs/NT9/NTimage9.jpg";
import NTnight from "../../assets/imgs/NTnight/NTnight10.png";

function HomePage() {
  return (
    <div className='row-homepage'>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={NTimages} alt="img" style={{ height: '400px', width: '1536px' }} />
            <div class="carousel-caption d-none d-md-block">
              <h1 style={{ marginBottom: '120px', fontSize: '50px' }}><b>Nha Trang City</b></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='row-home'>
          <div className="home-content">
            <br />
            <h3><b>Tourist and entertainment destinations in Nha Trang city</b></h3><br />
            <h4><b>Vinpearl Land</b></h4><br />
            <img src={Vinpearlimage} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p><b>Address:</b> 98B/13, Tran Phu, Loc Tho, Nha Trang City, Khanh Hoa</p>
            <p style={{ marginTop: '20px' }}>With a plethora of well-known tourist attractions, Nha Trang city is equally stunning as a work of art created by nature and its inhabitants.
              Together with its delicious food and welcoming locals, Nha Trang's varied natural environment has made it an extremely popular destination for travelers from all over the world.
              Let's go explore these fascinating locations as soon as possible with PatH Booking!
            </p><br />

            <h5><b>Vinpearl Water Park</b></h5><br />
            <img src={WaterparkVin} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p>Vinpearl Land is a popular tourist destination in Nha Trang, known for being a "tropical paradise" that draws visitors from all over the world.
              It is situated on the stunning Hon Tre island, year-round between the ocean and crystal-blue beaches.
              Vinpearl Water Park is part of Vinpearl Land, along with family-friendly play areas. This amusement area frequently welcomes guests who enjoy thrills, as it features slides with the steepest slope at 21.5 meters.
              Among them, a 56-meter stretch of Scary Cave will satiate many young visitors' curiosity about exploration. This location also draws tourists because of its magnificent 4D theater.
            </p> <br />

            <h5><b>Vinpearl Cable Car</b></h5>
            <img src={VinpearlCablecar} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p>In addition to the standard modes of transportation like speedboats, ferries, canoes, and taxis, guests can reach Hon Tre Island via a 3,320-meter cable car system.
              With nine pillars on land and in the sea, this is the longest cable car in the world. The structure of the cable route is reminiscent of the Eiffel Tower, especially at night when laser lights will illuminate it. 1,00-1,500 persons can be transported per hour by this cable system.
              That makes getting from the island to the mainland simpler.
            </p><br />

            <h4><b>Vien Hai Duong Hoc</b></h4>
            <img src={VienHaiDuongHoc} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p><b>Address:</b> No. 1, Cau Da, Tran Phu, Nha Trang city, Khanh Hoa province.</p>
            <p>In the province of Khanh Hoa, Nha Trang city is home to the Nha Trang Institute of Oceanography, which conducts research on marine plant and animal life.
              This institute was established in 1923 and is situated at 1 Cau Da, a considerable distance from the city center of Nha Trang.
              About 6 km to the southeast is Trang.
            </p>
            <img src={Bigfish} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p>Over 20,000 specimens of 4,000 different species of marine life have been collected, maintained, and raised for many years at this popular tourist destination. Specifically, it is here that a massive whale skeleton, measuring almost 26 meters in length and 3 meters in height, with 48 fully restored vertebrae, is on display.
              Here, guests can explore the experimental area, see unusual animals, and discover more about the lives of marine life.
            </p>

            <h4><b>Hon Mun Ispland</b></h4>
            <img src={HonMun} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p><b>Address:</b> End of Tran Phu street, Nha Trang city.</p>
            <p>This island is regarded as Nha Trang's most poetic island.
              With its endless stretches of white sand, green beaches, and wild bird nests perched atop cliffs, the island captivates the hearts of every visitor.
            </p><br />
            <h4><b>Scuba Diving at Hon Mun Island </b></h4>
            <img src={Diving} alt="Vinpearl img" style={{ height: '400px', width: '800px', marginLeft: '250px' }} /><br /><br />
            <p>Hon Mun Island is known for its rich, colorful coral beaches and its expansive, clear blue water.
              The World Wildlife Fund has identified Hon Mun Island as the region in Vietnam with the highest level of marine biodiversity due to its exceptionally rich ecosystem.
            </p>
          </div>
        </div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={NTimages} class="d-block" alt="Img Nha Trang" style={{ height: '400px', width: '1300px' }} />
            </div>
            <div class="carousel-item">
              <img src={HonMun} class="d-block" alt="Img Hon Mun" style={{ height: '400px', width: '1300px' }} />
            </div>
            <div class="carousel-item">
              <img src={Vinpearlimage} class="d-block" alt="..." style={{ height: '400px', width: '1300px' }} />
            </div>
            <div class="carousel-item">
              <img src={beachNT} class="d-block" alt="..." style={{ height: '400px', width: '1300px' }} />
            </div>
            <div class="carousel-item">
              <img src={NT9} class="d-block" alt="..." style={{ height: '400px', width: '1300px' }} />
            </div>
            <div class="carousel-item">
              <img src={NTnight} class="d-block" alt="..." style={{ height: '400px', width: '1300px' }} />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


    </div>
  )
}

export default HomePage