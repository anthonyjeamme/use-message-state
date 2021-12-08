# Why ?

I made this library to helps when creating React application embedded in non-React pages.

Some state needs to be connected when we are not able to create a global context.

# How to use

Just use it like useState :

```tsx
const [firstname] = useMessageState('firstname', 'joe')
```

First argument is canal name, second one is default state value.
