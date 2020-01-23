export const sendSuccessResponse = (req, res) => (data) => res.status(200).send(data);

export const sendGeneralErrorResponse = (req, res) => (error) => res.status(500).send(error);

export const sendPromiseResponse = (req, res, promise) =>
    promise
        .then(sendSuccessResponse(req, res))
        .catch(sendGeneralErrorResponse(req, res));
