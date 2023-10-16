# Go Playground

Go Playground is meant to be a modern, user-friendly alternative to the Go Docs, allowing users to quickly and easily learn how to write and create programs in Golang.

Deployed on: [[https://go-playground-ruddy.vercel.app/](https://go-playground-ruddy.vercel.app/)]

## Table of Contents

- [General Info](#general-information)
- [GitHub Repo](#github-repo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)

## General Information

Go Playground is built with Next, Typescript, and Golang with Fiber on the backend.

## GitHub Repo

- [Monorepo] https://github.com/ibttf/go-playground

## Technologies Used

### Tech Stack

Next 13
React
Typescript
Golang (Fiber)

### Styling

Headless UI
Radix UI
Shadcn
TailwindCSS

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Environment Setup

### Clone repository

**clone** the project repository from github: [https://github.com/roylee0912/revieword](https://github.com/roylee0912/bayborhood)

```console

$ git clone https://github.com/ibttf/go-playground
```

### Application Install

When you're ready to start building your project, run:

```sh

cd docs-next
bun install
bun run dev


```

## Usage

<div style="width:400px ; height:400px">

</div>

1. [`Learn`] On the sidebar, there are a few modules. Start with the basics, which covers setup and installation, as well as how to instantiate variables, concurrency, and writing functions. Then, move on to the guides and tutorials section to start building real projects with Go.

![Screenshot 2023-10-12 at 7 14 33 PM](https://github.com/ibttf/go-playground/assets/60560932/3ac6a180-facb-47fe-841e-e63a4eda0dee)

## Project Status

- Project is: _in progress_.

## Room for Improvement

- Add a functional "completed or not" feature.
- Connect user models with user gmails and have them be connected to every module. in every module, have a client side rendered component that grabs from the db and checks whether or not the module is completed. also add functionality to the are you finished with the module footer component.
- Add real-time testing so users can practice writing Go code and get responses in real-time.
