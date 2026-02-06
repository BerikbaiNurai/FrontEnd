import {useState} from "react";

function RegistrationForm (){
    // Form field states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    // Error states
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");

    // Success state
    const [success, setSuccess] = useState(false);

    // Validation functions
    const validateName = (value) => {
        if (!value) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        return "";
    };

    const validateEmail = (value) => {
        if (!value) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
    };

    const validateAge = (value) => {
        if (!value) return "Age is required";
        if (Number(value) < 18) return "You must be at least 18 years old";
        return "";
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        const nameErr = validateName(name);
        const emailErr = validateEmail(email);
        const ageErr = validateAge(age);

        setNameError(nameErr);
        setEmailError(emailErr);
        setAgeError(ageErr);

        if (nameErr || emailErr || ageErr) {
            setSuccess(false);
            return;
        }

        setSuccess(true);

        // Clear form
        setName("");
        setEmail("");
        setAge("");
        setNameError("");
        setEmailError("");
        setAgeError("");
    };

    return (
        <div>
            <h2>Registration Form</h2>

            {/* Name */}
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    placeholder = "Name"
                    value = {name}
                    onChange = {(e) => {
                        const value = e.target.value;
                        setName(value);
                        setNameError(validateName(value));
                    }}
                />
                {nameError && <p style = {{color: "red"}}>{nameError}</p>}

                {/* Email */}
                <input
                    type = "email"
                    placeholder = "Email"
                    value = {email}
                    onChange = {(e) => {
                        const value = e.target.value;
                        setEmail(value);
                        setEmailError(validateEmail(value));
                    }}
                />
                {emailError && <p style = {{color: "red"}}>{emailError}</p>}

                {/* Age */}
                <input
                    type = "number"
                    placeholder = "Age"
                    value = {age}
                    onChange = {(e) => {
                        const value = e.target.value;
                        setAge(value);
                        setAgeError(validateAge(value));
                    }}
                />
                {ageError && <p style = {{color: "red"}}>{ageError}</p>}

                <button type = "submit">Submit</button>
            </form>

            {success && (
                <p style = {{color: "green"}}>Registration Successful!</p>
            )}
        </div>
    );
}

export default RegistrationForm;