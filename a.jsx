import React from 'react';
import ImageUploader from 'react-images-upload';
import CmpRoleController from "./CmpRoleController"
 
class Removebg extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = {
              pictures: [],
              result:{},
              imgUrl:{},
              mydata:{
                "root": {
                    "record": [
                        {
                            "id": "1",
                            "name": "Soumya saswat",
                            "mail": "saumyasaswat@gmail.com",
                            "date": "23-05",
                            "wish": "Happy birthday"
                        },
                        {
                            "id": "2",
                            "name": "Soura gopal",
                            "mail": "souragopal@gmail.com",
                            "date": "01-11",
                            "wish": "Happy birthday"
                        },
                        {
                            "id": "3",
                            "name": " Satya",
                            "mail": "ssx@gmail.com",
                            "date": "11-05",
                            "wish": "Happy birthday"
                        }
                    ]
                }
            },
            tempdata:{
                "id": "4",
                "name": " x",
                "mail": "ssx@x.com",
                "date": "x",
                "wish": "x"
            }
             };
         this.onDrop = this.onDrop.bind(this);
         this.findAllCmpRoles=this.findAllCmpRoles.bind(this);
         this.addjsn=this.addjsn.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    async findAllCmpRoles() {
        await CmpRoleController.findAll(this.state.pictures).then(result => {
  console.log(result)
  const blob = new Blob([result], { type: "image/png" });
//   const src = URL.createObjectURL(blob);
            
//             this.setState({
//                 imgUrl: src
//             });
           

        }).catch(error => console.log('error', error));
    
    }

    addjsn() {
        this.setState({
            mydata: this.state.mydata.root.record.push(this.state.tempdata),
        });
        console.log(this.state.mydata)
    }
   
    render() {
        return (
            <>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <button onClick={this.findAllCmpRoles}>Send</button>
            <br></br>
            <img src={this.state.imgUrl}></img>
            <button onClick={this.addjsn}>check json</button>
            </>
          
        );
    }
}
export default Removebg