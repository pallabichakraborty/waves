export const validate = (element, formdata = '') => {
    let error = [true, ''];

    if (element.validation.email) {
        // eslint-disable-next-line
        const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value));
        const message = `${!valid ? 'Invalid Email' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.valid.confirm) {
        const valid = element.value.trim === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match' : ''}`;
        error = !valid ? [valid, message] : error;
    }


    // Required Check should be the last check always
    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This is a required field' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    return error;
}

export const update = (elementName, element, formdata, formName) => {
    const newFormdata = {
        ...formdata
    }

    const newElement = {
        ...newFormdata[elementName]
    }

    newElement.value = element.event.target.value;

    if (element.blur) {
        let validData = validate(newElement, formdata);

        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormdata[elementName] = newElement;

    return newFormdata;
}


export const generateData = (formdata, formName) => {
    let dataToSubmit = {};

    for (let key in formdata) {
        if (key !== 'confirmpassword') { 
            dataToSubmit[key] = formdata[key].value; 
        }

    }

    return dataToSubmit;
}

export const isFormValid = (formdata, formName) => {

    let formIsValid = true;

    for (let key in formdata) {
        formIsValid = formdata[key].valid && formIsValid;
    }

    return formIsValid;
}