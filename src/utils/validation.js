const validateSignup = (req, res) => {
    const { name, age, fitnessLevel, email, password } = req.body;

    if (!name || !age || !fitnessLevel || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    if (age <= 0) {
        return res.status(400).json({
            success: false,
            message: "Age must be a valid number",
        });
    }

    const allowedLevels = ["beginner", "intermediate", "elite"];
    if (!allowedLevels.includes(fitnessLevel)) {
        return res.status(400).json({
            success: false,
            message: "Invalid fitness level",
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format",
        });
    }

    const isValidPassword = (password) => {
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

        return hasNumber && hasSpecialChar;
    };
    
    if (!isValidPassword(password)) {
        return res.status(400).json({
            success: false,
            message: "Password must contain at least one number and one special character",
        });
    }

};
export default validateSignup;
