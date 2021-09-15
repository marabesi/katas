# Text processing kata

As a developer that write blog posts I want a tool that
helps me to understand better the text I am writting. For that
I need a way to know the following:

1. What are the most commons words used in the text?
2. How many characters does the text has?

Here goes an example of an interface to get started with:

```typescript 
interface Processor {
   analyse(text: string);
}
```

The usage of such interface is **not required**.

## First challenge

Given the following text:

``` text
Hello, this is an example for you to practice. You should grab
this text and make it as your test case.
```

The output should be:

``` text
Those are the top 10 words used:

1. you

The text has in total 21 words
```

Next up, the kata start to be a bit more complex. Make sure to
complete this challenge first before going on into the second.

## Second challenge

Besides the previous features, the text processing also should have:

1. A way to ignore a given piece of text to analyse (For example, a code snippets)
2. A way to offer stop words and remove them from the analysis

Given the example for 1, this would be a text with code snippets:

``` text
Hello, this is an example for you to practice. You should grab
this text and make it as your test case. For example,
the code below depicts:

` ` `javascript
if (true) {
  console.log(true)
}
` ` `

```

The text processing output should ignore the code snippet.
