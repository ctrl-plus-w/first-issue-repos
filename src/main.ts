import 'dotenv/config';

import axios from 'axios';

import Logger from '@helpers/Logger';

import { getLabelsParam, labelMapper } from '@helpers/String';

import repos from '@config/repos.json';

const logger = new Logger();

(async () => {
  for (const repo of repos) {
    try {
      const URL = `https://api.github.com/repos/${repo.owner}/${repo.name}/issues?labels=${getLabelsParam(repo.labels)}`;

      const res = await axios.get(URL, { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } });

      if (!res.data.length) continue;

      logger.warning('REPO', repo.name);
      logger.warning('OWNER', repo.owner, true);

      logger.break(2);

      for (const issue of res.data) {
        logger.info('TITLE', issue.title);
        logger.info('URL', issue.url, true);
        logger.info('LABELS', labelMapper(issue.labels), true);

        logger.break();
        logger.body(issue.body);

        logger.break();
      }
    } catch (err) {
      logger.warning('ERROR', `Something went wrong. Status code : ${err.response.status}`);
      break;
    }
  }
})();
