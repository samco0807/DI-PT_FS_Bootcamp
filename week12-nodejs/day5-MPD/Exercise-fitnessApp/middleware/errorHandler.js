// root/src/middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error("------------ ERROR STACK ------------");
  console.error("Timestamp:", new Date().toISOString()); //when the error occured
  console.error("Route", req.method, req.originalUrl); //which request triggered the error
  console.error("Error name", err.name); //type of error
  console.error("Error message", err.message); //error description
  console.error("Stack trace", err.stack); //trace to see where the erreur is located in the code
  console.error("--------------------------");

  // Which kind of error for the client
  const statusCode = err.status || err.statusCode || 500;

  // Message for the client in production
  let clientMessage = "Shit! Something went wrong on the server";

  if (statusCode < 500 && err.message) {
    clientMessage = err.message;
  }

  res
    .status(statusCode)
    .json({ status: "error", statusCode: statusCode, message: clientMessage });
};

export default errorHandler;
