const linkedIn = require("./index");

const queryOptions = {
  keyword: "Developer",
  location: "Finland",
  dateSincePosted: "past week",
  jobType: "full time",
  remoteFilter: "remote",
  salary: "",
  experienceLevel: "entry level",
  limit: "25",
  sortBy: "recent",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});
