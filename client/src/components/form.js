import React, { useEffect, useState, useRef } from "react";
import "../css/landing.css";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/login.css";

function Form(props) {
  const [clientName, setClientName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const [clinic, setClinic] = useState("");
  const [dateNeededBy, setDateNeededBy] = useState("");
  const [doctor, setDoctor] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { formChoice } = props;

  function handleLocationChoice(e) {
    setClinic(e.target.value);
  }
  function handleDoctorChoice(e) {
    setDoctor(e.target.value);
  }

  function updateForm(e) {
    if (e.target.id === "clientName") {
      setClientName(e.target.value);
    }
    if (e.target.id === "dateOfBirth") {
      setDateOfBirth(e.target.value);
    }
    if (e.target.id === "dateNeededBy") {
      setDateNeededBy(e.target.value);
    }
  }

  if (props.formChoice === "formulaAndFood") {
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (clientName == "" || dateOfBirth == "") {
        setSubmitMsg("unfilled");
        return;
      } else setSubmitMsg("");

      async function sendForm() {
        const response = await fetch(
          "http://127.0.0.1:4000/pdf/formula-and-food",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              formChoice,
              clientName,
              dateOfBirth,
              clinic,
              doctor,
              dateNeededBy,
            }),
          }
        );
        const user = await response.json();
      }
      sendForm().then(() => {
        navigate(
          "../submitted",
          { state: { formChoice, clientName, dateOfBirth } },
          { replace: true }
        );
      });
    };

    return (
      <div className="formField">
        <form action="POST" onSubmit={handleSubmit}>
          <select
            defaultValue="default"
            onChange={(e) => handleLocationChoice(e)}
            className="defaultSelect noTopMargin"
          >
            <option value="default">Choose your usual office location</option>
            <option value="familyCareNorth">Family Care North</option>
            <option value="childrensCareNorth">Children’s Care North</option>
            <option value="totalWomensCare">Total Women’s Care</option>
            <option value="nicholsPediatricAtGreaterNaplesYMCA">
              Nichols Pediatric at Greater Naples YMCA
            </option>
            <option value="childrensCareEast">Children’s Care East</option>
            <option value="dentalCareEast">Dental Care East</option>
            <option value="friendshipHealth">Friendship Health</option>
            <option value="marionEFether">Marion E. Fether</option>
            <option value="floridaStateUniversityCollegeOfMedicine">
              Florida State University, College of Medicine
            </option>
            <option value="familyCareAtItech">Family Care at Itech</option>
            <option value="nicholsCommunityHealthCenter">
              Nichols Community Health Center
            </option>
          </select>
          <select
            defaultValue="default"
            onChange={(e) => handleDoctorChoice(e)}
            className="defaultSelect noTopMargin"
          >
            <option value="default">Choose your usual doctor</option>

            <option value="aponteRicardo">Aponte, Ricardo LCSW</option>
            <option value="anzaloneSalvatore">Anzalone, Salvatore M.D.</option>
            <option value="aviles-lopezLuis">Aviles-Lopez, Luis M.D.</option>
            <option value="belanusEmily">Belanus, Emily PA</option>
            <option value="brownReisha">Brown, Reisha M.D.</option>
            <option value="christianMarilyne">Christian, Marilyne M.D.</option>
            <option value="deVeraAdele">De Vera, Adele M.D.</option>
            <option value="delumpaBernadette">Delumpa, Bernadette M.D.</option>
            <option value="desaiHemal">Desai, Hemal M.D.</option>
            <option value="ellsworthKathleen">Ellsworth, Kathleen M.D.</option>
            <option value="fernandez-garciaAlicia">
              Fernandez-Garcia, Alicia M.D.
            </option>
            <option value="fidanliMarie">Fidanli, Marie M.D.</option>
            <option value="gonzalezMarlene">Gonzalez, Marlene M.D.</option>
            <option value="halbertDouglas">Halbert, Douglas M.D.</option>
            <option value="iannoneAmy">Iannone, Amy M.D.</option>
            <option value="keckDouglas">Keck, Douglas M.D.</option>
            <option value="lariosFiladelfo">Larios, Filadelfo M.D.</option>
            <option value="mcquirtGuiliana">McQuirt, Guiliana M.D.</option>
            <option value="mesadorJean">Mesador, Jean M.D.</option>
            <option value="moramePhara">Morame, Phara LCSW</option>
            <option value="mendez-cordedroGisel">
              Mendez-Cordedro, Gisel M.D.
            </option>
            <option value="orrElizabeth">Orr, Elizabeth M.D.</option>
            <option value="pierre-filsJohanne">
              Pierre-Fils, Johanne M.D.
            </option>
            <option value="phippsOlivia">Phipps, Olivia M.D.</option>
            <option value="puelliJose">Puelli, Jose M.D.</option>
            <option value="patalinghugLadyJoedeline">
              Patalinghug, Lady Joedeline M.D.
            </option>
            <option value="patalinghugUlysses">
              Patalinghug, Ulysses M.D.
            </option>
            <option value="queroJose">Quero, Jose M.D.</option>
            <option value="ramirezReinier">Ramirez, Reinier M.D.</option>
            <option value="riveraYahaira">Rivera, Yahaira M.D.</option>
            <option value="rosadoJavier">Rosado, Javier M.D.</option>
            <option value="sherwinJennifer">Sherwin, Jennifer M.D.</option>
            <option value="saracAlexandra">Sarac, Alexandra M.D.</option>
            <option value="tammKeenan">Tamm, Keenan M.D.</option>
            <option value="torres-aponteLisandra">
              Torres Aponte, Lisandra M.D.
            </option>
            <option value="whittCourtney">Whitt, Courtney M.D.</option>
            <option value="whiteMaria">White, Maria M.D.</option>
            <option value="zieglerAlexander">Ziegler, Alexander M.D.</option>
          </select>
          <input
            type="text"
            id="dateNeededBy"
            value={dateNeededBy}
            onChange={(e) => updateForm(e)}
            placeholder="Date Form Needed By"
            className="defaultBtn"
          />
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
          <p className="dontLogin">
            By clicking "Submit", you agree to our terms
          </p>
        </div>
        <p className="confirmAge">and confirm you're 18 years or older.</p>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Form;
/*<Link to="../terms-of-use" className="loginLinkToSignup">
            terms
          </Link>*/
