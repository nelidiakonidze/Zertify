import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tachyons from 'tachyons';
import './test.css';

class ZTemplate1 extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleCheckClick = e => {
    this.setState({checked: !this.state.checked});
  };

  checkboxOnClick = e => {
    this.setState({clicked: this.state.clicked});
  };

  render() {
    return (
      <div className='CoverSlide '>
        <div className='dim'>
          <Card className='responsiveCards'>
            <CardActionArea>
              <CardMedia
                className='mediaCards'
                image='https://i.imgur.com/28Wf9AH.png'
                title='Template 1'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Template 1
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Choose
                <input type='radio' name='radioSelect' />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className='dim'>
          <Card className='responsiveCards'>
            <CardActionArea>
              <CardMedia
                className='mediaCards'
                image='https://i.imgur.com/kTfJhKh.png'
                title='Template 2'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Template 2
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Choose
                <input type='radio' name='radioSelect' />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className='dim'>
          <Card className='responsiveCards'>
            <CardActionArea>
              <CardMedia
                className='mediaCards'
                image='https://i.imgur.com/T34nl37.png'
                title='Template 3'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Template 3
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Choose
                <input type='radio' name='radioSelect' />
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default ZTemplate1;
