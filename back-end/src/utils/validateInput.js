// Configurable super mega validation function!

// Compares data type and length of a given value to a given "acceptable" type and length criteria
// returns false if type of value doesn't match the acceptable type or acceptable length
function validateField(value, type, criteria) {
    switch (type) {
        case "string":
            return typeof value === "string" && value.length <= criteria.max;
        case "boolean":
            return typeof value === "boolean";
        case "number":
            return (
                typeof value === "number" &&
                value >= criteria.min &&
                value <= criteria.max
            );
        default:
            return false;
    }
}

// Compares a given value to a given array of valid values
// returns false if given value is not in array
function validateEnum(value, validValues) {
    return validValues.includes(value);
}

// validationRules can include: type <data type>, maxLength <number>, enum: validValues <array>, min <number>, max <number>, custom <function>
// returns status 400 and "Invalid <field>" if any of the validationRules are not met
function validateInput(req, res, next) {
    const validationRules = {
        first_name: { type: "string", max: 50 },
        last_name: { type: "string", max: 50 },
        username: { type: "string", max: 50 },
        email: { type: "string", max: 50 }, // This might want a custom function to check format, to make sure it's actually an email address
        password: { type: "string", max: 50 },
        password_hash: { type: "string", max: 60 },
        age: { type: "number", min: 0, max: 200 }, // 200 seems like a safe max age I think :)
        occupation: { type: "string", max: 50 },
    };

    for (const field in validationRules) {
        const value = req.body.data[field];
        const {
            type,
            maxLength,
            enum: validValues,
            min,
            max,
            custom,
        } = validationRules[field];

        if (value !== null && value !== undefined) {
            if (
                !validateField(value, type, { maxLength, min, max }) ||
                (validValues && !validateEnum(value, validValues)) ||
                (custom && !custom(value))
            ) {
                return res
                    .status(400)
                    .json({
                        error: `Invalid ${field}, ${field} must be a ${validationRules[field].type} with a maximum length of ${validationRules[field].max}. Recieved: ${value}`,
                    });
            }
        }
    }

    next();
}

module.exports = validateInput;

// Some usage examples from another project:
/*
        admin: { type: "boolean" },
        gender: { type: "string", enum: ["Male", "Female"] },
        sleep_duration: { type: "number", min: 0, max: 24 },
        quality_of_sleep: { type: "number", min: 1, max: 10 },
        physical_activity_level: { type: "number", min: 0, max: 1440 },
        stress_level: { type: "number", min: 1, max: 10 },
        bmi_category: {
            type: "string",
            enum: ["Underweight", "Normal", "Overweight"],
        },
        blood_pressure: { type: "string" },
        heart_rate: { type: "number", min: 20, max: 600 },
        daily_steps: { type: "number", min: 0, max: 100000 },
        sleep_disorder: {
            type: "string",
            enum: ["None", "Insomnia", "Sleep Apnea"],
        }
        */
