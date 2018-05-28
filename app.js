const path = require('path');
const http = require('http');
const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const db = require('./server/config/mongoose');
const configureExpress = require('./server/config/express');

const server = configureExpress(db);
