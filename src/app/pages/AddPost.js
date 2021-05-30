import React, {  } from 'react';
import '../css/AddPost.css';
import Input from "@material-ui/core/Input"
import Button from '@material-ui/core/Button'

const AddPost = (props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 className="Newpost">Add Post</h2>
            <Input
                id="filled-full-width"
                style={{ margin: '50px 0 0 0' }}
                placeholder="Write your post"
                margin="normal"
                variant="filled"
                multiline="true"
                className="input"
            />
            <div className="three-buttons">
                <div className="button" >
                    <Button color="secondary">
                        Upload photo
                    </Button>
                </div>
                
                <div className="button">
                    <Button color="secondary">
                        Upload video
                    </Button>
                </div>
                <div className="button">
                    <Button color="secondary">
                        Upload pdf
                    </Button>
                </div>
            </div>
                
            <Button className="button-main" style={{color: '#fff', marginTop: 25}} variant="contained" size="large" color="primary">
                Submit Post
            </Button>
        </div>
    );
}


export default AddPost;