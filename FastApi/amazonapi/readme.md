# MVP

## An app where users can search and order products online.

## Images, etc., and login and authentication

## Order products.

# Tools Technology

# Backend Python <FastAPI>

# ORM <Prisma ORM>

# Images Cloudflare <>

# STEP 1 Backend Developer

- Create or Model our DB
- Use DrawSQL.

# Create your DB on Beekeeper Studio using SQL.

# Setting up our project folder structure.

# Install dependencies

pipenv install fastapi "uvicorn[standard]" prisma

# Initialize Prisma

- pipenv run prisma init

- Check the following should be in your initialize:
- Use Node version 22

generator client {
provider = "prisma-client-py"
enable_experimental_decimal = true
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

- pipenv run prisma db pull
- pipenv run prisma generate

--Connect to our db

-- Routes we begin. user member routes.
-> signup <create an account>
-> login <authentication>

-- for data validation(optional) use pydantic
pipenv install pydantic 'pydantic[email]'
