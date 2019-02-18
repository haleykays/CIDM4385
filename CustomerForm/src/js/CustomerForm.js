const CustomerForm = (props) => {
    return React.createElement('div',{className:'form-group'},[
        React.createElement('label',
                        {
                            for:"formGroupExampleInput"
                        },
                        "Email Address"),
        React.createElement('input',
                        {
                            className: "form-control",
                            type: "email",
                            id: "exampleInputemail",
                            placeholder: "Enter Email"
                        }),
        React.createElement('label',
                        {
                            for:"formGroupExampleInput"
                        },
                        "Zip Code"),
        React.createElement('input',
                        {   
                            className: "form-control",
                            type: "zip code",
                            id: "exampleInputzip",
                            placeholder: "Enter Zip"

                        }),
        React.createElement('button',
                        {
                            className:"btn btn-primary",
                            type: "submit", 
                            id: "blue button",
                            placeholder: "submit"
                        }),

    ]
    );
};