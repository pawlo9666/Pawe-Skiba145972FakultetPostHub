import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '20px',
        width: '20vh',
        padding: '10px',
    },
    button: {
        margin: theme.spacing(1),
        padding: '10px',
        width: "20vh"
    },
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
    onDrawerClose: () => void;
}



const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen , onDrawerClose }) => {
    const classes = makeClasses();


    const history = useHistory();
    const redirectTo = (path: string, name: string , icon: any) => (

        <Button onClick={() => history.push(path)}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={icon}
      >
        {name}
      </Button>
    );

    //<div onClick={() => history.push(path)}>{name}</div>
    //   {redirectTo('/favoruites', 'Search Movie', <FavoriteIcon />)}

    return (
        <div>
            <Drawer
                open={shouldBeOpen}
                onClose={() => {
                   onDrawerClose()
                }}
            >
                <div className={classes.drawerContent}>

                        {redirectTo('/', 'Home', <HomeIcon />)}
                        {redirectTo('/movie', 'Movie' , <MovieIcon />)}
                        {redirectTo('/search', 'Search Movie', <SearchIcon />)}
                     
               
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;
