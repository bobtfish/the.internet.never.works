import { RemixStackConfig } from "./cdk/types";

const remixStackConfig: RemixStackConfig = {
  // If not specified, the `stackName` will default to "remix"
  // stackName: "customStackName",
  //
  // You can optionally provide ENV variables for your lambda function
  // lambdaEnvironmentVariables: {
  //   YOUR_ENV_VAR_HERE: process.env.YOUR_ENV_VAR_HERE!,
  // },
  //
  // Configure the amount of memory available to your lambda function, in MB
  // Default is 128
  // lambdaMemorySize: 256,
  //
  // If you would like to configure a custom domain for your CDN you must
  // specify the `domainNames` and a `certificateArn` for that domain. 
  domainNames: [
    "the.internet.never.works"
  ],
  certificateArn: "arn:aws:acm:us-east-1:054037124368:certificate/cab12c21-e47a-4785-90c4-5ff41cc1bd5a",

  // If you are using jwtCookieSessionHandlerFactory, you'll want to configure
  // an ENV variable for the secret used there.
  remixCookieSecret: process.env.REMIX_COOKIE_SECRET,
};

export default remixStackConfig;
