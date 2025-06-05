#!/usr/bin/env node

import gameRounds from '../src/index.js'
import { getQuestAndAnswer, rule } from '../src/games/progression.js'
gameRounds(getQuestAndAnswer, rule)
