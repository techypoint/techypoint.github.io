---
title: "Amazon S3 Operations"
description: "operations on bucket and objects using java sdk. Operations includes create bucket,
list buckets, delete buckets, get Object, list Objects, list Objects With limit, upload or put object in a bucket, delete Object,
copy Object and read file content."
keywords: "aws s3 programmatic access,s3 listbucket,s3 putobject example,upload file to s3 java,aws s3 list objects in folder,s3 list objects java,aws s3 delete bucket,aws s3 create bucket java,read file from amazon s3 java"
category: "amazon s3"
permalink: "/AmazonS3/operations"
image: "/assets/img/amazon-s3/operations/operations.jpg"
---

## Objective
This tutorial describes the basics operations on bucket and objects using java sdk.

Operations includes
- Create bucket
- List buckets
- Delete buckets
- Get Object
- List Objects
- List Objects With limit
- Upload or put object in a bucket
- Delete Object
- Copy Object
- Read File Content

## 1. Create bucket

   {% highlight html %}{% raw %}
   public static void createBucket(AmazonS3 amazonS3,String bucketName){
    if(!amazonS3.doesBucketExistV2(bucketName)){
      Bucket bucket=amazonS3.createBucket(new CreateBucketRequest(bucketName));
    }else{
      LOG.info("Bucket name already exists");
    }
  }
   {% endraw %}{% endhighlight %}

Now we use amazonS3 client we created in this [tutorial]({% post_url amazon-s3/2020-05-30-setUpJavaProject %}).

First we check whether bucketName exists or not. If not exists, then we create by using createBucket().

## 2. List buckets
  {% highlight html %}{% raw %}
   public static void listBuckets(AmazonS3 amazonS3){
    List<Bucket> bucketList=amazonS3.listBuckets();
    for(Bucket bucket : bucketList) {
      LOG.info("bucket name - "+bucket.getName());
    }
  }
   {% endraw %}{% endhighlight %}

We call listBuckets() on amazonS3 client to get all the bucket list created.
Here, we we use only bucket name. You can also fetch other information from the Bucket object.

## 3. Delete buckets
{% highlight html %}{% raw %}
// it is important to empty bucket before deleting it
public static void deleteBuckets(AmazonS3 amazonS3,String bucketName){

  // delete all objects in a bucket
  ObjectListing listObjects = amazonS3.listObjects(bucketName);
  List<S3ObjectSummary> s3ObjectSummaryList=listObjects.getObjectSummaries();
  while (true){
    for(S3ObjectSummary s3ObjectSummary:s3ObjectSummaryList){
      amazonS3.deleteObject(bucketName,s3ObjectSummary.getKey());
    }
    if(listObjects.isTruncated()){
      // listNextBatchOfObjects - this will next batch of objects
      listObjects=amazonS3.listNextBatchOfObjects(listObjects);
    }else{
      break;
    }
  }

  // delete all version objects in a buckets
  VersionListing versionList = amazonS3.listVersions(new ListVersionsRequest().withBucketName(bucketName));
  List<S3VersionSummary> versionSummaryList=versionList.getVersionSummaries();
  while (true){
    for(S3VersionSummary s3VersionSummary:versionSummaryList){
      amazonS3.deleteVersion(bucketName,s3VersionSummary.getKey(),s3VersionSummary.getVersionId());
    }
    if(versionList.isTruncated()){
      // listNextBatchOfObjects - this will next batch of objects
      versionList=amazonS3.listNextBatchOfVersions(versionList);
    }else{
      break;
    }
  }
  // finally delete bucket
  amazonS3.deleteBucket(bucketName);
}
{% endraw %}{% endhighlight %}

It is important to empty bucket before deleting it.

To Empty a bucket, we need to delete version objects and not version objects.
Check this tutorial for [versioning]({% post_url amazon-s3/2020-05-31-versioning %}).

First we call listObjects() to fetch object list. It returns some or all (up to 1,000) of the objects in a bucket.
Then we delete object one by one by calling deleteObject().
Then we call isTruncated() to check whether Amazon S3 returned all the objects.
If not, then we again fetch the next batch of objects by calling listNextBatchOfObjects().

In the Same Manner, we deleted verion objects.

## 4. Get Object
{% highlight html %}{% raw %}
public static void getObject(AmazonS3 amazonS3,String bucketName){
  String objectKey="object key 1";
  S3Object s3Object=amazonS3.getObject(bucketName,objectKey);
  LOG.info("object key- "+s3Object.getKey());
  LOG.info("object metadata- "+s3Object.getObjectContent());
}
{% endraw %}{% endhighlight %}

We need to know key of the object. Then we call getObject() to fetch S3 object.

