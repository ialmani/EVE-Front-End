import React, {Component} from 'react'
import MonthlyBlog from './MonthlyBlog'


class Cards extends Component {
  
    render (){
        return (
            
            
            <div className= 'container-fluid d-flex justify-content-center'>
                <div className = 'row'>
                    <div className = 'col-md-4'> <MonthlyBlog/> </div>
                    <div className = 'col-md-4'> <MonthlyBlog/> </div>
                    <div className = 'col-md-4'> <MonthlyBlog/> </div>
                    <div className = 'col-md-4'> <MonthlyBlog/> </div>
                    <div className = 'col-md-4'> <MonthlyBlog/> </div>
                    <div className = 'col-md-4'> <MonthlyBlog/> </div>
                     
                    
                </div>

            </div>

        );


       
    }
}    

export default Cards;