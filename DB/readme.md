Categories of DBs

1. Relational DBs
2. Non-relational DBs

Relational DBs <> more popular

Advantages of Relational DBs

1. Relationships ()
2. Queries (easy)

Disadvantages

1. Primary keys as numbers — your tables have a maximum number of rows.
2. Schema <defined data>

Advantages of Non-relational DBs

1. Humongous data stores <Mongo>
2. Non-structured data <>
3. Best for IoT and sensors <> 10 seconds
4. Offline applications <> CouchDB
5. Allows you to store documents <MongoDB GridFS>

Disadvantage

1. Difficult to store related data <sync related data>
   - manually

Examples of Relational DBs

1. SQLite <>
2. PostgreSQL <>
3. MySQL <>
4. CockroachDB <disaster recovery>

Examples of Non-relational DBs

1. MongoDB <>
2. DynamoDB <AWS>
3. CouchDB server <PouchDB>
4. PocketBase
5. Cassandra DB
6. Redis <cache>

7. Structured Query Language <SQL>

8. Syntax for SQL

It is not case-sensitive.
SQL keywords <reserved for the language>
Each SQL statement should terminate with a semicolon except the last one.
Atomic <file>. Either all of them execute or all of them fail.

1. Creating tables

CREATE TABLE <name> (<columns>)
DROP TABLE <name>, <name>

SQLite

SQLite is a relational database.

SQLite Datatypes

SQLite uses five storage classes:

1. INTEGER
2. REAL
3. TEXT
4. BLOB
5. NULL

SQLite does not have a separate DATETIME data type.
Dates and times can be stored as TEXT, REAL, or INTEGER.

Constraints

Constraints are rules placed on columns to control the data that can be stored.

1. PRIMARY KEY
   - uniquely identifies each row
   - in SQLite, INTEGER PRIMARY KEY can automatically generate IDs
   - AUTOINCREMENT can be added

2. NOT NULL
   - column must have a value

3. UNIQUE
   - values in the column must be unique
   - UNIQUE allows multiple NULL values

4. CHECK
   - ensures that a value satisfies a condition

5. DEFAULT
   - provides a value automatically when one is not supplied

Example:

create table inventory (
id integer primary key autoincrement,
name text not null,
barcode integer not null unique,
product_code text unique,
buying_price integer not null
constraint buying_price_must_be_greater_than_0
check (buying_price > 0),
selling_price integer not null
check (selling_price > 0),
created_at text not null default current_timestamp
);

Named Constraints

A constraint can be given a name:

constraint buying_price_must_be_greater_than_0
check (buying_price > 0)

This makes the constraint easier to identify.

PostgreSQL vs SQLite

PostgreSQL:

- bigserial
- varchar
- timestamptz

SQLite:

- integer primary key autoincrement
- text
- text for dates/times

SQL Keywords

SQL keywords are not case-sensitive.

For example:

CREATE TABLE

and

create table

both work.

SQL statements are normally terminated with a semicolon (;).

Atomicity

A transaction is atomic:
either all operations succeed or none of them are applied.
