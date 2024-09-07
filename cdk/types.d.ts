import {
  aws_apigatewayv2 as apigatewayv2,
  StackProps
} from 'aws-cdk-lib'; 

type ApiConfig = {
  readonly lambdaEnvironmentVariables?: Record<string, string>;
  readonly lambdaMemorySize?: number;
};
export type ApiProps = ApiConfig;

type CdnConfig = {
  readonly certificateArn?: string;
  readonly domainNames?: string[];
};
export type CdnProps = CdnConfig & {
  readonly httpApi: apigatewayv2.HttpApi;
};


export type RemixStackConfig = ApiConfig &
  CdnConfig &
  {
    readonly remixCookieSecret?: string;
    readonly stackName?: string;
  };

export type RemixStackProps = {
  readonly remixStackConfig: RemixStackConfig;
} & StackProps;
