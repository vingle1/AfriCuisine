# AfriCuisine

## Executive Summary
The main objective of this project is to provide customers with fast and secure methods for placing food orders online. Through the web application, the restaurant will be able to take more orders, promote their business, and it will help AfriCuisine's owner to manage requests. The web application will allow the restaurant to increase their product offering in the community, while at the same time, allowing customers to use social media accounts to login quickly. Africuisine will be able to provide a secure online payment option as well. Customers will also be notified via texts or emails when their orders are ready.

## Installation

#### Prerequisites
* Make sure you have [Docker](https://www.docker.com/) installed on your computer.

Build the docker image from the provided Docker-file using:

```bash
git clone https://github.com/vingle1/AfriCuisine.git
cd AfriCuisine
docker-compose build
```
Setup the database:
```bash
docker-compose run django bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser --username admin --email admin
exit
```
## Getting Started
To run the app:
```bash
docker-compose up
```
Visit the specific URL(on which Docker is running) and then follow in-app menus for help using specific feature.

## License

MIT License

Copyright (c) 2017 Vaibhav Ingle, Carmel Waka, and Juan Membreno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[User Stories and Diagrams Page](/docs/README.md)

[Back to Top](#africuisine)
