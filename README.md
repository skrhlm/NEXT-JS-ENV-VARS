# NextJS handling of env variables

### DISCLAIMER:
### THIS IS A FRUSTRATION REPOSITORY. If you know a way to get this to work properly, or have a workaround. Please make a PR and prove me wrong.


## Background

Ideally there should be a way to pass env-variables to a container in runtime, allowing you to
build images free of secrets and then setting these in the live/dev/whatever environment.

NextJS bundles env-vars, which leaves the builds with practically zero portability, making it very hard not to store secrets and variables within the repositories.

Below is my conclusion about all the 4 (!!) ways of passing env-variables, but what in NextJS case becomes practically build-args.


## Reproducing the issues:

1. Run dev locally. All env variables are set where they are supposed to, picked up from `.env.local`
```
npm ci; npm run dev
```

2. Run with docker, the `.env.local` is ignored and not copied into docker, but the env-variables passed through from `docker-compose.yml`, which works fine.
```
docker-compose up -d
```

3. Build using docker, adding no env-variables to the build, no .env-file but instead set them in the container in runtime. This does not work as intended.
```
make build
// omit the [hash] below with the hash of the built image from the make command.
docker run -it -e "NEXT_PUBLIC_EXAMPLE=DockerRuntime" -e "EXAMPLE=DockerRuntime" -p 3000:3000 [hash] npm start
```

4. Build, but this time we supply the env-variables through make, during the build. The env-variables work as intended.
```
make build-with-vars
docker run -it -p 3000:3000 [hash] npm start
```

5. Reuse the logic from 4, but try to override the variables., Does not work.
```
make build-with-vars
docker run -it -e "NEXT_PUBLIC_EXAMPLE=DockerRuntime" -e "EXAMPLE=DockerRuntime" -p 3000:3000 [hash] npm start
```


