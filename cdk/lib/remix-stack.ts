import { Construct } from 'constructs';
import { Stack } from 'aws-cdk-lib';
import { Api } from "./api";
import { CDN } from "./cdn";
import { RemixStackProps } from "../types";

export class RemixStack extends Stack {
  public api: Api;
  public cdn: CDN;

  constructor(scope: Construct, id: string, props: RemixStackProps) {
    super(scope, id, props);

    const {
      domainNames,
      certificateArn,
      lambdaEnvironmentVariables,
      lambdaMemorySize,
    } = props.remixStackConfig;

    this.api = new Api(this, `${id}-api`, {
      lambdaEnvironmentVariables,
      lambdaMemorySize,
    });

    this.cdn = new CDN(this, `${id}-cdn`, {
      certificateArn,
      domainNames,
      httpApi: this.api.httpApi,
    });
  }
}
