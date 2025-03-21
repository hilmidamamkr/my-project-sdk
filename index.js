const { QontakSDK } = require("qontak-client");

const api = new QontakSDK({
  clientId: "dG7bIyfZPNib2iGR",
  clientSecret: "qfhCCP5vhsF2ap8ho259ULJlpOfah8BP",
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
