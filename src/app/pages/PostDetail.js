import React, { useContext } from 'react';
import '../css/PostDetails.css';
import {DataContext} from '../configs/context';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


const PostDetails = (props) => {
    const context = useContext(DataContext)
    return(
        
        <div className="box">
            <div className="Outer-card">
                <div className="avatar">
                    <img src={context.User.data.photo} alt={context.User.data.username} />
                </div>
                <div className="stats">
                    <h2 style={{marginBottom: 20, textAlign: 'center'}}>Teacher Name</h2>
                    <div style={{textAlign: 'justify', fontSize: 14}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti ut consequuntur assumenda quibusdam</div>
                </div>
            </div>

            <div className="doubt-scroll">
                <div className="Ques-card">
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div className="timeStamp">Just Now</div>
                        <div className="meta-buttons">
                            <IconButton color="primary"><EditRoundedIcon /></IconButton>
                            <IconButton color="secondary"><DeleteRoundedIcon /></IconButton>
                        </div>
                    </div>
                    <h2 style={{margin: '10px 0 5px 0'}}>Topic Name</h2>
                    <p className="card-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus blanditiis nihil ipsam minus sed, accusantium nobis laborum atque eveniet iusto, nesciunt delectus ut, praesentium fugiat nam ratione temporibus non numquam!
                    </p>
                </div>
                <div className="Ques-card">
                    <img style={{width: '100%'}} src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Robert_brown_botaniker.jpg" alt="image" />
                </div>
                <div className="Ques-card">
                    <span>PDF: </span> <a style={{color: '#fff'}} href="https://upload.wikimedia.org/wikipedia/commons/b/ba/Robert_brown_botaniker.jpg">Robert Brown.pdf</a>
                </div>
                <div className="Ques-card">
                    <iframe style={{width: '100%', height: '60vh'}} src="https://www.youtube.com/embed/6mbwJ2xhgzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}


export default PostDetails;