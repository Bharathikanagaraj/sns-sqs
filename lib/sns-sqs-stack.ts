import * as cdk from '@aws-cdk/core';
import * as sqs from '@aws-cdk/aws-sqs';
import * as sns from '@aws-cdk/aws-sns';
import * as sns_sub from '@aws-cdk/aws-sns-subscriptions';
export class SnsSqsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    
    const topic = new sns.Topic(this, 'Topic', {
      displayName: 'My topic'
    });

    const myQueue = new sqs.Queue(this, 'MyQueue');
    topic.addSubscription(new sns_sub.SqsSubscription(myQueue));    
  }
}
