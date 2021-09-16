const Validator = require("jsonschema").Validator;
const v = new Validator();

const file = require("../syntaxes/rst.tmLanguage.json");
const schema = require("./tmLanguage.schema.json");
const result = v.validate(file, schema);
if (result.valid) {
    console.log("Successfully validated schema");
} else {
    if (process.env["GITHUB"]) {
        result.errors.forEach((error) => {
            console.log(`::error::${error.property}: ${error.message}`);
            console.log(`::group::Failing schema`);
            console.log(JSON.stringify(error.schema, undefined, 4));
            console.log(`::endgroup::`);
            console.error(`\x1b[31mSCHEMA ERRORS:\x1b[0m`);
        });
    } else {
        console.error(`\x1b[31mSCHEMA ERRORS:\x1b[0m`);
        result.errors.forEach((error) => {
            console.error(
                `\t- ${error.property}: \x1b[31m${error.message}\x1b[0m`
            );
        });
    }
    exit(1);
}
