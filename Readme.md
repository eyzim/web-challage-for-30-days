## Hand by hand steps

To build an App


1. Create a directory

    ```
    mkdir myapp
    ```

2. Initial `package.json`

    ```
    npm init -y
    ```
    ps: `-y` means that I can escape from continuing pressing `yes` key :joy:

3. Start to install some packages I need

    ```
    npm i colors
    npm i express
    ```

4. Add the entry file of myapp

    ```
    touch index.js
    ```

5. Edit my `index.js` file

    ```
    vi index.js
    ```

6. About my file:

    ```
    const color = require('colors');

    const output = process.argv[2];
    console.log(data.rainbow);
    ```

7. Back to the terminal, run the file

    ```
    node index.js cute
    ```
    Nice, we would get this adorable words printed.

    ![colors_cute](/assets/readme/colors_console.png)

8. Meanwhile, we have to restart nodejs we modify the source code, it's annoying.
We can install [nodemon](https://www.npmjs.com/package/nodemon), a wonderful tool!

    > nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

    ```
    npm install -g nodemon
    ```
    `-g` for global install

    Finally, we can run the terminal instead:

    ```
    nodemon index.js cute
    ```