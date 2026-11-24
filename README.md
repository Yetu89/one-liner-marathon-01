# One-Liner Marathon

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Yetu89/one-liner-marathon-01/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Yetu89/one-liner-marathon-01/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

Entry for the [make.fun](https://make.fun) bounty **One-Liner Marathon**
([bounty page](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)): one funny line, at most
280 characters, any topic. Free entry.

## The line

> My fitness tracker congratulated me on 10,000 steps, all of them pacing around the kitchen at 2 AM looking for a snack I had already eaten.

(139 characters, one sentence, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-liner-marathon-out node main.ts
```

The program validates the text is 1–280 characters before writing it.

## License

MIT — see [LICENSE](LICENSE).
