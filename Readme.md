## Hand by hand steps to start a npm project

To build an App quickly.

1. Create a directory

    ```bash
    mkdir myapp
    ```

2. Initial `package.json`

    ```bash
    npm init -y
    ```
    ps: `-y` means that I can escape from continuing pressing `yes` key :joy:

3. Start to install some packages I need

    ```bash
    npm i colors
    ```

4. Add the entry file of myapp

    ```bash
    touch index.js
    ```

5. Edit my `index.js` file

    ```bash
    vi index.js
    ```

6. About my file:

    ```js
    const color = require('colors');

    const output = process.argv[2];
    console.log(data.rainbow);
    ```

7. Back to the terminal, run the file

    ```bash
    node index.js cute
    ```
    Nice, we would get this adorable words printed.

    ![cute_colors.png](/assets/readme/cute_colors_console.png)

8. Meanwhile, we have to restart nodejs we modify the source code, it's annoying.
We can install [nodemon](https://www.npmjs.com/package/nodemon), a wonderful tool!

    > nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

    ```bash
    npm install -g nodemon
    ```
    `-g` for global install

    Finally, we can run the terminal instead:

    ```bash
    nodemon index.js cute
    ```

9. To dig out more packages, let's try [figlet](https://www.npmjs.com/package/figlet).

    As we've done before, install it by npm.

    ```bash
    npm i figlet
    ```

    Read its [documents](https://www.npmjs.com/package/figlet), and try to print strings with Halloween fits.

    ![colors_cute](/assets/readme/colors_figlet_console.png)

    Click [here](/1-try_npm_install/artist/index.js) to see how I dress those alphabets :)

    ![colors_ghost_cute](/assets/readme/colors_figlet_ghost_console.png)
