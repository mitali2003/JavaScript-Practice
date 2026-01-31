const employees = [
  "id__firstName_lastName__age__gender__country",
  "1__John_Doe__35__Male__US",
  "2__Jane_Doe__22__Female__US",
  "3__Sam_Smith__30__Male__IN",
  "4__Raj_Sharma__26__Male__IN",
  "5__Daya_Gupta__38__Female__IN",
  "6__Will_Young__31__Male__US",
  "7__Elina_Foley__28__Female__US",
];

// 1. Generate a new array of objects with below format for each item.
// Format
// {
//  id,
//  firstName,
//  lastName,
//  age,
//  gender,
//  country
// }

// 2. Create a function to filter employees from the US who are older than 25 and sort them in assending order by age, from oldest to youngest.

// BONUS question
// - Find all employees from the IN and then extract their full names (first and last).

const findKeys = () => {
  return { ...employees[0].split("_").filter((el) => el) };
};
console.log(findKeys());

const parsedEmployees = employees.slice(1).map((row) => {
  const [id, name, age, gender, country] = row.split("__");
  const [firstName, lastName] = name.split("_");

  return {
    id: Number(id),
    firstName,
    lastName,
    age: Number(age),
    gender,
    country,
  };
});

const filterEmployeeData = parsedEmployees
  .filter(({ age, country }) => age >= 25 && country === "US")
  .map(
    ({ id, firstName, lastName, age, gender, country }) =>
      `${id}_${firstName}_${lastName}_${age}_${gender}_${country}`,
  );
console.log(filterEmployeeData);

const joinName = parsedEmployees
  .filter(({ country }) => country === "IN")
  .map(({ firstName, lastName }) => `${firstName}_${lastName}`);
console.log(joinName);

("====================================ANOTHER WAY===================================");

const filterData = () => {
  const ageIndex = Object.values(findKeys()).indexOf("age");
  return employees
    .slice(1)
    .filter(
      (el) =>
        el.includes("US") && el.split("_").filter((el) => el)[ageIndex] >= 25,
    )
    ?.map((el) =>
      el
        .split("_")
        ?.sort((a, b) => a[ageIndex] - b[ageIndex])
        ?.join("_"),
    );
};
console.log(filterData());

const findEmployee = () => {
  return employees
    .slice(1)
    .filter((el) => el.includes("IN"))
    .map((el) => {
      const firstNameIndex = Object.values(findKeys()).indexOf("firstName");
      const lastNameIndex = Object.values(findKeys()).indexOf("lastName");
      const data = el.split("_").filter((el) => el);
      return {
        fullName: `${data[firstNameIndex]}_${data[lastNameIndex]}`,
      };
    });
};
console.log(findEmployee());
