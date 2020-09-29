## TypeScript
Everything about TypeScript

## Author
Aditya Hajare ([Linkedin](https://in.linkedin.com/in/aditya-hajare)).

## Current Status
WIP (Work In Progress)!

## License
Open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

----------------------------------------

## Initialize Project
- Run following command at project root:
    ```sh
    tsc --init
    ```

## Watch For Changes
- To watch a specific file:
    ```sh
    tsc --watch fileName.ts
    ```
- To watch the entire directory:
    ```sh
    tsc --watch
    ```

----------------------------------------

## NodeJS + Express REST API Project Setup
- Initialize project and install nodejs specific basic dependancies:
    ```sh
    # Initialize new nodejs project
    npm init -y

    # Install basic dependancies
    npm i --save express body-parser

    # Install nodemon
    npm i --save-dev nodemon
    ```
- Install typescript specific dependancies:
    ```sh
    # Install nodejs and express types
    npm i --save-dev @types/node @types/express
    ```
- Add `scripts` under `package.json`:
    ```json
    "scripts": {
        "dev": "NODE_ENV=dev nodemon dist/app.js",
        "start": "NODE_ENV=prod node dist/app.js",
        "test": "NODE_ENV=test jest --watch --runInBand"
    }
    ```
- Add `.tsconfig` at the typescript project root:
    ```json
    {
        "compilerOptions": {
            "module": "commonjs",
            "strict": true,
            "baseUrl": ".",
            "outDir": "dist",
            // "removeComments": true,
            "target": "es6",
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,
            "moduleResolution": "node",
            "importHelpers": true,
            "noImplicitAny": true,
            "noEmitOnError": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "noImplicitReturns": true,
            "noFallthroughCasesInSwitch": true,
            "forceConsistentCasingInFileNames": true,
            "esModuleInterop": true,
            "sourceMap": true,
            "typeRoots": [
                "node_modules/@types"
            ]
        },
        "include": [
            "src/**/*.ts"
        ],
        "exclude": [
            "**/node_modules/"
        ]
    }
    ```