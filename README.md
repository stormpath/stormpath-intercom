# stormpath-intercom

*Sync your Stormpath accounts with Intercom!*

[![NPM Version](https://img.shields.io/npm/v/stormpath-intercom.svg?style=flat)](https://npmjs.org/package/stormpath-intercom)
[![NPM Downloads](http://img.shields.io/npm/dm/stormpath-intercom.svg?style=flat)](https://npmjs.org/package/stormpath-intercom)


![Stick Figure Sketch][]


## Purpose

If you use [Stormpath][] to store and manage your user accounts,
`stormpath-intercom` can be used to easily sync your user data to [Intercom][]'s
amazingly awesome CRM system.

This is useful, because this simple CLI tool allows you to easily keep your
Intercom CRM completely up-to-date with all your user information.


# Install

You can install `stormpath-intercom` through [npm][] by
running:

```console
$ npm install -g stormpath-intercom
```

**NOTE**: If you aren't using an environment manager like `nvm`, you may need to
run the above command with `sudo`.


## Usage

Using `stormpath-intercom` is easy!  You can sync your user data by running the
following CLI command:

```console
$ stormpath-intercom \
    --stormpath-api-key-id=xxx \
    --stormpath-api-key-secret=xxx \
    --stormpath-app-name=myapp \
    --intercom-app-id=xxx \
    --intercom-api-key=xxx
```

I know it's a bit long, but to make things work you need to specify 5 separate
CLI arguments:

- `--stormpath-api-key-id`: Your Stormpath API key ID.
- `--stormpath-api-key-secret`: Your Stormpath API key secret.
- `--stormpath-app-name`: Your Stormpath application name to sync.
- `--intercom-app-id`: Your Intercom app ID (*this can be found in your settings
  under API keys*).
- `--intercom-api-key`: Your Intercom API key (*this can be found in your
  settings under API keys*).

This might take a while, depending on how many user accounts you have.

**NOTE**: For best results, consider running `stormpath-intercom` on a cron
job -- this way, any user accounts you have will be automatically synced with
Intercom, and you'll continuously have an up-to-date directory of users!


  [Stick Figure Sketch]: https://github.com/stormpath/stormpath-intercom/raw/master/assets/stick-figure-sketch.png "Stick Figure Sketch"
  [Stormpath]: https://stormpath.com/ "Stormpath"
  [Intercom]: https://www.intercom.io/ "Intercom"
  [npm]: https://www.npmjs.org/ "npm"
