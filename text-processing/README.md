# Text processing kata

As a developer that write blog posts I want a tool that
helps me to understand better the text I am writting. For that
I need a way to know the following:

1. What are the most commons words used in the text?
2. How many characters does the text has?

Besides that the text processing also should have:

1. A way to ignore a given piece of text to analyse (For example, a code snippets)
2. A way to offer stop words and remove them from the analysis

```typescript 
interface Processor {
   analyse(text: string);
}
```

