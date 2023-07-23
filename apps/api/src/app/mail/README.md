# Mail

Content to be used in your mailers

```
src/app/mail
└── verification
    └── content.ts
```

This ```content.ts``` file would simply be a function returning string content for your mail.

```
const content = (firstName: string, verificationLink: string): string => {
  return `Hello ${firstName}, <br><br> Please verify your <a href="${verificationLink}">account</a>. Thanks!`
}
```