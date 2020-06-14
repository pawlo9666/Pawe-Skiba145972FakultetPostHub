import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { makeStyles } from '@material-ui/core/styles';
import image from '../../obrazek.jpg'

let imgUrl = 'https://w.wallhaven.cc/full/96/wallhaven-96w8e8.png'
const useStyles = makeStyles({
        root: {
            position: 'absolute',
            width: '100%',
            height: '100%'
        },

        bg: {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundposition: 'left top',
            position: 'relative',
            width: '100%',
            height: '93.2%',
            
        }
    });

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavPanel />
            <div className={classes.bg}>

            </div>
        </div>
    );
};

export default Home;