import React from 'react'
import Navidator from './Navigator'
import Header from './Header'
import Footer from './Footer'
import CommentForm from './CommentForm';
import ShowComment from './ShowComment';
import ApiWeather from './ApiWeather';
import './App.css';

const App = () => {
 
  return (
        <div>
          <Navidator />
          <div class="container-lg">
            <Header />
            <div class="row">
              <div class="column-main-l">
                <div class="card">
                  <CommentForm />
                </div>
              </div>
              <div class="column-main-r">
                <div class="card">                        
                  <ApiWeather />           
                </div> 
              </div>
            </div>   
            <ShowComment />  

          </div>
          <Footer />
        </div>
  );
}

export default App;
