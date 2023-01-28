# gw2Embeds
Embedding script to use discretize-gw2-ui elements on every website.

## Development
### 1. Clone repository

```sh
git clone https://github.com/guildnews-de/gw2-embeds.git
cd gw2-embeds
```

### 2. Install dependencies

```sh
yarn install
yarn storybook
```

### 3. Preview
The following command runs webpack first, to build the embed-script.
Then it starts storybook, which is using the embed script, instead of loading the discretize components directly.

```sh
yarn storybook
```