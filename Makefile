install:
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec nuxt yarn install
	open http://localhost:3000
	docker-compose exec nuxt yarn dev

up:
	docker-compose up -d
	open http://localhost:3000
	docker-compose exec nuxt yarn dev
