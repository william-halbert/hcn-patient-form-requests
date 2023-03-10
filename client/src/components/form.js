import React, { useState } from "react";
import "../css/landing.css";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/login.css";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";

function Form(formChoice) {
  const [clientName, setClientName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function updateForm(e) {
    if (e.target.id === "clientName") {
      setClientName(e.target.value);
    }
    if (e.target.id === "dateOfBirth") {
      setDateOfBirth(e.target.value);
    }
  }

  if (formChoice.formChoice === "formulaAndFood") {
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("submitted");
      if (clientName == "" || dateOfBirth == "") {
        setSubmitMsg("unfilled");
        return;
      } else setSubmitMsg("");

      async function modifyPdf() {
        const url =
          "http://127.0.0.1:4000/uploads/medical-documentation-formula-food.pdf";
        const existingPdfBytes = await fetch(url).then((res) => {
          res.arrayBuffer();
        });

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();
        firstPage.drawText(clientName, {
          x: 5,
          y: 10,
          size: 14,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        });
        firstPage.drawText(dateOfBirth, {
          x: 20,
          y: 10,
          size: 14,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        });
        const pdfBytes = await pdfDoc.save();
      }
      modifyPdf();
      /*
      navigate("../submitted", { replace: true });
      
      async function formSubmitJSON() {
        const response = await fetch("http://127.0.0.1:4000/food-and-formula", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientName,
            dateOfBirth,
          }),
        });
        const user = await response.json();
        return user;
      }
      formSubmitJSON().then((user) => console.log(user));
      */
    };

    return (
      <div className="formField">
        <form action="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => updateForm(e)}
            placeholder="Client's name"
            className="defaultBtn"
          />
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => updateForm(e)}
            placeholder="Date of Birth"
            className="defaultBtn"
          />
          <input type="submit" className="defaultSubmitBtn" value="Submit" />
        </form>
        {submitMsg == "unfilled" && (
          <p className="failedSubmit">
            Not every form input was filled. Try again please.
          </p>
        )}
        <div className="loginToSignup">
          <p className="dontLogin">By clicking "Submit", you agree to our</p>
          <Link to="../terms-of-use" className="loginLinkToSignup">
            terms
          </Link>
        </div>
        <p className="confirmAge">and confirm you're 18 years or older.</p>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Form;
