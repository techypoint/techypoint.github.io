---
title: "Amazon S3 Introduction"
description: "This tutorial describes what is Amazon S3, its advantages and Amazon S3 basic Concepts - Bucket, Object, Keys and Region."
keywords: "amazon s3,amazon s3 tutorial,amazon s3 introduction,aws s3 basics,aws s3 benefits,aws s3 core concepts,aws s3 bucket,what does s3 stand for?,aws s3 key,what is s3 bucket,aws s3 what is versioning"
category: "amazon s3"
permalink: "/AmazonS3/introduction"
image: "/assets/img/amazon-s3/introduction/introduction.jpg"
---
<h1> Introduction To Amazon S3 Series</h1>
This Series give you understanding of S3 and its comprises of -
1. [Introduction]({% post_url amazon-s3/2020-05-28-introduction %})
2. [Creating a Bucket]({% post_url amazon-s3/2020-05-29-createABucket %})
3. [Set Up Java Project]({% post_url amazon-s3/2020-05-30-setUpJavaProject %})
4. [Versioning]({% post_url amazon-s3/2020-05-31-versioning %})
5. [Operations]({% post_url amazon-s3/2020-06-01-operations %})

<h2>What is Amazon S3?</h2>
<p>Amazon S3 is a Simple Storage Service(S3) that allows you to store and retrieve data.
It offers scalability, data availability, performace and security.</p>
<h2>Why Amazon S3?</h2>
- Performance
- Availability
- Scalability
- Security
- Wide range of cost effective Storage classes
- Easily manage data and access controls

<h2>Lets start with Amazon S3 basic concepts</h2>

### 1. Bucket
<p>Bucket in S3 is a container for objects.In bucket, you can contain any type of object(images, pdf, csv etc).
Eg - consider bucket as a fridge which contains objects(vegetables, fruits etc).</p>
### 2.Object
<p>Object are the basic unit in Amazon S3.All the units in a bucket are objects.</p>
<p>Objects consist of</p>

- object data
- object meta data - meta data contains name-value pairs that stores object related information.

The only way to modify object meta data is to make a copy of object and set metadata.
### 3. keys
<p>A key is the unique identifier of the object in a bucket.
An object can be identified by combination of web service end point + bucket name + key + version (optional).</p>
<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html"> There is guideline for object key name.You can find it from here.</a>

### 4. Regions
<p>You can store bucket in a specific region that is close to you to optimize latency and minimize costs.</p>
Objects stored in a region never leave the region unless you transfer it to another region.
You can access any bucket from any region.
Eg - suppose you are located in Asia so you want to store bucket in a region closest to you.
