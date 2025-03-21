const { QontakSDK } = require("qontak-client");

const api = new QontakSDK({
  clientId: " ",
  clientSecret: " ",
});

async function testSDK() {
  try {
    const response = await api.template.createWhatsappTemplate()
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.response.data);
  }
}

testSDK();
