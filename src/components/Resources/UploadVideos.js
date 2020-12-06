import React, {Component} from 'react'
//add fetch api

class UploadVideos extends Component {
    
    onChange(e){
        let files = e.target.files;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        
        reader.onload = (e) => {

        }

    }

    render (){
        return (
            <div onSubmit = {this.onFormSubmit}>
            <h1>Upload your content</h1>
            <input type = 'file' name = 'file' onChange = {(e) => this.onChange(e)}/>

            </div>


        )
    }

}

export default UploadVideos
