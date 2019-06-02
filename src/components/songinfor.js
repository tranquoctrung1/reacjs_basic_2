import React, {Component} from 'react';
import PropsType from 'prop-types'
import { Container, Row, Col } from 'reactstrap';
import './songinfor.sass'


class SongInfor extends Component {
    render()
    {
        const {song} = this.props;
        return (
            <div className="SongInfor">
                <Container>
                    <Row>
                        <Col md="2" className='id'>
                         <div className="IdRank">{song.id}</div>    
                        </Col>
                        <Col md="7">
                        <Row>
                            <Col>
                                <div className="NameSong">{song.name}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="Singer">{song.singer}</div>
                            </Col>
                        </Row>
                        </Col>
                        <Col md="3" className="count">
                            <div className="CountingViewer">{song.countingviewer}</div>
                        </Col>
                    </Row>
                </Container>                 
            </div>
        )
    }
}

SongInfor.defaultProps = {
    countingviewer: 0
}

SongInfor.PropsType ={
    id: PropsType.number.isRequired,
    name: PropsType.string.isRequired,
    singer: PropsType.string.isRequired,
    countingviewer: PropsType.number.isRequired
}

export default SongInfor;