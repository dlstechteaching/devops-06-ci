const getCurrentMonth = (date = new Date()) => {
  const currentMonth = date.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[currentMonth];
};

const isAdmin = () => {
  return false;
};

try {
  document.getElementById("month").innerText = getCurrentMonth();
} catch (err) {}

exports.getCurrentMonth = getCurrentMonth;
exports.isAdmin = isAdmin;
