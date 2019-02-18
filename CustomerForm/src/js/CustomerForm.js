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
            
        }
        )
    ]
    )
};