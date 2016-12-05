const ghPages = require('gh-pages');
const path = require('path');

const directory = path.join(__dirname, '..', 'build');
const options = {
  user: {
    name: 'TravisCI',
    mail: 'adam@fransvilhelm.com',
  },
};

ghPages.publish(directory, options, (err) => {
  if (err) console.error(err);
  console.log('SUCCESSFULLY deployd to GitHub pages');
});
