const { execSync } = require("child_process");
var cron = require("node-cron");

const execute = () => {
  console.log("Grabbing epg...");
  try {
    execSync("SITE=tvhebdo.com npm run grab", {
      stdio: "inherit",
      cwd: "/usr/src/app",
    });

    execSync("SITE=tvtv.us npm run grab", {
      stdio: "inherit",
      cwd: "/usr/src/app",
    });
  } catch (error) {
    console.error("something went wront while grabbing epg", error);
  }
};

cron.schedule("0 0 * * *", execute);

execute();
