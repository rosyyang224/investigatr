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

---

## Project Overview

This project involved:

- Refactoring and redesigning user interfaces to improve usability
- Enhancing role-specific workflows for different classes of users
- Implementing relational models for real-world case tracking
- Iterating design based on instructor and peer feedback
- Streamlining the visual hierarchy and button logic for end users

---

## Repository Structure

- `app/models/` – Core domain models such as `Investigation`, `Suspect`, and `Officer`
- `app/controllers/` – RESTful controllers for each resource
- `app/views/` – Refactored views using ERB and Materialize CSS
- `config/routes.rb` – Custom routes and nested resource logic
- `db/seeds.rb` – Default data including admin user for demo purposes

---

## License and Attribution

Developed by **Rosemary Yang** as part of a project. This project is intended for educational and demonstrative purposes only.