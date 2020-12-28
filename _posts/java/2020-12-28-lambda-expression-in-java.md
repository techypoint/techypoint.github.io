---
title: "Lambda Expressions in Java"
author: "Varun Bisht"
description: "Lambda Expressions in java is the way through which you can pass the functionality as method argument or code as data. It also reduces your code as compared to anonymous classes. The important point is that lambda expressions do not belong to any class and with this Java 8 introduces functional programming to developers."
blogDesc: "Lambda Expressions in java is the way through which you can pass the functionality as method argument or code as data. It also reduces your code as compared to anonymous classes. The important point is that lambda expressions do not belong to any class and with this Java 8 introduces functional programming to developers."
keywords: "lambda expression in java 8,java lambda as parameter,Why we use lambda expressions in Java?,Lambda Expressions Syntax"
category: "java"
permalink: "/java/lambdaexpressions"
image: "/assets/img/java/lambdaexpressions/lambdaexpressions.png"
featureImage: "/assets/img/java/lambdaexpressions/lambdaexpressions.png"
---
**Lambda Expressions** in java is the way through which you can pass the functionality as method argument or code as data.
It also reduces your code as compared to anonymous classes. The important point is that lambda expressions do not belong to any class and with this Java 8 introduces functional programming to developers.

Let's understand the above statements with an example.

Suppose you need to validate whether a number is greater than 10 or not. For that, you will write an interface-
{% highlight html %}{% raw %}
// This is a functional interface
@FunctionalInterface
interface NumberCheckerInterface{
    boolean validateNumber(int number);
}
{% endraw %}{% endhighlight %}
We are writing this functionality in an interface because in future you can change the implementation easily or can add other validations easily.
For Eg- you will need to validate whether it is greater than 10 and less than 20.

Now you created a function which takes a NumberCheckerInterface and calls its validateNumber function.
{% highlight html %}{% raw %}
private static void processNumber(NumberCheckerInterface numberCheckerInterface,int number){
        numberCheckerInterface.validateNumber(number);
    }
{% endraw %}{% endhighlight %}
Now you will call the above function and pass the implementation as an argument. Example is shown below-
{% highlight html %}{% raw %}
NumberCheckerInterface numberCheckerInterface=new NumberCheckerInterface(){
    public boolean validateNumber(int number) {
        if(number > 10)
            return true;
        return false;
    }
};
processNumber(numberCheckerInterface,30);
{% endraw %}{% endhighlight %}

<a href="https://github.com/techypoint/JavaTutorials/tree/master/src/main/java/techylane/tutorials/lambdaexpressions">Click to get the full Implementation of this tutorial on Github</a>

There is a lot of boilerplate code using anonymous classes. We know that processNumber() takes NumberCheckerInterface as an argument so why are we explicitly defining its object and since this interface contain only one method so why there is a need to define method name. To overcome this, Java introduces lambda expressions. Let's see this example with lambda expression-
{% highlight html %}{% raw %}
NumberCheckerInterface numberCheckerInterface1=(number)->{
    if(number > 10)
        return true;
    return false;
};
processNumber(numberCheckerInterface1,10);
{% endraw %}{% endhighlight %}
You can even reduce it further to
{% highlight html %}{% raw %}
processNumber((number)->{
            if(number > 10)
                return true;
            return false;
        },10);
{% endraw %}{% endhighlight %}
You can easily see that we are passing code as functionality in method argument and a lot of boilerplate code gets removed. Let's focus on the syntax below

## Type of Lambda Expression?
Lambda Expressions are bound to object type of Functional interface. We have shown this in above examples.

## Lambda Expressions Syntax
**Syntax-** (method parameters) -> { method body }
{% highlight html %}{% raw %}

1. Function with Zero parameter
public void test() {
  System.out.println("show");
}
or
() -> System.out.println("show");

2. Function with Single parameter
public boolean validateNumber(int number) {
  if(number > 10)
   return true;
  return false;
}
or  
(number) -> { if(number > 10) return true; return false; }

3. Function with Multiple parameters
public void test(int p1,int p2) {
    System.out.println("param1-"+p1+" param2-"+p2);
}
or
(p1, p2) -> System.out.println("param1-"+p1+" param2-"+p2);

{% endraw %}{% endhighlight %}

Lambda Expressions can be used to create objects of functional interfaces. There are many built-in functional interfaces introduced in Java 8.
[Check out this tutorial for Functional interfaces in Java]({% post_url java/2020-11-30-functional-interfaces-in-java %} "Check out this tutorial for Functional interfaces in Java")

<a href="https://github.com/techypoint/JavaTutorials/tree/master/src/main/java/techylane/tutorials/lambdaexpressions">Click to get the full Implementation of this tutorial on Github</a>
