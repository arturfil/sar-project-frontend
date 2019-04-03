import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './Volcanoes.css';

class Volcanoes extends Component {
   constructor() {
    super();
    this.state = {
      volcanoes: []
    }
  }


  componentDidMount() {
    fetch('/api/volcanoes')
      .then(res => res.json())
      .then(volcanoes => this.setState({volcanoes}, () => console.log('working', volcanoes)));
  }

  render() {
    return (
      <div>
        <div className="container">
          <ul>
            <div className="row">
              {this.state.volcanoes.map(volcano => 
              <div className="col-4">
                <Card className="card-cont" style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={volcano.img} />
                  <Card.Body>
                    <Card.Title>{volcano.name}</Card.Title>
                    <Card.Text>
                      Location: {volcano.location},
                    </Card.Text>
                    <Card.Text>
                      Elvation: {volcano.height}'
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    )
  }

  
}

export default Volcanoes;