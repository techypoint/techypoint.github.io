---
title: "Amazon S3 LifeCycle Management"
author: "Varun Bisht"
description: "What is object LifeCycle, manage objects, use cases when you need object life cycle and how to manage objects using java sdk."
keywords: "s3 object expiration java,s3 object expiration java,s3 object expiration java,set lifecycle policy,aws s3 lifecycle example,get-bucket-lifecycle-configuration,s3 object lifecycle java"
category: "amazon s3"
date: 2020-06-03 09:00:00
permalink: "/AmazonS3/lifecycle-management"
image: "/assets/img/amazon-s3/lifecycle-management/lifecycle-management.jpg"
---
## Object Life Cycle
You can handle objects by managing its lifecycle.
## How will you manage?
You can create S3 LifeCycle configuration which is basically a set of rules that define actions that S3 performs on the group of objects.

These action can be of two types -
1. **Transition Action** -
This action performs transition of group of objects from one storage class to another at any given time.
Eg- transition from S3 Standard to S3 Glacier Storage Class.
2. **Expiration Action** -
This Action performs deletion of objects at any given time.

**Note - S3 deletes on your behalf by running some process.**

## Use cases when you need object Life Cycle

1. You need to backup long term database backups, business reports.
2. You need to delete server or application logs after some time.
3. You need to move records which are not used frequently after some time.

### 1. create BucketLifecycleConfiguration Rule
{% highlight html %}{% raw %}
public static void createLifeCycleConfiguration(AmazonS3 amazonS3,String bucketName){

  // apply this rules to the objects having prefix heavyReports which gets filtered through prefix
  // LifecyclePrefixPredicate - to filter objects through prefix to report
  BucketLifecycleConfiguration.Rule rule1=new Rule()
      .withId("rule id 1")
      .withFilter(new LifecycleFilter(new LifecyclePrefixPredicate("heavyReports/")))
      .addTransition(new Transition().withDays(90).withStorageClass(StorageClass.Glacier))
      .addTransition(new Transition().withDays(180).withStorageClass(StorageClass.DeepArchive))
      .withExpirationInDays(700)
      .withStatus(BucketLifecycleConfiguration.ENABLED);


  // apply this rules to the objects which has keyName tag and value - tagValue
  // LifecycleTagPredicate - to filter objects through tags
  BucketLifecycleConfiguration.Rule rule2=new Rule()
      .withId("rule id 2")
      .withFilter(new LifecycleFilter(new LifecycleTagPredicate(new Tag("keyName","tagValue"))))
      .addTransition(new Transition().withDays(60).withStorageClass(StorageClass.Glacier))
      .withExpirationInDays(120)
      .withStatus(BucketLifecycleConfiguration.ENABLED);

  // create BucketLifecycleConfiguration and set rule list
  BucketLifecycleConfiguration bucketLifecycleConfiguration=new BucketLifecycleConfiguration();
  bucketLifecycleConfiguration.setRules(Arrays.asList(rule1,rule2));

  // save the configuration
  amazonS3.setBucketLifecycleConfiguration(bucketName,bucketLifecycleConfiguration);

}
{% endraw %}{% endhighlight %}

Now we use amazonS3 client we created in this [tutorial]({% post_url amazon-s3/2020-05-30-setUpJavaProject %}).

**Rule 1** - it moves all the objects which has **prefix - heavyReports**. **After 90 days**, it gets move to Glacier Storage Class. **After 180 days**, it gets move to DeepArchive Storage Class. **After 700 days**, it gets delete by the Amazon S3.

**Rule 2**- it moves all the objects which has **keyName tag's value- tagValue**. **After 60 days**, it gets move to Glacier Storage Class. **After 120 days**, it gets delete by the Amazon S3.

Then add those rules to BucketLifecycleConfiguration object and set this LifeCycle Configuration using setBucketLifecycleConfiguration.

**Note - You cannot use Prefix base tag and Filter base tag in a Single LifeCycle Policy.These tags cannot be used within a single policy.**
<a href="https://forums.aws.amazon.com/thread.jspa?threadID=266960">Check this thread for more info</a>

### 2. get Rules from BucketLifecycleConfiguration

{% highlight html %}{% raw %}
public static void getLifeCycleConfiguration(AmazonS3 amazonS3,String bucketName){
    BucketLifecycleConfiguration bucketLifecycleConfiguration=amazonS3.getBucketLifecycleConfiguration(bucketName);
    List<BucketLifecycleConfiguration.Rule> rulesList=bucketLifecycleConfiguration.getRules();
    for(BucketLifecycleConfiguration.Rule rule:rulesList){
      LOG.info("bucket rule id- "+rule.getId());
    }
  }
{% endraw %}{% endhighlight %}

Call getBucketLifecycleConfiguration() to get the configuration and then get rules from it by calling getRules()

### 3. delete BucketLifecycleConfiguration

{% highlight html %}{% raw %}
public static void deleteLifeCycleConfiguration(AmazonS3 amazonS3,String bucketName){
    amazonS3.deleteBucketLifecycleConfiguration(bucketName);
  }
{% endraw %}{% endhighlight %}

Call deleteBucketLifecycleConfiguration() to delete the configuration.

### Further Reading

<a href="https://docs.aws.amazon.com/s3/index.html">Amazon S3 Official Documentation</a>

## COMPLETION OF AMAZON S3 SERIES

Now you have the knowledge of the Amazon S3, it basic concepts, how to integrate in java and perform operations.

Hope this series helps you in unsertanding Amazon S3.
