const getClinicAddress = (clinic) => {
  let clinicInfo = {
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    phone: "",
  };
  if (clinic == "familyCareNorth") {
    clinicInfo.addressLine1 = "1265 Creekside Pkwy.";
    clinicInfo.addressLine2 = "#208";
    clinicInfo.addressLine3 = "Naples, FL 34108";
    clinicInfo.phone = "239-591-1755";
    //
  } else if (clinic == "childrensCareNorth") {
    clinicInfo.addressLine1 = "1265 Creekside Pkwy.";
    clinicInfo.addressLine2 = "#208";
    clinicInfo.addressLine3 = "Naples, FL 34108";
    clinicInfo.phone = "239-591-1755";
    //
  } else if (clinic == "totalWomensCare") {
    clinicInfo.addressLine1 = "1890 SW Health Pkwy.";
    clinicInfo.addressLine2 = "#203";
    clinicInfo.addressLine3 = "Naples, FL 34109";
    clinicInfo.phone = "239-658-3778";
    //
  } else if (clinic == "nicholsPediatricAtGreaterNaplesYMCA") {
    clinicInfo.addressLine1 = "5450 YMCA Rd. ";
    clinicInfo.addressLine2 = "#102";
    clinicInfo.addressLine3 = "Naples, FL 34109";
    clinicInfo.phone = " 239-658-3776";
    //
  } else if (clinic == "childrensCareEast") {
    clinicInfo.addressLine1 = "6350 Davis Blvd.";
    clinicInfo.addressLine2 = "#1001";
    clinicInfo.addressLine3 = "Naples, FL 34104";
    clinicInfo.phone = "239-775-2220";
    //
  } else if (clinic == "dentalCareEast") {
    clinicInfo.addressLine1 = "1749 Heritage Trl.";
    clinicInfo.addressLine2 = "#801";
    clinicInfo.addressLine3 = "Naples, FL 34104";
    clinicInfo.phone = "239-774-1850";
    //
  } else if (clinic == "friendshipHealth") {
    clinicInfo.addressLine1 = "2355 Stanford Ct.";
    clinicInfo.addressLine2 = "Naples, FL 34112";
    clinicInfo.addressLine3 = "";
    clinicInfo.phone = "239-658-3779";
    //
  } else if (clinic == "marionEFether") {
    clinicInfo.addressLine1 = "1454 Madison Ave. W.";
    clinicInfo.addressLine2 = "Immokalee, FL 34142";
    clinicInfo.addressLine3 = "";
    clinicInfo.phone = "239-658-3064";
    //
  } else if (clinic == "floridaStateUniversityCollegeOfMedicine") {
    clinicInfo.addressLine1 = "1441 Heritage Blvd.";
    clinicInfo.addressLine2 = "Immokalee, FL 34142";
    clinicInfo.addressLine3 = "";
    clinicInfo.phone = "239-658-3011";
    //
  } else if (clinic == "familyCareAtItech") {
    clinicInfo.addressLine1 = "508 North 9th St.";
    clinicInfo.addressLine2 = "#142";
    clinicInfo.addressLine3 = "Immokalee, FL 34142";
    clinicInfo.phone = "2239-657-6363";
    //
  } else if (clinic == "nicholsCommunityHealthCenter") {
    clinicInfo.addressLine1 = "12655 Collier Blvd.";
    clinicInfo.addressLine2 = "Naples, FL 34116";
    clinicInfo.addressLine3 = "";
    clinicInfo.phone = "239-675-7086";
    //
  }
  return clinicInfo;
};

module.exports = {
  getClinicAddress,
};
