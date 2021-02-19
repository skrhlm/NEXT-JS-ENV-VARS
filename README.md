# This example illustrates issues with passing env-variables to NextJS



Ideally there should be a way to pass env-variables post-build.



1. Run dev locally. All env variables are set where they are supposed to, picked up from `.env.local`
`npm ci; npm run dev`

2. Run with docker, the `.env.local` is ignored and not copied into docker, but the env-variables passed through from `docker-compose.yml` works fine.
`docker-compose up -d`

3. Build, no env-variables to the build, but instead set them in the container in runtime.
```
make build
// omit the [hash] below with the hash of the built image from the make command.
docker run -it -e "NEXT_PUBLIC_EXAMPLE=TEST" -e "EXAMPLE=TEST" -p 3000:3000 [hash] npm start
```

4. Build, but this time we supply the env-variables through make, during the build.
```
make build-with-vars
docker run -it -p 3000:3000 [hash] npm start
```



