# User Stories

**User Story 1**

As a **customer**, I want to **purchase food via a web application**, so I can **do it with minimum effort and time.**

**Acceptance Criteria:**

* Customer should be able to place an order in as few minutes as possible.
* Customer should be able to see advertisement consisting of best offers and specials.  

**User Story 2**

As a **customer** in hurry, I want to **login quickly**, so that **I can order food faster**.

**Acceptance Criteria:**
* Customer should be able to login using existing social media profiles.
* Customer should be able to login using guest profile by providing email id and phone number.
* Customer should be able to sign up for newsletters and offers by giving an email id.

**User Story 3**

As a **customer**, I want to **pay securely**, so I can **rest easy at night.**

**Acceptance Criteria:**

* Through third party payment integration user should be able to pay using credit/debit card with one click.
* User should have choice to pay in the restaurant while picking up food or upon food delivery.

**User Story 4**

As a **customer**, I want to **get notified of my expected orders**, so **I can pick them up on time**.

**Acceptance Criteria:**

* On the checkout page, customer should be able to get estimated food order pickup time.
* Customer should also get a text notification regarding the food order pickup time.  

**User Story 5**

As a **Customer**, I want to **be able to search for particular food items**, so **I can determine my choice**.

**Acceptance Criteria:**

-	User should be able to find menu items quickly with the dynamic search bar.

**User Story 6**

As a **restaurant chef**, I want to **see the food order list**, so I can **start preparing the order**.

**Acceptance Criteria:**
* On the admin page, chef should be able see all the orders.

**User Story 7**

As a **restaurant owner**, I want to **update food menu**, so I can **keep up with the supply and demand**.

**Acceptance Criteria:**

* On the admin page, restaurant owner should be able to update food menu easily.

# Mis-User stories

**Mis-User Story 1**

As a **malicious user**, I want to **inject malicious scripts into the web page**, so I can **alter the information on a web page**.

**Mitigation Criteria:**
* Implement input validation on both syntactical and semantic level.
* Use input sanitization libraries such as python bleach.

**Mis-User Story 2**

As an **evil competitor**, I want to **carry out denial of service attack on the web server**, so I can **disrupt services of the restaurant**.

**Mitigation Criteria:**
* Implement strong firewall rules on the OS which is hosting the web server.
* Block ports which are not used.
* Maintain database backups regularly.

**Mis-User Story 3**

As a **disgruntled employee**, I want to **alter food menu**, so I can **disrupt restaurant services**.

**Mitigation Criteria:**
* Implement least privilege mechanism and enforce authentication.

**Mis-User Story 4**

As a **malicious user**, I want to **inject malicious scripts into database**, so I can **steal sensitive information**.

**Mitigation Criteria:**
* Implement input validation on server side.
* Implement least privilege access and setup strong database admin credentials

**Mis-User Story 5**

As a **malicious user**, I want to **sniff on network data between customer and restaurant**, so I can **steal information**.

**Mitigation Criteria:**
* Implement strong encryption mechanisms by using HTTPS connection between client and server.

# Diagrams

## Mockup Diagrams

Add the diagram here

## Architecture Diagrams

### Context

Add the diagram here

### Container

Add the diagram here

### Component

Add the diagram here
