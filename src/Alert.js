import React, { Component, Fragment } from 'react';
import { useAlert, withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    
    if(error !== prevProps.error){
        if(error.message.email){
            alert.error(`Email: ${error.message.email.join()}`)
        }

        if(error.message.full_name){
            alert.error(`Full Name: ${error.message.full_name.join()}`)
        }

        if(error.message.password){
            alert.error(`Password: ${error.message.password.join()}`)
        }

        if(error.message.non_field_errors){
            alert.error(error.message.non_field_errors.join())
        }

        
    }

    if(message !== prevProps.message){
      if(message.type == "success"){
        alert.success(message.message)
      }
      if(message.type == "error"){
        alert.error(message.message)
      }
      if(message.type == "display"){
        alert.show(message.message)
      }
      if(message.type == "info"){
        alert.info(message.message)
      }

      
    }
    
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
  
});

export default connect(mapStateToProps)(withAlert()(Alerts));