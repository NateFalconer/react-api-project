import React, { Component } from 'react';
import cheerio from 'cheerio'
import axios from 'axios'
import NavBar from './NavBar'

class Article extends Component {
    state={
        text:''
    }
    componentDidMount() {
        console.log(this.props)
        axios.get(`https://cors-anywhere.herokuapp.com/${this.props.location.state.url}`)
            .then((response) => {
                if (response.status === 200) {
                    const html = response.data;
                    const $ = cheerio.load(html);
                    console.log($('.content__main-column').text())
                    //console.log($('body').html())
                    let text = $('.content__main-column').text()
                    this.setState({text})
                }
            }, (error) => console.log(error));
    }
    render() {
        return (
            <div>
            <NavBar />
            <div className="articleText">
                {this.state.text}
            </div>
            </div>
        );
    }
}

export default Article;