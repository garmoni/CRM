import React from 'react'
import TextField from '@material-ui/core/TextField'
const styles = theme => ({
  button: {
    maxWidth: '200px',
    margin: theme.spacing.unit
  }
})
export default function  SubmitButtonSpinner(){
      return (
      <div>
            <AdornedButton
              className={classes.button}
              fullWidth
              loading={this.state.loading}
              variant='flat'
              color='secondary'
              id='submit'
              onClick={this.loginOrCreateAccount}
            >           
            {this.props.}    
            </AdornedButton>
            </div>
      );
}