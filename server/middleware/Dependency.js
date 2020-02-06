export default (services) => (req, res, next) => {
    req.service = {};
    services.map(service => {
        req['service'][service.name] = service.service(req.user);
    });
    next();
}
