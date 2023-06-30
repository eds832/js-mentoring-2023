3. Add a custom script in the package.json file to run a development server:

- Open the package.json file.

- Locate the "scripts" section.

- Add a new script key-value pair where the key is the script name (e.g., "start") and the value is the command to run the development server (e.g., "webpack-dev-server").

- Save the package.json file.

- Run the script using `npm run <script-name>` command.

Done:

- npm init
- npm i -D webpack webpack-cli
- npm i -D sass style-loader css-loader sass-loader
- npm i -D html-webpack-plugin
- npm i -D babel-loader @babel/core @babel/preset-env
- npm i -D webpack-dev-server
- npm run build
- npm run start

App run at http://localhost:3000/