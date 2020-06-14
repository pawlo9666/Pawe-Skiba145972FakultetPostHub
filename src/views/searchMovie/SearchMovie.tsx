import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';

const useStyles = makeStyles({

  root: {
    minWidth: '250px',
        display: 'block',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: 350,
        marginBottom: 50,
        backgroundColor: "#424242",
        color: 'white'

  },

  input: {
     width: "50%",
     position: "relative",
     marginRight: "auto",
     marginLeft: "auto",
     marginBottom: 50

  }

});


const SearchMovie = () => {
  const history = useHistory();
  const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

  }, [movieToSearch]);


    //   {redirectTo('/favoruites', 'Search Movie', <FavoriteIcon />)}

  return (



    <div>
      <NavPanel/>

      <form className={classes.input} noValidate autoComplete="off">
      <TextField label="Enter movie name" onChange={event => setMovieToSearch(event.target.value)}/>
      </form>

  


    {!!movies?.movies.length &&
            movies?.movies.map(movie => (
             
      <Card className={classes.root}>
      <CardMedia 
                  image={movie.poster}
                  title={movie.title}
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
                  {movie.title}
         </Typography>
         <Typography>
                  {movie.type}
         </Typography>
         <Typography>
                  {movie.year}
         </Typography>
       </CardContent>
       </Card>
            ))
            }
    </div>
  );
};

export default SearchMovie;
