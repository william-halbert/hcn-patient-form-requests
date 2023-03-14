const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendFormulaAndFoodEmail = (emailInfo) => {
  sgMail.send({
    to: "willhalbert16@gmail.com",
    from: "willhalbert16@gmail.com",
    subject: `Formula and Food Form for ${
      emailInfo.clientName
    } on ${new Date()}`,
    text: `Hey ${emailInfo.doctorInfo.name},\n Attached is the patient-filled form as a pdf. Here are the patients details:\n
     Client name: ${emailInfo.clientName}\n Date of Birth: ${emailInfo.dateOfBirth}\n Thanks so much.`,
    attachments: [
      //add original pdf
      {
        content: emailInfo.editedPdf,
        filename: emailInfo.editedPdfName,
        type: "application/pdf",
        disposition: "attachment",
      },
      {
        content: emailInfo.originalPdf,
        filename: emailInfo.originalPdfName,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  });
};

module.exports = {
  sendFormulaAndFoodEmail,
};
