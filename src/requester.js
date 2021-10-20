export const requester = async (method) => {
  let methodCode;
  switch (method) {
    case "getContact":
      methodCode = "Y1cCqvYhPI47";
      break;
    case "getPrograms":
      methodCode = "eEucAfCKIAQ_";
      break;
    case "getAboutList":
      methodCode = "32gKxSmYdO2f";
      break;
    case "getResultText":
      methodCode = "yfMjPVpilisQ";
      break;
    case "getSessionsCards":
      methodCode = "BVV9Sw8PbqiN";
      break;
    default:
      break;
  }
  const result = await fetch(
    `${process.env.VUE_APP_API_URL}${methodCode}/data?m=${method}`,
    { headers: { Authorization: process.env.VUE_APP_API_AUTH } }
  ).then((res) => res.json());
  console.log("result :>> ", result);
  return result;
};
