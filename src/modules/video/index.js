import React, { Component } from 'react';
import classes from './styles.module.css';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import { Table, Avatar, TableColumnText } from '../../components';
import BackArrow from '../../assets/left-arrow.png'
import { getVideo } from '../../requests'

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video : null
        }
    }

    handleVideo = (videoId) => {
        getVideo(videoId)
            .then((response) => {
                this.setState({
                    video: response
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    

    componentDidMount() {
        this.handleVideo(this.props.match.params.id)
    }

    

    getVideoTitle = () => {
        let title = ""
        if (this.state.video) {
            title = this.state.video["title"]
        }
        return <div className={classes.SubHeading}><b>Title</b> :  {title}</div>
    }

    getVideoDescription = () => {
        let description = ""
        if (this.state.video) {
            description = this.state.video["description"]

        }
        return <div className={classes.SubHeading}><b>Description</b> :  {description}</div>
    }

    render() {
        return (
            <Container fluid style={{ padding: 20 }}>
                <Row>
                    <Col md={12}>
                        <div className={classes.SubHeader}>
                            <div className={classes.BackBtn}>
                                <Link to={"/videos"}><img src={BackArrow}/></Link>
                            </div>
                            <div>
                                <div style={{ fontSize: 25, divor: "#242934" }}>
                                    {this.getVideoTitle()}
                                    {this.getVideoDescription()}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={classes.VideoSection}>
                    <Col md={12}>
                        <div className={classes.SubContainer}>
                            <h1>Can Open Video Player here</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}