## 5. List Objects
{% highlight html %}{% raw %}
public static void listObjects(AmazonS3 amazonS3,String bucketName){
    // list all objects in a buckets
    ObjectListing objectListing=amazonS3.listObjects(bucketName);
    for(S3ObjectSummary os : objectListing.getObjectSummaries()) {
      LOG.info("key-"+os.getKey());
      LOG.info("Size -"+os.getSize());
    }
  }
{% endraw %}{% endhighlight %}

We can list all objects in a buckets by calling listObjects().

## 6. List Objects With limit
{% highlight html %}{% raw %}
// list n no. of objects of a buckets at a time
// and get more object keys if require
public static void listObjectsWithLimit(AmazonS3 amazonS3,String bucketName){
  ListObjectsV2Request listObjectsV2Request=new ListObjectsV2Request().withBucketName(bucketName).withMaxKeys(5);
  ListObjectsV2Result listObjectsV2Result=amazonS3.listObjectsV2(listObjectsV2Request);
  while (true){
    List<S3ObjectSummary> s3ObjectSummaryList=listObjectsV2Result.getObjectSummaries();
    for(S3ObjectSummary s3ObjectSummary:s3ObjectSummaryList){
      // you can other values of s3ObjectSummary
      LOG.info("key- "+s3ObjectSummary.getKey());
    }
    if(listObjectsV2Result.isTruncated()){
      String token=listObjectsV2Result.getNextContinuationToken();
      listObjectsV2Request.setContinuationToken(token);
    }else{
      break;
    }
  }
}
{% endraw %}{% endhighlight %}

You can fetch n number of objects at a time by creating ListObjectsV2Request object and setting max keys to n
and then call listObjectsV2(listObjectsV2Request).

## 7. Upload or put object in a bucket
{% highlight html %}{% raw %}
public static void uploadObjectInABucket(AmazonS3 amazonS3,String bucketName){
    // code to upload a text as a object
    String objectKey1="object key 1";
    String objectValue="Upload a Text String";
    amazonS3.putObject(bucketName,objectKey1,objectValue);

    // code to upload a file as a object
    String objectKey2="object key 2";
    String pathToFile="Path of File";
    PutObjectRequest putObjectRequest=new PutObjectRequest(bucketName,objectKey2,
        new File(pathToFile));
    ObjectMetadata objectMetadata=new ObjectMetadata();
    objectMetadata.setContentType("application/pdf");
    // use can set other meta data as a key value pair in ObjectMetadata
    objectMetadata.addUserMetadata("metaDataKey","metaDataValue");
    putObjectRequest.setMetadata(objectMetadata);
    amazonS3.putObject(putObjectRequest);
  }
{% endraw %}{% endhighlight %}

Use putObject() to upload object to Amazon S3.
It takes bucket name, object key and data(string or file).
You can upload any file and need to set the setContentType in the metadata.
You can also set custom key-value pair against a object in the ObjectMetadata using addUserMetadata().

## 8. Delete Object
{% highlight html %}{% raw %}
public static void deleteObject(AmazonS3 amazonS3,String bucketName){
  String objectKey="object key 1";
  amazonS3.deleteObject(new DeleteObjectRequest(bucketName,objectKey));
}
{% endraw %}{% endhighlight %}

Use deleteObject() to delete the object from the bucket.

## 9. Copy Object
{% highlight html %}{% raw %}
// copy object in bucketName1 having key - objectKey1 to bucketName2 having key - objectKey2
public static void copyObjectFromOneKeyToAnother(AmazonS3 amazonS3){
  String bucketName1="bucketnametocreate"; // source bucket name
  String bucketName2="bucketName2"; // destination bucket name
  String objectKey1="objectKey1";   // source object key
  String objectKey2="objectKey2";   // destination object key
  amazonS3.copyObject(new CopyObjectRequest(bucketName1,objectKey1,bucketName2,objectKey2));
}
{% endraw %}{% endhighlight %}

You can also copy object from one bucket to another bucket by using copyObject().

**Note - Bucket needs to be exist before copying**

## 10. Read File Content
{% highlight html %}{% raw %}
public static void readFileContent(AmazonS3 amazonS3,String bucketName) throws IOException {
    String objectKey="object key 1";
    S3Object s3Object=amazonS3.getObject(bucketName,objectKey);
    BufferedReader reader = new BufferedReader(new InputStreamReader(s3Object.getObjectContent()));
    String line = null;
    // read input stream line by line
    while ((line = reader.readLine()) != null) {
      LOG.info("line - "+line);
    }
  }
{% endraw %}{% endhighlight %}

Call getObjectContent() to get the input steam and then read line by line using BufferedReader object.

You are successfully able to execute most common operations on bucket and objects.

<a href="https://github.com/techypoint/amazon-s3.git">Click to get the full Implementation of this tutorial on Github</a>
