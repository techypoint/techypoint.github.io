---
title: "Amazon S3 Set Up Java Project"
description: "Create access key, secret key, set up java project and create connection with Amazon S3."
keywords: "amazon s3,amazon s3 tutorial,amazon s3 client java example,aws java example,aws java sdk maven,aws java sdk tutorial,amazons3clientbuilder,aws java sdk 2 tutorial,java aws project"
category: "amazon s3"
permalink: "/AmazonS3/setup-java-project"
image: "/assets/img/amazon-s3/setup-java-project/Set-Up-Java-Project.jpg"
---

## Objective
This tutorial will help you in creating access key and secret key which required in making connection.
Then we will create project in java and create connection with Amazon S3.

## Now lets create your access key and secret key

- Step 1 - Login in to your Amazon S3 account.
- Step 2 - Click on My Security Credentials
<div class="imgCont">
  <img alt="Security Credentials Option" title="Security Credentials Option" src="/assets/img/amazon-s3/setup-java-project/security_credential_option.png" />
</div>
- Step 3 - Now select Access keys (access key id and secret access key)
<div class="imgCont">
  <img alt="AWS Security Credentials" title="AWS Security Credentials" src="/assets/img/amazon-s3/setup-java-project/aws_security_credentials.png" />
</div>
- Step 4 - click on create new Access key, you will get the option of download key file.
<div class="imgCont">
  <img alt="AWS Credential Download Option" title="AWS Credential Download Option" src="/assets/img/amazon-s3/setup-java-project/aws_credential_download_option.png" />
</div>
- Step 5 - In the file, you will get access key and secret key.

## Now Set Up Java Project

1. Create a maven project in your favourite IDE.
2. Add maven dependency for AWS java sdk in pom.xml
{% highlight html %}{% raw %}
   <dependency>
   <groupId>com.amazonaws</groupId>
   <artifactId>aws-java-sdk-s3</artifactId>
   <version>1.11.781</version>
   </dependency>
   {% endraw %}{% endhighlight %}
3. Now to create connection with AmazonS3, you will need to know
- AWS account
- AWS security credentials (Access key and Secret Key)
- AWS Region

Code to create connection with Amazon S3
{% highlight html %}{% raw %}
public static void main(String[] args) {
    // now create BasicAWSCredentials object by using access key and secret key
    BasicAWSCredentials basicAWSCredentials=new BasicAWSCredentials("pass access key",
        "pass secret key");
    // get AmazonS3 Client by passing basicAWSCredentials and specify region which is closest to you
    // or let it pick default region
    AmazonS3 amazonS3 = AmazonS3ClientBuilder.standard()
        .withCredentials(new AWSStaticCredentialsProvider(basicAWSCredentials))
        .withRegion(Regions.AP_SOUTH_1)
        .build();
  }
{% endraw %}{% endhighlight %}

You are successfully able to create java project and able to make connection with Amazon S3.

<a href="https://github.com/techypoint/amazon-s3.git">Click to get the full Implementation of this tutorial on Github</a>
