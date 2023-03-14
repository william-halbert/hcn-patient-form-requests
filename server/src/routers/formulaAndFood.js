url = "http://127.0.0.1:4000/pdf/formula-and-food";
const express = require("express");

const FormulaAndFood = require("../models/formulaAndFood");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");
const { sendFormulaAndFoodEmail } = require("../emails/account");
const { getClinicAddress } = require("../utils/clinicAddress");
const { getDoctor } = require("../utils/doctorEmail");
//sendWelcomeEmail(user.email, user.name);

const router = new express.Router();

router.post("/pdf/formula-and-food", async (req, res) => {
  const form = new FormulaAndFood(req.body);
  const doctorInfo = getDoctor(req.body.doctor);

  async function createPDF() {
    const document = await PDFDocument.load(
      readFileSync(
        require("path").resolve(
          __dirname,
          "../pdfs/medical-documentation-formula-food.pdf"
        )
      )
    );

    const courierBoldFont = await document.embedFont(StandardFonts.Courier);
    const firstPage = document.getPage(0);
    firstPage.moveTo(120, 603);
    firstPage.drawText(req.body.clientName, {
      font: courierBoldFont,
      size: 12,
    });

    firstPage.moveTo(100, 58);
    firstPage.drawText(new Date().toLocaleDateString(), {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });

    firstPage.moveTo(100, 110);
    firstPage.drawText(doctorInfo.name, {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });

    firstPage.moveTo(450, 603);
    firstPage.drawText(req.body.dateOfBirth, {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });

    let clinicInfo = getClinicAddress(req.body.clinic);

    firstPage.moveTo(370, 130);
    firstPage.drawText(clinicInfo.addressLine1, {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });
    firstPage.moveTo(370, 120);
    firstPage.drawText(clinicInfo.addressLine2, {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });
    firstPage.moveTo(370, 110);
    firstPage.drawText(clinicInfo.addressLine3, {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });
    firstPage.moveTo(370, 87);
    firstPage.drawText(clinicInfo.phone, {
      font: courierBoldFont,
      size: 12,
      lineHeight: 10,
    });

    writeFileSync(
      `${req.body.clientName}-formula-and-food.pdf`,
      await document.save()
    );

    const originalDocument = await PDFDocument.load(
      readFileSync(
        require("path").resolve(
          __dirname,
          "../pdfs/medical-documentation-formula-food.pdf"
        )
      )
    );
    const originalPdf = await originalDocument.save().toString("base64");
    const originalPdfName = `original-formula-and-food.pdf`;
    const editedPdfName = `${req.body.clientName}-formula-and-food.pdf`;
    const editedPdf = await document.save().toString("base64");

    const emailInfo = {
      doctorInfo,
      clientName: req.body.clientName,
      dateOfBirth: req.body.dateOfBirth,
      editedPdfName,
      editedPdf,
      originalPdf,
      originalPdfName,
      formChoice: req.body.formChoice,
      clinic: req.body.clinic,
      doctor: req.body.doctor,
      dateNeededBy: req.body.dateNeededBy,
    };
    sendFormulaAndFoodEmail(emailInfo);
  }

  createPDF().catch((err) => console.log(err));

  res.status(201).send({ form });
  /*
  try {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    form.pdf = buffer;
    await form.save();
    res.status(201).send({ form });
  } catch (e) {
    res.status(400).send(e);
  }
  */
});

module.exports = router;
