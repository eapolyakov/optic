import React, {Component} from 'react';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button'

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            SendMail:{
                text: '',
                name: '',
                email: '',
                topic: ''
            },

            topicOptions: ['Отзыв','Вопрос','Претензия','Иное'],
            skillOptions: ['Согласен']

        }
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleSendMail = this.handleSendMail.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleTopic = this.handleTopic.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, name: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, email: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleTopic(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, [name]: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(prevState => ({
            SendMail: {
                ...prevState.SendMail, text: value
            }
        }), ()=>console.log(this.state.SendMail))
    }

    handleSendMail(e) {
        e.preventDefault();
        let userData = this.state.SendMail;

        fetch('http://edu.eapolyak.beget.tech/sendMail',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({
            SendMail:{
                text: '',
                name: '',
                email: '',
                topic: ''
            },
        })
    }

    render() {
        return (
            <div className="mr-auto" style = {{backgroundAttachment: "fixed", background: "url(images/topography.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 mb-5">
                            <h5 className="text-center">Напишите нам</h5>
                            <form className="container-fluid" onSubmit={this.handleSendMail}>
                                <Input inputType={'text'}
                                       name= {'name'}
                                       title= {'Имя'}
                                       value={this.state.SendMail.name}
                                       placeholder = {'Введите Ваше имя'}
                                       handleChange = {this.handleFullName}

                                />
                                <Input inputType={'Email'}
                                       name={'email'}
                                       title= {'Email'}
                                       value={this.state.SendMail.email}
                                       placeholder = {'Введите Ваш email'}
                                       handleChange={this.handleEmail} />


                                <Select title={'Тема обращения'}
                                        name={'topic'}
                                        options = {this.state.topicOptions}
                                        value = {this.state.SendMail.topic}
                                        placeholder = {'Выбрать тему'}
                                        handleChange = {this.handleTopic}
                                />
                                <TextArea
                                    title={'Сообщение'}
                                    name={'text'}
                                    rows={10}
                                    value={this.state.SendMail.text}
                                    placeholder={'Введите текст'}
                                    handleChange={this.handleTextArea}

                                />
                                <Button
                                    action = {this.handleSendMail}
                                    type = {'primary'}
                                    title = {'Отправить'}
                                    style={buttonStyle}
                                />

                                <Button
                                    action = {this.handleClearForm}
                                    type = {'secondary'}
                                    title = {'Очистить'}
                                    style={buttonStyle}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
}