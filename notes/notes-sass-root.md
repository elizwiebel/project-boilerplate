# SASS Root Example

```css
/* Add parent root element with SASS */
.child {
    @at-root .parent-element #{&} {
            color: red;
    }
}

/* Compiles to this in CSS */
.parent-element .child {
  color: red;
}
```
