const getDoctor = (doctor) => {
  let doctorInfo = {
    name: "",
  };
  if (doctor == "aponteRicardo") {
    doctorInfo.name = "Dr. Ricardo Aponte";
  } else if (doctor == "anzaloneSalvatore") {
    doctorInfo.name = "Dr. Salvatore Anzalone";
  } else if (doctor == "aviles-lopezLuis") {
    doctorInfo.name = "Dr. Luis Aviles-Lopez";
  } else if (doctor == "belanusEmily") {
    doctorInfo.name = "Dr. Emily Belanus";
  } else if (doctor == "brownReisha") {
    doctorInfo.name = "Dr. Reisha Brown";
  } else if (doctor == "christianMarilyne") {
    doctorInfo.name = "Dr. Marilyne Christian";
  } else if (doctor == "deVeraAdele") {
    doctorInfo.name = "Dr. Adele De Vera";
  } else if (doctor == "delumpaBernadette") {
    doctorInfo.name = "Dr. Bernadette Delumpa";
  } else if (doctor == "desaiHemal") {
    doctorInfo.name = "Dr. Hemal Desai";
  } else if (doctor == "ellsworthKathleen") {
    doctorInfo.name = "Dr. Kathleen Ellsworth";
  } else if (doctor == "fernandez-garciaAlicia") {
    doctorInfo.name = "Dr. Alicia Fernandez-Garcia";
  } else if (doctor == "fidanliMarie") {
    doctorInfo.name = "Dr. Marie Fidanli";
  } else if (doctor == "gonzalezMarlene") {
    doctorInfo.name = "Dr. Marlene Gonzalez";
  } else if (doctor == "halbertDouglas") {
    doctorInfo.name = "Dr. Douglas Halbert";
  } else if (doctor == "iannoneAmy") {
    doctorInfo.name = "Dr. Amy Iannone";
  } else if (doctor == "keckDouglas") {
    doctorInfo.name = "Dr. Douglas Keck";
  } else if (doctor == "lariosFiladelfo") {
    doctorInfo.name = "Dr. Filadelfo Larios";
  } else if (doctor == "mcquirtGuiliana") {
    doctorInfo.name = "Dr. Guiliana McQuirt";
  } else if (doctor == "mesadorJean") {
    doctorInfo.name = "Dr. Jean Mesador";
  } else if (doctor == "moramePhara") {
    doctorInfo.name = "Dr. Phara Morame";
  } else if (doctor == "mendez-cordedroGisel") {
    doctorInfo.name = "Dr. Gisel Mendez-Cordedro";
  } else if (doctor == "orrElizabeth") {
    doctorInfo.name = "Dr. Elizabeth Orr";
  } else if (doctor == "pierre-filsJohanne") {
    doctorInfo.name = "Dr. Johanne Pierre-Fils";
  } else if (doctor == "phippsOlivia") {
    doctorInfo.name = "Dr. Olivia Phipps";
  } else if (doctor == "puelliJose") {
    doctorInfo.name = "Dr. Jose Puelli";
  } else if (doctor == "patalinghugLadyJoedeline") {
    doctorInfo.name = "Dr. Lady Joedeline Patalinghug";
  } else if (doctor == "patalinghugUlysses") {
    doctorInfo.name = "Dr. Ulysses Patalinghug";
  } else if (doctor == "queroJose") {
    doctorInfo.name = "Dr. Jose Quero";
  } else if (doctor == "ramirezReinier") {
    doctorInfo.name = "Dr. Reinier Ramirez";
  } else if (doctor == "riveraYahaira") {
    doctorInfo.name = "Dr. Yahaira Rivera";
  } else if (doctor == "rosadoJavier") {
    doctorInfo.name = "Dr. Javier Rosado";
  } else if (doctor == "sherwinJennifer") {
    doctorInfo.name = "Dr. Jennifer Sherwin";
  } else if (doctor == "saracAlexandra") {
    doctorInfo.name = "Dr. Alexandra Sarac";
  } else if (doctor == "tammKeenan") {
    doctorInfo.name = "Dr. Keenan Tamm";
  } else if (doctor == "torres-aponteLisandra") {
    doctorInfo.name = "Dr. Lisandra Torres Aponte";
  } else if (doctor == "whittCourtney") {
    doctorInfo.name = "Dr. Courtney Whitt";
  } else if (doctor == "whiteMaria") {
    doctorInfo.name = "Dr. Maria White";
  } else if (doctor == "zieglerAlexander") {
    doctorInfo.name = "Dr. Alexander Ziegler";
  }
  //
  return doctorInfo;
};

module.exports = {
  getDoctor,
};
