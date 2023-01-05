export default {
    testEnvironment: "jsdom", 
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }, 
} 

// npm i -D ts-node ts-jest jest  @types/jest jest-environment-jsdom for typescript and create this file for the future