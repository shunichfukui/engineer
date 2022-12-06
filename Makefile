up: ## docker-compose up
	docker-compose up

up-d: ## docker-compose up -d
	docker-compose up -d

down: ## docker-compose down
	docker-compose down

c: ## docker-compose exec backend rails c
	docker-compose exec backend rails c

migrate: ## docker-compose run --rm api bundle exec rails db:migrate
	docker-compose run --rm api bundle exec rails db:migrate

db-seed: ## docker-compose run --rm api bundle exec rails db:seed
	docker-compose run --rm api bundle exec rails db:seed