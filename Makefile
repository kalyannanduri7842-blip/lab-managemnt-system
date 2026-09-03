.PHONY: all start dev build test install clean help

all: install build test

help:
	@echo "LABCARE Hospital Laboratory Management System"
	@echo "Available commands:"
	@echo "  make start     - Start backend and clinical API services"
	@echo "  make dev       - Run in development mode"
	@echo "  make build     - Build frontend assets"
	@echo "  make test      - Run all automated unit and integration tests"
	@echo "  make install   - Install all package dependencies"
	@echo "  make clean     - Clean up build artifacts"

start:
	node index.js

dev:
	node index.js

build:
	npm run build --prefix frontend

test:
	node --test tests/unit/*.test.js tests/integration/*.test.js

install:
	npm install --prefix backend
	npm install --prefix frontend

clean:
	rm -rf frontend/dist
