# 💬 weather-app 💬

Simple weather app written with react for education purposes.

## 📖 Table of Contents

- [🌐 Links](#user-content--links)
- [🎨 Architecture](#user-content--architecture)
- [✨ Getting started](#user-content--getting-started)
  - [Prerequisites](#prerequisites)
  - [Bootstrap](#bootstrap)
- [📜 Scripts](#user-content--scripts)
  - [Development](#development)
  - [Build](#build)
  - [Test](#test)
  - [Analyze](#analyze)
- [📚 Documentation](#user-content--documentation)
  - [Commit Message Guideline](#commit-message-guideline)

## 🌐 Links

- Storybook: https://wonderful-forest-0533a5703.azurestaticapps.net
- Application: https://red-desert-0d73df403.azurestaticapps.net

## 🎨 Architecture

This is a mix of:

- atomic design pattern,
- clean architecture pattern,

Here is an explanation of how each layer depends on each other:
![image](https://michalzalecki.com/posts/elegant-frontend-architecture-layers@2x.png)

## ✨ Getting started

### Prerequisites

You need to have installed the following software:

- [nodejs](https://nodejs.org/en/) (>=14.15.0)
- [npm](https://npmjs.com/) (>= 6.14.0)

### Bootstrap

```bash
  git clone git@github.com:playerony/weather-app.git
  cd weather-app
  npm install
```

## 📜 Scripts:

### Development

- `storybook` - Run storybook.
- `start` - Run application in development mode.
- `reinstall-deps` - Run will remove all dependencies and reinstall them.

### Build

- `build` - Build for production a ready application.
- `build-storybook` - Build for production a ready storybook.

### Test

- `test` - Run tests.
- `test:e2e` - Run e2e tests.
- `test:ci` - Run tests in CI mode.
- `test:watch` - Run tests in watch mode.
- `test:coverage` - Run tests in coverage mode.

### Analyze

- `lint` - Run `eslint`. Output any errors 🚨.
- `lint:fix` - Run `eslint` with `--fix`flag . Fix any lint errors 🚨.
- `typecheck` - Run `tsc`. Output any errors 🚨.
- `format` - Run `prettier` to format all the files.
- `check` - Run `lint`, `typecheck` and `test`. Output any errors 🚨.

## 📚 Documentation

### Commit Message Guideline

- For easier commit type recognition commit messages are prefixed with an emoji
- See available [gitmoji.dev](https://gitmoji.dev/)
