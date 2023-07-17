import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ᴅ',
  'ᴜ',
  'ʏ',
  'z',
  'ʟ',
  'ɔ',
  'х',
  'к',
  'н',
  'т',
  'ɾ',
  'ı',
  'ʌ',
  'о',
  'v',
  'с',
  'г',
  'ч',
  'п',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
