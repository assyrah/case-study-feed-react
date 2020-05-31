import React, { Component } from 'react';

class Details extends Component {
    state = {
        sortVal: true
    }
    //sort date
    toggleDate = () => {
        let result;
        let { sortVal } = this.state;
        const {details} = this.props.location.state;
        //sort ascending
        if(this.state.sortVal) {
            result = details.questions.sort((a,b) =>  new Date(b['date']) - new Date(a['date']));
        }
        //sort descending
        else {
            result = details.questions.sort((a,b) =>  new Date(a['date']) - new Date(b['date']));
        }
        this.setState({
            sortVal: !sortVal,
            details: result
        })
    }
    render() {
        const {details} = this.props.location.state;
        const questionList = details.questions.map((question, index) => {
            return (
                <div className="question" key={index}>
                    <h2 className="no-margin">{question.text.split(' ').slice(0, 3).join(' ')}</h2>
                    <p className="no-margin font-gray"><small><span>&#8212;</span> {new Date(question.date).toLocaleDateString()}</small></p>
                    <p>{question.text}</p>
                </div>
            )
        })
        return (
            <div className="post-list container">
                <div className="row card card--horizontal">
                    <div className="col-md-3 col-sm-6 no-padding">
                        <img src={require('../assets/' + details.image)} className="img-responsive" alt={details.image}/>
                    </div>
                    <div className="col-md-2 col-sm-6 right-content no-padding">
                        <div>
                            <h1>{details.title}</h1>
                            <p onClick={this.toggleDate} className="link"><small>SORT BY LATEST</small></p>
                            <div className="row">{questionList}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}

export default Details