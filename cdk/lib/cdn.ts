import {
  Duration,
  aws_certificatemanager as certificatemanager,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as origins,
  aws_s3_deployment as S3Deployment,
  aws_s3 as s3,
  CfnOutput,
} from 'aws-cdk-lib'; 
import { Construct } from 'constructs';
import { CdnProps } from "../types";

export class CDN extends Construct {
  public distribution: cloudfront.Distribution;

  constructor(scope: Construct, id: string, props: CdnProps) {
    super(scope, id);
    const httpApiHost = (props.httpApi.url || "").split("/")[2];

    const staticBucket = new s3.Bucket(this, `${id}-static`);
    new S3Deployment.BucketDeployment(this, `${id}-static-deployment`, {
      sources: [
        S3Deployment.Source.asset("../build/client"),
      ],
      destinationBucket: staticBucket,
    });

    const domainNames = props.domainNames
    let certificate;
    if (props.certificateArn) {
      certificate = certificatemanager.Certificate.fromCertificateArn(
        this,
        `${id}-certificate`,
        props.certificateArn
      );
    }

    const cachePolicy = new cloudfront.CachePolicy(this, `${id}-cachePolicy`, {
      cookieBehavior: cloudfront.CacheCookieBehavior.all(),
      defaultTtl: Duration.seconds(0),
      minTtl: Duration.seconds(0),
      maxTtl: Duration.days(10),
      queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
      enableAcceptEncodingGzip: true,
      enableAcceptEncodingBrotli: true,
    });

    this.distribution = new cloudfront.Distribution(
      this,
      `${id}-distribution`,
      {
        domainNames,
        certificate,
        defaultBehavior: {
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachePolicy,
          origin: new origins.HttpOrigin(httpApiHost),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        additionalBehaviors: {
          [`assets/*`]: {
            origin: new origins.S3Origin(staticBucket),
            viewerProtocolPolicy:
              cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          }, [`favicon.ico`]: {
            origin: new origins.S3Origin(staticBucket),
            viewerProtocolPolicy:
              cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          },
        },
      }
    );

    new CfnOutput(scope, "cdnDomainName", {
       value: this.distribution.domainName
    });
  }
}
