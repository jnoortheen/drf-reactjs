# cookiecutter-drf-react

Updated From [cookiecutter](https://github.com/audreyr/cookiecutter) template for
 - backend
   - django
   - django-rest-framework
   - [djongo](https://nesdis.github.io/djongo/get-started/)
        - to inegrate with MongoDB smoothly 
 - frontend
   - reactjs
   - create-react-app


# Quickstart

- build docker images by

```sh
docker-compose -f docker-compose.yml build
```

- run front-end and backend servers by

```sh
docker-compose -f docker-compose.yml up
```

# local development

- ensure that [pre-commit](https://pre-commit.com/) is installed 
- `black` is used to format together with `pre-commit` to install the hook after cloning the repo

```bash
pre-commit install
```

- to run tests

```bash
docker-compose -f docker-compose.yml run --rm backend pytest
```

- to import sample csv file

```
docker-compose -f docker-compose.yml run --rm backend python manage.py import_data <optional-path>
```
