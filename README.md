# Exo Cloud Solutions - Next14

### Setup

1. install all dependencies for the `yarn` project
2. Initialize the `yarn start` project

### Commits

> Never commit directly to the develop or master branchs.

It is very important that everyone follows the standard commits, we use [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/)

**What not to do**

- Large commits with many changes
- Too many changes with too few commits
- Empty commits. E.g.: (fix: assets)

### Branches

Are you going to start developing a new feature? Use `feat/feature_name`. <br />
**E.g.**: `feat/workorders`.

Oh, i need to fix a bug urgently? Use `fix/fix_name`. <br />
**E.g.**: `fix/update-asset`.

**NOTE**: The **master** branch is integrated with GitHub Actions, every push on these branches triggers a deploy action on the respective configuration.

**Develop**: With each open PR an environment is generated on a temporary link, check in the PR comment the link and the status in Github Actions. <br />
**Master**: Production Environment

### Pull Requests

When opening a PR, enter what the PR means and what the result is (Prints, Videos, GIFs etc)

When you finish a **fix**, always make the PR for the **master**.

Always ask for the team's review in the PR itself. If you are doing the review, pay attention to the code structure, from nomenclatures, folders, functions to the logic, besides it is very important to see the PR visually.
