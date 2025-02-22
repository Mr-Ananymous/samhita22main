import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import { Tooltip, notification, Drawer } from 'antd'
import axios from 'axios'
import Scroll from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faRupeeSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import PlacementImage from '../assets/Placement.png'
import GfGLogo from '../assets/GeeksLogo.png'
import MLImage from '../assets/ML.png'
import GoogleDevImage from '../assets/GoogleDev.png'
import AndroidImage from '../assets/AppDevelopment.png'
import FlutterImage from '../assets/Flutter.png'
import HackingImage from '../assets/Hacking.png'
import ZohoImage from '../assets/Zoho.png'
import PythonImage from '../assets/Python.png'
import RenaultImage from '../assets/Renault.png'
import AIImage from '../assets/AI.png'
import FbImage from '../assets/Facebook.png'
import dealshare from '../assets/ds.png'
import uiux from '../assets/uiux.png'
import tensor from '../assets/tensorflow.png'
import guvi from '../assets/GUVI.png'

class Workshops extends Component {

    constructor() {
        super()
        this.state = {
            hash: '',
            isLoading: false,
            pythonDrawerVisible: false,
            hackingDrawerVisible: false,
            mlDrawerVisible: false,
            androidDrawerVisible: false,
            aiDrawerVisible: false,
            geeksDrawerVisible: false
        } 
    }

