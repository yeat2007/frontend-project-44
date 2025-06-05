#!/usr/bin/env node

import gameRounds from '../src/index.js'
import { getQuestAndAnswer, rule } from '../src/games/even.js'
gameRounds(getQuestAndAnswer, rule)

