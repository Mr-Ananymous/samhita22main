import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import Scroll from 'react-scroll'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { Tooltip } from 'antd'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import GamingImage from '../assets/Events/Gaming.png'
import MathImage from '../assets/Events/Math.png'
import QuizImage from '../assets/Events/Quiz.png'
import BPlanImage from '../assets/Events/BPlan.png'
import IPLAuctionImage from '../assets/Events/IplAuction.png'
import TreasureHuntImage from '../assets/Events/Treasurehunt.png'
import fandomQuiz from '../assets/Events/marvelquiz.png'

class NonTechnical extends Component {

    componentDidMount() {
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
    }

    render() {
        return(
            <React.Fragment>
                <Helmet>
                    <title>Samhita 20 - Non technical events</title>
                </Helmet>
                <Navbar name = 'event'/>
                <section className = 'section' style = {{backgroundColor: '#090a2b', minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container events-outer-container'>
                        <div data-aos = 'fade-up'>
                            <div className = 'title is-3 is-lato has-text-centered' style = {{marginBottom: '55px'}}>
                                <Tooltip placement = 'left' title = 'Technical events' >
                                    <span className = 'icon event-navigation-icon-left' onClick = {() => this.props.history.replace('/events/technical')}>
                                        <FontAwesomeIcon icon = {faArrowAltCircleLeft} />
                                    </span>
                                </Tooltip>
                                Non-technical events
                            </div>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {GamingImage}
                                    title = 'Gaming'
                                    date = {<><span>23<sup>rd</sup> & 24<sup>th</sup> April, 2022</span></>}
                                    gameTime
                                    size = {1}
                                    description = 'Gamers don’t die. They respawn, isn’t it? Show your cool skills and win the biggest competitive gaming events.'
                                    contactName = 'Arun Kumar'
                                    contactNumber = {<><a href = 'tel:+918667331561'>+91 8667331561</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• Gaming event entry fee is exclusive on purchase of Samhita '22 Ticket</li>
                                            <li>• Competitions on PUBG,PES and much more</li>
                                            <li>• Break the Rules.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {MathImage}
                                    title = 'Math-O-Mania'
                                    date = {<><span>24<sup>th</sup> April, 2022</span></>}
                                    eventTime
                                    size = {2}
                                    description = 'As the name suggests indeed, a Mania of the Math world awaits. This event tests the proficiency in mathematics and the tic-tac-toe tactics associated with it. Strictly for math-prodigies!!'
                                    contactName = 'Sasirekha.'
                                    contactNumber = {<><a href = 'tel:+919566019039'>+91 9566019039</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• There will be only one round.</li>
                                            <li>• The round will be a pen and paper round.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {QuizImage}
                                    title = 'General Quiz'
                                    date = {<><span>24<sup>th</sup> April, 2022</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2}
                                    description = 'The team with the most updated information on the latest happenings and events around the world wins this.'
                                    contactName = 'Abinaya MN'
                                    contactNumber = {<><a href = 'tel:+917708489831'>+91 7708489831</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be only one round.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• The round will be paper based.</li>
                                            <li>• Internet access is not allowed.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {BPlanImage}
                                    title = 'B-Plan'
                                    date = {<><span>23<sup>rd</sup> April, 2022</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2}
                                    description = 'Can you manage to steer a ship in the correct path under the most rigorous circumstances? This event tests the management skills of a person and rewards them with the most intriguing gifts.'
                                    contactName = 'Abishiya J'
                                    contactNumber = {<><a href = 'tel:+919488477997'>+91 9488477997</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be only 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Paper based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {IPLAuctionImage}
                                    title = 'IPL Auction'
                                    date = {<><span>23<sup>rd</sup> April, 2022</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {3}
                                    description = 'Ever wondered of having King and Thala in the same team? Well then, this is your chance! IPL Auction gives you the chance to build the best team in the planet and smash all the teams around.'
                                    contactName = 'Hariharan R.'
                                    contactNumber = {<><a href = 'tel:+919445778177'>+91 9445778177</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Auction based.</li>
                                            <li>• No use of any electronic gadgets.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {fandomQuiz}
                                    title = 'Fandom Quiz'
                                    date = {<><span>23<sup>rd</sup> April, 2022</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {3}
                                    description = 'An avid fan of GOT,BRBA,MARVEL,DC and feeling left out in an IT symposium? Need not to worry, we have got one for you too.First time in the history of Samhita, we give you a chance to join the Avengers but you have to prove to be worthy. Can you?'
                                    contactName = 'Kavin'
                                    contactNumber = {<><a href = 'tel:+918754530797'>+91 8754530797</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Questions will be based on Webseries and Movies.</li>
                                            <li>• Each team can comprise a maximum of 3 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round:Quiz.</li>
                                            <li>• No use of any electronic gadgets.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {TreasureHuntImage}
                                    title = 'Treasure Hunt'
                                    date = {<><span>24<sup>th</sup> April, 2022</span></>}
                                    treasureTime
                                    size = {3}
                                    description = 'Do you dream of being a Sherlock Holmes or a Jack Sparrow? This is your chance to become them. Hone those detective skills of yours & quench that thirst for treasure to achieve greater glory.'
                                    // contactName = ''
                                    // contactNumber = {<><a href = 'tel:+917598365248'>+91 7598365248</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• Will be informed on site.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(NonTechnical)