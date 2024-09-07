#!/usr/bin/env node
import "source-map-support/register";
import { App, aws_lambda as lambda } from 'aws-cdk-lib'; 
import { RemixStack } from "../lib/remix-stack";
import remixStackConfig from "../../remix-stack-config";

const stackName = remixStackConfig.stackName || "remix";
const app = new App();
const remixStack = new RemixStack(app, stackName, { remixStackConfig });

(remixStack.api.handler as lambda.Function).addEnvironment(
  "REMIX_COOKIE_SECRET",
  remixStackConfig.remixCookieSecret!
);

