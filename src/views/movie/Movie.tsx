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
          maxWidth: 800,
          marginTop: 50,
          marginBottom: 50,
          backgroundColor: "#424242",
          color: 'white'
  
    },
    media: {
        
    },
    input: {
       width: "50%",
       position: "relative",
       marginRight: "auto",
       marginLeft: "auto",
       marginBottom: 50
  
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

    return (

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
                            Title: {movies?.Title}
                    </Typography>
                    <Typography>
                            Writer: {movies?.Writer}
                    </Typography>
                    <Typography>
                            Production year: {movies?.Year}
                    </Typography>
                </CardContent>
            </Card>
            ))
            }
        </div>
        
    );
};

export default Movie;