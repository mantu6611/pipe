
const { requestHandler } = require("./index");

function mockResponse() {
  return {
    statusCode: null,
    headers: null,
    body: "",
    writeHead(status, headers) {
      this.statusCode = status;
      this.headers = headers;
    },
    end(text) {
      this.body = text;
    }
  };
}

function testServer() {
  const req = {};
  const res = mockResponse();

  requestHandler(req, res);

  if (res.statusCode === 200 && res.body === "Hello from Node.js server!") {
    console.log("✅ Test passed");
  } else {
    console.log("❌ Test failed");
  }
}

testServer();
