To locally test the build:

```
mvn clean install (option -DskipTests if you want to ignore tests)
```

Then, once the build is complete,

```
docker build -t wfnews-api .
docker run -p 1338:8080 
--env DB_NAME=
--env WEBADE_OAUTH2_CLIENT_ID=WFNEWS-REST
--env WEBADE-OAUTH2_TOKEN_CLIENT_URL=https://intapps.nrs.gov.bc.ca/pub/oauth2/v1/check_token?disableDeveloperFilter=true&grant_type=client_credentials
--env WEBADE-OAUTH2_TOKEN_URL=https://intapps.nrs.gov.bc.ca/pub/oauth2/v1/oauth/token?disableDeveloperFilter=true
--env WEBADE_OAUTH2_WFNEWS_REST_CLIENT_SECRET=
--env WFDM_REST_URL=https://i1bcwsapi.nrs.gov.bc.ca/wfdm-document-management-api/
--env WFIM_CODE_TABLES_URL=https://i1bcwsapi.nrs.gov.bc.ca/wfim-incidents-api/codeTables
--env WEBADE-OAUTH2_CHECK_TOKEN_URL=https://intapps.nrs.gov.bc.ca/pub/oauth2/v1/check_token?disableDeveloperFilter=true
--env WFNEWS_EMAIL_NOTIFICATIONS_ENABLED_IND=N
--env SMTP_HOST_NAME=***
--env SMTP_PASSWORD=***
--env SMTP_FROM_EMAIL=***
--env SMTP_ADMIN_EMAIL=***
--env SMTP_EMAIL_SYNC_ERROR_FREQ=10
--env SMTP_EMAIL_FREQ=10
--env SMTP_EMAIL_ERROR_SUBJECT=ERROR
--env SMTP_EMAIL_SUBJECT=MESSAGE
--env DEFAULT_APPLICATION_ENVIRONMENT=
--env WFNEWS_DB_URL=jdbc:postgresql://***
--env WFNEWS_USERNAME=
--env WFNEWS_MAX_CONNECTIONS=100
--env DB_PASS=***
-e WFNEWS_EMAIL_NOTIFICATIONS_ENABLED_IND=false
wfnews-api
```

You can use --env for environment variables, or pass in a list (see the docker documentation for instructions)
Look in the deploy-dev.yml for Dev env variable configs

If you've deployed a Postgres image, you can supply that as your wfnews DB, but you can't wire it to "localhost", as your API container won't find it. You will need to change it to the IP of your DB container. You can find this by:

`docker ps`
then, Copy the container ID of your postgres container and:
`run docker inspect <container id>`

Down at the bottom in IP settings, you can copy the IP address out and use that in the postgres connection instead of localhost. Or, use docker desktop to inspect and get it from there.