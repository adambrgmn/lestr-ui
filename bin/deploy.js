const url = require('url');
const path = require('path');
const ghPages = require('gh-pages');
const packageJson = require('../package.json');

const reformatUrl = (repo, auth) => {
  if (!auth) {
    const err = new Error('No token for GitHub provided');
    throw err;
  }

  const parsedUrl = url.parse(repo);
  const updatedUrl = Object.assign({}, parsedUrl, { auth, protocol: 'https:' });

  return url.format(updatedUrl);
}


const directory = path.join(__dirname, '..', 'build');
const options = {
  user: {
    name: 'TravisCI',
    mail: 'adam@fransvilhelm.com',
  },
  repo: reformatUrl(packageJson.repository.url, process.env.GH_TOKEN),
};

ghPages.publish(directory, options, (err) => {
  if (err) throw err;

  console.log('Successfully deployed to GitHub pages');
  process.exit();
});
