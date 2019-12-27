const fs = require("fs");
const { execSync } = require("child_process");

const PULL_URL = "https://github.com/microsoft/BotFramework-Composer/pull";

const AUTHORS = {
  "Andy Brown": "a-b-r-o-w-n",
  "Chris Whitten": "cwhitten",
  "Kamran Iqbal": "Kaiqb",
  "Dong Lei": "boydc2014",
  "Long Alan": "alanlong9278",
  "TJ Durnford": "tdurnford",
  leileizhang: "lei9444",
  zeye: "yeze322",
  "Zhixiang Zhan": "zhixzhan",
  "Shuai Wang": "cosmicshuai",
  liweitian: "liweitian",
  "Ben Brown": "benbrown",
  "Pooja Nagpal": "p-nagpal",
  xieofxie: "xieofxie",
  "Lu Han": "luhan2017"
};

const getLog = () =>
  execSync("git log --pretty=format:'%s | %an' stable..master")
    .toString()
    .split("\n");

const getDate = () =>
  execSync('date +"%m-%d-%Y"')
    .toString()
    .trim();

const SECTIONS = {
  Added: ["feat"],
  Fixed: ["fix"],
  Changed: ["refactor", "style"],
  Other: []
};
const tagToSection = Object.keys(SECTIONS).reduce((acc, section) => {
  const groupTags = SECTIONS[section].reduce(
    (s, t) => ({
      ...s,
      [t]: section
    }),
    {}
  );

  return {
    ...acc,
    ...groupTags
  };
}, {});

const getCommitSection = commit => {
  for (const tag in tagToSection) {
    if (commit.startsWith(tag)) {
      return tagToSection[tag];
    } else if (!/^\w+:/.test(commit)) {
      return "Uncategorized";
    }
  }

  return "Other";
};

const formatMessage = msg =>
  msg.replace(/\(\#(\d+)\)/, `([#$1](${PULL_URL}/$1))`);

const logCache = new Set();
const logOnce = (key, message) => {
  if (!logCache.has(key)) {
    process.stderr.write(message + "\n");
    logCache.add(key);
  }
};

const formatAuthor = author => {
  const username = AUTHORS[author];

  if (!username) {
    logOnce(author, `${author} missing from username map`);
    return `${author}`;
  }

  return `([@${username}](https://github.com/${username}))`;
};

const formatCommit = commit => {
  const [message, author] = commit.split(" | ");

  return [formatMessage(message), formatAuthor(author)];
};

function groupCommits(commits) {
  return commits.reduce((groups, commit) => {
    const section = getCommitSection(commit);
    const [message, author] = formatCommit(commit);

    if (!groups[section]) {
      groups[section] = [];
    }

    groups[section].push(`${message} ${author}`);

    return groups;
  }, {});
}

const formatChangeLog = groups => {
  const date = getDate();
  let output = `### ${date}`;

  for (const section in SECTIONS) {
    if (groups[section] && groups[section].length > 0) {
      output += `\n\n#### ${section}\n\n`;

      output += groups[section].map(c => `- ${c}`).join("\n");
    }
  }

  // Uncategorized
  if (groups.Uncategorized) {
    output += "\n\n Uncategorized\n\n";
    output += groups.Uncategorized.map(c => `- ${c}`).join("\n");
  }

  return output;
};

function run() {
  const commits = getLog();
  const groups = groupCommits(commits);
  const output = formatChangeLog(groups);
  console.log(output);
}

run();
