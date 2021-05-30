import React, {  } from 'react';
import '../css/Card.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {Link} from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';

const Card = (props) => {
    return(
        <div className="card">
            <Link to={`/channel-details/${props.uid}`} className="card-meta">
                <div className="card-lead">
                   {props.teacherName}
                </div>
                <Tooltip title={`By ${props.teacherName}`} placement="top-start">
                    <Avatar alt={props.teacherName} src={props.avatar} />
                </Tooltip>
            </Link>

            <div className="card-description">
                <div style={{fontSize: 18, fontWeight: '500', marginBottom: 5}} classNmae="description-lead">{props.topic}</div>
                <div className="description-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda sint alias nobis iure nulla, eveniet laborum voluptatibus itaque! Praesentium.
                </div>
            </div>

            <div className="card-controls">
                <Button style={{color: "#fff"}}>Read More</Button>
                <div className="meta-buttons">
                    <IconButton color="primary"><EditRoundedIcon /></IconButton>
                    <IconButton color="secondary"><DeleteRoundedIcon /></IconButton>
                </div>
            </div>
        </div>
    );
}

export default Card;