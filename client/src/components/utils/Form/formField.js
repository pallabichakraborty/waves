import React from 'react';

const formField = ({ id, formdata, change }) => {

    const showError = () => {
        let errorMessage = null;
        if (formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )

            return errorMessage
        }

    }
    const renderTemplate = () => {
        let formTemplate = null;

        switch (formdata.element) {
            case ('input'):
                formTemplate = (
                    <div className="formBlock">
                        <input
                            id={id}
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, formdata })}
                        />
                        {showError()}
                    </div>
                )
                break;
            default:
                formTemplate = '';
        }

        return formTemplate;
    }

    return (

        <div>
            {renderTemplate()}
        </div>
    );
};

export default formField;