import { AWSProxy, createRequestHandler } from "remix-aws";
import * as build from "./build/server/index.js";

import { installGlobals } from '@remix-run/node'
installGlobals()

export const handler = createRequestHandler({
  build, 
  // eslint-disable-next-line no-undef
  mode: process.env.NODE_ENV,
  awsProxy: AWSProxy.APIGatewayV2,
});