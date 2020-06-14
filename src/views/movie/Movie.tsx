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



const Movie = () => {
const {id} = useParams();
const [movies, setMovies] = React.useState<IMovieByIdResponse>();

React.useEffect(() => {
    movieService.searchById(id).then(resp => {
        setMovies(resp)
    });
  }, [id]);

    return (
        <div>
            elo
        </div>
        /*
        <div>

            <NavPanel />
            
            <Card className={classes.root}>
      <CardMedia 
                  image={movies?.}
                  title={movies.title}
                  component="img"
          />
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="more" onClick={() => history.push(`/movie/${movie.id}`)}>
        <ExpandMoreIcon />
        </IconButton>
      </CardActions>
       <CardContent>
         <Typography>
                  {movies.title}
         </Typography>
         <Typography>
                  {movies.type}
         </Typography>
         <Typography>
                  {movies.year}
         </Typography>
       </CardContent>
       </Card>
            ))
            }
        </div>
        */
    );
};

export default Movie;