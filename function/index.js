/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const axios = require("axios");

const extractParams = (parameterInfo) => {
  let params = {};
  parameterInfo.forEach((element) => {
    params[element.displayName] = element.value;
  });
  return params;
};

const createACopy = (params) => {
  axios
    .post(
      "https://script.google.com/macros/s/AKfycbwt0IDGpUX2dFlu_zW8-uDWhqk7SwML7GtNX1-5xeuErRyBLrfvjdakh_ZGWLS5RKj1/exec",
      params
    )
    .then((res) => {
      console.log(`DONE!`);
    })
    .catch((error) => {
      console.error("ERROR!!!");
    });
};

exports.defaultFulfillment = (req, res) => {
  const params = extractParams(req.body.pageInfo.formInfo.parameterInfo);
  createACopy(params);
};
