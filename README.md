<a href="https://vercel.com" name="readme-top">
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=next-mtrade" height="28px" alt="Is MTrade Deployed Logo" />
  </a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://next-mtrade-lime.vercel.app/">
    <img src="./src/images/logo_img.png" alt="Logo">
  </a>
<br />
<br />
<br />
  <div align="center">
<a href="https://github.com/kbventures/next-mtrade/network/members">
  <img height="28px" src="https://img.shields.io/github/forks/kbventures/next-mtrade?color=6ca4cc" alt="Forks"/>
</a>
<a href="https://github.com/kbventures/next-mtrade/contributors">
  <img height="28px" src="https://img.shields.io/github/contributors/kbventures/next-mtrade?color=88bc10&logo=github&logoColor=white" alt="Contributors"/>
</a>
<a href="https://github.com/kbventures/next-mtrade/issues">
  <img height="28px" src="https://img.shields.io/github/issues/kbventures/next-mtrade" alt="Issues"/>
</a>
</div>

  <p align="center">
    <br />
    <br />
    <br />
    <a href="https://next-mtrade-lime.vercel.app/home" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/kbventures/next-mtrade/issues">Report Bug</a>
    ·
    <a href="https://github.com/kbventures/next-mtrade/issues/new">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open="true">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-application">Run Application</a></li>
      </ul>
    </li>
    <li><a href="#what-i-have-learned">What I have learned</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#file-structure">File Structure</a></li>
    <li><a href="#linting">Linting</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

MTrade is a crypto exchange trade analysis web application which enables users with crypto exchange API keys to consolidate and vizualise select data from all their accounts.
### Built With

- ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Postgresql](https://img.shields.io/badge/Postgresql-%234ea94b.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Next.js](https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
- ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-%231572B6.svg?style=for-the-badge&logo=sass&logoColor=pink)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
<!-- - ![Playwright](https://img.shields.io/badge/-Playwright-%23C21325?style=for-the-badge&logo=Playwright&logoColor=white) -->
- ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
- ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-1572B6?style=for-the-badge&logo=3&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)
</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you go about setting up our project locally.
To get a local copy up and run follow these simple example steps.

### Prerequisites

