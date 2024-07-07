import React, {Component, components} from 'react'

const fileData = [];

class FileUpload extends Component{
    onFileChange(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            fileData.push(fileReader.result)
        };
        fileReader.readAsText(file);
    }

    render(){
        return (
            <div>
                <input
                    type = "file"
                    onChange = {this.onFileChange.bind(this)}
                />
            </div>
        )
    }
}