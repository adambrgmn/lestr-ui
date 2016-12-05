const ghPages = require('gh-pages');
const path = require('path');

const directory = path.join(__dirname, '..', 'build');
const options = {
  user: {
    name: 'TravisCI',
    mail: 'adam@fransvilhelm.com',
  },
  repo: `https://${process.env.GH_TOKEN}@${process.env.GH_REF}`,
};

ghPages.publish(directory, options, (err) => {
  if (err) {
    console.error(err);
    return process.exit(1);
  }
  console.log('SUCCESSFULLY deployed to GitHub pages');
  process.exit();
});
