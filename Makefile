@PHONY: start deploy

start:
	docker build -t shuuji3.xyz . && docker run -p 8080:8080 --name shuuji3.xyz --rm shuuji3.xyz

deploy:
	gcloud run deploy --allow-unauthenticated shuuji3-xyz --source=.
