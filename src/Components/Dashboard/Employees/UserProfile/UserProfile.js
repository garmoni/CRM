import React, {Component} from 'react';
import './UserProfile.css';
import Button from '@material-ui/core/Button';
import {createControl, validate, validateForm} from "../Form/formFramework";
import Input from "../../../UI/Input"



export default class UserProfile extends Component{

    createOptionControl() {
        return createControl({
            value: this.arr,
            placeholder: this.props.inputName
        }, {required: true})
    }

    arr = this.props.userProfileData;

    state = {
        arr: [],
        isFormValid: false,
        formControls: {
            last_name: this.createOptionControl(),
            first_name: this.createOptionControl(),
            patronym_name: this.createOptionControl(),
            location: this.createOptionControl(),
            phone_in: this.createOptionControl(),
            phone_out: this.createOptionControl(),
            mob: this.createOptionControl(),
            mob2: this.createOptionControl(),
            birth_date: this.createOptionControl(),
            email: this.createOptionControl(),
            comment: this.createOptionControl(),
            position: this.createOptionControl()
        }
    };


    // changeHandler (value, controlName) {
    //     const formControls = {...this.state.formControls};
    //     const control = {...formControls[controlName]};
    //
    //     //control.touched = true;
    //     control.value = value;
    //     control.valid = validate(control.value, control.validation);
    //     formControls[controlName] = control;
    //     this.setState({
    //         formControls,
    //         isFormValid: validateForm(formControls)
    //     })
    // }
    changeHandler = (value, controlName, index) =>{
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.touched = true;
        const partOne = control.value.slice(0, index)
        const partTwo = control.value.slice(index + 1)
        control.value = [
            ...partOne,
            value,
            ...partTwo
        ];
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }
    inputControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            console.log(control.value);
            return (
                <Input
                    value={control.value[index]}
                    placeholder={control.placeholder[index]}
                    type="text"
                    key={controlName + index}
                    //touched={control.touched}
                    onChange={event => this.changeHandler(event.target.value, controlName, index)}
                />
            )
        })
    }
    addDescripHandler = event => {
        event.preventDefault();
    };
    submitHandler = event => {
        event.preventDefault()
    };

    render() {
        return  (

            <div className="UserProfile">
                <form  onSubmit={this.submitHandler}>
                    {this.inputControls()}
                    <Button
                        onClick={this.state.addDescripHandler}
                        disabled={!this.state.isFormValid}
                    >
                        Сохранить пользователя
                    </Button>
                </form>
            </div>
        );
    }
}

