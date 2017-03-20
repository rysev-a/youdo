import React from 'react';
import {Component} from 'react';
import FormTemplate from '../components/form-template';
import FormItem from '../components/form-item';


class EditView extends Component {
  render() {
    if (this.props.status.loaded) {
      return <EditViewForm {...this.props} />
    }

    return <div>Загружаются данные пользователя</div>;
  }
}


class EditViewForm extends FormTemplate {
  componentWillMount() {    
    this.props.init(this.props.defaultData);
  }

  render() {
    return (
      <div className="container"
           onKeyDown={this.onKeyDown.bind(this)}>
           <h2>Редактировать профиль</h2>
        <div className={this.formCss('card profile-edit-card')}>
          {this.formContent()}
        </div>
      </div>
    );
  }

  formContent () {
    let {defaultData} = this.props;
    return (
      <div className="card-content">
        <div className="row">
          <div className="col-md-6">
            <FormItem placeholder='Имя'
                      defaultValue={defaultData['first_name']}
                      autoFocus={true}
                      error={this.getError('first_name')}
                      onChange={this.update.bind(this, 'first_name')}
                      type='text'/>

            <FormItem placeholder='Фамилия'
                      error={this.getError('last_name')}
                      defaultValue={defaultData['last_name']}
                      onChange={this.update.bind(this, 'last_name')}
                      type='text'/>


            <FormItem placeholder='Электронная почта'
                      defaultValue={defaultData['email']}
                      error={this.getError('email')}
                      onChange={this.update.bind(this, 'email')}
                      type='email'/>
          </div>
        </div>
        <div className="form-buttons">
          <a className="login-form__submit button button-success"
             onClick={this.submit.bind(this)}>Сохранить</a>
        </div>
      </div>
    );
  }
}

export default EditView
