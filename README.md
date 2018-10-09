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

- visit `http://localhost:8000/api/` to interact with backend and `http://localhost:3000/`

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

# front-end

- Click the add button to create new records. Either you can select a value/create new one for a field.

# troubleshooting

- issue a clean build of docker images with 

```bash
docker-compose -f docker-compose.yml build --no-cache
```
