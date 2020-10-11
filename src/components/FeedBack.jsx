import React from "react";

export default class FeedBack extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            name: '',
            email: '',
            topic: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type;
        const name = target.name;

        this.setState({
            [name]: value});
    }

    sendMail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        formData.append("name", this.state.value);
        formData.append("email", this.state.value);
        formData.append("topic", this.state.value);
        fetch("http://edu.eapolyak.beget.tech/sendMail",{
            method: "POST",
            body: formData
        });
        event.preventDefault();
        return alert("Сообщение отправлено!");
    }

    render(){
        return <div className="mr-auto" style = {{backgroundAttachment: "fixed", background: "url(images/topography.png)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 mb-5">
                        <h5 className="text-center">Напишите нам</h5>
                        <form action="http://edu.eapolyak.beget.tech/sendMail" className="p-5" onSubmit={this.sendMail}>
                            <div className="row form-group">
                                <div className="col-md-12 mb-3 mb-md-0">
                                    <label className="font-weight-bold" htmlFor="fullname">Имя</label>
                                    <input type="text" name="name" id="fullname" className="form-control" placeholder="Ваше имя" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="font-weight-bold" htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Ваш email" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12 mb-3 mb-md-0">
                                    <label className="font-weight-bold" htmlFor="phone">Телефон</label>
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Номер телефона" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12 mb-3 mb-md-0">
                                    <label className="font-weight-bold">Тема сообщения</label>
                                    <div className="">
                                        <select className="btn btn-primary text-white" name="topic" onChange={this.handleChange}>
                                            <option selected="Отзыв">Отзыв</option>
                                            <option value="Претензия">Претензия</option>
                                            <option value="Вопрос">Вопрос</option>
                                            <option value="Иное">Другое</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="font-weight-bold" htmlFor="message">Сообщение</label>
                                    <textarea name="text" id="message" cols="30" rows="5" className="form-control"
                                              placeholder="Ваше сообщение" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row form-group mx-1">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" required/>
                                        <label className="form-check-label" htmlFor="autoSizingCheck2">
                                            Даю согласие на обработку персональных данных
                                        </label>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit" value="Отправить"
                                           className="btn btn-primary text-white px-4 py-2"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}