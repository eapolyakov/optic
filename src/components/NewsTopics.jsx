import React from "react";

function NewsItem(props){
   return <div className="col-md-6 col-lg-4 mb-5">
        <div className="media-image">
            <img src={props.img} alt="Image" className="img-fluid"/>
            <div className="media-image-body">
                <h2 className="font-secondary text-uppercase">{props.title}</h2>
                <span className="d-block mb-3">{props.author} &mdash; {props.date}</span>
                <p>{props.body}</p>
                <p><a href="#">Read More</a></p>
            </div>
        </div>
   </div>
}

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newsItems: []};
    }
    componentDidMount() {
        this.props.getNews().then(
            news=>{
                let newsCount = news.length;
                let newsItems = [];
                for (let i = 0; i < newsCount; i++) {
                    newsItems.push(<NewsItem
                        key={i}
                        title={news[i].title}
                        author={news[i].author}
                        date={news[i].date}
                        description={news[i].description}
                        img={news[i].img}
                    />)
                }
                this.setState({newsItems: newsItems})
            }
        )
    }
    render() {
        return <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    {this.state.newsItems}
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="custom-pagination">
                            <span className="current">1</span>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <span>...</span>
                            <a href="#">14</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default News;