    componentDidMount() {
        const hash = this.createHash(20)
        this.setState({ hash: hash })
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 50
        })
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })    
        // document.querySelector('.buy-ticket-button').addEventListener('mouseover', () => {
        //     document.querySelector('.buy-ticket-icon').classList.remove('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button').addEventListener('mouseout', () => {
        //     document.querySelector('.buy-ticket-icon').classList.add('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-2').addEventListener('mouseover', () => {
        //     document.querySelector('.buy-ticket-icon-2').classList.remove('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-2').addEventListener('mouseout', () => {
        //     document.querySelector('.buy-ticket-icon-2').classList.add('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-3').addEventListener('mouseover', () => {
        //     document.querySelector('.buy-ticket-icon-3').classList.remove('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-3').addEventListener('mouseout', () => {
        //     document.querySelector('.buy-ticket-icon-3').classList.add('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-4').addEventListener('mouseover', () => {
        //     document.querySelector('.buy-ticket-icon-4').classList.remove('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-4').addEventListener('mouseout', () => {
        //     document.querySelector('.buy-ticket-icon-4').classList.add('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-5').addEventListener('mouseover', () => {
        //     document.querySelector('.buy-ticket-icon-5').classList.remove('icon-is-hidden')
        // })
        // document.querySelector('.buy-ticket-button-5').addEventListener('mouseout', () => {
        //     document.querySelector('.buy-ticket-icon-5').classList.add('icon-is-hidden')
        // })
    }

    showPythonDrawer = () => {
        this.setState({
          pythonDrawerVisible: true
        })
    }

    onPythonClose = () => {
        this.setState({
          pythonDrawerVisible: false
        })
    }

    showHackingDrawer = () => {
        this.setState({
          hackingDrawerVisible: true
        })
    }

    onHackingClose = () => {
        this.setState({
          hackingDrawerVisible: false
        })
    }

    showMlDrawer = () => {
        this.setState({
          mlDrawerVisible: true
        })
    }

    onMlClose = () => {
        this.setState({
          mlDrawerVisible: false
        })
    }

    showAndroidDrawer = () => {
        this.setState({
          androidDrawerVisible: true
        })
    }

    onAndroidClose = () => {
        this.setState({
          androidDrawerVisible: false
        })
    }

    showAiDrawer = () => {
        this.setState({
          aiDrawerVisible: true
        })
    }

    onAiClose = () => {
        this.setState({
          aiDrawerVisible: false
        })
    }

    showGeeksDrawer = () => {
        this.setState({
          geeksDrawerVisible: true
        })
    }

    onGeeksClose = () => {
        this.setState({
          geeksDrawerVisible: false
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

    handleWorkshopPayment = id => {
        const firstPart = this.state.hash.substr(0,5)
        const remainingPart = this.state.hash.substr(5)
        const encryptedId = `${firstPart}${id}${remainingPart}`
        this.props.history.push(`/checkout/${encryptedId}`)
    }

    handleFreeWorkshop = () => {
        this.setState({ isLoading: true }, () => {
            const userId = localStorage.getItem('id')
            if(userId) {
                axios.post('https://samhitabackend.herokuapp.com/details'/*'http://localhost:4000/details'*/, {
                    userid: userId
                }).then(res => {
                    this.setState({ isLoading: false })
                    if(res.data.status === 1) {
                        if(res.data.pp === 1) {
                            notification.info({
                                message: "Attention!",
                                description: "You are attending Paper presentation event at Samhita '20. You cannot attend Placement Training Workshop at the same time." ,
                                placement: 'topRight',
                                duration: 7,
                                top: 90,
                                className: 'notification',
                                onClose: this.props.history.push('/account')
                            })
                        } else {
                            notification.info({
                                message: "You're eligible!",
                                description: "You have bought your Samhita '20 ticket. You can attend this workshop for free." ,
                                placement: 'topRight',
                                duration: 7,
                                top: 90,
                                className: 'notification',
                                onClose: this.props.history.push('/account')
                            })
                        }
                    } else {
                        this.setState({ isLoading: false })
                        notification.info({
                            message: "One more step!",
                            description: "You can attend this workshop for free once you have purchased your Samhita '20 ticket.",
                            placement: 'topRight',
                            duration: 5,
                            top: 90,
                            className: 'notification',
                            onClose: this.props.history.push('/account')
                        })
                    }
                }).catch(err => {
                    this.setState({ isLoading: false })
                    console.log(err.message)
                    notification.error({
                        message: 'Oops',
                        description: 'An error occurred. Try again',
                        placement: 'topRight',
                        duration: 3,
                        top: 90,
                        className: 'notification'
                    })
                })
            } else {
                this.setState({ isLoading: false })
                this.props.history.push('/account')
            }
        })
    }

    render() {
        const { isLoading } = this.state
        const text = <span>Free entry on purchase of Samhita Ticket</span>
        return (
            <React.Fragment>
                <Helmet>
                    <title>Samhita 22 - Workshops</title>
                </Helmet>
                <Navbar name = 'workshop' />
                <section className = 'section workshops-main-container' style = {{overflowX: 'hidden'}}>
                    <div data-aos = 'fade-right' className = 'container workshop-container-first'>
                    <div className = 'columns'>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {uiux} alt = 'Android app development workshop' effect = 'blur'/>
                            </div>
                            <div className = 'column workshop-content'>
                                <div className = 'field upper'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title'>
                                            Introduction to ReactNative and Expo Tool Hands On
                                        </div>
                                    </div>
                                    <div className = 'control is-pulled-right' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo' style = {{marginLeft: '15px'}}>
                                            <LazyLoadImage src = {dealshare} alt = 'Android App Development logo' width = {180} height = {60} effect = 'blur' />
                                        </span>
                                        {/* <span className = 'subtitle is-4 is-lato workshop-subtitle'>&nbsp;&nbsp;&nbsp;Dealshare</span> */}
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary'>
                                        User interface is important to meet user expectations and support the effective functionality of your site or app. A well-executed user interface facilitates effective interaction between the user and the program, app or machine through contrasting visuals, clean design and responsiveness.
                                        Come to Samhita '22 and learn how to design a UI with React native and see how it works on your very own device from the very best! A developer is now the X-factor indeed!
                                        </div>
                                        <div className = 'subtitle has-text-link is-6 is-lato workshop-summary' style = {{cursor: 'pointer'}} onClick = {this.showAndroidDrawer}>
                                            Agenda & FAQ
                                        </div>
                                        <Drawer  className = 'is-lato'
                                            title="Agenda & FAQ"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onAndroidClose}
                                            visible={this.state.androidDrawerVisible}
                                            >
                                            <strong>Agenda of Android App Development Workshop</strong>
                                            <ol>
                                                <li>Why React Native?</li>
                                                <li>Prerequisites and setting up Environment</li>
                                                <li>React Native Overview</li>
                                                <li>React Basic</li>
                                                <li>React native Core Components and APIs.</li>
                                                <li>About Expo</li>
                                                <li>Sample Demo Project 1</li>
                                                <li>Sample Demo Project 2</li>
                                                <li>How to generate build without Android Studio and xcode.</li>
                                                <li>Expo to React native vanilla setup .</li>
                                                <li>FAQ</li>
                                                <li>The End.</li>
                                            </ol>
                                            <hr/>
                                            <p style = {{marginBottom: '1rem'}}><strong>FAQ</strong></p>
                                            <ol>
                                                <li>
                                                    <strong>
                                                        What is the timing of the workshop?
                                                    </strong><br/>
                                                    React Native Workshop will be a One day workshop from 9 AM to 4 PM
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to carry Laptops?
                                                    </strong><br/>
                                                    Yes, please bring laptops with chargers for React Native Workshop
                                                </li>
                                                <li>
                                                    <strong>
                                                        Will lunch be provided?
                                                    </strong><br/>
                                                    Yes! Lunch will be provided for all the workshop participants and is inclusive of the workshop fee.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we bring our mobile chargers and other accessories?
                                                    </strong><br/>
                                                    Yes, absolutely. Feel free to carry your accessories.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to bring note for jotting down the seminar?
                                                    </strong><br/>
                                                    Not necessary, we will provide each workshop participant with a workshop kit inclusive of NotePad, Pen and a File to carry it.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we have a discussion with the Workshop Facilitator after the workshop?
                                                    </strong><br/>
                                                    Yes, you can have a Q&A Session with the Facilitator after the workshop session.
                                                </li>
                                            </ol>
                                        </Drawer>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    April 23
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    799 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-rounded is-link has-text-weight-semibold is-lato' disabled onClick = {() => this.handleWorkshopPayment('a1')}>
                                                    BUY
                                                </button><p style={{fontSize:'18px',color:'red'}}><sup>*</sup>Registration opens Soon.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div data-aos = 'fade-left' className = 'container workshop-container'>
                        <div className = 'columns workshop-columns'>
                            <div className = 'column workshop-content-alt'>
                                <div className = 'field upper-alt'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title-alt'>
                                            Machine Learning and Deep Learning Workshop
                                        </div>
                                    </div>
                                    <div className = 'control' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{margin: '0px 10px'}}>
                                            <LazyLoadImage src = {tensor} alt = 'Tensorflow usergroups' width ={170} height = {60} effect = 'blur' />
                                        </span>
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary-alt'>
                                            It's time for Machines to think! The field of computer science is changing the world which is similar to the effects of Physics towards the end of the 19th century. Come to learn what really is machine learning and how to make the software think like a human or beyond!  It's their time to learn now!
                                        </div>
                                        <div className = 'subtitle has-text-link is-6 is-lato workshop-summary' style = {{cursor: 'pointer'}} onClick = {this.showMlDrawer}>
                                            Agenda & FAQ
                                        </div>
                                        <Drawer                                                  className = 'is-lato'
                                            title="Agenda & FAQ"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onMlClose}
                                            visible={this.state.mlDrawerVisible}
                                            >
                                            <p><strong className = 'is-size-5'>Morning sessions</strong></p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>Session 1: Introduction to Machine Learning (9am to 11am)</p>
                                            <ul>
                                                <li>● How Artificial Intelligence is transforming the world we live?</li>
                                                <li>● Your Role in this rapid AI revolutions</li>
                                                <li>● Evolution of AI</li>
                                                <li>● Rule Based vs Machine Learning</li>
                                                <li>● Quick Draw Demo</li>
                                                <li>● Types of Machine Learning</li>
                                                <li>● The steps in practicing Machine Learning</li>
                                                <li>● Over fitting and Bias</li>
                                                <li>● Teachable Machines Demo</li>
                                            </ul>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>Session 2: Machine Learning Algorithms (11am to 1pm)</p>
                                            <p><b>Supervised learning:</b></p>
                                            <ul style = {{marginBottom: '0.5rem'}}>
                                                <li>● Linear Regression</li>
                                                <li>● Logistic Regression</li>
                                                <li>● Decision Tree</li>
                                            </ul>
                                            <p><b>Unsupervised learning:</b></p>
                                            <ul style = {{marginBottom: '0.5rem'}}>
                                                <li>● K means clustering</li>
                                                <li>● PCA</li>
                                            </ul>
                                            <p>Demos:</p>
                                            <ul>
                                                <li>● Posenet</li>
                                                <li>● Bodypix</li>
                                            </ul>
                                            <p style = {{marginTop: '1rem'}}><strong className = 'is-size-5'>Afternoon sessions</strong></p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>Session 3: A dive into Neural Networks (2pm to 3pm)</p>
                                            <ul>
                                                <li>● From Machine Learning to Deep Learning</li>
                                                <li>● The Brain Analogy with Neural Networks</li>
                                                <li>● Building Neural Network from Logistic Regression</li>
                                                <li>● Activation Functions</li>
                                                <li>● Online Playground</li>                 
                                            </ul>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>Session 4: AI around us (3pm to 4pm)</p>
                                            <p><b>Computer vision</b></p>
                                            <ul style = {{marginBottom: '0.5rem'}}>
                                                <li>● Applications: Object Detection, Face Recognition</li>            
                                            </ul>
                                            <p><b>Natural Language Processing</b></p>
                                            <ul style = {{marginBottom: '0.5rem'}}>
                                                <li>● Application: Sentiment Analysis</li>  
                                            </ul>
                                            <p><b>Reinforcement Learning</b></p>
                                            <ul style = {{marginBottom: '0.5rem'}}>
                                                <li>● Application: Playing games at Super Human level</li>  
                                            </ul>
                                            <p><b>Generative Adversarial Network</b></p>
                                            <ul>
                                                <li>● Application: Deepfakes</li>  
                                            </ul>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>Session 5: Conclusion (4pm to 5pm)</p>
                                            <ul>
                                                <li>● Solving a local problem using Machine Learning</li>
                                                <li>● Current Breakthroughs in Artificial Intelligence</li>
                                                <li>● AI start-ups</li>
                                                <li>● Industry roles in Artificial Intelligence</li>
                                                <li>● Tools and Technology to learn for the industry</li>
                                                <li>● Further learning resource</li>    
                                            </ul>
                                            <hr/>
                                            <p style = {{marginBottom: '1rem'}}><strong>FAQ</strong></p>
                                            <ol>
                                                <li>
                                                    <strong>
                                                        What is the timing of the workshop?
                                                    </strong><br/>
                                                    Machine Learning Workshop will be a One day workshop from 9 AM to 4 PM
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to carry Laptops?
                                                    </strong><br/>
                                                    Yes, laptops are needed for ML Workshop. Participants should bring their own laptops.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Will lunch be provided?
                                                    </strong><br/>
                                                    Yes! Lunch will be provided for all the workshop participants and is inclusive of the workshop fee.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we bring our mobile chargers and other accessories?
                                                    </strong><br/>
                                                    Yes, absolutely. Feel free to carry your accessories.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to bring note for jotting down the seminar?
                                                    </strong><br/>
                                                    Not necessary, we will provide each workshop participant with a workshop kit inclusive of NotePad, Pen and a File to carry it.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we have a discussion with the Workshop Facilitator after the workshop?
                                                    </strong><br/>
                                                    Yes, you can have a Q&A Session with the Facilitator after the workshop session.
                                                </li>
                                            </ol>
                                        </Drawer>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    April 23
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    849 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-lato is-rounded is-link has-text-weight-semibold' disabled onClick = {() => this.handleWorkshopPayment('m1')}>
                                                    BUY
                                                </button>
                                                <p style={{fontSize:'18px',color:'red'}}><sup>*</sup>Registration opens Soon.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {MLImage} alt = 'Machine Learning workshop' effect = 'blur' />
                            </div>
                        </div>
                    </div>
                    {/* <div data-aos = 'fade-right' className = 'container workshop-container'>
                        <div className = 'columns'>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {PythonImage} alt = 'Python workshop' effect = 'blur' />
                                <img src = {PythonImage} alt = 'workshop' />
                            </div>
                            <div className = 'column workshop-content'>
                                <div className = 'field upper'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title'>
                                            Python Programming
                                        </div>
                                    </div>
                                    <div className = 'control is-pulled-right' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{marginLeft: '15px'}}>
                                            <LazyLoadImage src = {RenaultImage} alt = 'Renault-logo' width = {120} height = {80} effect = 'blur' />
                                        </span>
                                    </div>
                                </div>
                                <div className = 'field' style = {{marginTop: '-30px'}}>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary'>
                                            Ever wondered how easy coding and data science applications are! If you want to code things easy as a breeze, you are in the right place! Coz Python is remarkably easy to learn! Keep up your pace up with fun in Python! Save your dates, Samhita '20 is coming with the power packed Python workshop! Accuracy has never been this greater with much fewer lines of code!
                                        </div>
                                        <div className = 'subtitle has-text-link is-6 is-lato workshop-summary' style = {{cursor: 'pointer'}} onClick = {this.showPythonDrawer}>
                                            Agenda & FAQ
                                        </div>
                                        <Drawer                                                  className = 'is-lato'
                                            title="Agenda & FAQ"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onPythonClose}
                                            visible={this.state.pythonDrawerVisible}
                                            >
                                            <strong>Agenda of Python Programming Workshop</strong>
                                            <ol>
                                                <li>Introduction to Python</li>
                                                <li>Libraries in Python and it's uses</li>
                                                <li>How is Python applied in industries</li>
                                                <li>Data Science in Python</li>
                                                <li>Q&A Session</li>
                                            </ol>
                                            <hr/>
                                            <p style = {{marginBottom: '1rem'}}><strong>FAQ</strong></p>
                                            <ol>
                                                <li>
                                                    <strong>
                                                        What is the timing of the workshop?
                                                    </strong><br/>
                                                    Python Development Workshop will be a One day workshop from 9 AM to 4 PM
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to carry Laptops?
                                                    </strong><br/>
                                                    Yes, you need to bring your own laptops for Python workshop.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do lunch will be provided?
                                                    </strong><br/>
                                                    Yes! Lunch will be provided for all the workshop participants and is inclusive of the workshop fee.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we bring our mobile chargers and other accessories?
                                                    </strong><br/>
                                                    Yes, absolutely. Feel free to carry your accessories
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to bring note for jotting down the seminar?
                                                    </strong><br/>
                                                    Not necessary, we will provide each workshop participant with a workshop kit inclusive of NotePad, Pen and a File to carry it.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we have a discussion with the Workshop Facilitator after the workshop?
                                                    </strong><br/>
                                                    Yes, you can have a Q&A Session with the Facilitator after the workshop session.
                                                </li>
                                            </ol>
                                        </Drawer>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    February 1
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    749 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-lato is-rounded is-link has-text-weight-semibold' disabled onClick = {() => this.handleWorkshopPayment('p1')}>
                                                    Sold out!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div> */}
                    {/* <div data-aos = 'fade-left' className = 'container workshop-container'>
                        <div className = 'columns workshop-columns'>
                            <div className = 'column workshop-content-alt'>
                                <div className = 'field upper-alt'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title-alt'>
                                            Artificial Intelligence
                                        </div>
                                    </div>
                                    <div className = 'control' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{margin: '0px 10px 7px 10px'}}>
                                            <LazyLoadImage src = {FbImage} alt = 'Facebook logo' width = {50} height = {60} effect = 'blur'/>
                                        </span>
                                        <span className = 'subtitle is-4 is-lato workshop-subtitle'>Facebook Developers</span>
                                    </div>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary-alt'>
                                            The age of ultras has begun! The simulation of human intelligence is now exhibited by machines leading to a completely new venture in the 21st century! Pack up your bags, come and learn the Intelligent way by learning the traits associated with these machines at Samhita '20! The future has arrived!
                                        </div>
                                        <div className = 'subtitle has-text-link is-6 is-lato workshop-summary' style = {{cursor: 'pointer'}} onClick = {this.showAiDrawer}>
                                            Agenda & FAQ
                                        </div>
                                        <Drawer                                                  className = 'is-lato'
                                            title="Agenda & FAQ"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onAiClose}
                                            visible={this.state.aiDrawerVisible}
                                            >
                                            <strong>Agenda of Artificial Intelligence Workshop</strong>
                                            <ol>
                                                <li>Introduction to AI</li>
                                                <li>Discussion of Important AI Algorithms</li>
                                                <li>Introduction to Advanced Concepts</li>
                                                <li>Live Demo and Hands on Session</li>
                                                <li>Provision of Learning resources</li>
                                            </ol>
                                            <hr/>
                                            <p style = {{marginBottom: '1rem'}}><strong>FAQ</strong></p>
                                            <ol>
                                                <li>
                                                    <strong>
                                                        What is the timing of the workshop?
                                                    </strong><br/>
                                                    Artificial Intelligence Workshop will be a One day workshop from 9 AM to 4 PM
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to carry Laptops?
                                                    </strong><br/>
                                                    Yes, you need to bring your own laptops for AI Workshop.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Will lunch be provided?
                                                    </strong><br/>
                                                    Yes! Lunch will be provided for all the workshop participants and is inclusive of the workshop fee.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we bring our mobile chargers and other accessories?
                                                    </strong><br/>
                                                    Yes, absolutely. Feel free to carry your accessories.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to bring note for jotting down the seminar?
                                                    </strong><br/>
                                                    Not necessary, we will provide each workshop participant with a workshop kit inclusive of NotePad, Pen and a File to carry it.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we have a discussion with the Workshop Facilitator after the workshop?
                                                    </strong><br/>
                                                    Yes, you can have a Q&A Session with the Facilitator after the workshop session.
                                                </li>
                                            </ol>
                                        </Drawer>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    January 31
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    849 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-rounded is-link is-lato has-text-weight-semibold' disabled onClick = {() => this.handleWorkshopPayment('i1')}>
                                                    Sold out!
                                                </button>
                                                <span className = 'icon is-right icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {AIImage} alt = 'Artificial Intelligence workshop' effect = 'blur' />
                            </div>
                        </div>
                    </div> */}
                    <div data-aos = 'fade-right' className = 'container workshop-container'>
                    <div className = 'columns'>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {PlacementImage} alt = 'Placement training workshop' effect = 'blur'/>
                            </div>
                            <div className = 'column workshop-content'>
                                <div className = 'field upper'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title'>
                                            Placement Training
                                        </div>
                                    </div>
                                    <div className = 'control is-pulled-right' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo' style = {{marginLeft: '15px'}}>
                                            <LazyLoadImage src = {guvi} alt = 'GeeksforGeeks logo' width = {150} height = {60} effect = 'blur' />
                                        </span>
                                    </div><br/>
                                </div>
                                <div className = 'field'>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary'>
                                            It all comes down to this and every student certainly dreams of this - Landing the perfect job. Placements are where we get a chance to reap our efforts of the entire academic course. So, why not master the tactic? Why not land that big dream job? <strong>An exclusive workshop on Placement Preparation by GUVI at Samhita '22!</strong> Join us and become the master cracker at placements! This doesn't get any better!
                                        </div>
                                        {/* <div className = 'subtitle is-6 is-lato workshop-summary'>
                                            <strong>Every participant will receive a voucher worth ₹ 300 on GeeksforGeeks courses!</strong>
                                        </div> */}
                                        <div className = 'subtitle has-text-link is-6 is-lato workshop-summary' style = {{cursor: 'pointer'}} onClick = {this.showGeeksDrawer}>
                                            Agenda & FAQ
                                        </div>
                                        <Drawer
                                            className = 'is-lato'
                                            title="Agenda & FAQ"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onGeeksClose}
                                            visible={this.state.geeksDrawerVisible}
                                            >
                                            <strong>Agenda of Placement Training Workshop</strong>
                                            <ol>
                                                <li>Placement Preparation for Product based companies (Amazon, Microsoft, Adobe, etc)</li>
                                                <li>Walkthrough to the technical Interview process for the SDE Hiring.</li>
                                                <li>How to ace your technical interview.</li>
                                                <li>Preparation for the Service based MNC hirings.</li>
                                                <li>Last-minute preparation guideline for the interview</li>
                                                <li>Discussion of the most popular interview questions(DSA).</li>
                                                <li>Query & interactive session.</li>
                                            </ol>
                                            <hr/>
                                            <p style = {{marginBottom: '1rem'}}><strong>Know the mentor</strong></p>
                                            <p style = {{marginBottom: '1rem'}}><strong>Mr. Shashi Bhushan</strong></p>
                                            <p>Worked with Adobe for about 2 years, Shashi Bhushan has sound knowledge of technologies like Java, Spring/Spring Boot, Hibernate, REST APIs, Python, Django, etc with a first-class hands-on of DSA. He graduated from NIT Allahabad in 2016 and worked for Paytm as a Software Engineer for a year. He is very passionate about Competitive Programming & Problem Solving. He is currently working as a Mentor at GeeksforGeeks.</p>
                                            <hr/>
                                            <p style = {{marginBottom: '1rem'}}><strong>FAQ</strong></p>
                                            <ol>
                                                <li>
                                                    <strong>
                                                        What is the timing of the workshop?
                                                    </strong><br/>
                                                    Placement Training Workshop will be a half day workshop from 10 AM to 1 PM
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to carry Laptops?
                                                    </strong><br/>
                                                    No, laptops won't be needed for this Workshop.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Will lunch be provided?
                                                    </strong><br/>
                                                    No! Lunch won't be provided for Placement Workshop. However, many food courts will be present during Samhita.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we bring our mobile chargers and other accessories?
                                                    </strong><br/>
                                                    Yes, absolutely. Feel free to carry your accessories.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Do we need to bring note for jotting down the seminar?
                                                    </strong><br/>
                                                    Not necessary, we will provide each workshop participant with a workshop kit inclusive of NotePad, Pen and a File to carry it.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Can we have a discussion with the Workshop Facilitator after the workshop?
                                                    </strong><br/>
                                                    Yes, you can have a Q&A Session with the Facilitator after the workshop session.
                                                </li>
                                            </ol>
                                        </Drawer>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    April 23
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg'/>
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    Slot 1: 9:30 AM - 12:30 PM
                                                </div>
                                                <div className = 'subtitle is-5 is-lato workshop-detail' style = {{marginTop: '-15px'}}>
                                                    Slot 2: 1 PM - 4 PM 
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <Tooltip placement = 'right' title = {text}>
                                                    <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                        FREE with Samhita'22 Tickets*
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                         {/* <button className = 'button is-loading is-rounded is-link has-text-weight-semibold is-lato' style = {{backgroundColor: '#32A176'}} disabled onClick = {this.handleFreeWorkshop}>
                                                        Buy for free
                                                </button> */}
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                {/* {
                                                    isLoading ? 
                                             <p style={{fontSize:'18px',color:'red'}}><sup>*</sup>Registration opens Soon.</p>
                                                   
                                                
                                                   :

                                                    // <button className = 'button is-rounded is-link has-text-weight-semibold is-lato' disabled onClick = {this.handleFreeWorkshop}>
                                                    //     BUY
                                                    // </button>
                                                }  */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className = 'subtitle is-6 is-lato has-text-weight-semibold has-text-danger' style = {{marginTop: '1rem'}}>*Onsite registrations are available for limited number of seats!. So be quick to buy Samhita'22 tickets once its open.</div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/* <div data-aos = 'fade-left' className = 'container workshop-container'>
                        <div className = 'columns workshop-columns'>
                            <div className = 'column workshop-content-alt'>
                                <div className = 'field upper-alt'>
                                    <div className = 'control'>
                                        <div className = 'title is-2 is-lato workshop-title-alt'>
                                            Ethical Hacking
                                        </div>
                                    </div>
                                    <div className = 'control' style = {{margin: '20px 0px 0px 0px'}}>
                                        <span className = 'subtitle is-6 is-lato'>by</span>
                                        <span className = 'organiser-logo-2' style = {{margin: '0px 5px'}}>
                                            <LazyLoadImage src = {ZohoImage} alt = 'Zoho logo' width = {100} height = {60} effect = 'blur' /> 
                                        </span>
                                    </div>
                                </div>
                                <div className = 'field' style = {{marginTop: '-20px'}}>
                                    <div className = 'control'>
                                        <div className = 'subtitle is-6 is-lato workshop-summary-alt'>
                                            In an open world like the Internet, the space for privacy and security is getting smaller every day. Samhita '20 invites you all the budding hackers out there to get the space you deserve through this workshop. Gear up! With great power comes great responsibility. Hackers are also solution makers, aren't they?
                                        </div>
                                        <div className = 'subtitle has-text-link is-6 is-lato workshop-summary' style = {{cursor: 'pointer'}} onClick = {this.showHackingDrawer}>
                                            Agenda & FAQ
                                        </div>
                                        <Drawer                                                  
                                            className = 'is-lato'
                                            title="Agenda of the workshop"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onHackingClose}
                                            visible={this.state.hackingDrawerVisible}
                                            >
                                            <p><strong>Everything with proper hands-on demo</strong></p><br/>
                                            <p><strong>10:00 AM</strong></p>
                                            <p><strong>Information Gathering:</strong></p>
                                            <ol style = {{marginBottom: '5px'}}>
                                                <li>Directory Bruteforcing</li>
                                                <li>Google Dorking</li>
                                                <li>Sub-Domain Enumeration</li>
                                                <li>Shodan</li>
                                                <li>Wayback Machines</li>
                                            </ol>
                                            <p><strong>MITM:</strong></p>
                                            <ol style = {{marginBottom: '5px'}}>
                                                <li>Wireshark</li>
                                                <li>ARP Spoofing</li>
                                            </ol>
                                            <p><strong>11:15 AM</strong></p>
                                            <ol style = {{marginBottom: '5px'}}>
                                                <li>How proxies work?</li>
                                                <li>Burp Suite Proxy Configuration</li>
                                            </ol>
                                            <p><strong>1:00 PM</strong></p>
                                            <p style = {{marginBottom: '5px'}}>Lunch</p>
                                            <strong>2:00 PM</strong><br/>
                                            <strong>Web vulnerabilities:</strong>
                                            <ol style = {{marginBottom: '5px'}}>
                                                <li>SQLI</li>
                                                <li>File Path Traversal Attack</li>
                                                <li>OTP Brute Force Attack</li>
                                            </ol>
                                            <p><strong>Miscellaneous:</strong></p>
                                            <ol style = {{marginBottom: '5px'}}>
                                                <li>Bug Hunting</li>
                                                <li>CTF</li>
                                                <li>Kickthemout</li>
                                            </ol>
                                            <p><strong>Pre-requisites:</strong></p>
                                            <p style = {{marginBottom: '5px'}}>Kali linux OS in a Virtual box/VMWare</p>
                                        </Drawer>
                                    </div>
                                </div>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-1'>
                                                <FontAwesomeIcon icon = {faCalendarAlt} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    February 1
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-2' style = {{marginLeft: '-5px'}} >
                                                <FontAwesomeIcon icon = {faClock} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    9:30 AM - 4 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className ='field is-grouped workshop-detail-row'>
                                            <div className = 'control workshop-detail-icon-3' style = {{marginLeft: '5px'}} >
                                                <FontAwesomeIcon icon = {faRupeeSign} size = 'lg' />
                                            </div>
                                            <div className ='control'>
                                                <div className = 'subtitle is-5 is-lato workshop-detail'>
                                                    799 per head
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped'>
                                            <div className = 'control has-icons-right'>
                                                <button className = 'button is-rounded is-link is-lato has-text-weight-semibold' disabled onClick = {() => this.handleWorkshopPayment('e1')}>
                                                    Sold out!
                                                </button>
                                                {/* <span className = 'icon is-right buy-ticket-icon-3 icon-is-hidden'>
                                                    <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' color = 'white' />
                                                </span> 
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className = 'column is-half' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <LazyLoadImage src = {HackingImage} alt = 'Ethical hacking workshop' effect = 'blur' />
                            </div>
                        </div>
                    </div> */}
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Workshops)
