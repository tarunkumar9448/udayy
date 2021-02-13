import React, {Component} from 'react';
import Logo from '../img/logo.png';
import India from '../img/india.jpg';
import Usa from '../img/usa.jpg';
import f1 from '../img/f1.jpg';
import f2 from '../img/f2.jpg';
import f3 from '../img/f3.jpg';
import f4 from '../img/f4.jpg';
import f5 from '../img/f5.jpg';
import OwlCarousel from 'react-owl-carousel';
import './Header.css';

class Header extends Component{
     state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
         
    constructor(props) {
    super(props);
    this.state = {
        heading: "Indian",
        headingtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown a galley of type and scrambled it to make a type specimen book."
    }
  }
 
  updateContent = () => {
      this.setState({  
        heading: "USA",
        headingtext: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      });
  }
  defaultContent = () => {
      this.setState({ 
        heading: "Indian",
        headingtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown a galley of type and scrambled it to make a type specimen book."
      });
  }
    render(){
        
        const data =[
            {
                "id":'1',
                "name":"Sophia Ava",
                "post":"CEO, Founder at orbitmedia",
                "img": f1,
                "texts":"Established content of a page when looking at its layout. The point of using Lorem as opposed to using 'Content here, content here', making it look like readable English."
            },
            {
                "id":'2',
                "name":"Audrey Mia",
                "post":"Founder at Words By Birds",
                "img": f2,
                "texts":"Established content of a page when looking at its layout. The point of using Lorem as opposed to using 'Content here, content here', making it look like readable English."
            },
            {
                "id":'3',
                "name":"Emily Isabella",
                "post":"Founder at Words By Birds",
                "img": f3,
                "texts":"Established content of a page when looking at its layout. The point of using Lorem as opposed to using 'Content here, content here', making it look like readable English."
            },
            {
                "id":'4',
                "name":"Elizabeth Ella",
                "post":"Founder at Words By Birds",
                "img": f4,
                "texts":"Established content of a page when looking at its layout. The point of using Lorem as opposed to using 'Content here, content here', making it look like readable English."
            },
            {
                "id":'5',
                "name":"Raelene Morey",
                "post":"Founder at Words By Birds",
                "img": f5,
                "texts":"Established content of a page when looking at its layout. The point of using Lorem as opposed to using 'Content here, content here', making it look like readable English."
            }
        ];

    const listItems = data.map((d) =>
        <div key={d.id} className='item'>
            <div className="testiCards bg-white rounded p-4">
                <img src={d.img} alt="" className="rounded-circle mb-4 mx-auto shadow border" width="50" />
                <p>{d.texts }</p>
                <h5>{d.name}</h5>
                <span>{d.post}</span>
            </div>
        </div>           
      );    
        
      return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#"><img src={Logo} alt="" className="d-inline me-2" /><strong>Udayy</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={this.defaultContent}><img src={India} alt="" className="d-inline me-2" />India</a></li>
                    <li><hr className="my-2"/></li>
                    <li><a className="dropdown-item" href="#"  onClick={this.updateContent}><img src={Usa} alt="" className="d-inline me-2" />USA</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <section className="testimonials py-5 bg-primary text-center">
          <div className="container my-4">
              <h3 className="text-white mb-3 heading">Trusted and Loved by <span className="text-warning">{ this.state.heading }</span></h3>
              <p className="text-white mb-5 text mx-lg-5 px-lg-5"> { this.state.headingtext }</p>
              <OwlCarousel className='owl-theme' loop margin={30} responsive={this.state.responsive} autoplay smartSpeed={1000}>
                {listItems }
            </OwlCarousel>
          </div>
        </section>     
        </div>
      );
    }
}

export default Header;
