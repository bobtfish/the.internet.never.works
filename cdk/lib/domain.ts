import {
  aws_route53 as route53,
  aws_route53_targets as route53Targets
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DomainProps } from "../types";

export class Domain extends Construct {
  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    if (!props.domainName || !props.hostedZoneId || !props.zoneName) {
      throw new Error(
        "You must configure all of `domainName`, `hostedZoneId`," +
          " and `zoneName` if you want a Route53 record to be created."
      );
    }

    const zone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hostedZone`,
      {
        zoneName: props.zoneName,
        hostedZoneId: props.hostedZoneId,
      }
    );

    new route53.ARecord(this, `${id}-CdnARecord`, {
      zone,
      recordName: props.domainName,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(props.distribution)
      ),
    });
  }
}
