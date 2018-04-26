const converter = require('bai-btrs-active-parsers');


function handleGET(req, res) {
    // Do something with the GET request
    res.status(200).send(`POST file in body as plain text`);
}

function handlePOST(req, res) {

    switch (req.get('content-type')) {
        case 'text/plain':

            switch (req.get('accept')) {
                case 'application/json':
                    // convert input body to json and send
                    res.status(200).send(req.body);
                    break;

                case 'text/pdf':
                    res.status(403).send('pdf conversion not supported in this version');
                    break;

                default:
                    res.status(403).send('only supports ACCEPT: application/json');
                    break;
            }
            break;

        case 'application/json':

            switch (req.get('accept')) {
                case 'application/json':
                    // convert input body to json and send
                    res.status(200).send(req.body);
                    break;

                case 'text/pdf':
                    res.status(403).send('pdf conversion not supported in this version');
                    break;

                default:
                    res.status(403).send('only supports ACCEPT: application/json');
                    break;
            }
            break;

        default:
            res.status(500).send({ error: 'Something blew up!' });
            break;
    }
}

/**
 * Responds to 
 *      GET request with instructions for use
 *      PUT request by 
 *          checking the content type 
 *          and converting based on negotiated response type 
 *
 * @example
 * gcloud alpha functions call helloHttp
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.convert = (req, res) => {
    switch (req.method) {
        case 'GET':
            handleGET(req, res);
            break;
        case 'POST':
            handlePOST(req, res);
            break;
        default:
            res.status(500).send({ error: 'Something blew up!' });
            break;
    }
};