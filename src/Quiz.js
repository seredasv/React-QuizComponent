import React, {Component} from 'react';

let quizData = require('./quiz_data');

class Quiz extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {quiz_position: 1};
    }

    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {quizData.quiz_questions[0].instruction_text}
                </div>
            </div>
        );
    }
};

export default Quiz;
