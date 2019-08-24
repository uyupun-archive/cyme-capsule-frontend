install:
	docker-compose build --no-cache
	make up

up:
	docker-compose up -d
	open http://localhost:3000
