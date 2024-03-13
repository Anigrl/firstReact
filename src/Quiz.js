
import React, { useEffect, useState } from 'react'

function Quiz() {


    const jsQuestionsWithOptions = [
        {

            id: 1,
            question: "What does DOM stand for in JavaScript?",
            option1: "Document Object Model",
            option2: "Data Object Model",
            option3: "Document Order Model",
            option4: "Data Order Model",
            correctOption: "option1" // Corresponds to "Document Object Model"
        },
        {
            id: 2,
            question: "Which keyword is used to declare variables in JavaScript?",
            option1: "var",
            option2: "let",
            option3: "const",
            option4: "variable",
            correctOption: "option1" // Corresponds to "var"
        },
        {
            id: 3,
            question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
            option1: "push()",
            option2: "pop()",
            option3: "join()",
            option4: "concat()",
            correctOption: "option1" // Corresponds to "push()"
        },
        {
            id: 4,
            question: "What is the result of the expression '2' + 2 in JavaScript?",
            option1: "22",
            option2: "4",
            option3: "TypeError",
            option4: "NaN",
            correctOption: "option1" // Corresponds to "22"
        },
        {
            id: 5,
            question: "What is the purpose of the 'use strict' directive in JavaScript?",
            option1: "To enable strict mode, which catches common coding mistakes and 'unsafe' actions",
            option2: "To disable strict mode and allow for looser coding practices",
            option3: "To define a custom strict mode for the script",
            option4: "To specify the use of strict data types in the script",
            correctOption: "option1" // Corresponds to "To enable strict mode, which catches common coding mistakes and 'unsafe' actions"
        },
        {
            id: 6,
            question: "Which of the following is NOT a valid JavaScript data type?",
            option1: "string",
            option2: "boolean",
            option3: "integer",
            option4: "undefined",
            correctOption: "option3" // Corresponds to "integer"
        },
        {
            id: 7,
            question: "What does the 'typeof' operator return when applied to null?",
            option1: "'object'",
            option2: "'null'",
            option3: "'undefined'",
            option4: "'null object'",
            correctOption: "option1" // Corresponds to "'object'"
        },
        {
            id: 8,
            question: "Which method is used to remove the last element from an array and returns that element?",
            option1: "pop()",
            option2: "shift()",
            option3: "slice()",
            option4: "unshift()",
            correctOption: "option1" // Corresponds to "pop()"
        },
        {
            id: 9,
            question: "What does the JavaScript '=== operator' do?",
            option1: "Checks if two variables are equal in value and type",
            option2: "Assigns a value to a variable",
            option3: "Checks if two variables are equal in value, regardless of type",
            option4: "Checks if two variables are not equal in value and type",
            correctOption: "option1" // Corresponds to "Checks if two variables are equal in value and type"
        },
        {
            id: 10,
            question: "Which of the following is a correct way to comment out multiple lines of code in JavaScript?",
            option1: "/* This is a comment */",
            option2: "// This is a comment //",
            option3: "<!-- This is a comment -->",
            option4: "<!DOCTYPE html>",
            correctOption: "option1" // Corresponds to "/* This is a comment */"
        }
    ];



    const [questionno, setQuestion] = useState(0)


    // 
    let quiz = jsQuestionsWithOptions[questionno]



    function increaseQuestion() {
        //  console.log(currQuestion)
        if (questionno < jsQuestionsWithOptions.length - 1) {
            setQuestion(questionno + 1)
            setTime(60)


        } else {
            alert("quiz completed")
            setTime(60)
            setQuestion(0)
        }
    }

    function previoursQuestion() {
        if (questionno > 0) {
            setQuestion(questionno - 1)
            setTime(60)

        }
    }



    const [time, setTime] = useState(60)



    const formatTime = (initalTime) => {
        let minute = Math.floor(initalTime / 60)
        let second = initalTime % 60

        minute = minute < 10 ? minute = "0" + minute : minute;
        second = second < 10 ? second = "0" + second : second;
        // console.log(minute, second)

        return `${minute} : ${second}`


    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time > 0) {
                setTime(prevtime => prevtime - 1)
            } else {
                increaseQuestion()
                setTime(60)
            }
        }, 1000);

        return () => clearTimeout(timer) // cleanup function

    }, [time]);

    function showQuestion(index) {
        setQuestion(index)
        setTime(60)


    }


    return (
        <>

            <section className='container box '>
                <center><h2 className='fs-1 '>Quiz</h2></center>
                <span className='timer fs-1' id='timer'>{formatTime(time)}</span>
                <div className='row'>
                    <div className='quizContainer col-md-6'>
                        <div className='questionNoBox'> <span className='fs-1 bold'>{questionno + 1}.</span><div className='question'>{quiz.question}</div> </div>
                        <div className='answers row'>
                            <input className='col-md-1' id='first' type='radio' value='first' name='quiz' />
                            <label className='col-md-11' htmlFor='first'>{quiz.option1}</label>

                        </div>
                        <div className='answers row'>
                            <input className='col-md-1' id='second' type='radio' value='first' name='quiz' />
                            <label className='col-md-11' htmlFor='second'> {quiz.option2}</label>

                        </div>
                        <div className='answers row'>
                            <input className='col-md-1' id='three' type='radio' value='first' name='quiz' />
                            <label className='col-md-11' htmlFor='three'>{quiz.option3}</label>

                        </div>
                        <div className='answers row'>
                            <input className='col-md-1' id='four' type='radio' value='first' name='quiz' />
                            <label className='col-md-11' htmlFor='four'>{quiz.option4}</label>

                        </div>
                        <div className='d-flex justify-content-around btn-box'>

                            <button className='btn btn-success ' onClick={() => increaseQuestion()}>next</button>
                            <button className='btn btn-primary' onClick={() => previoursQuestion()}>Prev</button>
                        </div>

                    </div>
                    <div className='col-md-2'></div>
                    <div className='row col-md-3 p-2 bg-dark text-info bg-dark'>
                        <div className='col-md-8 border border-dark' >
                            {
                                jsQuestionsWithOptions.map((item, index) => {
                                    return (
                                        <>

                                            <label className='col-md-3'>{index +1}</label>
                                            <input className='col-md-3' type='radio' value={item.question} name="quiz" onClick={() => showQuestion(index)} />
                                        </>
                                    )

                                })
                            }

                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Quiz