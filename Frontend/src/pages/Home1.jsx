import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import { Modal } from 'antd'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SamhitaLogo from '../assets/Samhita-Main-Logo.png'
import SamhitaTicket from '../assets/Ticket.png'
import ACTLogo from '../assets/Sponsors/Cosponsor.png'
import WorkshopPartnerImage from '../assets/Sponsors/Workshoppartner.png'
import KitPartnerImage from '../assets/Sponsors/Kitpartner.png'
import TechFestPartnerImage from '../assets/Sponsors/Techfestpartner.png'
import EventPartnerImage from '../assets/Sponsors/Eventpartner.png'
import CodingPartnerImage from '../assets/Sponsors/Codingpartner.png'
import DigitalmediaPartnerImage from '../assets/Sponsors/Digitalmediapartner.png'
import OnlinemediaPartnerImage from '../assets/Sponsors/Onlinemediapartner.png'
import StartupPartnerImage from '../assets/Sponsors/Startuppartner.png'
import EducationalPartnerImage from '../assets/Sponsors/Educationalpartner.png'
import EntertainmentPartnerImage from '../assets/Sponsors/Entertainmentpartner.png'
import EducationalMediaPartnerImage from '../assets/Sponsors/Educationalmediapartner.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import kissflow from '../assets/Sponsors/kissflow.png'
import bg1 from '../assets/darkblueTexture.jpg'
import Tekion from '../assets/Sponsors/Tekion.png'
import CredLogo from '../assets/Sponsors/Cred.png'
import Guvi from '../assets/Sponsors/Guvi.png'
import StartupPartnerImage1 from '../assets/Sponsors/Startuppartner1.png'
import GFG from '../assets/Sponsors/Workshoppartner.png'
import Poorvika from '../assets/Sponsors/Eventpartner.png'
import Dealshare from '../assets/Sponsors/Dealshare.png'
import OnlinemediaPartnerImage2 from '../assets/Sponsors/Blacksheep1.png'
import Vaayusheshtra from '../assets/Sponsors/Vaayusheshtra.png'
import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            hash: '',
            isModalVisible: false,
            isPrivacyModalVisible: false
        } 
    }

    componentDidMount() {
        const hash = this.createHash(20)
        this.setState({ hash: hash })
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 300,
            once: true
        })
    }

    setModalVisible = isModalVisible => {this.setState({ isModalVisible })}

    setPrivacyModalVisible = isPrivacyModalVisible => {this.setState({ isPrivacyModalVisible })}

    handleScroll = () => {
        const scroll = Scroll.animateScroll
        scroll.scrollToBottom({
            duration: 100
        })
    }

    createHash = length => {
        var result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    render() {
        const { hash, isModalVisible, isPrivacyModalVisible } = this.state
        const firstPart = hash.substr(0,5)
        const remainingPart = hash.substr(5)
        const encryptedId = `${firstPart}s1${remainingPart}`
        return (
            <React.Fragment>
                <Helmet>
                    <title>Samhita 22</title>
                </Helmet>
                <Navbar name = 'home'/>
                <div className = 'outer-home-container' style={{backgroundImage:`url(${bg1})`}}>
                    <div data-aos = 'fade-up' className = 'samhita-main-container'>
                        <div className = 'columns'>
                            <div className='column is-2'></div>
                            <div className = 'column is-8'>
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                        </ol>

                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <img src={carousel1} alt="Chania" />
                                                <div class="carousel-caption">
                                                    {/* <h3>Los Angeles</h3>
                                                    <p>LA is always so much fun!</p> */}
                                                </div>
                                        </div>
                                        <div class="item">
                                            <img src={carousel2} alt="Chicago" />
                                                <div class="carousel-caption">
                                                    {/* <h3>Chicago</h3>
                                                    <p>Thank you, Chicago!</p> */}
                                                </div>
                                        </div>

                                        <div class="item">
                                            <img src={carousel3} alt="New York" />
                                                <div class="carousel-caption">
                                                    {/* <h3>New York</h3>
                                                    <p>We love the Big Apple!</p> */}
                                                </div>
                                        </div>
                                    </div>


                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                                {/*     <div className = 'field'>
                                            <div className = 'control samhita-main-logo'>
                                                <LazyLoadImage
                                                    alt = 'Samhita-logo'
                                                    src = {SamhitaLogo1}
                                                    effect = 'blur'
                />
                                                </div>
                                        </div> 
                                        <div className = 'field'>
                                            <div className = 'hovero control' style = {{marginLeft: '30px'}}>
                                            {/*   <div className = 'title is-1 is-quicksand samhita-main-title' style={{color:'white',textAlign:'center'}}>Samhita '22</div>
                                            */}
                            </div>
                                <div className='column is-2'></div>
                        </div>
                        </div> 
                        <br/><br/>
                            <div className='columns'>
    
                            <div className = ' column is-12 samhita-summary'>
                                <div>
                                   <p className='samhita-summary-main' style={{fontFamily:'Roboto',fontSize:'23px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Samhita  is a National Level Technical Symposium held at Madras Institute of Technology, Chennai. It is organized by the Information Technology Association (ITA). It provides students various opportunities to herald their technical prowess and quiz their aptitude on coding, designing and other ambidextrous domain concepts. Samhita '22 covets to bridge the gap between different industries and students by conducting technical workshops and competitions. This is an open platform where academics meets innovation. Get ready for a techno ride! Learning has never been so much fun before!
                                    </p>
                                    <div className = 'hovero title is-3 is-lato has-text-left date' style = {{marginTop: '25px',color:'white'}}>
                                    <span className = 'icon' style = {{position: 'relative',marginRight: '15px', marginTop: '5px', top: '4px'}}>
                                        <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' color = '#4ee9d7' />
                                    </span>
                                    April 23 - 24
                                </div>
                           </div>
                          
                        </div>
                        
                        </div>
                        <div className = 'columns is-hidden-touch home-titles is-centered' >
                        <div className = 'column is-narrow has-text-centered insight-box is-centered' style = {{height: '20px'}}>
                            <div className = 'badge-1' style = {{cursor: 'pointer',padding:'0px'}} onClick = {() => this.props.history.push('/workshops')}>5+</div>
                                <div onClick = {() => this.props.history.push('/workshops')} className = 'title is-1 is-quicksand home-title is-centered' style={{color:'white',cursor: 'pointer',padding:'3px',fontSize:'30px'}}>Workshops</div>
                            </div>
                            <div className = 'column is-narrow has-text-centered insight-box is-centered'>
                                <div className = 'badge-2' style = {{cursor: 'pointer',padding:'0px'}} onClick = {() => this.props.history.push('/events')}>20+</div>
                                    <div onClick = {() => this.props.history.push('/events')} className = 'title is-1 is-quicksand home-title is-centered' style={{color:'white',cursor: 'pointer',padding:'3px',fontSize:'30px'}}>Events</div>
                            </div>
                            <div className = 'column is-narrow has-text-centered insight-box is-centered'>
                                <div className = 'badge-3'  style = {{padding:'0px'}}>6+</div>
                                    <div onClick = {() => this.props.history.push('/interns')} className = 'title is-1 is-quicksand home-title is-centered' style={{cursor:'pointer',color:'white',padding:'3px',fontSize:'30px'}}>Interns</div>
                            </div>
                    </div>
                    </div>
                  
                    
                    <section className = 'section ticket-outer-container'>
                    <div className = 'title is-hidden-tablet is-3 is-quicksand has-text-centered'>Get started!</div>
                        <div className = 'container'>
                            <div className = 'columns' style={{paddingBottom:'10px',paddingTop:'10px'}}>
                                <div className = 'column is-7'>
                                    <div className='hovero'>
                                        <img data-aos = 'fade-right'style={{height:'580px',width:'1300px'}} id = 'ticket-section'  src = {SamhitaTicket} alt= "Samhita '22 ticket" />
                                    </div></div>
                                    <div className='column is-5'>
                                        <br/>
                                        <br/>
                                    <div data-aos = 'fade-right' className = 'field'>
                                        <div className = 'control'>
                                            <div className = 'benefits-title' style={{color:'white'}}>
                                                <span style={{fontSize:'28px',fontFamily:'Roboto'}}><br/><br/>Ticket benefits include:</span>
                                            <ul className = 'benefits-list' style={{fontSize:'20px'}}>
                                                <li style={{listStyleType:'disc'}}>Chance to participate in all technical and non-technical events</li>
                                                <li style={{listStyleType:'disc'}}>Attend Placement training workshop </li>
                                                <li style={{listStyleType:'disc'}}>Beat the queue and stay in front of the pack</li>
                                                <li style={{listStyleType:'disc'}}>Chance to participate and win Samhita Ambassador contest</li>
                                                <li style={{listStyleType:'disc'}}>Chance to win gift coupons</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <br />
                                </div> 
                                <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingBottom:'70px',paddingRight:'20px'}}>
                                <div className = 'field'>
                                    <div data-aos = 'fade-right' className = 'control is-hidden-mobile'>
                                        <div className = 'subtitle is-4 is-quicksand' style={{color:'white'}}>
                                            Book yours now!
                                        </div>
                                        <button className = 'hovero button is-rounded is-lato has-text-weight-semibold' style={{backgroundColor:'#4ee9d7',border:'1px solid #4ee9d7'}} onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            <span>Get ticket!</span>
                                            <span className = 'icon'>
                                                <FontAwesomeIcon icon = {faArrowRight} />
                                            </span>
                                        </button>
                                        <div className = 'subtitle is-6 is-lato has-text-weight-semibold has-text-danger' style = {{marginTop: '1rem'}}>*Registeration opens Soon.</div>
                                    </div>
                                    <div className = 'control is-hidden-tablet'>
                                        <button className = 'button is-rounded is-lato has-text-weight-semibold is-danger' onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            <span>Get Ticket!</span>
                                            <span className = 'icon'>
                                                <FontAwesomeIcon icon = {faArrowRight} />
                                            </span>
                                        </button>
                                        <div className = 'subtitle is-6 is-lato has-text-weight-semibold has-text-danger' style = {{marginTop: '1rem'}}>*Registeration opens Soon.</div>
                                    </div>
                                </div>
                            </div>         
                            </div>
                           </div>
                            
                        </div>
                    
                </section>
{/* 
<section className = 'section ticket-outer-container'>
                    <div className = 'title is-hidden-tablet is-3 is-lato has-text-centered'>Get started!</div>
                        <div className = 'container'>
                            <div className = 'columns'>
                                <div className = 'column'>
                                    <img data-aos = 'fade-right' id = 'ticket-section' width = {800} src = {SamhitaTicket} alt= "Samhita '20 ticket" />
                                    <div data-aos = 'fade-right' className = 'field'>
                                        <div className = 'control'>
                                            <div className = 'subtitle is-4 is-lato benefits-title' style={{color:'white'}}>
                                                Ticket benefits include:
                                            <ol className = 'benefits-list'>
                                                <li>Chance to participate in all technical and non-technical events</li>
                                                <li>Attend Placement training workshop by GeeksforGeeks</li>
                                                <li>Beat the queue and stay in front of the pack</li>
                                                <li>Chance to participate and win Samhita Ambassador contest</li>
                                                <li>Chance to win gift coupons</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'column is-narrow' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div className = 'field'>
                                    <div data-aos = 'fade-right' className = 'control is-hidden-mobile'>
                                        <div className = 'subtitle is-3 is-quicksand' style={{color:'white'}}>
                                            Book yours now!
                                        </div>
                                        <button className = 'button is-rounded is-lato has-text-weight-semibold' style={{backgroundColor:'#eb9e34',border:'1px solid #eb9e34'}} onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            <span>Get ticket!</span>
                                            <span className = 'icon'>
                                                <FontAwesomeIcon icon = {faArrowRight} />
                                            </span>
                                        </button>
                                    </div>
                                    <div className = 'control is-hidden-tablet'>
                                        <button className = 'button is-rounded is-lato has-text-weight-semibold is-danger' onClick = {() => this.props.history.push(`/checkout/${encryptedId}`)}>
                                            <span>Get Ticket!</span>
                                            <span className = 'icon'>
                                                <FontAwesomeIcon icon = {faArrowRight} />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className = 'section sponsor-section' style={{backgroundImage:`url(${bg1})`}}>
                    <div className = 'title is-quicksand is-3 has-text-centered' style = {{color: 'white'}}>
                        OUR PARTNERS
                        <span className = 'icon' style = {{marginLeft: '15px'}}>
                            <FontAwesomeIcon icon = {faFontAwesomeFlag} color = 'white' />
                        </span>
                    </div>
                    {/* <div data-aos = 'fade-up' className = 'container sponsors-container'>
						<div className = 'columns'>
                            <div className = 'column has-text-centered'>
								<a href = 'https://www.actcorp.in/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'sponsor image-button act-logo' src = {ACTLogo} alt = 'Co-sponsor - ACT Fibernet'/>
                                </a>
                            </div>
							<div className = 'column has-text-centered'>
								<a href = 'https://www.poorvikamobile.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {EventPartnerImage} alt = 'Poorvika mobiles - Event partner'/>
                                </a>
                            </div>
                            <div className = 'column has-text-centered'>
                                <a href = 'https://www.geeksforgeeks.org/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'sponsor image-button' src = {WorkshopPartnerImage} alt = 'GeeksforGeeks'/>
                                </a>
                            </div>
                        </div>
                        <div className = 'columns'>
                            <div className = 'column has-text-centered'>
                                <a href = 'https://www.halnode.com' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {StartupPartnerImage} alt = 'Halnode - Startup partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://www.cognizance.org.in/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '-2.7px'}} src = {TechFestPartnerImage} alt = 'Cognizance 2020 (IIT Roorkee) - Tech fest partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
								<a href = 'https://kalvimalar.dinamalar.com/index.asp' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'sponsor image-button kalvimalar' src = {EducationalMediaPartnerImage} alt = 'Kalvimalar - Educational Media Partner'/>
                                </a>
                            </div>
                        </div>
                        <div className = 'columns'>
                            <div className = 'column'>
                                <a href = 'https://www.codechef.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '-3px'}}  src = {CodingPartnerImage} alt = 'Codechef - Coding partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://yourstory.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '10px'}} src = {DigitalmediaPartnerImage} alt = 'Yourstory - Digital media partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://www.youtube.com/c/MicSet_official' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {OnlinemediaPartnerImage} alt = 'Micset - Online media partner'/>
                                </a>
                            </div>
                        </div>
                        <div className = 'columns'>
                            <div className = 'column'>
                                <a href = 'https://www.uniqtechnologies.co.in/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {KitPartnerImage} alt = 'Uniq Technologies - Kit partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://www.dinamalar.com' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '7.7px'}} src = {EducationalPartnerImage} alt = 'Dinamalar - Print partner'/>
                                </a>
                            </div>
                            <div className = 'column has-text-centered'>
                                <a href = 'http://bingosnacks.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {EntertainmentPartnerImage} alt = 'Bingo - Entertainment partner'/>
                                </a>
                            </div>
                        </div>
                    </div> */}







                        <div data-aos = 'fade-up' className = 'container sponsors-container'>
						<div className = 'columns'>
                            <div className = 'column has-text-centered'>
								<a href = 'https://www.actcorp.in/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'sponsor image-button act-logo' src = {Tekion} alt = 'Co-sponsor - ACT Fibernet'/>
                                </a>
                            </div>
							<div className = 'column has-text-centered'>
								<a href = 'https://www.poorvikamobile.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {kissflow} alt = 'Poorvika mobiles - Event partner'/>
                                </a>
                            </div>
                            <div className = 'column has-text-centered'>
                                <a href = '//' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'sponsor image-button' src = {Guvi} alt = 'GeeksforGeeks'/>
                                </a>
                            </div>
                        </div>
                        <div className = 'columns'>
                            <div className = 'column has-text-centered'>
                                <a href = 'https://www.halnode.com' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {StartupPartnerImage1} alt = 'Halnode - Startup partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://www.cognizance.org.in/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '-2.7px'}} src = {CredLogo} alt = 'Cognizance 2020 (IIT Roorkee) - Tech fest partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
								<a href = 'https://kalvimalar.dinamalar.com/index.asp' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'sponsor image-button kalvimalar' src = {Poorvika} alt = 'Kalvimalar - Educational Media Partner'/>
                                </a>
                            </div>
                        </div>
                        <div className = 'columns'>
                            <div className = 'column'>
                                <a href = 'https://www.codechef.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '-3px'}}  src = {WorkshopPartnerImage} alt = 'Codechef - Coding partner'/>
                                </a>
                            </div>
                            {/* <div className = 'column'>
                                <a href = 'https://yourstory.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '10px'}} src = {DigitalmediaPartnerImage} alt = 'Yourstory - Digital media partner'/>
                                </a>
                            </div> */}
                            <div className = 'column'>
                                <a href = 'https://www.youtube.com/c/BlackSheepTamil' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {Dealshare} alt = 'Micset - Online media partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://www.youtube.com/c/MicSet_official' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {Vaayusheshtra} alt = 'Micset - Online media partner'/>
                                </a>
                            </div>
                        </div>
                        <div className = 'columns'>
                            <div className = 'column'>
                                <a href = 'https://www.uniqtechnologies.co.in/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {KitPartnerImage} alt = 'Uniq Technologies - Kit partner'/>
                                </a>
                            </div>
                            <div className = 'column'>
                                <a href = 'https://www.dinamalar.com' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' style = {{position: 'relative', top: '7.7px'}} src = {OnlinemediaPartnerImage2} alt = 'Dinamalar - Print partner'/>
                                </a>
                            </div>
                            <div className = 'column has-text-centered'>
                                <a href = 'http://bingosnacks.com/' target = '_blank' rel="noopener noreferrer">
                                    <img className = 'image-button sponsor' src = {OnlinemediaPartnerImage} alt = 'Bingo - Entertainment partner'/>
                                </a>
                            </div>
                        </div>
                    </div>












                </section>
            <div className = 'samhita-footer has-text-centered'>
                    <div className = 'subtitle is-6 is-lato'>
                        © 2022 Samhita WebTeam • All rights reserved • There is no cancellation policy
                    </div>
                    <div className = 'subtitle is-6 is-lato' style = {{marginTop: '-15px'}}>
                        <span className = 'has-text-link' style = {{cursor: 'pointer'}} onClick = {() => this.setModalVisible(true)}>Terms & Conditions</span> | <span className = 'has-text-link' style = {{cursor: 'pointer'}} onClick = {() => this.setPrivacyModalVisible(true)}>Privacy policy</span>
                    </div>
                </div>
                <Modal className = 'is-lato' width = '90%' title = 'Terms & Conditions' centered visible = {isModalVisible} onOk = {() => this.setModalVisible(false)} closable = {false} okButtonProps = {{shape: 'round', type: 'danger'}} okText = 'Accept and close' cancelButtonProps = {{hidden: true}}>
                    <p className = 'title is-4'>Welcome to Samhita 20!</p>

                    <p>These terms and conditions outline the rules and regulations for the use of Samhita 20's Website, located at <mark>https://samhita.org.in</mark>.</p>

                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Samhita 22 if you do not agree to take all of the terms and conditions stated on this page. </p>

                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Cookies</strong></h3>

                    <p>We employ the use of cookies. By accessing Samhita 20, you agreed to use cookies in agreement with the Samhita 20's Privacy Policy.</p>

                    <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>License</strong></h3>

                    <p>Unless otherwise stated, Samhita 20 and/or its licensors own the intellectual property rights for all material on Samhita 20. All intellectual property rights are reserved. You may access this from Samhita 20 for your own personal use subjected to restrictions set in these terms and conditions.</p>

                    <p>You must not:</p>
                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>Republish material from Samhita 20</li>
                        <li>Sell, rent or sub-license material from Samhita 20</li>
                        <li>Reproduce, duplicate or copy material from Samhita 20</li>
                        <li>Redistribute content from Samhita 20</li>
                    </ul>

                    <p>This Agreement shall begin on the date hereof.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Hyperlinking to our Content</strong></h3>

                    <p>The following organizations may link to our Website without prior written approval:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                    </ul>

                    <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                    <p>We may consider and approve other link requests from the following types of organizations:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>
                    </ul>

                    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Samhita 20; and (d) the link is in the context of general resource information.</p>

                    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

                    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Samhita 20. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                    <p>Approved organizations may hyperlink to our Website as follows:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>By use of our corporate name; or</li>
                        <li>By use of the uniform resource locator being linked to; or</li>
                        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                    </ul>

                    <p>No use of Samhita 22's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>iFrames</strong></h3>

                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Reservation of Rights</strong></h3>

                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Removal of links from our website</strong></h3>

                    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                    <h3 style = {{margin: '1rem 0rem'}}><strong>Disclaimer</strong></h3>

                    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>

                    <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                </Modal>
                <Modal className = 'is-lato' width = '90%' title = 'Privacy policy' centered visible = {isPrivacyModalVisible} onOk = {() => this.setPrivacyModalVisible(false)} closable = {false} okButtonProps = {{shape: 'round', type: 'danger'}} okText = 'Okay' cancelButtonProps = {{hidden: true}}>
                    <p>At Samhita 20, accessible from <mark>https://samhita.org.in</mark>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Samhita 20 and how we use it.</p>

                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Log Files</strong></h2>

                    <p>Samhita 20 follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Cookies and Web Beacons</strong></h2>

                    <p>Like any other website, Samhita 20 uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Privacy Policies</strong></h2>

                    <p>You may consult this section to find the Privacy Policy for each of the advertising partners of Samhita 20.</p>

                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Samhita 20, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                    <p>Note that Samhita 20 has no access to or control over these cookies that are used by third-party advertisers.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Third Party Privacy Policies</strong></h2>

                    <p>Samhita 20's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. <a href = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies' target = '_blank' rel = 'noreferrer noopener'>What Are Cookies?</a></p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Children's Information</strong></h2>

                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                    <p>Samhita 20 does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Online Privacy Policy Only</strong></h2>

                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Samhita 20. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                    <h2 style = {{margin: '1rem 0rem'}}><strong>Consent</strong></h2>

                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </Modal>
            </React.Fragment>
        )
    }
}

export default withRouter(Home)
