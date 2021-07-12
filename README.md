## Environment Variables

Following environment variables are required for the application. If deploying on EC2 then create `.env.prod` file, or enter the environment variables in AWS lambda console if deploying over serverless:

```
# Need not to set APP_PORT on serverless
# App global configs
APP_PORT=4000
YELP_URL=https://api.yelp.com/v3/businesses/search
LAMBDA_STAGING=dev
```
