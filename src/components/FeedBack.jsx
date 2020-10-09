import React from "react";

class FeedBack extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    sendMail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("http://edu.eapolyak.beget.tech/sendMail",{
            method: "POST",
            body: formData
        });
        event.preventDefault();
        return alert("Сообщение отправлено!");
        this.state = {value: ''};
    }

    render(){
        return <div className="py-5 " style = {{backgroundAttachment: "fixed"}} style = {{backgroundImage: "url(images/topography.png)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 mb-5">
                        <h5 className="text-center">Напишите нам</h5>
                        <form action="#" className="p-5" onSubmit={this.sendMail}>
                            <div className="row form-group">
                                <div className="col-md-12 mb-3 mb-md-0">
                                    <label className="font-weight-bold" htmlFor="fullname">Имя</label>
                                    <input type="text" id="fullname" className="form-control" placeholder="Ваше имя" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="font-weight-bold" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" placeholder="Ваш email" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12 mb-3 mb-md-0">
                                    <label className="font-weight-bold" htmlFor="phone">Телефон</label>
                                    <input type="text" id="phone" className="form-control" placeholder="Номер телефона" onChange={this.handleChange}/>
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
                    <div className="col-lg-4">
                        <div className="p-4 mb-3">
                            <h3 className="h5 text-black mb-3">Контактная информация</h3>
                            <p className="mb-0 font-weight-bold">Адрес</p>
                            <p className="mb-4">Город, улица, дом</p>
                            <p className="mb-0 font-weight-bold">Телефон</p>
                            <p className="mb-4"><a href="#">+1 232 3235 324</a></p>
                            <p className="mb-0 font-weight-bold">Email</p>
                            <p className="mb-0"><a href="#">youremail@domain.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default FeedBack;