- Node.js: [Download](https://nodejs.org/en/)
- Git: [Download](https://git-scm.com/)
- Docker: [Download](https://www.docker.com/get-started/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kbventures/next-mtrade.git
   ```
2. Go to cloned folder
   ```sh
   cd next-mtrade
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Add `.env.local` file inside root directory
   ```sh
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="yourSecretGoesHere"
   DATABASE_URL="postgresql://mtrade:mtrade@postgres:5432/mtrade-db"
   ``` 
5. Start Containers: 
   ```sh
   docker-compose -f docker-compose.dev.yml up -d
   ```
6. Access Postgresql shell within its container:
   ```sh
    docker-compose exec postgres psql -U mtrade -d mtrade-db 
   ```
7. Insert hard code data
   ```sh
   INSERT INTO "Exchange" (id, name) VALUES (gen_random_uuid(), 'Commex'); 
   INSERT INTO "Exchange" (id, name) VALUES (gen_random_uuid(), 'Kraken');"
   ```
8. Exit postgres shell
   ```sh
   exit
   ```

### Start Application

1. Start App
  ```sh
docker-compose -f docker-compose.dev.yml up -d
  ```
2. Go to http://localhost:3000/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Run Unit Tests -->

## Run Unit Tests

1. Terminal
   ```sh
   npm run test
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Production build -->

## Production build
1. Terminal
```sh
npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Run production build
1. Terminal
```sh
npm run start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LEARNED -->

## What I have learned
1. Authentication with next-auth
2. Psql, Postgresql 
3. Docker, docker-compose
4. Creating Next.js Image
5. Containerizing a next.js app and postgresl instance
6. Internationalization with next-i18-next

<!-- ROADMAP -->

## Roadmap
  - [ ] Consolidation Of Trades screen
  - [ ] Visual Analysis
  - [ ] Automated testing: Unit, e2e and intergration tests
  - [ ] Devops: Github actions linting and testing before introducing to production
  - [ ] Utilizing email in the authentication process
  - [ ] Password reset utilizing email
  - [ ] Administrative access to database(Golan Back End)
  - [ ] Debugging CSS glitches
  - [ ] User Information Input & Change
  - [ ] Invidual trade access with url for sharing
  - [ ] Stripe Payment for Premium Users
  - [ ] Expand user schema
  - [ ] Delete & Modify exisiting user private and public keys
  - [ ] Leaderboard
  - [ ] Paper trade funtionality
  - [ ] Live websocket price tracking
 


See the [open issues](https://github.com/kbventures/next-mtrade/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

## How Do I Contribute Using Git?

1. Clone the repository with this command if you don't have it:

   ```shell
   git clone https://github.com/kbventures/next-mtrade
   ```

2. Run the following command to make sure you have the latest changes on the main branch

   ```shell
   git pull
   ```

3. Create a new feature branch with a descriptive name and only make your changes here. For example, to add this README documentation I would call this branch `add-git-workflow`.

   ```shell
   git checkout -b <your feature branch name>
   ```

4. Make as many changes as you need in your feature branch. You can use the following commands per commit message.

   ```shell
   git add .
   git status
   git commit -m <your commit message>
   ```

5. Once your feature is ready and you're ready to merge into the main branch first make sure to push your local branch changes to GitHub's computers.

   ```shell
   git push --set-upstream origin <your feature branch name>
   ```

6. Go to https://github.com/kbventures/ecommerce/branches and you should see your newly pushed feature branch. Find and click the button "New pull request" to request for your changes to be "pulled" into the main branch.

7. When you click the button, complete the form required for each pull request and click "Create pull request".

8. In the top-right corner click "Reviewers" and add one person on the team as a reviewer for the pull request.

9. Once the Reviewer has looked at your pull request and verified everything is OK, they will merge your pull request into the main branch.

<br/>

## What if I have a Conflict?

1. From within your feature branch, fetch the latest changes from the main branch

   ```sh
   git fetch origin main
   ```

2. Rebase so that your feature branch history is stacked on top of the latest main branch history

   ```sh
   git rebase origin/main
   ```

3. Now resolve the conflicts manually in your code editor one at a time. Git will tell you which files have a conflict. Once you've resolved the conflicts run the following commands:

   ```sh
   git add .
   git rebase --continue
   ```

4. Write and save a commit message if all conflicts are resolved.

5. Push your rebased feature branch changes to GitHub's computers.

   ```sh
   git push -f origin <your feature branch name>
   ```

6. Go back to your pull request on Github your pull request should have no conflicts and you can merge into the main branch!

Also, don't forget the most important rule of rebasing:

> _NEVER REBASE ON A REMOTE BRANCH_ > <br />

## How Do I Write Good Commit Message?

Why do we care to write a good commit message? A well-crafted Git commit message is the best way to communicate context about a change to other developers working on that project, and indeed, to your future self.

A commit has two parts: a subject (max 50 characters) and a description.
Use the following command to separate a subject from the description.

```sh
git commit -m "Subject" -m "Description..."
```

In each commit message:

1. Specify the type of commit in the subject. Example: `Feat: create landing page`.

   - feat: The new feature you're adding to a particular application
   - fix: A bug fix
   - style: Feature and updates related to styling
   - refactor: Refactoring a specific section of the codebase
   - test: Everything related to testing
   - docs: Everything related to documentation
   - chore: Regular code maintenance.

2. Separate the subject from the body
3. Remove whitespace errors
4. Remove unnecessary punctuation marks
5. Do not end the subject line with a period
6. Capitalize the subject line and each paragraph
7. Use the body to explain what changes you have made and why you made them.
8. Do not assume the reviewer understands what the original problem was, ensure you add it.
9. Do not think your code is self-explanatory

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FILE STRUCTURE -->

## File Structure

My Next.js project follows a structured organization where configuration files, setup scripts, installation instructions, testing suites, Prisma schemas, and Docker Compose files are located at the project's root directory. The actual project files, including source code and assets, are contained within the 'src' directory. This separation allows for a clear distinction between project configuration and implementation details, facilitating ease of maintenance and collaboration among developers. See [Grouping by features or routes](https://nextjs.org/docs/getting-started/project-structure)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LINTING -->

## Linting

We are using [ESLint](https://eslint.org/) with [Airbnb rules](https://www.npmjs.com/package/eslint-config-airbnb), alongside [Prettier](https://prettier.io/) to format code and follow modern standarts when writhing Javascript In addition, we can minimize runtime errors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PRE-COMMIT -PRE-PUSH -->

## PRE-COMMIT

## PRE-PUSH

We are using [husky](https://www.npmjs.com/package/husky) to use create git hooks to run linting pre-commit and automated tests pre-push that will stop the respective git command if the checks fail.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/kbventures/mtrade-frontend/blob/main/LICENSE.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ken Beaudin - [@kb9700](https://twitter.com/kb9700)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
