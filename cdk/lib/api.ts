import {
  aws_lambda as lambda,
  Duration,
  CfnOutput,
  aws_apigatewayv2 as apigatewayv2,
  aws_apigatewayv2_integrations as apigatewayv2_integrations
} from 'aws-cdk-lib'; 
import { Construct } from 'constructs';
import * as path from "path";
import { ApiProps } from "../types";

export class Api extends Construct {
  public handler: lambda.IFunction;
  public httpApi: apigatewayv2.HttpApi;

  constructor(scope: Construct, id: string, props?: ApiProps) {
    super(scope, id);

    this.handler = new lambda.Function(this, `${scope}-defaultLambda`, {
      code: lambda.Code.fromAsset(
        path.join(__dirname, "../../"),
        {
          exclude: ['cdk/**'],
        }
      ),
      environment: {
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
        NODE_ENV: "production",
        ...props?.lambdaEnvironmentVariables,
      },
      handler: "server.handler",
      memorySize: props?.lambdaMemorySize || 128,
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: Duration.seconds(15),
      tracing: lambda.Tracing.DISABLED,
    });

    const integration = new apigatewayv2_integrations.HttpLambdaIntegration('IntegrationId', this.handler, {
      payloadFormatVersion: apigatewayv2.PayloadFormatVersion.VERSION_2_0,
    });

    this.httpApi = new apigatewayv2.HttpApi(this, `${scope}-api`, {
      defaultIntegration: integration,
    });

    new CfnOutput(scope, "apiUrl", {
      value: this.httpApi.url || "",
    });
    new CfnOutput(scope, "lambdaFunctionName", {
       value: this.handler.functionName || "",
    });
  }
}
