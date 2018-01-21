import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import "./Timeline.css";


const Timeline = () => (
    
    <div style={{padding: 0, width:"100%"}}> 
        
        <Paper  style={{ 
         width : "100%",
        height: 73,
        margin: "0rem",
        backgroundColor:'white'}}>
        <p style={{color: "black", fontSize: 25,fontWeight:20,  display: 'flex',
         justifyContent: 'center',
          position: 'absolute', marginTop: 20, marginLeft: "2%"}}><b>Watson <sup><font size="1">TM</font></sup></b></p>
        </Paper>
          <Paper style={{ 
        width : "100%",
        height: "max-content",
        margin: "0rem",
        marginTop: -30,
        backgroundColor:'whitesmoke',}}>
        <p style={{
           color: "#562f72", 
           marginLeft: "18%", 
           paddingTop: "2%",
           fontSize:30}}> Natural Language Understanding</p>
           <p style={{ 
               marginLeft: "18%",
               width:"60%",
               lineHeight: '1.7em'
           }}>Natural Language Understanding is a collection of APIs that offer text analysis through natural language processing. 
           This set of APIs can analyze text to help you understand its concepts, keywords and more.
            </p> </Paper> 
     <Paper style={{ 
        width : "100%",
        paddingBottom: "1%",
        height: "max-content",
        margin: "0rem",
        backgroundColor:'white'}}>
        <p style={{
           marginLeft: "18%", 
           fontSize:22,
           paddingTop : "1.5%",
           marginTop: 0
           }}> Examine a news article or other content</p>
           <Paper style={{ width: "65%",
           height:"max-content",
           marginLeft:"18%",
           border: "solid",
           borderWidth: "1px",
           paddingBottom: "1%"
         }}>
         <ul>
            <li><a>Text</a></li>
            <li><a>URL</a></li>
            <li><a>HTML</a></li>
        </ul>
        <textarea class="mytext" rows="10"></textarea>
        </Paper>
        <button class="button_fill"><b>Analyze</b></button>
     
    </Paper>
    
     
        </div>
       
);

export default Timeline;