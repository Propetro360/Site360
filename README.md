# Getting Started

# Download the pre-requisites for the code to run

1. Install [Node](https://nodejs.org/en/download/) - This is JS runtime, which helps run our js code on windows
2. Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - helps in maintaining code across developers and cloud repos
3. Install [VS Code](https://code.visualstudio.com/download) - Code editor recommended

# Now in new folder open cmd run following commands

git clone https://github.com/Propetro360/Site360.git

cd site360

npm install (Do this only in the start)

npm start

# Once a stable change has been done, run following for deploying to cloud

 npm run build

 npm run deploy

# when editing the code, its recommended to follow [git-rebase strategy](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase#:~:text=What%20is%20git%20rebase%3F,of%20a%20feature%20branching%20workflow)

1. Always create new branches for a solid feature - feature/feature-name
2. For bug fixing branches - bug_fix/branch-name
3. once fixed, follow the steps below (stay in ur branch and open cmd terminal in the root (Ctrl + `) in VS code)
4. git pull main
5. git rebase main
6. git push -f