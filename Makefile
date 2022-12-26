up: ## docker-compose up
	docker-compose up

up-d: ## docker-compose up -d
	docker-compose up -d

down: ## docker-compose down
	docker-compose down

c: ## docker-compose exec api rails c
	docker-compose exec api rails c

migrate: ## docker-compose run --rm api bundle exec rails db:migrate
	docker-compose run --rm api bundle exec rails db:migrate

db-reset: ## docker-compose run --rm api bundle exec rails db:reset
	docker-compose run --rm api bundle exec rails db:reset

db-seed: ## docker-compose run --rm api bundle exec rails db:seed
	docker-compose run --rm api bundle exec rails db:seed

bundle-install: ## docker-compose run --rm api bundle install
	docker-compose run --rm api bundle install

build-cache-clear: ## docker-compose build --no-cache
	docker-compose build --no-cache

attach-api: ## docker attach engineer_api_1
	docker attach engineer_api_1

rubocop: ## docker-compose run --rm api bundle exec rubocop
	docker-compose run --rm api bundle exec rubocop

rubocop-a: ## docker-compose run --rm api bundle exec rubocop -a
	docker-compose run --rm api bundle exec rubocop -a

rspec: ## rspec
	docker-compose run --rm api bundle exec rspec