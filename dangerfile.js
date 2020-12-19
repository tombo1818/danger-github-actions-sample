const { schedule, danger } = require("danger");
const checkYarnLock = require("danger-yarn-lock");

schedule(function (resolved) {
  checkYarnLock()
    .then(function (message) {
      warn(message);
      resolved();
    })
    .catch(function (err) {
      throw(err);
    })
});
