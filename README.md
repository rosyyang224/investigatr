# Investigatr

**Investigatr** is a secure case tracking platform for managing criminal investigations, built with a focus on internal workflows and role-based accountability for law enforcement teams. Designed with real-world police and civic tech use cases in mind, the system enables structured, auditable, and efficient handling of cases, suspects, and officer activity.

### Core Capabilities
- Manage investigations with linked suspects, notes, and involved officers
- Create and edit suspect profiles with full case linkage
- Assign cases to specific officers or investigative units
- Record investigation notes and activity logs tied to users
- Role-based dashboards for investigators, officers, and admins
- Internal audit and activity history for accountability

### Role-Specific Functionality

**Admin (Full Access):**
- View, create, update, or delete all records (officers, suspects, cases, notes)
- Monitor officer activity logs and view audit dashboard
- Assign or reassign ownership of investigations
- Manage officer accounts and role permissions

**Investigator:**
- Create and manage investigations they own
- Add suspects, update case details, and leave investigation notes
- View only investigations they are assigned to
- Cannot access admin-only dashboards or officer logs

**Officer:**
- View assigned investigations and linked suspects
- Leave notes related to cases they’re part of
- Cannot create or edit case metadata, suspects, or assignments

## Tech Stack

- **Backend:** Ruby on Rails
- **Frontend:** Embedded Ruby (ERB), JavaScript, Materialize CSS
- **Database:** PostgreSQL
- **Authentication:** Devise
- **JS & Asset Management:** Yarn, Webpacker
- **Testing:** RSpec (scaffolded)
- **Environment:** Local development and Heroku-compatible deployment

## Getting Started

To run this project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/rosyyang224/investigatr.git
   cd investigatr
   ```
2. Install Ruby dependencies
    ```bash
    bundle install
    ```
3. Set up the database
    ```bash
    rails db:contexts
    ```
4. Install JavaScript and Node dependencies (for asset pipeline)
    ```bash
    yarn install
    npm install
    ```
5. Start the rails server, and navigate to the localhost in your browser
    ```bash
    rails server
    ```
## Admin Login (for demo)

To explore all features, log in with the seeded admin credentials:

- **Username:** `jgordon`  
- **Password:** `secret`

This account allows access to all administrative features including officer oversight, user management, and audit dashboards.

## Project Overview

This application was developed as part of a semester-long course. Over three major phases, the project evolved from a backend data model into a fully interactive, role-based, internal-facing web platform for managing law enforcement investigations.

### Phase 2: Data Modeling & Business Logic

- Designed and implemented all models based on a detailed ERD using Rails 7.0.x and Ruby 3.1.x
- Created custom methods for each model, including query scopes, validations, and callbacks
- Developed all database migrations and established complex ActiveRecord associations
- Followed test-driven development (TDD) practices using the `simplecov` gem to achieve 100% unit test coverage across all models
- Built custom helper methods to support business logic like activation status, assignments, and visibility
- Refactored test contexts and organized unit test suites for modular debugging and autograder compliance

### Phase 3: Authentication, Authorization & API Development

- Integrated secure login authentication using `bcrypt`, implementing hashed passwords and role-based access through `role` fields and `password_digest`
- Implemented the `CanCanCan` authorization library to enforce granular role-based permissions (admin, investigator, officer)
- Created model-level abilities and tested access policies using provided test cases and authorization specs
- Built RESTful read-only API endpoints for selected models (e.g., Investigations, Crimes), returning structured JSON
- Achieved full test coverage for all new models and services, including join tables like `CrimeInvestigation`
- Added support for callbacks and validations to enforce data integrity across crime and unit records

### Phase 4: Controllers, Views, React, and Frontend UX

- Implemented fully tested Rails controllers from scratch to pass all provided RSpec and Cucumber integration tests
- Developed multi-role interfaces and forms using ERB and Materialize CSS with attention to accessibility, layout hierarchy, and readability
- Built dynamic UI components with React to enhance the Investigations#show page:
  - Rendered investigation notes asynchronously
  - Allowed live updates and interactions without full-page reloads
- Maintained strict 100% controller test coverage and validated full-stack behavior with Cucumber
- Implemented proper authorization and error handling at both the controller and view levels
- Followed semantic HTML5 structure, consistent CSS theming, and DRY rendering logic

## Repository Structure

- `app/models/` – Core domain models such as `Investigation`, `Suspect`, and `Officer`
- `app/controllers/` – RESTful controllers for each resource
- `app/views/` – Refactored views using ERB and Materialize CSS
- `config/routes.rb` – Custom routes and nested resource logic
- `db/seeds.rb` – Default data including admin user for demo purposes


## License and Attribution

Developed by **Rosemary Yang** as part of a project. This project is intended for educational and demonstrative purposes only.