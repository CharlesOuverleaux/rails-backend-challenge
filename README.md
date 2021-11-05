# README - Backend Technical Challenge / Recipes API

This applications shows a list of recipes. Each recipe has a detailed page with more information.

## Demo
![Alt Text](http://g.recordit.co/PhkBvR6HoB.gif)

## Technology

- Backend: Ruby on Rails (Ruby '2.6.6')
Ruby enables the fast creation of a project. The backend here exposes restful endpoints to the frontend. GET /v1/recipes will return a JSON of recipes.

- Frontend: React (react-rails)
React is one of the most popular framework/library. By using React to build this feature we can easily re-use the components in other larger components or Apps. Thanks to React we can separate our concerns, we can easily include the logic (api call (axios)), html(Recipe details) and styles (Recipe Cards)in the component.

## How to use this app?

Install all dependencies then:
```bash
bundle install
rails server
```

Your app should now be running on http://localhost:3000

Run tests

```bash
bundle exec rspec
```
