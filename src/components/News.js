import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import PropTypes from 'prop-types'


export default class News extends Component 
{
   //static defaultProps = {
     // country: 'in',
    //category: 'general'
    //}  

    
      //static PropTypes = {
        //category: PropTypes.string,
      //}  
  

    constructor(){
        super();
        this.state = { 
                articles: [],
                loading: true,
                page:1
        }
      }

    // asynchronus function; returns promise.
     async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0e34157b63bf41728955efab948ee222";

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
        this.setState({articles: parsedData.articles})

    }

     handlePrevClick = async()=>{
       console.log("Previous");
   
       
    }

     handleNextClick = async ()=>{
        console.log("Next")

        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0e34157b63bf41728955efab948ee222";

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
        this.setState({articles: parsedData.articles})


        this.setState({
            page: this.state.page+1
        })
    }



  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '36px 0px'}}>AdNews Network - Top Headlines</h1>

        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {this.state.articles.map((element)=>{
            
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageURL ={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
         
            
            
            })}

          <div className="container d-flex justify-content-between">

          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick} >&laquo; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>&raquo; Next</button>

          </div>
         
         
         </div>
      </div>
    );
  }
}
