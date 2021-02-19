.PHONY: build
build: 
	docker build \
		--target node \
		-f Dockerfile \
		.
.PHONY: build-with-vars		
build-with-vars:
	docker build \
		--target node \
		--build-arg NEXT_PUBLIC_EXAMPLE=HelloFromMakefile \
		--build-arg EXAMPLE=HelloFromMakeFile  \
		-f Dockerfile \
		.