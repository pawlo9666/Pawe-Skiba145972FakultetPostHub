import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { useParams } from 'react-router';
import {IMovieByIdResponse } from '../../services/movies.service'
import movieService from '../../services/movies.service'
import { IconButton, Card, CardMedia, CardActions, CardContent, Typography } from '@material-ui/core';
import classes from '*.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
      minWidth: '250px',
          alignItems: 'top',
          display: 'flex',
          flexDirection: 'row',
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: 1200,
          marginTop: 50,
          marginBottom: 50,
          backgroundColor: "#424242",
          color: 'white'
  
    },
    media: {
        margin: 20,
        maxWidth: 400
        
    },
    input: {
       width: "50%",
       position: "relative",
       marginRight: "auto",
       marginLeft: "auto",
       marginBottom: 50
  
    },
    dsc: {
        marginTop: 30,
        alignContent: 'bottom'
    },
    main: {
        fontSize: 20,
        
    },
    title: {
        fontSize: 30
    }

  
  });
  

const Movie = () => {
const classes = useStyles();
const {id} = useParams();
const [movies, setMovies] = React.useState<IMovieByIdResponse>();

React.useEffect(() => {
    movieService.searchById(id).then(resp => {
        setMovies(resp)
    });
  }, [id]);

    return(

        <div>

            <NavPanel />
            
            <Card className={classes.root}>
                <CardMedia className={classes.media}
                        image={movies?.Poster}
                        title={movies?.Title}
                        component="img"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography>
                    <div className={classes.title}> {movies?.Title}</div>
                    </Typography>
                    <Typography>
                    <div className={classes.main}>Director: </div> {movies?.Director}
                    </Typography>
                    <Typography>
                    <div className={classes.main}> Production year: </div>   {movies?.Year}
                    </Typography>
                    <Typography>
                    <div className={classes.main}>Country: </div>{movies?.Country}
                    </Typography>
                    <Typography>
                    <div className={classes.main}>Realeased Date:  </div>{movies?.Released}
                    </Typography>
                    <Typography>
                    <div className={classes.main}>Language: </div> {movies?.Language}
                    </Typography>
                    <Typography className={classes.dsc}>
                        <div className={classes.main}>Description: </div> <br/>
                        {movies?.Plot}
                    </Typography>
                
               
                    
                </CardContent>
            </Card>
            ))
            
        </div>
        
    );
};

export default Movie;